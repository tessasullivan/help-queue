import React from 'react';
import PropTypes from 'prop-types';

const TicketDetail = ({selectedTicket}) => {
  return (
    <div>
      <h1>{selectedTicket.names} - {selectedTicket.location} </h1>
      <h2>Submitted {selectedTicket.formattedWaitTime} ago</h2>
      <h4><em>{selectedTicket.issue}</em></h4>
      
    </div>
  );
};

TicketDetail.propTypes = {
  selectedTicket: PropTypes.object
};
export default TicketDetail;
