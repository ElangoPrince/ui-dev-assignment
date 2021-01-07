import React from 'react'
import Image1 from '../assets/image1.jpg'
import Image2 from '../assets/image2.jpg'
import Image3 from '../assets/image3.jpg'
import Image4 from '../assets/image4.jpg'
import Image6 from '../assets/image6.jpg'
import Image5 from '../assets/image5.png'

const ImageGallery = () => {
  return (
    <div aria-label='gallery'>
      <img src={Image1} alt='image1' />
      <img src={Image2} alt='image2' />
      <img src={Image3} alt='image3' />
      <img src={Image4} alt='image4' />
      <img src={Image5} alt='image5' />
      <img src={Image6} alt='image6' />
    </div>
  )
}

export default ImageGallery
