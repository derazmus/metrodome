import React, { Component } from 'react';
import './Metronome.css';

class Metronome extends Component {
  render() {
    let bpm = 100;
    let playing = false;

    return (
    	<div className = "Metronome">
    		<div className = "bpm-slider">
    			<div>{bpm} BPM</div>
    			<input type = "range" min = "60" max = "240" value={bpm} />
    		</div>
    		<button>{playing ? 'Stop' : 'Start'}</button>
    	</div>
    );
  }
}

export default Metronome;