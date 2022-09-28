import express from 'express'
import {register, login, updateUser,updateUsersImage,getUsersImage,
    addNewUserToDB,makeAUserAdmin} from '../controllers/authController.js'
import 'express-async-errors'
import authenticateUser from '../middleware/auth.js'

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/updateUser').patch(authenticateUser,updateUser)
router.route('/updateImage').post(updateUsersImage)
router.route('/getImage').post(authenticateUser,getUsersImage)
router.route('/addnewuser').post(addNewUserToDB)
router.route('/makeadmin').post(makeAUserAdmin)
export default router