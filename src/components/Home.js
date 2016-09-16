import React, { Component } from 'react';
import ReactRouter, {Link} from 'react-router';
import styles from '../styles/index';

class Home extends Component{
	render(){
        return (
            <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
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
Home.displayName='Home';

export default Home;