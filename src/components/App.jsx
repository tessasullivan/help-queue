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
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(
      this
    );
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(
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
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(
      ticketId => {newMasterTicketList[ticketId].formattedWaitTime = newMasterTicketList[ticketId].timeOpen.fromNow(true);}
    );
    this.setState({ masterTicketList: newMasterTicketList });
  }

  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {[newTicket.id]: newTicket});
    newMasterTicketList[newTicket.id].formattedWaitTime = newMasterTicketList[newTicket.id].timeOpen.fromNow(true);
    this.setState({ masterTicketList: newMasterTicketList });
  }

  handleChangingSelectedTicket(ticketId) {
    this.setState({ selectedTicket: ticketId });
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
            render={props => (
              <Admin
                ticketList={this.state.masterTicketList}
                currentRouterPath={props.location.pathname}
                onTicketSelection={this.handleChangingSelectedTicket}
                selectedTicket={this.state.selectedTicket}
              />
            )}
          />
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
