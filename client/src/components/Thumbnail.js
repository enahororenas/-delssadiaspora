import React from 'react'
import { useAppContext } from '../context/appContext'

const Thumbnail = ({ arr, image, index }) => {

const {updateGlobalIndex}=useAppContext()

const update =(i)=>{
  updateGlobalIndex(i)
  image(i)
}
    return (
    <div>
      {
        arr.map((imgsrc, i) => (
          <img
            key={i}
            height="50"
            src={imgsrc}
            onClick={() => update(i)}
            className={index === i ? 'active' : ''}
            alt=''
          />
        ))
      }
    </div>
    )
  }

export default Thumbnail