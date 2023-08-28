import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';

const Education = () => {

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
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'c', 'a', 'd', ' ', 'G', 'a', 'l', 'l', 'e', 'r', 'y']}
              idx={15}
            />
                </h1>
                <p>
                
          </p>
          <p align="LEFT">
          
          </p>
          <p>
            
          </p>
            </div>
            </div>

            <Loader type='pacman'/>
        </>
    )
}

export default Education;