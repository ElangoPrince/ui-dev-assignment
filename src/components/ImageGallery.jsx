import React from 'react';
import { MagnificPopup, LightBoxGallery, GalleryItem } from 'react-magnific-popup';

import Image1 from '../assets/image1.jpg'
import Image2 from '../assets/image2.jpg'
import Image3 from '../assets/image3.jpg'
import Image4 from '../assets/image4.jpg'
import Image6 from '../assets/image6.jpg'
import Image5 from '../assets/image5.png'
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
    

    <LightBoxGallery 
      className="popup-gallery"
      config={config}
    >
      <GalleryItem
        href="http://farm4.staticflickr.com/3763/9204547649_0472680945_o.jpg" 
        data-source="http://500px.com/photo/32736307" 
        title="Into The Blue" 
        style={{width: '193px', height:'125px'}}
      >
        <img src="http://farm4.staticflickr.com/3763/9204547649_7de96ee188_t.jpg" width="193" height="125" />
      </GalleryItem>
      <GalleryItem
        href="http://farm3.staticflickr.com/2856/9207329420_7f2a668b06_o.jpg" 
        data-source="http://500px.com/photo/32554131" 
        title="Light Sabre" 
        style={{width: '82px', height: '125px'}}
      >
        <img src="http://farm3.staticflickr.com/2856/9207329420_e485948b01_t.jpg" width="82px" height="125" />
      </GalleryItem>
    </LightBoxGallery> 
  );
}

export default ImageGallery
