import React from 'react';
import PropTypes from 'props-types';
import ReactTable from "react-table";
import "react-table/react-table.css";

const TableView = ({ defaultPageSize, columns, data }) => (
  <ReactTable
    data={data}
    columns={columns}
    defaultPageSize={defaultPageSize}
    className="-striped -highlight"
  />
);
 
TableView.proptypes = {
  defaultPageSize: Proptypes.number,
  columns: Proptypes.number,
  data: PropTypes.array,
}

export default TableView;