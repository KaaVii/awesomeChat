import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="social-icons">
          <li>
            <a href="https://www.instagram.com/livingindiatv/">
              instagram
              <span />
            </a>
          </li>
          <li>
            <a href="https://in.pinterest.com/livingindiatv/">
              pinterest
              <span />
            </a>
          </li>
          <li>
            <a href="https://youtube.com">
              youtube
              <span />
            </a>
          </li>
          <li>
            <a href="https://plus.google.com/102689304172526656580">
              gplus
              <span />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/livingindiatv">
              twitter
              <span />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/livingindiatv/">
              facebook
              <span />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Footer;
