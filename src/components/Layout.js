import React, {Component} from 'react';
// IMPORT LINK
import { Link }from 'react-router-dom';
export default class BaseLayout extends Component {
  render(){
    // INLINE STYLING
    let titleStyle = {
      "fontFamily": 'Russo One',
      "fontSize": "18rem"
    }
    let subtitleStyle = {
      "fontFamily": "Ubuntu",
      "fontSize": "10rem"
    }
    let headerStyle = {
      "textAlign": "center",
      "height": "600px",
      "color": "#fff",
      "backgroundImage": "url(http://nationalreport.net/wp-content/uploads/2016/09/KimJongUn.jpg)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "decorative",
    }
    let navTitleMan ={
      "fontFamily": "Russo One",
      "fontSize": "120%",
      "color": 'blue'
    }
    let navTitleMyth = {
      "fontFamily": "Russo One",
      "fontSize": "140%",
      "color": "white"
    }
    let navTitleLegend = {
      "fontFamily": "Russo One",
      "fontSize": "180%",
      "color":"red"
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li style={navTitleMan}>
                  <Link to='/home'>Man</Link>
                </li>

                <li style={navTitleMyth}>
                    <Link to='/about'>Myth</Link>
                </li>
                <li style={navTitleLegend}>
                    <Link to='/portfolio'>Legend</Link>
                </li>
                <li>
                  <Link  activeClassName="selected" to="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-12 header"
            style={headerStyle}>
            <div className="header-title">
              <div
                className="restaurant-name"
                style={titleStyle}>
                Kim Jong Un
              </div>
              <div className="subtitle" style={subtitleStyle}>
                Healthiest Leader In The World
              </div>
            </div>
          </div>
        </nav>
        {this.props.children}
        <footer className="col-lg-11">
          <span className="footer-title">KJU</span>
          <span>
          </span>
        </footer>
      </div>
    );
  }
}
