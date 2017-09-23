import React, {Component} from 'react';
// IMPORT LINK
import { NavLink }from 'react-router-dom';
export default class BaseLayout extends Component {
  render(){
    // INLINE STYLING
    let titleStyle = {
      "fontFamily": 'Russo One',
      "fontSize": "18rem"
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
    let navTitleLegend = {
      "fontFamily": "Russo One",
      "fontSize": "180%",
      'color':'white'
    }
    let active = {
      'text-decoration': 'none',
      'color': '#3F3D34'
    }

    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navlinks">

                  <NavLink activeStyle={active} style={navTitleLegend} activeClassName="selected" to='/home'>Man</NavLink>

                  <NavLink activeStyle={active} style={navTitleLegend} activeClassName="selected" to='/about'>Myth</NavLink>

                  <NavLink activeStyle={active} style={navTitleLegend} activeClassName="selected" to='/portfolio'>Legend</NavLink>

                  <NavLink activeStyle={active} style={navTitleLegend} activeClassName="selected" to='/references'>Endorsements</NavLink>

                  <NavLink activeStyle={active} style={navTitleLegend} activeClassName="selected" to='/contact'>Contact</NavLink>

                  <NavLink style={navTitleLegend}  activeClassName="selected" to="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </NavLink>

            </div>
          </div>
          <div className="col-lg-12 header" style={headerStyle}>
            <div className="header-title">
              <div style={titleStyle}>
                Kim Jong Un
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
