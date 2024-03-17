import React, { useState } from 'react';
import '../style/App.css';

function Status() {

    const [fan, setFan] = useState(0);
    const [bulb, setBulb] = useState(false);
    const [led, setLed] = useState(null);
    const [ac, setAc] = useState({});
    async function fun(e) {
        e.preventDefault();
        const res1 = await fetch(`https://kodessphere-api.vercel.app/devices/H4HryFV`, {
            method: 'GET',
        })
        const data = await res1.json();
        console.log(data);

        setFan(data.fan);
        setBulb(data.bulb);
        setLed(data.led);
        setAc(data.ac);
    }
    return (
        <div className='component'>
            <h3>Current Status of devices</h3>
            <form onSubmit={fun}>
                <h5>Fan : {fan}</h5>
                <h5>Bulb : {bulb ? <p >On</p> : <p>OFF</p>} </h5>
                <h5>LED : {led}</h5>
                <h5>AC : { }</h5>

                <button type="submit" className="btn btn-primary">Get status</button>
            </form>
        </div >
    )
}

export default Status
