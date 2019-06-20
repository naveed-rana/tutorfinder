import React, { Component } from 'react';
import laptop from './laptop.png';
import login from './login.png';
import visitingcard from './visitingcard.png';
import contacts1 from './contacts1.png';
import Dummy from '../dummy/index';

class Forstudents extends Component {
    state = {  }
    render() { 
        return (
            <div className="row">
                <h2  className="center-align">For Students</h2>
                <Dummy
                    label = "Sign up"
                    details = "Create your free account with Tutors.edu.pk and find the bestTtutor for you."
                    image = {login}
                />
                <Dummy
                    label = "Search for tutor or Intitute"
                    details = "You can search for tutor according to your needs by filtering through meny options e.g Filte by City, Filter by Qualification, Filter by Subject. You can also search for instititutes who post their offered cources here."
                    image = {laptop}
                />
                <Dummy
                    label = "Visit Profiles of your interest"
                    details = "Based on your Search, System will provide you with Profiles of Tutors and Institutes with a little bit of Information. To view more info about a specific Profile, You can visit it by clicking on it."
                    image = {visitingcard}
                />
                <Dummy
                    label = "Contact Tutor or Institute"
                    details = "You can contact Tutor or Institute through Phone Number or Email provided by them."
                    image = {contacts1}
                />
            </div>
        );
    }
}
 
export default Forstudents;