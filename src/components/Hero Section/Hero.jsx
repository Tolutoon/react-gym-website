import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';


export const Hero = () => {
  return (
    <div className="hero">
        <div className='left-side'>
            <Header/>

            <div className='the-ad'>
               <div></div>
               <span>the best fitness club in the town</span> 
            </div>

           { /* Hero Heading */ }
           <div className='hero-text'>
            <div>
                <span className='stroke'>Shape </span>
                <span>Your</span>
           </div>
           <div>
            <span>Ideal Body</span>
            </div>
            <div className="span">
            In here we will help you to shape and build your ideal body and live up your life to fullest
            </div>
        </div>
        <div className="figures">
            <div>
                <span>+200</span>
                <span>expert coaches</span>
            </div>
            <div>
                <span>+900</span>
                <span>Members joined</span>
            </div>
            <div>
                <span>+50</span>
                <span>Workout Programs</span>
            </div>
        </div>

        { /* Hero Buttons */}
        <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn more</buttons>
        </div>
        </div>
        <div className='right-side'>
            <button className="btn">Join Now</button>

            <div className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart rate</span>
                <span>116bpm</span>
            </div>

            { /* Hero Images */ }
            <img src={hero_image} className='hero-image' alt="" />
            <img src={hero_image_back} className='hero-image-back' alt="" />
            {/* calories */}
            <div className='calories'>
                <img src={Calories} alt=''/>
                <div>    
                    <span>Calories Burned</span>
                    <span>220kcal</span> 
                </div>
            </div>
        </div>
    </div>
  )
}
