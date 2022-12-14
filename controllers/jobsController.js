import News from "../models/News.js"
import Exco from '../models/Executive.js'
import User from '../models/User.js'
import Comment from "../models/Comment.js"
import { StatusCodes } from 'http-status-codes'
import {BadRequestError, NotFoundError} from '../errors/index.js'
import checkPermissions from "../utils/checkPermissions.js"
import contactEmail from '../utils/emailSetup.js'
import cloudinary from '../utils/cloudinarySetup.js'
import  nodemailer from 'nodemailer'

const notifyEmail =async(email,message,username,action,old) =>{
        const client = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "dellssaadiaspora@gmail.com",
                pass: process.env.GMAILPASSWORD
            },
            tls: {rejectUnauthorized: false}
        });

        var sendSubject 
        var text
        if(action === 'replied') {
            sendSubject = username +" "+ action +" your comment"
            text = `
            Name: ${username}
            Response: ${message}
            `
        } else {
            sendSubject = username +" "+ action +" his/her comment" 
            text = `
            Name: ${username}
            Original : ${old}
            New Text: ${message}
            `
        }
        
        client.sendMail(
            {
                from: username,
                to: email,
                subject: sendSubject,
                text:text
            }
        )
}    

const createComment =async(req,res) =>{
    const{user,text,parentId,url} = req.body
    if(!text||!url){
        throw new BadRequestError('Please provide all values')
    }

    const username = user.fname +' '+user.lname
    const userId = user._id
    if(parentId){
        const parent = await Comment.findOne({_id:parentId})
        if(parent){
            const userToEmail = await User.findOne({_id:parent.userId})
            if(userToEmail){
                notifyEmail(userToEmail.email,text,username,'replied',null)
            }
        }   
    }

    const new_comment = await Comment.create({username,userId,text,url,parentId})
    res.status(StatusCodes.CREATED).json({new_comment})   
}

const updateComment =async(req,res) =>{
    const{text,id,parentId,user} = req.body
    const username = user.fname +' '+user.lname
    const old_comment = await Comment.findOne({_id:id})
    if(!old_comment){throw new NotFoundError('Existing Comment Not Found')}
    const new_comment = await Comment.findOneAndUpdate({_id:id},{text})
    if(parentId){
        const parent = await Comment.findOne({_id:parentId})
        if(parent){
            const userToEmail = await User.findOne({_id:parent.userId})
            if(userToEmail){
                notifyEmail(userToEmail.email,text,username,'edited',old_comment.text)
            }
        }   
    }
    res.status(StatusCodes.CREATED).json({new_comment}) 
}


const getComments =async(req,res) =>{
    //console.log('REQ',req.body)
    try{
        const totalComments = await Comment.find({})
        res.status(StatusCodes.OK).json(totalComments)
    }catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Could not get comments' });
    }
}


const getAllMembers =async(req,res) =>{
    const { search } = req.query
    //console.log('QRY',req.query,' = ',search)

    try{   
      var queryObject
      if (!search || search === '') {  queryObject = {}}
      else {
        queryObject = {
            $or: [
                {lname: new RegExp(search, 'i')}, 
                {fname: new RegExp(search, 'i')}
                ] 
          }
      }
      
        let result = User.find(queryObject)
        
        // setup pagination
        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || 10
        const skip = (page - 1) * limit
      
        result = result.skip(skip).limit(limit)
      
        const response = await result
        const totalMembers = await User.countDocuments(queryObject)
        const numOfPages = Math.ceil(totalMembers / limit)
      
        const members = response.map((user) =>({
        fname: user.fname,
        lname: user.lname,
        email:user.email,
        image: user.image,
        location:user.location,
        yog:user.yog,
        id:user._id,
        house:user.house,
        occupation:user.occupation,
        //position:user.position
        //company:user.company,
    }))
    res.status(StatusCodes.OK).json({members,totalMembers,numOfPages})
    }  catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Could not get all members' });
    } 
}

const getNews =async(req,res) =>{
    const response = await News.find({})
    const news = response.map((file) => ({
        newsItem: file.newsItem,
        image: file.image,
        nid:file.nid,
        header:file.header
    }))
    res.status(StatusCodes.OK).json({news,totalNews:news.length})
    //res.send('get Tea')
}

const getAllImages =async(req,res) =>{
    try{
        const { resources } = await cloudinary.search.expression('folder:Gallery').execute();
        const urls = resources.map((file) => file.secure_url);

        // setup pagination
        
        const numOfImagePage = Math.ceil(urls.length / 7)

        res.status(StatusCodes.OK).json({urls,totalUrls:urls.length,numOfImagePage:numOfImagePage})
    } catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Could not get all images' });
    }  
}

const getAllExco =async(req,res) =>{
    try {const response = await Exco.find({})
    const excoMembers = response.map((mem) => ({
        name: mem.name,
        url: mem.url,
        title:mem.title,
    }))
    res.status(StatusCodes.OK).json({excoMembers,totalExco:excoMembers.length})
    }catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }
}


const deleteComment =async(req,res) =>{  
    try{
    const comment = await Comment.findOne({_id:req.body.commentId})
    if(!comment){throw new NotFoundError('Cant find comment to delete')}

    if(!comment.parentId){
        const allChildren = await Comment.find({parentId:req.body.commentId})
        const ids = allChildren.map( (item) => item._id);
        ids.push(comment._id)
        await Comment.deleteMany({'_id':{'$in':ids}})
    } else {
        await comment.remove()
    }
    res.status(StatusCodes.OK).json({msg:'Successfuly removed the comment'})
    }catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }
}

