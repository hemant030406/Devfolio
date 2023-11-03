import React from "react";
import { Link } from "react-router-dom";

export default function Registration(){
  return (
        <div className="registrationMain">
        <form action="registration.php">
        <div class="register">
            <div class="registration">
                <div class="heading">
                    Create Account
                </div>
                <div class="entry_details">
                    <div class="details">
                        <label htmlFor="your_name">Name</label>
                    </div>
                    <div class="answer">
                        <input type="text" id="your_name"/>
                    </div>
                </div>
                <div class="entry_details">
                    <div class="details">
                        <label htmlFor="mobile">Mobile Number</label>
                    </div>
                    <div class="answer">
                        <input type="number"  id="mobile"/>
                    </div>
                </div>
                <div class="entry_details">
                    <div class="details">
                        <label htmlFor="user_gender">Gender:</label>
                        <input type="radio" name='mygender' id="user_gender"/>Male<input type="radio" name="mygender" id="user_gender"/>Female
                    </div>
                </div>
                <div class="entry_details">
                    <div class="details">
                        <label htmlFor="user_age">Above 18:</label>
                        <input type="checkbox"  id="user_age"/>
                    </div>
                </div>
                <div class="entry_details">
                    <div class="details">
                        <label htmlFor="user_email">Email</label>
                    </div>
                    <div class="answer">
                        <input type="email"  id="user_email"/>
                    </div>
                </div>
                <div class="entry_details">
                    <div class="details">
                        <label htmlFor="username">Username</label>
                    </div>
                    <div class="answer">
                        <input type="text"  id="username"/>
                    </div>
                </div>
                <div class="entry_details">
                    <div class="details">
                        <label htmlFor="create_password">Create Password</label>
                    </div>
                    <div class="answer">
                        <input type="password" id="create_password" placeholder="At least 6 characters"/>
                    </div>
                </div>
                <div class="entry_details">
                    <div class="details">
                        <label htmlFor="confirm_password">Confirm Password</label>
                    </div>
                    <div class="answer">
                        <input type="text" id="confirm_password"/>
                    </div>
                </div>
                <div class="entry_details">
                        <input type="reset" value="Reset" id="action"/>
                        <input type="submit" value="Submit" id="action"/>
                </div>
                <div class="entry_details">

                    Already have an account?
                    <Link to="/signin">Sign In</Link>
                </div>
            </div>

        </div>
    </form>
        </div>
  )
}
