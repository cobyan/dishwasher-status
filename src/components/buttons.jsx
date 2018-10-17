import React, { Component } from 'react';

class Buttons extends Component {
    state = {  }
    render() { 
        return (<React.Fragment>
            <h1>Dishwasher status</h1>
            <h2>Current status is: {this.currentStatus()}</h2>
            <button className="btn btn-secondary btn-sm m-2" onClick={this.test}>CLEAN</button>
            <button className="btn btn-secondary btn-sm m-2">RUNNING</button>
            <button className="btn btn-secondary btn-sm m-2">END</button>
            <button className="btn btn-secondary btn-sm m-2">EMPTY</button>
        </React.Fragment>  );
    }
    test() {
        console.log('test');
    }

    currentStatus() {
        return 'CLEAN';
    }
}

 

export default Buttons;