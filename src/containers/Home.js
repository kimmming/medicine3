import React, { Component } from 'react'
import Map from '../components/Map.js';
import Table from '../components/Table';

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