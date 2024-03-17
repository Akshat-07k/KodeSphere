import React from 'react';
import '../style/App.css';

function Led() {

    return (
        <div className='component'>
            <h3>LED</h3>
            <p>Control the color of the LED</p>

            <form>
                <label for="exampleColorInput" class="form-label">Color</label>
                <input type="color" class="form-control form-control-color" id="exampleColorInput" defaultValue="#fff" title="Choose your color" />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}

export default Led
