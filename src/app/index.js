import React, { Component } from 'react';
import Header from '../header/index';
import PhoneDirectory from '../phoneDirectory';
import AddContact from '../addContact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.css';
import NotFound from '../notFound';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { name: 'Sahil', phone: '8755079382' }
      ]
    }
  }
  /* I would have preferred using State Management Libarary like Redux, If this would be 
     an application with multiple properties in state, instead of lifting state up.
  */

  deleteContact = (contactIndex) => {
    /* State Should not be mutated , because state mutation won't result in re-rendering of component */
    let contacts = this.state.contacts;
    contacts.splice(contactIndex, 1);
    this.setState({ contacts });
  }

  addContact = (contact) => {
    let contacts = this.state.contacts;
    contacts.push(contact);
    this.setState({ contacts });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/"
                component={() => <PhoneDirectory contacts={this.state.contacts} deleteContact={this.deleteContact} />} />
              <Route path="/add" component={() => <AddContact addContact={this.addContact} />} />
              <Route component={NotFound}></Route>
            </Switch>
          </Router>
        </div>
      </React.Fragment>
    )
  }
}