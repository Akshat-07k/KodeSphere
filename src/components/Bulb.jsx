import React, { useState ,useEffect} from 'react';
import '../style/App.css';
import { motion } from "framer-motion";
import bulbOff from '../assets/bulb-removebg-preview.png';
import bulbOn from '../assets/bulb_lit-removebg-preview.png';

function Bulb() {
    const [val, setVal] = useState(false);
    
    useEffect(() => {
        async function fetchData() {
            const body = {
                "teamid": "H4HryFV",
                "device": "bulb",
                "value": val
            }

            const res = await fetch(`https://kodessphere-api.vercel.app/devices`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            // const data = await res.json();
        }

        fetchData();
    }, [val]);
    function fun1(e) {
        e.preventDefault();
        setVal(!val);
    }
    // async function fun1(e) {
    //     setVal(!val)
    //     e.preventDefault();

    //     const body = {
    //         "teamid": "H4HryFV",
    //         "device": "bulb",
    //         "value": val
    //     }

    //     const res = await fetch(`https://kodessphere-api.vercel.app/devices`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(body)
    //     });

    //     const data = await res.json();
    // }

    return (
        <motion.div className='component'
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}>
            <h3>Bulb</h3>
            <p>Turn on or off the bulb</p>
            <img style={{width:"50px", }} src={val ? bulbOn : bulbOff} alt="Bulb" />

            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={fun1} />
                <label class="form-check-label" for="flexSwitchCheckDefault">On / Off</label>
            </div>
        </motion.div>
    )
}

export default Bulb
