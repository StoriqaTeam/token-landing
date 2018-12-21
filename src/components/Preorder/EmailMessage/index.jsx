import React, {Component} from 'react';

class EmailMessage extends Component {
  render() {
    const {message} = this.props;

    return (
      <p className="text-center text-white email-message mt-0 mb-0" style={{height: '50px'}}>{message}</p>
    );
  }
}

export default EmailMessage;
