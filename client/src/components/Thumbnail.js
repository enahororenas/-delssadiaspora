import React from 'react'

const Thumbnail = ({ arr, image, index }) => {
    return (
    <div>
      {
        arr.map((imgsrc, i) => (
          <img
            key={i}
            height="50"
            src={imgsrc}
            onClick={() => image(i)}
            className={index === i ? 'active' : ''}
          />
        ))
      }
    </div>
    )
  }

export default Thumbnail