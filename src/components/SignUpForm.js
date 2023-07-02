import React from "react"
import '../css/signup-form.css'

class SignUpForm extends React.Component {

    render() {

        return (
            <div className="container form-container">
                <form className="form-signup" id="signup-form">
                    <h2 className="mb-5">Sign Up</h2>

                    <div className="form-group">
                        <label for="usernameInput">Username</label>
                        <input type="text" id="usernameInput" className="form-control" placeholder="Username" required autoFocus/>
                    </div>

                    <div className="form-group">
                        <label for="emailInput">Email</label>
                        <input type="email" id="emailInput" className="form-control" placeholder="name@example.com" required/>
                    </div>

                    <div className="form-group">
                        <label for="passwordInput">Password</label>
                        <input type="password" id="passwordInput" className="form-control" placeholder="Password" required/>
                    </div>

                    <button type="button" id="btn-do-signup" className="btn btn-primary">Sign up</button>
                </form>
            </div>
        )

    }



}

export default SignUpForm