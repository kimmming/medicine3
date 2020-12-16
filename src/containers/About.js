import React from 'react'
import about_pic from './about2.jpeg';

const About = () => {
    return(
        <div>
            <center>
                <div>
               <img src={about_pic}
               width='700'
               height='700'
               />
               </div>
            </center>
        </div>
    );
};

export default About;