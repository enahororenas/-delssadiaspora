import React, { useContext, useReducer} from "react";
import { DISPLAY_ALERT, CLEAR_ALERT,TOGGLE_SIDE_BAR,LOGOUT_USER,DISPLAY_CUSTOM_ALERT,
    SETUP_USER_BEGIN,SETUP_USER_SUCCESS,SETUP_USER_ERROR,CLEAR_VALUES,CLEAR_FILTERS,
    UPDATE_USER_BEGIN,UPDATE_USER_SUCCESS,UPDATE_USER_ERROR,HANDLE_CHANGE,CHANGE_PAGE,
    SEND_EMAIL_SUCCESS,SEND_EMAIL_BEGIN,SEND_EMAIL_ERROR,UPDATE_GLOBAL_COUNT,
    ADD_NEW_IMAGE_BEGIN,ADD_NEW_IMAGE_SUCCESS,ADD_NEW_IMAGE_ERROR,
    ADD_NEWS_ITEM_BEGIN,ADD_NEWS_ITEM_SUCCESS,ADD_NEWS_ITEM_ERROR,
    CREATE_COMMENT_BEGIN,CREATE_COMMENT_ERROR,CREATE_COMMENT_SUCCESS,
    GET_COMMENT_BEGIN,GET_COMMENT_SUCCESS,GET_COMMENT_ERROR,CHANGE_IMAGE_PAGE,
    UPDATE_COMMENT_BEGIN,UPDATE_COMMENT_ERROR,UPDATE_COMMENT_SUCCESS,
    UPDATE_USER_IMAGE_BEGIN,UPDATE_USER_IMAGE_SUCCESS,UPDATE_USER_IMAGE_ERROR,
    GET_IMAGES_BEGIN,GET_IMAGES_SUCCESS,GET_IMAGES_ERROR,GET_BDAY_SUCCESS,
    GET_NEWS_ITEM_BEGIN,GET_NEWS_ITEM_SUCCESS,GET_NEWS_ITEM_ERROR,
    GET_MEMBERS_BEGIN,GET_MEMBERS_ERROR,GET_MEMBERS_SUCCESS,
    ADD_NEW_USER_TO_REGISTER_BEGIN,ADD_NEW_USER_TO_REGISTER_SUCCESS,ADD_NEW_USER_TO_REGISTER_ERROR,
    MAKE_ADMIN_BEGIN,MAKE_ADMIN_SUCCESS,MAKE_ADMIN_ERROR,
    DELETE_COMMENT_BEGIN,DELETE_COMMENT_ERROR,DELETE_COMMENT_SUCCESS,
    DELETE_NEWS_ITEM_BEGIN,DELETE_NEWS_ITEM_ERROR,DELETE_NEWS_ITEM_SUCCESS,
    ADD_NEW_EXCO_BEGIN,ADD_NEW_EXCO_ERROR,ADD_NEW_EXCO_SUCCESS, GET_EXCO_BEGIN, GET_EXCO_SUCCESS, GET_EXCO_ERROR,
 } from "./action";
import reducer from "./reducer";
import axios from 'axios'


const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')


//const token = null
//const user = null
//const userLocation = ''

const initialState = {
    isLoading:false,
    showAlert:true,
    alertText:'',
    alertType:'',
    user: user !== 'undefined' ? JSON.parse(user) : null,
    token:token,
    userLocation:userLocation||'',
    showSidebar:true,
    isEditing:false,
    editJobId:'',
    jobLocation:userLocation||'',
    members:[],
    totalMembers:1,
    urls:[],
    totalUrls:1,
    news:[],
    bdays:[],
    totalBday:0,
    monthly:[],
    totalMonthly:0,
    totalNews:1,
    numOfPages:1,
    page:1,
    imagePage:1,
    numOfImagePage:1,
    public_id:'',
    image:'',
    position:'',
    company:'',
    teacher:'',
    subject:'',
    yog:'',
    house:'',
    uid:'',
    search: '',
    occupation:'',
    new_comment:'',
    totalComments:[],
    commentIndex:0,
    excoMembers:[],
    totalExco:0,
}

