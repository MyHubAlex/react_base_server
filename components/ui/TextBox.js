import React, { DOM } from 'react';

import Image from './Image';

class TextBox extends React.Component {
              
  render(){
    return React.createElement('span',{}, this.props.text);
  }
};

export default TextBox;