import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: ''
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

  handleAdd = () => {
    let contact = {
      name: this.state.name,
      phone: this.state.phone
    }
    this.props.addContact(contact);
    this.handleBack();
  }

  render() {
    return (
      <React.Fragment>
        <button className="btn" onClick={this.handleBack}>Back</button>
        <div className="form-group">
          <label >
            Name:
          <input type="text" name="name" value={this.state.name} className="form-control" onChange={this.handleChange} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Phone:
          <input type="text" name="phone" value={this.state.phone} className="form-control" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <p className="heading-subscriber">Subscriber to be Added</p>
          <p>Name: {this.state.name}</p>
          <p>Phone: {this.state.phone} </p>
        </div>
        <button className="btn btn-primary" type="submit" onClick={this.handleAdd}>Add</button>
      </React.Fragment>
    );
  }
}

export default withRouter(AddContact);
