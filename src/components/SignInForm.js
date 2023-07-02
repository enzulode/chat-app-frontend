import React from "react"
import '../css/signin-form.css'

class SignInForm extends React.Component {

    render() {

        return (
            <div className="container form-container">
                <form className="form-signin" id="signin-form">
                    <h2 className="mb-5">Sign In</h2>

                    <div className="form-group">
                        <label for="usernameInput">Username</label>
                        <input type="text" id="usernameInput" className="form-control" placeholder="Username" required autoFocus/>
                    </div>

                    <div className="form-group">
                        <label for="passwordInput">Password</label>
                        <input type="password" id="passwordInput" className="form-control" placeholder="Password" required/>
                    </div>

                    <button type="button" id="btn-do-signin" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        )

    }

}

export default SignInForm