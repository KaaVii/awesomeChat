import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import gandalf from "./gandalf.png";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary_stats: {},
      user_one: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
      })
    ).isRequired,
    loadingTime: PropTypes.string
  };

  handleChange(e) {
    let user_one = this.props.contacts.filter(
      el => el.email === e.target.value
    );
    this.props.setValue(user_one[0]);
  }

  render() {
    var styles = {
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom left",
      paddingLeft: "30px"
    };

    const options = this.props.contacts.map(user => (
      <option value={user.email} key={user.email}>
        {" "}
        {user.name}
      </option>
    ));

    return (
      <div>
        <label>
          Chat User 1:
          <br />
          <select style={styles} onChange={event => this.handleChange(event)}>
            {options}
          </select>
        </label>
        <div>
          <img src={gandalf} className="imgs" alt="fireSpot" />
        </div>
        <label>
          Chat User 2:
          <br />
          <select
            style={styles}
            value={this.props.value_two}
            onChange={this.handleChange}
          >
            {options}
          </select>
        </label>
      </div>
    );
  }
}

export default Summary;
