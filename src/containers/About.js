import React from 'react'
import about_pic from './about_mz.jpg';

const About = () => {
    return(
        <div>
            <center>
                <div>
               <img src={about_pic}
               width="900"
               height="900"
               />
               </div>
            </center>
        </div>
    );
};

export default About;