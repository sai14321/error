// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  render() {
    return (
      <div className="background">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/content/react-js/speedometer-ouput.gif"
          className="img"
        />
        <h1 className="speedMeter">
          Speed Is <span>0</span> mph
        </h1>
        <div className="buttonContainer">
          <button className="Accelerate" onClick={this.onIncrementSpeed}>
            Accelerate
          </button>
          <button className="Break" onClick={this.onIncrementBreak}>
            Break
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
