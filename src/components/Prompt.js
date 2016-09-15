import React, {Component} from 'react'

class Prompt extends Component{
    constructor(props, context){
        super(props, context);
        this.state = { username: '' };
        this.onUpdateUser = this.onUpdateUser.bind(this);
        this.onSubmitUser = this.onSubmitUser.bind(this);
    }
    onSubmitUser(e){
        e.preventDefault();
        var username = this.state.username;
        this.setState({username: ''});

        if (this.props.routeParams.playerOne) {
            // goto /battle
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            });
        } else {
            //goto /player-two
            this.context.router.push('/playerTwo/'+this.state.username);
        }
    }
    onUpdateUser(e){
        this.setState({username: e.target.value});
    }
    render(){
        console.log(this);
        return (
            <div className='jumbotron col-sm-6 col-sm-offset-3 text-center'>
            <h1>{this.props.header}</h1>
            <div className='col-sm-12'>
                <form onSubmit={this.onSubmitUser}>
                    <div className='form-group'>
                        <input className='form-control' 
                            placeholder='username'
                            onChange={this.onUpdateUser}
                            value={this.props.username} 
                            type='text' />
                    </div>                        
                    <div className='form-group col-sm-4 col-sm-offset-4'>
                        <button className='btn btn-block btn-success' type='submit'>Continue</button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
Prompt.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Prompt;