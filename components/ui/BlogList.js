import React, { DOM } from 'react';

import BlogItem from './BlogItem';

import _ from 'lodash';

class BlogList extends React.Component {
  render(){
    const { listItem } = this.props;
    return React.createElement(
      'ul',
      {},
      _.map(
       listItem,
        (item, key) => (
          DOM.li({ key },
          React.createElement(BlogItem, item)
          )
        )
      )      
    )
  }
};

export default BlogList;