const AppContext = React.createContext()
//children refers to page to render
const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)

    const authFetch = axios.create({
        baseURL:'/api/dias',
    })

    //request
    authFetch.interceptors.request.use(
        (config)=>{ 
            //console.log('TOKEN=',state.token)
            config.headers.common['Authorization'] = `Bearer ${state.token}`
            
            return config
        },
        (error)=>{ return Promise.reject(error)}
    )
    
    //response
    authFetch.interceptors.response.use(
        (response)=>{ return response },
        (error)=>{ 
           //console.log('RESPONSE ERROR',error.response) 
           if(error.response.status === 401){logoutUser() }
            return Promise.reject(error)
        }
    )

    const displayAlert = () => { 
        dispatch({type:DISPLAY_ALERT}) 
        clearAlert()
    }

    const updateGlobalIndex = (index) => { 
        dispatch({type:UPDATE_GLOBAL_COUNT,payload:{msg:index}}) 
    }

    const customAlert = (alertText) => { 
        dispatch({type:DISPLAY_CUSTOM_ALERT,
            payload:{alertText
            }}) 
        clearAlert()
    }

    const clearAlert = () => { 
        setTimeout(()=>{ dispatch({type:CLEAR_ALERT})},3000)
    }

    
    const addUserToLocalStorage = ({email,token,location}) => {
       localStorage.setItem('email',JSON.stringify(email))
      localStorage.setItem('token',token)
      localStorage.setItem('location',location)
    }

    
    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        localStorage.removeItem('location')
    }

    const setupUser = async({currentUser,endPoint,alertText}) => {
        //console.log('LOGIN CURRENT FUNC',currentUser,endPoint)     
        
        dispatch({type:SETUP_USER_BEGIN}) 

        try{
            const {data} = await axios.post(`api/dias/auth/${endPoint}`,currentUser)
        
            const{user,token,location,uid} = data
            
            //console.log('CURR USERS TOKEN',user,'AND DATA',data)

            dispatch({
                type:SETUP_USER_SUCCESS,
                payload:{user,token,location,alertText,uid}
            })     

           addUserToLocalStorage({user,token,location})
 
        }catch(error){
            //console.log('REG ERROR',error.response)
            dispatch({
               type:SETUP_USER_ERROR,
              payload:{msg:error.response.data.msg}
            })
        }

        clearAlert()
    }

    const toggleSidebar = () => {
        //console.log('CLICKED TOGGLE BUTTON')
        dispatch({type:TOGGLE_SIDE_BAR})
    }

    
    const logoutUser = () => {
        removeUserFromLocalStorage()
        dispatch({type:LOGOUT_USER})
    }

    const updateUsersImage = async(image) => {  
        dispatch({type:UPDATE_USER_IMAGE_BEGIN})
        try {
            const res = await authFetch.post('/auth/updateImage',image) 
            const{user,location,token} = res.data
            dispatch({type:UPDATE_USER_IMAGE_SUCCESS,
            payload:{user,location,token}
            })
            addUserToLocalStorage(user,location,token)
        }catch(error){
            dispatch({type:UPDATE_USER_IMAGE_ERROR,
                payload:{msg:error.message}
                })
        }
        clearAlert()  
    }

    const updateUser = async(currentUser) => {

        dispatch({type:UPDATE_USER_BEGIN})
        try{
            const {data} = await authFetch.patch('/auth/updateUser',currentUser) 
            //console.log('CURRENT USER DATA',data)
            const{user,location,token} = data
            dispatch({type:UPDATE_USER_SUCCESS,
            payload:{user,location,token}
            })
            
            addUserToLocalStorage(user,location,token)
        }catch(error){
            if(error.response.status !== 401) {
                dispatch({type:UPDATE_USER_ERROR,
                    payload:{msg:error.response.data.msg}
                    })
            }
        }
        clearAlert()   
    }

    const handleChange = ({name,value}) => {
        dispatch({type:HANDLE_CHANGE,payload:{name,value}})
    }

    const clearFilters = () => {
        dispatch({ type: CLEAR_FILTERS })
      }

      const changePage = (page) => {
        dispatch({ type: CHANGE_PAGE, payload: { page } })
      }

      const changeImagePage = (page) => {
        dispatch({ type: CHANGE_IMAGE_PAGE, payload: { page } })
      }

    const clearValues = () => {
        dispatch({type:CLEAR_VALUES})
    }


    const sendEmail = async(body) => {
        //console.log('BD',body)
        dispatch({type:SEND_EMAIL_BEGIN})
        try{
            await authFetch.post('/email/sendemail',{body})
            dispatch({type:SEND_EMAIL_SUCCESS})
        }catch(error){
            if(error.response.status === 401) return
                dispatch({type:SEND_EMAIL_ERROR,
                    payload:{msg:error.response.data.msg}
                    })
        }
        clearAlert()
    }


    const addLeader = async(input) => {
        dispatch({type:ADD_NEW_EXCO_BEGIN})
        try {
            await authFetch.post('/gallery/addleader',input)
            dispatch({type:ADD_NEW_EXCO_SUCCESS})    
        }catch(error){
            dispatch({type:ADD_NEW_EXCO_ERROR,
                payload:{msg:error.response.data.msg}
                })
        }
        clearAlert()
    }

    const getExco = async() => {
        dispatch({type:GET_EXCO_BEGIN})
        let url =`/gallery/addleader`  
        try { 
        const {data} = await authFetch.get(url)
        const{excoMembers,totalExco} = data
        dispatch({type:GET_EXCO_SUCCESS,
            payload:{excoMembers,totalExco}
        })    
        }catch(error){
            dispatch({type:GET_EXCO_ERROR,
                payload:{msg:error.response.data.msg}
                })
        }
        clearAlert()
    }    

    const addImage = async(input) => {
        dispatch({type:ADD_NEW_IMAGE_BEGIN})
        const{image} = input
        try {
            await authFetch.post('/gallery/addimage',{image})
            dispatch({type:ADD_NEW_IMAGE_SUCCESS})    
        }catch(error){
            dispatch({type:ADD_NEW_IMAGE_ERROR,
                payload:{msg:error.response.data.msg}
                })
        }
        clearAlert()
    }

    const getImages = async() => {
        let url =`/gallery/addimage`
        dispatch({type:GET_IMAGES_BEGIN})        
        try{
            const {data} = await authFetch.get(url)
            const {urls,totalUrls,numOfImagePage} = data
            //console.log('RETURNED',numOfImagePage)
            dispatch({
                type:GET_IMAGES_SUCCESS,
                payload:{urls,totalUrls,numOfImagePage}
            })
        }catch(error){
            //console.log(error.response)
            dispatch({type:GET_IMAGES_ERROR,
                payload:{msg:error.response.data.msg}
                })
        }
    
        clearAlert()
    }

    const addNews = async(input) => {  
        dispatch({type:ADD_NEWS_ITEM_BEGIN})
        try {
            await authFetch.post('/news/addnewsitem',{input})
            dispatch({type:ADD_NEWS_ITEM_SUCCESS})    
        }catch(error){
            dispatch({type:ADD_NEWS_ITEM_ERROR,
                payload:{msg:error.response.data.msg}
                })
        }
        clearAlert()
    }

    const deleteNews = async(input) => {     
        dispatch({type:DELETE_NEWS_ITEM_BEGIN})
        try {
            await authFetch.post('/news/deletenewsitem',input)
            dispatch({type:DELETE_NEWS_ITEM_SUCCESS})    
        }catch(error){
            dispatch({type:DELETE_NEWS_ITEM_ERROR,
                payload:{msg:error.response.data.msg}
                })
        }
        clearAlert() 
    }

    const getNews = async() => {
        let url =`/news/addnewsitem`  
        dispatch({type:GET_NEWS_ITEM_BEGIN})        
        try{
            const {data} = await authFetch.get(url)
            //console.log('RETURNED',data)
            const {news,totalNews} = data
            dispatch({
                type:GET_NEWS_ITEM_SUCCESS,
                payload:{news,totalNews}
            })
        }catch(error){
            dispatch({type:GET_NEWS_ITEM_ERROR,
                payload:{msg:error.response.data.msg}
                })
        }
        clearAlert()
    }

    const getBday = async() => {
        let url =`/auth/getbday`  
        try{
            const {data} = await authFetch.get(url)
            //console.log('RETURNED',data)
            const {bday,totalBday,monthly,totalMonthly} = data
    
            dispatch({
                type:GET_BDAY_SUCCESS,
                payload:{bday,totalBday,monthly,totalMonthly}
             })
        
            
        }catch(error){
        }
    }

    const getMembers = async() => {
        const { page, search } = state

       let url = `/members/getmembers?page=${page}`
        if (search) {url = url + `&search=${search}`}
    
         //let url =`/members/getmembers`    
        //console.log('GET MEMBERS FOR', search,page,url)
     
        dispatch({type:GET_MEMBERS_BEGIN})        
        try{
            const {data} = await authFetch.get(url)
            //console.log('RETURNED',data)
            const {members,totalMembers,numOfPages} = data
            dispatch({
                type:GET_MEMBERS_SUCCESS,
                payload:{members,totalMembers,numOfPages}
            })
        }catch(error){
            dispatch({type:GET_MEMBERS_ERROR,
                payload:{msg:error.response.data.msg}
                })
        }
        clearAlert()
    }

    const addNewUserToDB = async (input) => {
        dispatch({type:ADD_NEW_USER_TO_REGISTER_BEGIN})
        try {
            await authFetch.post('/new/addnewuser',input)
            dispatch({type:ADD_NEW_USER_TO_REGISTER_SUCCESS})    
        }catch(error){
            dispatch({type:ADD_NEW_USER_TO_REGISTER_ERROR,
                payload:{msg:error.response.data.msg}
                })
        }
        clearAlert()
    }

    const makeAUserAdmin = async(input)=>{
        dispatch({type:MAKE_ADMIN_BEGIN})
        try {
            const {data} = await authFetch.post('/new/makeadmin',input)
            const{user} = data
            dispatch({type:MAKE_ADMIN_SUCCESS,
            payload:{user}
            })    
        }catch(error){
            dispatch({type:MAKE_ADMIN_ERROR,
                payload:{msg:error.response.data.msg}
                })
        }
        clearAlert()
    }


    const createComment = async (comment) => {
        dispatch({type:CREATE_COMMENT_BEGIN})
        try{
            const new_comment = await authFetch.post('/comment/add',comment)
            dispatch({type:CREATE_COMMENT_SUCCESS,
                payload:{msg:new_comment}
            })
        }catch(error){
            if(error.response.status === 401) return
                dispatch({type:CREATE_COMMENT_ERROR,
                    payload:{msg:error.response.data.msg}
                    })
        }
        clearAlert()
    }

    const getComments = async() => {    
        dispatch({type:GET_COMMENT_BEGIN})        
        try{    
            const allComments = await authFetch.post('/comment/get')
            dispatch({
                type:GET_COMMENT_SUCCESS,
                payload:{data:allComments.data}
            })
        }catch(error){
            dispatch({type:GET_COMMENT_ERROR,
                payload:{msg:error.response.data.msg}
                })
        } 
        clearAlert()   
    }

    const updateUserComment = async(input) => {    
        dispatch({type:UPDATE_COMMENT_BEGIN})
        try {
            const new_comment = await authFetch.post('/comment/update',input)
            dispatch({type:UPDATE_COMMENT_SUCCESS,
            payload:{msg:new_comment.data.new_comment.text}
            })
            
        }catch(error){
            dispatch({type:UPDATE_COMMENT_ERROR,
                payload:{msg:error.message}
                })
        }
        clearAlert()  
    }

   const deleteUserComment = async(commentId) =>{
        dispatch({type:DELETE_COMMENT_BEGIN})
        try{
            await authFetch.post('/comment/delete',commentId)
            getComments()
            dispatch({type:DELETE_COMMENT_SUCCESS})   
        }catch(error){
            dispatch({type:DELETE_COMMENT_ERROR,
                payload:{msg:error.message}
                })
        }
    }

    

    return (
        <AppContext.Provider value={{
            ...state,
            displayAlert,
            setupUser,
            toggleSidebar,
            logoutUser,
            updateUser,
            updateUsersImage,
            sendEmail,
            handleChange,
            clearValues,
            addImage,
            getImages,
            addNews,
            getNews,
            getMembers,
            deleteNews,
            getBday,
            createComment,
            getComments,
            updateUserComment,
            updateGlobalIndex,
            deleteUserComment,
            clearFilters,
            changePage,
            customAlert,
            addNewUserToDB,
            makeAUserAdmin,
            changeImagePage,
            addLeader,
            getExco,
        }}>{children}</AppContext.Provider>
    )
}

const useAppContext = () => { return useContext(AppContext)}

export {AppProvider,initialState,useAppContext}