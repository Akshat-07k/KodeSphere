import React, { useState } from 'react';
import '../style/App.css';
import { motion } from "framer-motion"

function Led() {
    const [val, setVal] = useState('#fff');
    async function fun1(e) {
        e.preventDefault();
        // setVal(e.target.value);
        const body = {
            "teamid": "H4HryFV",
            "device": "led",
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
        console.log(data);

    }
    return (
        <motion.div className='component'
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}>
            <h3>LED</h3>
            <p>Control the color of the LED</p>

            <form onSubmit={fun1}>
                <label for="exampleColorInput" class="form-label">Color</label>
                <input type="color" class="form-control form-control-color" id="exampleColorInput" defaultValue="#fff" title="Choose your color" onChange={(e) => { setVal(e.target.value) }} />
                <div className='submit-btn'>
                    <button type="submit" className="btn btn-primary submit-btn">Change Color</button>
                </div>
            </form>
        </motion.div >
    )
}

export default Led
