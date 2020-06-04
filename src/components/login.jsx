import React from 'react';

import SimpleReactValidator from 'simple-react-validator';

import '../component_css/login.css'


class Login extends React.Component {

  constructor(props) {
    super()

    this.validator = new SimpleReactValidator(
      {
        className: 'text-danger',
      }
    )

    this.state = {
      fullName: '',
      email: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.fullName && this.state.email) {
      alert('Successfully LoggedIn')
    }

    else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  setTitle = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {

    return (
      <div>
        <div className='form-width-control'>
          <form action="." onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor='fullName' className="form-label position">Full Name <span className='text-danger'>*</span></label>
              <input type="text" id='fullName' className="form-control" name='fullName' value={this.state.fullName} onChange={this.setTitle} placeholder='Full Name' />
              {this.validator.message('Full Name', this.state.fullName, 'required|alpha')}
            </div>
            <div className="form-group">
              <label htmlFor='email' className="form-label position">Email Address <span className='text-danger'>*</span></label>
              <input type="text" id='email' className="form-control" name='email' value={this.state.email} onChange={this.setTitle} placeholder='Email Address' />
              {this.validator.message('Email Address', this.state.email, 'required|email')}
            </div>
            <div className="form-group" style={{margin:0}}>
              <button type="submit" id='' className="btn btn-danger" >Start Learning</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login