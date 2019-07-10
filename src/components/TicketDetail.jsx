import React from 'react';
import PropTypes from 'prop-types';

const TicketDetail = (props) => {
  // setTimeout(()=>{
  return (
    <div>
      <h1>{props.selectedTicket.names} - {props.selectedTicket.location} </h1>
      <h2>Submitted {props.selectedTicket.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedTicket.issue}</em></h4>
      
    </div>
  );
  // );}, 1000);
};

TicketDetail.propTypes = {
  selectedTicket: PropTypes.object
};
export default TicketDetail;
