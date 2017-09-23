import React, {Component} from 'react';

export default class Splash extends Component {
  render() {

    let subtitleStyle = {
      "fontFamily": "Ubuntu",
      "fontSize": "10rem",
      "text-align": "center",
      "color" : "white"
    }
    return(
      <div className="subtitle" style={subtitleStyle}>
        Healthiest Leader In The World
      </div>
    )
  }
}
