import React, { Component } from 'react';

class Usercard extends Component {
    render() {
      return (
        <div className="User">
          <b>{this.props.index}}</b>         
                <ul class='list'>
                    <li><img src={this.props.profile_image} class='profile-pic'/></li>
                    <li class='name'><b><a href={this.props.link}>{{ user.display_name }}</a></b></li>
                    <li>Total Rep: {this.props.reputation}</li>
                    <li>Change this week: {this.props.reputation_change_week}</li>
                    <li>Change this month: {this.props.reputation_change_month}</li>
                    <li>
                        <div class='medals'>
                            <span class='gold'>{this.props.badge_counts_gold} ⏺</span>
                            <span class='silver'>{this.props.badge_counts_silver} ⏺</span>
                            <span class='bronze'>{this.props.badge_counts_bronze } ⏺</span>
                        </div>
                    </li>
                </ul>
        </div>
      );
    }
  }

  export default Usercard;