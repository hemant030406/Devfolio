import React from "react";
import { useEffect } from "react";

export default function AboutUs() {
    useEffect(() => {
        let element = document.querySelector('.suggestion-box')
        if(element!=null){
            element.style.marginTop = '2.35rem'
        }
    })
    return (
        <div class="about">
            <div class="about_text">This website is created by Priyanshu Pandey , Hemant Pathak and Chirag Varshney.
            </div>
            <div class="about_person">
                <div class="person1">
                    <div class="person-pic1"></div>
                    <div class="person-detail">
                        <ul>
                            <li>Priyanshu Pandey</li>
                            <li>BTech.(CSE)</li>
                            <li>IIT Palakkad</li>
                        </ul>
                    </div>
                </div>
                <div class="person2">
                    <div class="person-pic2"></div>
                    <div class="person-detail">
                        <ul>
                            <li>Hemant Pathak</li>
                            <li>BTech.(CSE)</li>
                            <li>IIT Palakkad</li>
                        </ul>
                    </div>
                </div>
                <div class="person3">
                    <div class="person-pic3"></div>
                    <div class="person-detail">
                        <ul>
                            <li>Chirag Varshney</li>
                            <li>BTech.(CSE)</li>
                            <li>IIT Palakkad</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
