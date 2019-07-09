import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

<<<<<<< HEAD

function TicketList(props) {
=======
function TicketList(props){
>>>>>>> 198acebc22d1da61b5b1e95e27d8c523f6a88504
  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket, index) =>
<<<<<<< HEAD
        <Ticket names={ticket.name}
=======
        <Ticket names={ticket.names}
>>>>>>> 198acebc22d1da61b5b1e95e27d8c523f6a88504
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}
<<<<<<< HEAD
TicketList.propTypes = {
  ticketList: PropTypes.array
};
=======

TicketList.propTypes = {
  ticketList: PropTypes.array
};

>>>>>>> 198acebc22d1da61b5b1e95e27d8c523f6a88504
export default TicketList;
