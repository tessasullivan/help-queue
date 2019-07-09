<<<<<<< HEAD
import React, { Component } from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";
import Error404 from "./Error404";

class App extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(
      this
    );
  }
  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({ masterTicketList: newMasterTicketList });
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <TicketList ticketList={this.state.masterTicketList} />
            )}
          />
          <Route
            path="/newticket"
            render={() => (
              <NewTicketControl
                onNewTicketCreation={this.handleAddingNewTicketToList}
              />
            )}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
=======
import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

>>>>>>> 198acebc22d1da61b5b1e95e27d8c523f6a88504
}

export default App;
