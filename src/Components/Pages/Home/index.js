import React, { Component, Fragment } from 'react';
import Wrapper from 'Components/HOC/Wrapper';
import Header from 'Components/Generic/Header';
//import NavMenu from 'Components/Generic/Menu';
import ContentWrap from 'Components/HOC/ContentWrap';
import Overview from '../Overview';

import { themeColor } from 'Config';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    handleMenu=(data)=>{
        console.log(data)
    }
    render(){
        return(
            <Fragment>
                <Wrapper>
                    <Header label='Payment to NOW FINANCE' customStyle={themeColor('red', '#000')}/>
                    {/*<NavMenu handleMenu={this.handleMenu} />*/}
                    <ContentWrap>
                        <Overview />
                    </ContentWrap>
                </Wrapper>
            </Fragment>
        );
    }
}
export default Home;