import React, {Component} from 'react'
import Prompt from '../components/Prompt'

class PromptContainer extends Component{
    constructor(props, context){
        super(props, context);
        this.state = { username: '' };
        this.handleUpdateUser = this.handleUpdateUser.bind(this);
        this.handleSubmitUser = this.handleSubmitUser.bind(this);
    }
    handleSubmitUser(e){
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
            this.context.router.push('/playerTwo/'+username);
        }
    }
    handleUpdateUser(e){
        this.setState({username: e.target.value});
    }
    render(){
        return (
            <Prompt 
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username} />
        )
    }
}
PromptContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};
PromptContainer.propTypes = {
    route: React.PropTypes.object.isRequired,
    routeParams: React.PropTypes.shape({
      playerOne: React.PropTypes.string
    })
};

export default PromptContainer;