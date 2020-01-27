import React from 'react';
// import { Link } from 'react-router-dom';

class CoinCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: {},
            coins: {}
        };
    };

    render() {
        const coins = this.props
        console.log(coins)
        return (
            <div className="card overflow-hidden current-card details">
                <div className="card-body">
                    <p className="card-text">test: {}</p>
                </div>
                <img className="card-image" alt=''></img>
                <a className="btn" href="#/ideas/details/{{_id}}">Details</a>
            </div>
        )
    }
}

export default CoinCard;
