import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from "lodash";
import { dataURLtoFile } from 'Helpers/utils';

class DocumentUpload extends Component {
  constructor(props){
    super(props)
    this.state={
      valueArr: [],
      fileName:"Upload the file"
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.resetValue !== nextProps.resetValue){
      this.setState({
        valueArr: [],
        fileName:"Upload the file"
      })
    }
  }
  
  onHandleUpload=(e)=>{
    e.preventDefault();
    const uploadArr = []; 
    const reader = new FileReader();
    const file = e.target.files[0];
    if (file) {
      reader.onloadend = (evt) => {
        uploadArr.push({
          name:file.name, 
          file: evt.target.result, 
          blob:dataURLtoFile(evt.target.result, file.name)
        })
        this.setState({
          valueArr: uploadArr,
          fileName:uploadArr[0].name
        })
        this.props.handleResult(uploadArr);
      }
      reader.readAsDataURL(file);
    }
  }

  handleReset=()=>{
    const uploadArr = [];
    this.setState({
      valueArr: [],
      fileName:"Upload the file"
    })
    this.props.handleResult(uploadArr)
  }

  render() {
    const { id, name } = this.props;
    const { valueArr, fileName } = this.state;
    return (
      <div className="file-row">
        <span>{fileName}</span>
        <input 
          className="file-row-upload"
          id={id}
          type="file"
          name={name}
          onChange={this.onHandleUpload}
        />
        {!isEmpty(valueArr) && <div className="file-row-close" onClick={this.handleReset}>X</div>}
      </div>
    );
  }
}

DocumentUpload.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default DocumentUpload;
