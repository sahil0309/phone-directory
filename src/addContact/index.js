import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      nameError: null,
      phoneError: null
    }

  }
  handleBack = () => {
    this.props.history.push('/');
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleAdd = (event) => {
    event.preventDefault();
    let contact = {
      name: this.state.name,
      phone: this.state.phone
    }
    this.props.addContact(contact);
    this.handleBack();
  }

  validateName = () => {
    let nameValidation = /^[A-Za-z]+$/;
    if (this.state.name.match(nameValidation))
      this.setState({
        nameError: null
      })
    else
      this.setState({
        nameError: 'Please Enter a Valid Alphabetic Name'
      })
  }

  validatePhone = () => {
    let phoneValidation = /^\d{10}$/;
    if (this.state.phone.match(phoneValidation))
      this.setState({
        phoneError: null
      })

    else
      this.setState({
        phoneError: 'Please Enter a Valid 10 Digit Phone Number'
      })
  }

  render() {
    const detailsFilled = this.state.name !== '' && this.state.phone !== '';
    const validContact = detailsFilled && this.state.phoneError === null &&
      this.state.nameError === null;
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleBack}>Back</button>
        <form onSubmit={this.handleAdd}>
          <div className="form-group">
            <label >
              Name:
               <input type="text" name="name" value={this.state.name}
                className="form-control" onChange={this.handleChange}
                onBlur={this.validateName} />
              <p className='error'>  {this.state.nameError} </p>
            </label>
          </div>
          <div className="form-group">
            <label>
              Phone:
               <input type="text" name="phone" value={this.state.phone}
                className="form-control" onChange={this.handleChange}
                onBlur={this.validatePhone} />
              <p className='error'>  {this.state.phoneError} </p>
            </label>
          </div>
          <div>
            <p className="heading-subscriber">Subscriber to be Added</p>
            <p>Name: {this.state.name}</p>
            <p>Phone: {this.state.phone} </p>
          </div>

          {detailsFilled ? null : <p className='error'>Please Enter Both Name and Phone Number</p>}

          <button className="btn btn-primary" type="submit"
            disabled={!validContact}>Add</button>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(AddContact);
