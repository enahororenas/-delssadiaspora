import { DISPLAY_ALERT, CLEAR_ALERT,TOGGLE_SIDE_BAR,LOGOUT_USER,CHANGE_IMAGE_PAGE,
    SETUP_USER_BEGIN,SETUP_USER_SUCCESS,SETUP_USER_ERROR,CLEAR_FILTERS,CHANGE_PAGE,
    UPDATE_USER_BEGIN,UPDATE_USER_SUCCESS,UPDATE_USER_ERROR,HANDLE_CHANGE,
    CLEAR_VALUES,CREATE_JOB_BEGIN,CREATE_JOB_SUCCESS,CREATE_JOB_ERROR,
    GET_JOBS_BEGIN,GET_JOBS_SUCCESS,SET_EDIT_JOB,DELETE_JOB_BEGIN,
    EDIT_JOB_BEGIN,EDIT_JOB_ERROR,EDIT_JOB_SUCCESS,DISPLAY_CUSTOM_ALERT,
    UPDATE_USER_IMAGE_BEGIN,UPDATE_USER_IMAGE_SUCCESS,UPDATE_USER_IMAGE_ERROR,
    GET_IMAGES_BEGIN,GET_IMAGES_SUCCESS,GET_IMAGES_ERROR, SEND_EMAIL_SUCCESS,SEND_EMAIL_BEGIN,SEND_EMAIL_ERROR,
    ADD_NEW_IMAGE_BEGIN,ADD_NEW_IMAGE_SUCCESS,ADD_NEW_IMAGE_ERROR,
    ADD_NEWS_ITEM_BEGIN,ADD_NEWS_ITEM_SUCCESS,ADD_NEWS_ITEM_ERROR,
    GET_NEWS_ITEM_BEGIN,GET_NEWS_ITEM_SUCCESS,GET_NEWS_ITEM_ERROR,
    GET_MEMBERS_BEGIN,GET_MEMBERS_ERROR,GET_MEMBERS_SUCCESS,GET_BDAY_SUCCESS,
    ADD_NEW_USER_TO_REGISTER_BEGIN,ADD_NEW_USER_TO_REGISTER_SUCCESS,ADD_NEW_USER_TO_REGISTER_ERROR,
    MAKE_ADMIN_BEGIN,MAKE_ADMIN_SUCCESS,MAKE_ADMIN_ERROR,UPDATE_GLOBAL_COUNT,
    UPDATE_COMMENT_BEGIN,UPDATE_COMMENT_ERROR,UPDATE_COMMENT_SUCCESS,
    DELETE_NEWS_ITEM_BEGIN,DELETE_NEWS_ITEM_ERROR,DELETE_NEWS_ITEM_SUCCESS,
    CREATE_COMMENT_BEGIN,CREATE_COMMENT_ERROR,CREATE_COMMENT_SUCCESS,
    GET_COMMENT_BEGIN,GET_COMMENT_SUCCESS,GET_COMMENT_ERROR,
    DELETE_COMMENT_BEGIN,DELETE_COMMENT_ERROR,DELETE_COMMENT_SUCCESS,
    ADD_NEW_EXCO_BEGIN,ADD_NEW_EXCO_ERROR,ADD_NEW_EXCO_SUCCESS,
    GET_EXCO_BEGIN,GET_EXCO_ERROR,GET_EXCO_SUCCESS,
} from "./action"
import { initialState } from "./appContext"


const reducer = (state,action) => {
    if(action.type === DISPLAY_ALERT){
        return{...state,
        showAlert:true,
        alertType:'danger',
        alertText:'please provide all values!'
        }
    }

    if(action.type === DISPLAY_CUSTOM_ALERT){
        return{...state,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.alertText
        }
    }
    

    if(action.type === CLEAR_ALERT){
        return{...state,
        showAlert:false,
        alertType:'',
        alertText:''
        }
    }

    
    if(action.type === SETUP_USER_BEGIN){
        return{...state,
        isLoading:true
        }
    }


    if(action.type === SETUP_USER_SUCCESS){
        //console.log('SETUP USER SUCCESS CALLED',action.payload)
        return{...state,
        isLoading:false,
        token:action.payload.token,
        user:action.payload.user,
        userLocation:action.payload.location,
        showAlert:true,
        alertType:'success',
        alertText:action.payload.alertText,
        uid:action.payload.uid,
        }
    }

    if(action.type === SETUP_USER_ERROR){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.msg
        }
    }

    if(action.type === TOGGLE_SIDE_BAR){
        return{...state,
        showSidebar:!state.showSidebar
        }
    }

    if(action.type === LOGOUT_USER){
        return{...initialState,
            user:null,
            token:null,
            jobLocation:'',
            userLocation:''
        }
    }


