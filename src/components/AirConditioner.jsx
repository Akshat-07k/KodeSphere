import React, { useState } from 'react';
import '../style/App.css';
import { motion } from "framer-motion"

function AirConditioner() {
    const [val, setVal] = useState(0);
    const [val2, setVal2] = useState(16);

    async function fun1(e) {
        e.preventDefault();

        const temp = {
            "state": parseInt(val),
            "temp": parseInt(val2)
        }

        const body = {
            "teamid": "H4HryFV",
            "device": "ac",
            "value": temp
        }
        console.log(body)

        const res = await fetch(`https://kodessphere-api.vercel.app/devices`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await res.json();
        console.log(data);

    }
    return (

        <motion.div className='component'
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}>
            <h3>Air conditioner</h3>
            <p>Control the state & temp of AC</p>

            <form onSubmit={fun1}>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={(e) => { setVal(e.target.value) }} />
                    <label class="form-check-label" for="flexSwitchCheckDefault">On / Off</label>
                </div>
                <label for="inputPassword5" class="form-label">Temprature: <span>{val2}</span></label>
                <input defaultValue={16} type="range" class="form-range" min="16" max="30" id="customRange2" onChange={(e) => { setVal2(e.target.value) }} />

                <div className='submit-btn'>
                    <button type="submit" className="btn btn-primary">Temperature </button>
                </div>
            </form>
        </motion.div >
    )
}

export default AirConditioner
