import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () =>{
    return (
        <section id = "intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className='introName'>Nikitha</span> <br />Data Analyst</span>
                <p className='introPara'>I am a dedicated data analyst with a strong background in data analysis, visualization, and statistical modeling, committed to uncovering insights from data to drive actionable decision-making</p>
                <Link><button className="btn"><img src = {btnImg} alt = "Hire Me"/>Hire Me</button></Link>
            </div> 
            
        </section>
    )
}

export default Intro;