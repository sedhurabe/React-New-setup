import React, { Component, Fragment } from 'react';
import Logo from 'Components/Generic/Logo';
import ContentCard from './ContentCard';
import Button from 'Components/Generic/Button';

import LogoImg from 'Assests/Images/download.png';
import CallBack from 'Assests/Images/call_phone.svg';

class Overview extends Component{
    handlePayNow=()=>{

    }

    handlePlan=()=>{

    }

    render(){
        return(
            <Fragment>
                <Logo src={LogoImg} />
                <ContentCard />
                <Button label="PAY NOW" onClick={this.handlePayNow} full />
                <Button label="Create Payment Plan" onClick={this.handlePlan} full secondary />
                <div className="call-back">
                    <img src={CallBack} alt="Callback"/>
                    <p>Request Callback</p>
                </div>
            </Fragment>
        );
    }
}
export default Overview;