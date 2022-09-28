import express from 'express'
import {createJob, deleteJob, getAllJobs, updateJob,sendEmail,addImage,getAllImages,
    addNews,getNews,getAllMembers,deleteNews} from '../controllers/jobsController.js'
const router = express.Router()

router.route('/sendemail').post(sendEmail)
router.route('/addimage').post(addImage).get(getAllImages)
router.route('/addnewsitem').post(addNews).get(getNews)
router.route('/getmembers').get(getAllMembers)
router.route('/deletenewsitem').post(deleteNews)
//router.route('/').post(createJob).get(getAllJobs)
//router.route('/:id').delete(deleteJob).patch(updateJob)

export default router