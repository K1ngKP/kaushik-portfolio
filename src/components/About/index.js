import { useState , useEffect} from 'react';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import {
    faGitAlt,
    faReact,
    faJsSquare,
    faHtml5,
    faCss3,
    faJava

} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
                </h1>
                <p>
                I'm a budding software developer who's eager to embark on a journey of 
                innovation and problem-solving. With a foundation in coding and a hunger
                to learn, I'm excited to contribute my enthusiasm and fresh perspective 
                to the world of technology.
          </p>
          <p align="LEFT">
          Collaboration is at the heart of my approach. 
          I understand that the best solutions are born from collective thinking and diverse perspectives.
           I'm eager to engage with mentors, peers,
            and clients to expand my knowledge and refine my skills.
          </p>
          <p>
            If I need to define myself in one sentence ,I embody the synergy of a chess 
            player's strategy, a problem solver's ingenuity, an artist's creativity,
            and an insatiable curiosity, all channeled through an unwavering passion for technology.
          </p>
            </div>
            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        <Loader type='pacman'></Loader>
        </div>
    )
}

export default About;