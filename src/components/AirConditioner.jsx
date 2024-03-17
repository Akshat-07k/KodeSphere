import React from 'react';
import '../style/App.css';

function Led() {

    return (
        <div className='component'>
            <h3>Air conditioner</h3>
            <p>Control the state & temp of AC</p>

            <form>
                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked">State</label>
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                </div>
                <label for="inputPassword5" class="form-label">Temprature</label>
                <input type="number" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" min={16} max={30} />
                <div id="passwordHelpBlock" class="form-text">
                </div>
            </form>
        </div >
    )
}

export default Led
