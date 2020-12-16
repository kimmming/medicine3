import React, { Component } from 'react'
import Map from '../components/Map.js';
import Table from '../components/table.js';


const Home = () => {
    return(
        <div>
            <center>
            <Map/>                
            </center>
            <Table/>
        </div> 
    );
};

export default Home;