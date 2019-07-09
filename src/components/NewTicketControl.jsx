import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';
import PropTypes from 'prop-types';
<<<<<<< HEAD
=======

class NewTicketControl extends React.Component {
>>>>>>> 198acebc22d1da61b5b1e95e27d8c523f6a88504

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
<<<<<<< HEAD
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = 
        <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation} />;
    } else {
      currentlyVisibleContent = 
        <ConfirmationQuestions
          onTroubleShootingConfirmation={this.handleTroubleShootingConfirmation}
        />;
    }
    return (<div>{currentlyVisibleContent}</div>);
  }
}
NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};
=======
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

>>>>>>> 198acebc22d1da61b5b1e95e27d8c523f6a88504
export default NewTicketControl;
