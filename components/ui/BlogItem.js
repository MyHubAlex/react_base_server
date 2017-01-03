import React from 'react'; 

import Image from './Image';
import TextBox from './TextBox';

class BlogItem extends React.Component {  
  render(){
     const { image, text } = this.props;
    
     return React.createElement(
       'div',
       {},
       React.createElement(Image, image),
       React.createElement(TextBox,  { text } )
     ) 
  }
};

export default BlogItem;