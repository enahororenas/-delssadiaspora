import {FaNewspaper} from 'react-icons/fa'
import {FaInfo} from 'react-icons/fa'
import {FaWpforms} from 'react-icons/fa'
import {ImProfile} from 'react-icons/im'
import { FaHome } from 'react-icons/fa'
import { ImNewspaper } from 'react-icons/im'
import { ImFilePicture } from 'react-icons/im'
import {IoIosPeople} from 'react-icons/io'
import {FaEdit} from 'react-icons/fa'

    const adminlinks = [
        {id:1,text:'news',path:'/news',icon:<FaNewspaper/>},
        {id:2,text:'about',path:'/about',icon:<FaInfo/>},
        {id:3,text:'contact us',path:'/contact',icon:<FaWpforms/>},
        {id:4,text:'Edit profile',path:'/profile',icon:<ImProfile/>},
        {id:5,text:'Home',path:'/user',icon:<FaHome/>},
        {id:6,text:'Gallery',path:'/gallery',icon:<ImFilePicture/>},
        {id:7,text:'Members',path:'/members',icon:<IoIosPeople/>},
        {id:8,text:'Add news Item',path:'/addnewsitem',icon:<ImNewspaper/>},
        {id:9,text:'Add Image',path:'/addimage',icon:<ImFilePicture/>},
        {id:10,text:'Add User/Admin',path:'/adduser',icon:<FaEdit/>},
        {id:11,text:'Delete News Article',path:'/deletenews',icon:<ImNewspaper/>},
        {id:12,text:'Executive Committee',path:'/exco',icon:<IoIosPeople/>},
        {id:13,text:'Add Executive Member',path:'/addexec',icon:<ImFilePicture/>},
    ]
        
export default adminlinks
