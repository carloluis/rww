import React, { Component } from 'react'
import {Link} from 'react-router'
import MainContainer from './MainContainer'

class Home extends Component{
	render(){
        return (
            <MainContainer>
                <h1>Battle</h1>
                <p className='lead'>Some fancy motto</p>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-success'>
                        Get Started
                    </button>
                </Link>
            </MainContainer>
        );
    }
}
Home.displayName='Home';

export default Home;