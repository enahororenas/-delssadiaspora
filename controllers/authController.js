import User from "../models/User.js"
import MainDB from '../models/Maindb.js'
import { StatusCodes } from 'http-status-codes'
import {BadRequestError, UnAuthenticatedError} from '../errors/index.js'
import cloudinary from '../utils/cloudinarySetup.js'
import passwordValidator from 'password-validator'

const register = async(req,res) => {
    const {fname,lname,email,password} = req.body

    //console.log('SERVER BODY',fname,lname,email,password)

    if(!fname || !lname || !email || !password){throw new BadRequestError('please provide all values')}
    
    var passwordCondition = new passwordValidator()

    passwordCondition.is().min(6).is().max(100).has().uppercase().has().lowercase().has().digits(1).has().not().spaces()
    if(!passwordCondition.validate(password)){throw new BadRequestError('password must be minimum of 6 characters,no space,must contain a lower,upper case character and digit') }

    const validUser = await MainDB.findOne({ 
        $and: [
        {lname: new RegExp('^'+lname+'$', 'i')}, 
        { email: { $eq: email } },
        {fname: new RegExp('^'+fname+'$', 'i')}
        ] })
        
    //console.log(validUser.email)   
    if(!validUser){throw new BadRequestError('You must be a member of DELSSAA')}    
   
    const userAlreadyExists = await User.findOne({email})
    if(userAlreadyExists) {throw new BadRequestError('Email already used')}

    const response = await cloudinary.uploader.upload('./defaults/none_avatar.png',{  upload_preset: process.env.CLOUDINARY})
    //console.log('TRESPONSE',response)
    const image =response.secure_url
    const public_id = response.public_id 
    const user = await User.create({fname,lname,email,password,image,public_id})
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({
        user: {
            email: user.email,
            lname: user.lname,
            location:user.location,
            fname:user.fname,
            image:image,
            uid:user._id
        },
        token,
        location:user.location,
    })
//res.send('User logged in NO')
}

const login = async(req,res) => {
    const {email,password} = req.body
    //console.log('INPUT',email,password)
    if(!email){ throw new BadRequestError('Please provide email') }
    if(!password){ throw new BadRequestError('Please provide your password') }

    const user = await User.findOne({email}).select('+password')
    if(!user){
        throw new UnAuthenticatedError('Invalid credentials')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnAuthenticatedError('Invalid credentials')
    }
    const token = user.createJWT()
    user.password = undefined
    res.status(StatusCodes.OK).json({user,token,location:user.location,uid:user._id})
    //res.send('User logged in')
}

const addNewUserToDB= async(req,res)=> {
    //console.log('New User Added to DB',req.body)
    const {fname,lname,email} = req.body
    if(!fname || !lname || !email){throw new BadRequestError('please provide all values')}
    try{
        const userAlreadyExists = await MainDB.findOne({email})
        if(userAlreadyExists) {throw new BadRequestError('User Already Approved to Register')}
        const user = await MainDB.create({fname,lname,email})
        res.status(StatusCodes.CREATED).json({ msg: 'Successfuly Added User to DB'})
    }  catch(error){
        //console.log('ERR FOUND',error._message,'AND',error.message)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    } 
    //res.send('New User Added to DB')
}

const makeAUserAdmin=async(req,res)=>{
    //console.log('New Admin User',req.body)
    const {email} = req.body
    if(!email){throw new BadRequestError('Please Provide Users Email')}
    const user = await User.findOne({email:email})
    if(!user) {throw new BadRequestError('User Not Found in DB')}
    user.admin=!user.admin
    await user.save()
    res.status(StatusCodes.OK).json({user})
    //res.send('New Admin User')
}

const updateUser = async(req,res) => {
    const {email,fname,lname,location,occupation,house,teacher,subject,yog,bday} = req.body
    //console.log('IN SERVER UPDATE USER',bday)

    if(!email || !fname ||!lname||!location||!occupation||!house||!teacher||!subject||!yog||!bday){
        throw new BadRequestError('Please provide all values')
    }
    const user = await User.findOne({_id:req.user.userId})
    user.occupation=occupation
    user.email = email
    user.fname = fname
    user.lname=lname
    user.location=location
    user.bday=bday
    //user.company=company
    user.house=house
    user.teacher=teacher
    user.subject=subject
    user.yog=yog
    await user.save()
    const token = user.createJWT()
    //console.log('UPDATE USER FINISHED')
    res.status(StatusCodes.OK).json({user,token,location:user.location})
    //res.send('User OKRRR')
}

const getBday = async(req,res) => {
    //console.log('GET BDAY SERVER CALLED',req.body)
    const dt = new Date();
    const currentDate = dt.toISOString().slice(5, 10)
    const now = parseInt(currentDate.split("-").pop())
    const currentMonth = dt.toISOString().slice(5, 7)

    //console.log('CM',currentDate,'==',currentMonth)

    try {
    const allBday = await User.find({ bday: new RegExp(currentDate+'$') })
    const allMonth = await User.find({ bday: new RegExp('-'+currentMonth+'-') })
    const monthly = []
    if(allMonth.length > 0){
        for (const niv in allMonth){ 
            const day = parseInt(allMonth[niv].bday.split("-").pop())
            
            if(day > now){
                monthly.push({
                    fname:allMonth[niv].fname,
                    lname:allMonth[niv].lname,
                    day:day
                }) 
            }
        }
    }    

        const bday = allBday.map((file) => ({
            fname:file.fname,
            lname:file.lname
        }))
        
        res.status(StatusCodes.OK).json({bday,totalBday:allBday.length,monthly,totalMonthly:monthly.length})  
    } catch(error) {res.status(StatusCodes.OK).json({bday:[],totalBday:0})}
    
    //res.send('User OKRRR')
}

const updateUsersImage = async(req,res) => {  
    const fileStr = req.body.profile_pic;
    if(!fileStr){ throw new BadRequestError('Please provide all values')}
    try {
        //console.log('ID',req.body)
        const user = await User.findOne({_id:req.body.id})
        if(!user){ throw new BadRequestError('Could not find user in DB')}
        const del_response = await cloudinary.uploader.destroy(user.public_id)
        //console.log('DELETE RESPONSE',del_response)
        const response = await cloudinary.uploader.upload(fileStr,{  upload_preset: process.env.CLOUDINARY})
        user.image = response.secure_url
        user.public_id = response.public_id
        await user.save()
        const token = user.createJWT()
        res.status(StatusCodes.OK).json({user,token,location:user.location})
    }  catch(error){
        //console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }     
//res.send('User Image Added')
}
export {register, login, updateUser,updateUsersImage,getBday,addNewUserToDB,makeAUserAdmin}