import React from 'react';
import { MagnificPopup, LightBoxGallery, GalleryItem } from 'react-magnific-popup';

import Image1 from '../assets/image1.jpg'
import Image2 from '../assets/image2.jpg'
import Image3 from '../assets/image3.jpg'
import Image4 from '../assets/image4.jpg'
import Image6 from '../assets/image6.jpg'
import Image5 from '../assets/image5.png'
// const items =[
//   {
    
//   }
// ]
const config = {
  delegate: 'a',
  type: 'image',
  closeOnContentClick: false,
  closeBtnInside: false,
  mainClass: 'mfp-with-zoom mfp-img-mobile',
  image: {
    verticalFit: true,
    titleSrc: function(item) {
      return item.el.attr('title') + ' &middot; <a className="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
    }
  },
  gallery: {
    enabled: true
  },
  zoom: {
    enabled: true,
    duration: 300, // don't foget to change the duration also in CSS
    opener: function(element) {
      return element.find('img');
    }
  }
}

const ImageGallery = () => {
  return (
    <div className="container">
      <div className="bodyWrapper">
        <div className="repHead">
          <h2>Image Gallery</h2>
        </div>
        <LightBoxGallery 
          className="popup-gallery"
          config={config}
        >
          <div className="myRow">
              <div className="my-2 col4">
                <GalleryItem
                  href={Image1} 
                  data-source={Image1} 
                  className="col4"
                  title="Into The Blue"   
                >
                  <img src={Image1} className="maxWidth"/>
                </GalleryItem>
              </div>
              <div className="my-2 col4">
                <GalleryItem
                  href={Image1} 
                  data-source={Image1} 
                  className="col4"
                  title="Into The Blue"   
                >
                  <img src={Image1} className="maxWidth"/>
                </GalleryItem>
              </div>
              <div className="my-2 col4">
                <GalleryItem
                  href={Image1} 
                  data-source={Image1} 
                  className="col4"
                  title="Into The Blue"   
                >
                  <img src={Image1} className="maxWidth"/>
                </GalleryItem>
              </div>
              <div className="my-2 col4">
                <GalleryItem
                  href={Image1} 
                  data-source={Image1} 
                  className="col4"
                  title="Into The Blue"   
                >
                  <img src={Image1} className="maxWidth"/>
                </GalleryItem>
              </div>
              <div className="my-2 col4">
                <GalleryItem
                  href={Image1} 
                  data-source={Image1} 
                  className="col4"
                  title="Into The Blue"   
                >
                  <img src={Image1} className="maxWidth"/>
                </GalleryItem>
              </div>
              <div className="my-2 col4">
                <GalleryItem
                  href={Image1} 
                  data-source={Image1} 
                  className="col4"
                  title="Into The Blue"   
                >
                  <img src={Image1} className="maxWidth"/>
                </GalleryItem>
              </div>
              <div className="my-2 col4">
                <GalleryItem
                  href={Image1} 
                  data-source={Image1} 
                  className="col4"
                  title="Into The Blue"   
                >
                  <img src={Image1} className="maxWidth"/>
                </GalleryItem>
              </div>
          </div>
        </LightBoxGallery> 
      </div>
  </div> 
  );
}

export default ImageGallery
