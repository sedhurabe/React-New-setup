import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ReactTable from "react-table";
import "react-table/react-table.css";

class DragTrComponent extends React.Component {
  render() {
    const { children = null, rowInfo } = this.props;
    if (rowInfo) {
      const { original, index } = rowInfo;
      const { username } = original;
      return (
        <Draggable key={username} index={index} draggableId={username}>
          {(draggableProvided, draggableSnapshot) => (
            <div
              ref={draggableProvided.innerRef}
              {...draggableProvided.draggableProps}
              {...draggableProvided.dragHandleProps}
            >
              <ReactTable.defaultProps.TrComponent>
                {children}
              </ReactTable.defaultProps.TrComponent>
            </div>
          )}
        </Draggable>
      );
    } else
      return (
        <ReactTable.defaultProps.TrComponent>
          {children}
        </ReactTable.defaultProps.TrComponent>
      );
  }
}

class DropTbodyComponent extends React.Component {
  render() {
    const { children = null } = this.props;
    return (
      <Droppable droppableId="droppable">
        {(droppableProvided, droppableSnapshot) => (
        <div ref={droppableProvided.innerRef}>
            <ReactTable.defaultProps.TbodyComponent>
            {children}
            </ReactTable.defaultProps.TbodyComponent>
        </div>
        )}
      </Droppable>
    );
  }
}

class DragAbleTableView extends Component{
  getTrProps = (state, rowInfo) => {
      return { rowInfo };
  };
  render(){
      const { handleDragEnd, columns, data, defaultPageSize } = this.props;
      return(
          <DragDropContext onDragEnd={handleDragEnd}>
             <ReactTable
                  TrComponent={DragTrComponent}
                  TbodyComponent={DropTbodyComponent}
                  getTrProps={this.getTrProps}
                  data={data}
                  columns={columns}
                  defaultPageSize={defaultPageSize}
                  className="-striped -highlight"
              />
          </DragDropContext>
      );
  }
}

export default DragAbleTableView;
