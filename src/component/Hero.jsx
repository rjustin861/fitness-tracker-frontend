import React, {Component} from 'react';
import Footer from './Footer';
import '../css/Hero.css';
import logo from '../img/logo.svg';


class Hero extends Component {
    render() {
        return (
            <div>
                <div className="hero">
                    <div className="hero_area">
                        <img src={logo} alt="Fitness Tracker logo"/>
                        <h1 className="hero_title">Fitness Tracker</h1>
                        <div className="hero_svg"></div>
                        <h3 className="hero_subtitle">Log n' Track</h3>

                        <p className="hero_abstract">With fitness tracker you can <strong>daily log</strong> your <strong>workouts. </strong>
                        Fill in your exercises, sets, reps, weight and keep track of your progress.
                        <br/><strong>Don't be lazy, start training and get strong!</strong></p>
                        <div className="hero_svg"></div>
                        <h3 className="hero_subtitle">Find Workout Buddies</h3>
                        <p className="hero_abstract">With fitness tracker you can <strong>find workout fellows</strong> around you
                        and check out their trainings.
                        <br/>
                        <strong>Don't be shy, sign up and meet new training buddies!</strong></p>

                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Hero;