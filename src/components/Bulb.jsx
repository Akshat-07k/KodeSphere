import React from 'react';
import '../style/App.css';

function Bulb() {

    return (
        <div className='component'>
            <h3>Bulb</h3>
            <p>Turn on or off the bulb</p>
            <form>
                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked">State</label>
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Bulb
