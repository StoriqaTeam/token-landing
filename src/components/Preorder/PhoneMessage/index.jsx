import React, {Component} from 'react';

class PhoneMessage extends Component {
  render() {
    const {message} = this.props;

    return (
      <p className="text-center text-white phone-message" dangerouslySetInnerHTML={{__html: message}} />
    );
  }
}

export default PhoneMessage;
