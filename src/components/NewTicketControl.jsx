import React, { Component } from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';

class NewTicketControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleShootingConfirmation = this.handleTroubleShootingConfirmation.bind(
      this
    );
  }

  handleTroubleShootingConfirmation() {
    this.setState({ formVisibleOnPage: true });
    // console.log(`formVisibleOnPage is current set to ${this.state.formVisibleOnPage}`);
  }
  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewTicketForm />;
    } else {
      currentlyVisibleContent = (
        <ConfirmationQuestions
          onTroubleShootingConfirmation={this.handleTroubleShootingConfirmation}
        />
      );
    }
    return <div>{currentlyVisibleContent}</div>;
  }
}

export default NewTicketControl;
