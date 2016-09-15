import React, { Component } from 'react'
import ReactRouter, {Link} from 'react-router';

class Home extends Component{
	render(){
        return (
            <div className='jumbotron col-sm-12 text-center'>
                <h1>Battle</h1>
                <p className='lead'>Some fancy motto</p>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-success'>
                        Get Started
                    </button>
                </Link>
            </div>
        )
    }
}

export default Home;