import React, { Component } from 'react';
import tutor2 from './tutor2.png';
import Dummy from '../dummy/index';

class Fortutors extends Component {
    state = {  }
    render() { 
        return (
            <div className="row">
                <h2  className="center-align">For Tutors</h2>
                <Dummy
                    label = "Sign up"
                    details = "Create your free account with Tutors.edu.pk and find the bestTtutor for you."
                    image = {tutor2}
                />
                <Dummy
                    label = "Search for tutor or Intitute"
                    details = "You can search for tutor according to your needs by filtering through meny options e.g Filte by City, Filter by Qualification, Filter by Subject. You can also search for instititutes who post their offered cources here."
                    image = {tutor2}
                />
                <Dummy
                    label = "Visit Profiles of your interest"
                    details = "Based on your Search, System will provide you with Profiles of Tutors and Institutes with a little bit of Information. To view more info about a specific Profile, You can visit it by clicking on it."
                    image = {tutor2}
                />
                <Dummy
                    label = "Contact Tutor or Institute"
                    details = "You can contact Tutor or Institute through Phone Number or Email provided by them."
                    image = {tutor2}
                />
            </div>
        );
    }
}
 
export default Fortutors;