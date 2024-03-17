import React, { useState } from 'react';
import '../style/App.css';

function Status() {

    const [fan, setFan] = useState(0);
    const [bulb, setBulb] = useState(false);
    const [led, setLed] = useState(null);
    const [ac, setAc] = useState(0);
    const [status, setStatus] = useState(0);

    async function fun(e) {
        e.preventDefault();
        const res1 = await fetch(`https://kodessphere-api.vercel.app/devices/H4HryFV`, {
            method: 'GET',
        })
        const data = await res1.json();

        setFan(data.fan);
        setBulb(data.bulb);
        setLed(data.led);
        setAc(data.ac.temp);
        setStatus(data.ac.state);
        console.log(data);
    }
    return (
        <div className='component'>
            <h3>Current Status of devices</h3>
            <form onSubmit={fun}>
                {
                    led && <div>
                        <h5>Fan : {fan}</h5>
                        <h5>Bulb : {bulb ? "ON" : "OFF"} </h5>
                        <h5>LED : {led}</h5>
                        <h5> AC : {ac}</h5>
                    </div>
                }

                <div className='submit-btn'>
                    <button type="submit" className="btn btn-primary">Get Status</button>
                </div>
            </form>
        </div >
    )
}

export default Status
