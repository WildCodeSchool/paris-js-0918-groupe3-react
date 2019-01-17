import React, { Component } from 'react';
import { putNewPassword } from '../actions/connexionUsersActions';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import OrangeButton from "./OrangeButton";

class NewPassword extends Component {

    state = {
        inputPassword: "",
        inputPasswordBis: "",
        redirection: false
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { inputPasswordBis, inputPassword } = this.state;
        const { token } = this.props.match.params
        if (inputPassword === inputPasswordBis) {
            await this.props.putNewPassword(inputPassword, token);
            this.setState({
                redirection: true
            });
            alert('Votre mot de passe a été changé')
        } else {
            alert('Les mots de passe ne correspondent pas')
        }
    };

    render() {
        const {redirection} = this.state
        if (redirection) return <Redirect to='/' />
        return (
            <div className='NewPassword'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="password"
                        name="inputPassword"
                        placeholder="Mot de passe"
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="inputPasswordBis"
                        placeholder="Répéter mot de passe"
                        onChange={this.handleChange}
                    />
                    <OrangeButton text="Changer mot de passe" />
                </form>

            </div>
        )
    }
}

const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps,
    { putNewPassword }
)(NewPassword);
