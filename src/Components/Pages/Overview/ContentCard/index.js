import React, { Component, Fragment } from 'react';

class ContentCard extends Component{
    render(){
        return(
            <Fragment>
                <div className="content-blk">
                    <p>Hi Adam you have an outstanding payment</p>
                    <span className="content-blk-price"><sup>$</sup>600<sup>.00</sup></span>
                </div>
            </Fragment>
        );
    }
}
export default ContentCard;