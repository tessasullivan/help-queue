import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import Admin from './Admin';
// import Moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(
      this
    );
  }

  componentDidMount() {
    this.waitTImeUpdateTimer = setInterval(
      () => this.updateTicketElapsedWaitTime(),
      60000
    );
  }

  componentWillMount() {
    clearInterval(this.waitTImeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach(
      ticket => (ticket.formattedWaitTime = ticket.timeOpen.fromNow(true))
    );
    this.setState({ masterTicketList: newMasterTicketList });
  }

  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = newTicket.timeOpen.fromNow(true);
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
          <Route
            path="/admin"
            render={(props) => <Admin ticketList={this.state.masterTicketList} 
              currentRouterPath={props.location.pathname} /> } />
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
