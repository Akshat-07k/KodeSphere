import React from 'react';
import '../style/App.css';

function Bulb() {

    return (
        <div className='component'>
            <h3>Bulb</h3>
            <p>Turn on or off the bulb</p>
            <form>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label class="form-check-la / Ofbel" for="flexSwitfchCheckDefault">O</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Bulb
