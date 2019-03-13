import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';

class PhoneDirectory extends Component {
    addContact=()=>{
      this.props.history.push('/add');
    }

    deleteContact=(contactIndex)=>{
         this.props.deleteContact(contactIndex);
    }

    render() {
        return (
            <React.Fragment>
                <button className='btn btn-primary' onClick={()=>this.addContact()}>Add </button>
                <table className='table borderless'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contacts.map((contact, index) => {
                            return (
                                <tr key={index}>
                                    <td>{contact.name}</td>
                                    <td>{contact.phone}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                            onClick={() => this.deleteContact(index)}>Delete
                                        </button>
                                    </td>
                                </tr>)
                        })}
                    </tbody>

                </table>
            </React.Fragment>
        );
    }
}

export default withRouter(PhoneDirectory);

