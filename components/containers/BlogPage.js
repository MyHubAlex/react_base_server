import React from 'react';

import BlogList from '../ui/BlogList';

const listItem = [
  {
   image: {
           src: "http://www.wallpapercase.com/wp-content/uploads/2016/06/Pure-Lake-and-Leeds-Castle-HD-Wallpaper-2560x1440-1024x576.jpg",
           width: '100px', 
           height: '100px', 
           alt: 'тест'
           },
    text: 'абракадабра'  
  },
  {
   image: {
           src: "http://www.wallpapercase.com/wp-content/uploads/2016/06/Pure-Lake-and-Leeds-Castle-HD-Wallpaper-2560x1440-1024x576.jpg",
           width: '100px', 
           height: '100px', 
           alt: 'тест'
           },
    text: 'тест тест'  
  },
   {
   image: {
           src: "http://www.wallpapercase.com/wp-content/uploads/2016/06/Pure-Lake-and-Leeds-Castle-HD-Wallpaper-2560x1440-1024x576.jpg",
           width: '100px', 
           height: '100px', 
           alt: 'тест'
           },
    text: 'еще раз тест'  
  },
];

class BlogPage extends React.Component {
 
  constructor(props) {
    super(props);
    
    this.state = { listItem: listItem };
  }
  
  render(){
    const listItem= this.state.listItem; 
    return React.createElement(BlogList, { listItem })
  }
}

export default BlogPage;
