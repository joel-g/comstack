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
        console.log(user)
        this.setState({
          display_name: user.display_name,
          profile_image: user.profile_image,
          link: user.link,
          reputation: user.reputation,
          reputation_change_week: user.reputation_change_week,
          reputation_change_month: user.reputation_change_month,
          badge_counts_bronze: user.badge_counts.bronze,
          badge_counts_silver: user.badge_counts.silver,
          badge_counts_gold: user.badge_counts.gold,
        })
      })
    }

    render() {
      return (
        <div className="user">
          <b>{this.props.key}</b>         
                <ul class='list'>
                    <li><img src={this.state.profile_image} alt='user profile' class='profile-pic'/></li>
                    <li class='name'><b><a href={this.state.link}>{this.state.display_name}</a></b></li>
                    <li>Total Rep: {this.state.reputation}</li>
                    <li>Change this week: {this.state.reputation_change_week}</li>
                    <li>Change this month: {this.state.reputation_change_month}</li>
                    <li>
                        <div class='medals'>
                            <span class='gold'>{this.state.badge_counts_gold} ⏺</span>
                            <span class='silver'>{this.state.badge_counts_silver} ⏺</span>
                            <span class='bronze'>{this.state.badge_counts_bronze} ⏺</span>
                        </div>
                    </li>
                </ul>
        </div>
      );
    }
  }

  export default Usercard;