const deleteNews=async(req,res)=>{
    var check = []
    if(!req.body) {throw new BadRequestError('You must select an article')}
    for (const niv in req.body){ check.push(niv) }
    if(check.length === 0 ) {throw new BadRequestError('You must select an article')}
    try{
        await News.deleteMany({'nid':{'$in':check}})
        res.status(StatusCodes.OK).json({msg:'Successfuly deleted the news article'})
    } catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }   
}

const updateJob =async(req,res) =>{
    //console.log('UPDATE REQUEST',req.params,'BD',req.body)
    const{id:jobId} = req.params
    const{company,position} = req.body
    if(!position||!company){
        throw new BadRequestError('Please provide all values')
    }
    const job = await Job.findOne({_id:jobId})
    if(!job){throw new NotFoundError(`No job with id: ${jobId}`)}
    
    //console.log('USR',req.user.userId,'====',job.createdBy.toString())
    //check permission
    checkPermissions(req.user,job.createdBy)

    const updatedJob = await Job.findOneAndUpdate({_id:jobId},req.body,{
        new:true,
        runValidators:true,
    })
    res.status(StatusCodes.CREATED).json({updatedJob})
}


const sendEmail =async(req,res) =>{
    //console.log('SEND EMAIL SERVER',req.body,'AND',contactEmail)
    const {email,fname,lname,message} = req.body.body
    
    if(!email||!message||!lname||!fname){
        throw new BadRequestError('Please provide all values')
    }

    const name = fname+' '+lname
    try{
    const client = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "dellssaadiaspora@gmail.com",
            pass: process.env.GMAILPASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    
    await client.sendMail(
        {
            from: name,
            to: "dellssaadiaspora@gmail.com",
            subject: "DELSSAA DIASPORA CONTACT US FORM",
            text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
            `
        }
    )
    res.status(StatusCodes.OK).json({msg:'Email Sent Successfuly to DELLSSAA'})
    } catch(error){
        res.status(StatusCodes.OK).json({msg:error})
    }

    
    /*
    const mail = {
      from: name,
      to: "dellssaadiaspora@gmail.com",
      subject: "DELLSSAA DIASPORA Contact Form Submission",
      html: `<p>Name:${name}</p>
             <p>Email:${email}</p>
             <p>Message:${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.log('error',error)
            res.status(StatusCodes.OK).json({msg:error})
        } else {       
            res.status(StatusCodes.OK).json({msg:'Email Sent Successfuly to DELLSSAA'})
        }
      });
    */
    //res.send('show stats')
}

const addLeader = async(req,res) => {
    const {Title,Name,image} = req.body
    if(!Title || !Name || !image){ throw new BadRequestError('Please provide all values')}
    
    try {
        const exist = await Exco.findOne({title:Title})
        if(exist) {
            const del_response = await cloudinary.uploader.destroy(exist.public_id)
            await exist.remove()
        }    
    const response = await cloudinary.uploader.upload(image,{  upload_preset: process.env.CLOUDINARY_EXCO})
    const item = {
        title: Title,
        name : Name,
        url : response.secure_url,
        createdBy:req.user.userId,
        public_id: response.public_id,
    }
    const leader = await Exco.create(item)
    res.status(StatusCodes.CREATED).json({leader})
    }  catch(error){ 
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Could not Add Exco Member' });
    }
}

const addImage = async(req,res) => {
    //console.log('INCOMING',req.body)
    
    if(!req.body.image.data){ throw new BadRequestError('Please provide all values')}
    
    try {
        const urls = []
        const {data} = req.body.image
        const multiplePicturePromise = data.map((picture) =>
            cloudinary.uploader.upload(picture,{  upload_preset: process.env.CLOUDINARY_GALLERY})
        );        
        const imageResponses = await Promise.all(multiplePicturePromise)
        for (const res in imageResponses){ urls.push(res.secure_url)}
        res.status(StatusCodes.OK).json({url: urls})
    }  catch(error){ 
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Could not upload image' });
    }      
//res.send('User Image Added')
}

const addNews = async(req,res) => {
   try {
        const{input} = req.body
        if(!input.newsItem||!input.head){ throw new BadRequestError('Please provide all values')}
        var response
        if(input.image && input.image !== '') { 
            response = await cloudinary.uploader.upload(input.image,{  upload_preset: process.env.CLOUDINARY_NEWS})    
        }
        var nid
        const lastEntry = await News.findOne().sort('-_id')
        if(lastEntry){ nid = lastEntry.nid + 1 }
        else {nid = 1}      
        const item = {
            newsItem :   input.newsItem,
            createdBy:req.user.userId,
            nid : nid,
            header: input.head
        }
        if(response){item.image = response.secure_url}
        //console.log('YESS',item)
        const news = await News.create(item)
        res.status(StatusCodes.CREATED).json({news})
    }  catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Could not add news item' });
    }
//res.send('News Item Added')
}
export {createComment,getAllExco, updateJob, updateComment,sendEmail,deleteComment,addLeader
    ,addImage,getAllImages,addNews,getNews,getAllMembers,deleteNews,getComments}