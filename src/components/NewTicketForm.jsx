import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD

function NewTicketForm(props) {
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();

    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
=======

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

>>>>>>> 198acebc22d1da61b5b1e95e27d8c523f6a88504
  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
<<<<<<< HEAD
          type="text"
          id="names"
          placeholder="Pair Names"
          ref={input => {
            _names = input;
          }}
        />
        <input
          type="text"
          id="location"
          placeholder="Location"
          ref={input => {
            _location = input;
          }}
        />
        <textarea
          id="issue"
          placeholder="Describe your issue"
          ref={textarea => {
            _issue = textarea;
          }}
        />
        <button type="submit">Help</button>
=======
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
>>>>>>> 198acebc22d1da61b5b1e95e27d8c523f6a88504
      </form>
    </div>
  );
}
<<<<<<< HEAD
NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};
=======

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

>>>>>>> 198acebc22d1da61b5b1e95e27d8c523f6a88504
export default NewTicketForm;
