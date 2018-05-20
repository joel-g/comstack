import React, { Component } from 'react';

class Usercard extends Component {
    constructor() {
      super();
      this.state = {
        profile_image: null,
        link: null,

      }
    }

    componentDidMount() {
      fetch("http://api.stackexchange.com/2.2/users/" + this.props.user_id + "?order=desc&sort=reputation&site=stackoverflow").then(results => {
        return results.json();
      }).then(data => {
        let user = data.items[0]
        console.log(data.items[0])
        this.setState({
          display_name: user.display_name,
        })
      })
    }

    render() {
      return (
        <div className="User">
          <b>{this.props.index}}</b>         
                <ul class='list'>
                    <li><img src={this.props.profile_image} alt='user profile' class='profile-pic'/></li>
                    <li class='name'><b><a href={this.props.link}>{this.props.display_name}</a></b></li>
                    <li>Total Rep: {this.props.reputation}</li>
                    <li>Change this week: {this.props.reputation_change_week}</li>
                    <li>Change this month: {this.props.reputation_change_month}</li>
                    <li>
                        <div class='medals'>
                            <span class='gold'>{this.props.badge_counts_gold} ⏺</span>
                            <span class='silver'>{this.props.badge_counts_silver} ⏺</span>
                            <span class='bronze'>{this.props.badge_counts_bronze} ⏺</span>
                        </div>
                    </li>
                </ul>
        </div>
      );
    }
  }

  export default Usercard;