if(action.type === UPDATE_USER_IMAGE_BEGIN){
    return{...state,
    isLoading:true
    }
}

if(action.type === UPDATE_USER_IMAGE_SUCCESS){ 
    return{...state,
        isLoading:false,
        token:action.payload.token,
        user:action.payload.user,
        userLocation:action.payload.location,
        showAlert:true,
        alertType:'success',
        alertText:'User Profile Image Updated'
        }
}

if(action.type === UPDATE_USER_IMAGE_ERROR){
    return{...state,
    isLoading:false,
    showAlert:true,
    alertType:'danger',
    alertText:action.payload.msg
    }
}


    if(action.type === UPDATE_USER_BEGIN){
        return{...state,
        isLoading:true
        }
    }

    if(action.type === UPDATE_USER_SUCCESS){
        return{...state,
        isLoading:false,
        token:action.payload.token,
        user:action.payload.user,
        userLocation:action.payload.location,
        showAlert:true,
        alertType:'success',
        alertText:'User Profile Updated'
        }
    }

    if(action.type === UPDATE_USER_ERROR){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.msg
        }
    }

    if(action.type === HANDLE_CHANGE){
        return{...state,
        [action.payload.name] : action.payload.value
        }
    }

    if (action.type === CLEAR_FILTERS) {
        return {
          ...state,
          search: '',
          searchStatus: 'all',
          searchType: 'all',
          sort: 'latest',
        }
      }

    if(action.type === CLEAR_VALUES){
        return{
            ...state,
            isEditing:false,
            jobLocation:state.userLocation,
        }
    }

    
    if(action.type === SEND_EMAIL_BEGIN){
        return{...state,isLoading:true}
    }

    if(action.type === SEND_EMAIL_SUCCESS){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'success',
        alertText:'Email sent successfully'
        }
    }

    if(action.type === SEND_EMAIL_ERROR){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.msg
        }
    }

    if(action.type === CREATE_JOB_BEGIN){
        return{...state,isLoading:true}
    }

    if(action.type === CREATE_JOB_SUCCESS){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'success',
        alertText:'New Job Created!'
        }
    }

    if(action.type === CREATE_JOB_ERROR){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.msg
        }
    }

    if (action.type === GET_JOBS_BEGIN) {
        return { ...state, isLoading: true, showAlert: false }
      }
      if (action.type === GET_JOBS_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          jobs: action.payload.jobs,
          totalJobs: action.payload.totalJobs,
          numOfPages: action.payload.numOfPages,
        }
      } 

      if(action.type === GET_IMAGES_ERROR){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.msg
        }
    }

      if (action.type === GET_IMAGES_BEGIN) {
        return { ...state, isLoading: true, showAlert: false }
      }
      if (action.type === GET_IMAGES_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          totalUrls:action.payload.totalUrls,
          urls:action.payload.urls,
          numOfImagePage:action.payload.numOfImagePage
        }
      } 

      if (action.type === SET_EDIT_JOB) {
        const job = state.jobs.find((job)=>job._id === action.payload.id)
        const {_id,position,company,jobLocation,jobType,status} = job
        return {
          ...state,
          isEditing:true,
          editJobId:_id,
          position,company,jobLocation,jobType,status
        }
      }

      if(action.type === DELETE_NEWS_ITEM_BEGIN){
        return{...state,isLoading:true}
    }

    if(action.type === DELETE_NEWS_ITEM_SUCCESS){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'success',
        alertText:'Successfuly Deleted News Item'
        }
    }

    if(action.type === DELETE_NEWS_ITEM_ERROR){
        return{...state,
            isLoading:false,
            showAlert:true,
            alertType:'danger',
            alertText:action.payload.msg
        }
    }

    if(action.type === DELETE_JOB_BEGIN){
        return{...state,isLoading:true}
    }

    if(action.type === EDIT_JOB_BEGIN){
        return{...state,
        isLoading:true
        }
    }

    if(action.type === EDIT_JOB_SUCCESS){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'success',
        alertText:'Job Successfully updated!'
        }
    }

    if(action.type === EDIT_JOB_ERROR){
        return{...state,
            isLoading:false,
            showAlert:true,
            alertType:'danger',
            alertText:action.payload.msg
        }
    }

    if (action.type === GET_BDAY_SUCCESS) {
        return {
          ...state,
          totalBday: action.payload.totalBday,
          bdays: action.payload.bday,
          monthly: action.payload.monthly,
          totalMonthly: action.payload.totalMonthly,
        }
      } 


    if(action.type === ADD_NEW_IMAGE_BEGIN){
        return{...state,isLoading:true}
    }

    if(action.type === ADD_NEW_IMAGE_SUCCESS){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'success',
        alertText:'New Image Added'
        }
    }

    if(action.type === ADD_NEW_IMAGE_ERROR){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.msg
        }
    }

    if(action.type === ADD_NEWS_ITEM_BEGIN){
        return{...state,isLoading:true}
    }

    if(action.type === ADD_NEWS_ITEM_SUCCESS){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'success',
        alertText:'News Item Added'
        }
    }

    if(action.type === ADD_NEWS_ITEM_ERROR){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.msg
        }
    }

    if(action.type === GET_NEWS_ITEM_BEGIN){
        return{...state,isLoading:true}
    }

    if(action.type === GET_NEWS_ITEM_SUCCESS){
        return{...state,
        isLoading:false,
        totalNews:action.payload.totalNews,
        news:action.payload.news,
        }
    }

    if(action.type === GET_NEWS_ITEM_ERROR){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.msg
        }
    }
    
    if (action.type === CHANGE_PAGE) {
        return { ...state, page: action.payload.page }
      }

      if (action.type === CHANGE_IMAGE_PAGE) {
        return { ...state, imagePage: action.payload.page }
      }

      if (action.type === GET_MEMBERS_BEGIN) {
        return { ...state, isLoading: true, showAlert: false }
      }
      if (action.type === GET_MEMBERS_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          members: action.payload.members,
          totalMembers: action.payload.totalMembers,
          numOfPages: action.payload.numOfPages,
        }
      } 

      if(action.type === GET_MEMBERS_ERROR){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.msg
        }
    }

    if(action.type === ADD_NEW_USER_TO_REGISTER_BEGIN){
        return{...state,
        isLoading:true
        }
    }

    if(action.type === ADD_NEW_USER_TO_REGISTER_SUCCESS){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'success',
        alertText:'Successfuly Added User',
        }
    }

    if(action.type === ADD_NEW_USER_TO_REGISTER_ERROR){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.msg
        }
    }

    if(action.type === MAKE_ADMIN_BEGIN){
        return{...state,
        isLoading:true
        }
    }

    if(action.type === MAKE_ADMIN_SUCCESS){
        return{...state,
        isLoading:false,
        admin: action.payload.admin,
        showAlert:true,
        alertType:'success',
        alertText:'User is now an Admin',
        }
    }

    if(action.type === MAKE_ADMIN_ERROR){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.msg
        }
    }

    if(action.type === CREATE_COMMENT_BEGIN){
        return{...state,isLoading:true}
    }

    if(action.type === CREATE_COMMENT_SUCCESS){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'success',
        alertText:'Comment Added',
        new_comment: action.payload.msg
        }
    }

    if(action.type === CREATE_COMMENT_ERROR){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.msg
        }
    }

    if (action.type === GET_COMMENT_BEGIN) {
        return { ...state, isLoading: true, showAlert: false }
      }
      if (action.type === GET_COMMENT_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          totalComments: action.payload.data,
        }
      } 

      if(action.type === GET_COMMENT_ERROR){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.msg
        }
    }
    
    if(action.type === UPDATE_GLOBAL_COUNT){
        return{...state,
        commentIndex:action.payload.msg
        }
    }

    if(action.type === UPDATE_COMMENT_BEGIN){
        return{...state,
        isLoading:true
        }
    }

    if(action.type === UPDATE_COMMENT_SUCCESS){ 
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'success',
        alertText:'Comment Successfully updated!',
        new_comment: action.payload.msg
        }
    }

    if(action.type === UPDATE_COMMENT_ERROR){
        return{...state,
            isLoading:false,
            showAlert:true,
            alertType:'danger',
            alertText:action.payload.msg
        }
    }

    if(action.type === DELETE_COMMENT_BEGIN){
        return{...state,isLoading:true}
    }

    if(action.type === DELETE_COMMENT_SUCCESS){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'success',
        alertText:'Successfuly Deleted Comment'
        }
    }

    if(action.type === DELETE_COMMENT_ERROR){
        return{...state,
            isLoading:false,
            showAlert:true,
            alertType:'danger',
            alertText:action.payload.msg
        }
    }

    if(action.type === ADD_NEW_EXCO_BEGIN){
        return{...state,isLoading:true}
    }

    if(action.type === ADD_NEW_EXCO_SUCCESS){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'success',
        alertText:'New Exco Member Added'
        }
    }

    if(action.type === ADD_NEW_EXCO_ERROR){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.msg
        }
    }

    if (action.type === GET_EXCO_BEGIN) {
        return { ...state, isLoading: true, showAlert: false }
      }
      if (action.type === GET_EXCO_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          excoMembers:action.payload.excoMembers,
          totalExco: action.payload.totalExco,
        }
      } 

      if(action.type === GET_EXCO_ERROR){
        return{...state,
        isLoading:false,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.msg
        }
    }

    throw new Error(`no such action: ${action.type}`)
}

export default reducer