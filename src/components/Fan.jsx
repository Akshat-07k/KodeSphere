import React, { useState } from 'react';
import '../style/App.css';
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
        console.log(data);

        // if (data.success) {
        //     const res1 = await fetch(`https://kodessphere-api.vercel.app/devices/H4HryFV`, {
        //         method: 'GET', 
        //     })
        //     const fan = await res1.json();
        //     console.log(fan);
        // }


    }
    return (
        <div className='component'>
            <h3>Fan</h3>
            <p>Control the speed of fan</p>

            <form onSubmit={fun1}>
                <label for="inputPassword5" class="form-label">Speed</label>
                <input type="number" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" min={0} max={5} onChange={(e) => { setVal(e.target.value) }} />
                <div id="passwordHelpBlock" class="form-text">

                </div>
                <button type='submit' className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Fan
