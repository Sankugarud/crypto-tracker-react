import React from 'react';
import Pagination from '@mui/material/Pagination';
import './pegination.css'

function PeginationComponent({changeTheme, page, handleChangePage }) {
  const backgroundColor = changeTheme ? 'white' : 'black';
  const textColor = changeTheme ? 'black' : 'white';
  return (
    <div style={{backgroundColor, color:textColor}} className="pagination-container">
      <Pagination
        count={10}
        page={page}
        color="primary"
        onChange={(e, value) => handleChangePage(e, value)}
        sx={{
          "& .MuiPaginationItem-ellipsis": {
            border: '0px solid gray !important',
          },
          "& .MuiPaginationItem-text": {
            color: textColor,
            border: '1px solid gray',
          },
        }}
      />
    </div>
  );
}

export default PeginationComponent;
