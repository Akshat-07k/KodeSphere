import React, { useState } from 'react';
import '../style/App.css';
import { motion } from "framer-motion";

import fanImage from '../assets/fan2.png';

function Fan() {
    const [val, setVal] = useState(0);
    async function fun1(e) {
        e.preventDefault();

        const body = {
            "teamid": "H4HryFV",
            "device": "fan",
            "value": val
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
    }
    return (
        <motion.div className='component'
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}>
            <h3>Fan</h3>
            <p>Control the speed of fan</p>
            <motion.img src={fanImage} alt="Fan"
                style={{
                    width: "100px ",
                    height: "100px"
                }}
                animate={{ rotate: val * 360 }}
                transition={{
                    loop: Infinity,
                    ease: "linear",
                    duration: 1
                }}
            />

            < form onSubmit={fun1} >
                <input defaultValue={0} type="range" class="form-range" min="0" max="5" id="customRange2" onChange={(e) => {
                    setVal(e.target.value);
                }} />
                <div>{val}</div>
                <div className='submit-btn'>
                    <button type='submit'>Change Speed</button>
                </div>
            </form>
        </motion.div >
    )
}
export default Fan
