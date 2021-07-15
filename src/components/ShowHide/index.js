// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {fButtonIsClicked: true, lButtonIsClicked: true}

  fClicked = () => {
    this.setState(prevState => {
      if (prevState.fButtonIsClicked) {
        return {fButtonIsClicked: false}
      }
      return {fButtonIsClicked: true}
    })
  }

  lClicked = () => {
    this.setState(prevState => {
      if (prevState.lButtonIsClicked) {
        return {lButtonIsClicked: false}
      }
      return {lButtonIsClicked: true}
    })
  }

  render() {
    const {fButtonIsClicked, lButtonIsClicked} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-group">
          <div className="new-button-group">
            <button className="button" type="button" onClick={this.fClicked}>
              Show/Hide Firstname
            </button>
            <div>
              {fButtonIsClicked ? null : (
                <div className="heading-display">
                  <h1>Joe</h1>
                </div>
              )}
            </div>
          </div>
          <div className="new-button-group">
            <button className="button" type="button" onClick={this.lClicked}>
              Show/Hide Lastname
            </button>
            <div>
              {lButtonIsClicked ? null : (
                <div className="heading-display">
                  <h1>Jonas</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
