import React,{useEffect} from "react";
import { Link } from "react-router-dom";

export default function SignIn() {

    useEffect(() => {
        let element = document.querySelector('.suggestion-box')
        if(element!=null){
            element.style.marginTop = '-8.3rem'
        }
    },[])

    return (
    <>
        <form action="sign_in.php">
            <div class="sign_in">
                <div class="sign">
                    <div class="heading">
                        Sign In
                    </div>
                    <div class="entry_details">
                        <div class="details">
                            <label htmlFor="your_name">Enter Username or Email or Mobile Number</label>
                        </div>
                        <div class="answer">
                            <input type="text" id="your_name" />
                        </div>
                    </div>
                    <div class="entry_details">
                        <input type="submit" value="Log In" id="action" />
                    </div>

                    <div class="entry_details">
                        Don't Have any Account?
                        <Link to="/registration">Create Now</Link>
                    </div>
                </div>

            </div>
        </form>
    </>
    )
}