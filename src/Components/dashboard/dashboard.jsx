import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import postService from '../service/post-service';
import './styles.css';
// import NumberFormat from 'react-number-format';
// import { Sparklines, SparklinesCurve } from 'react-sparklines';
// import coinController from '../service/coinsController';
import requester from '../service/requester';
// import { render } from 'react-dom';
import CoinCard from './coinCard/coinCard';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: {},
            coins: {}
        };
    };

    componentDidMount() {
        postService.loadData().then(posts => {
            this.setState({ posts });

            requester.get(`coins?query={"_acl.creator":"${sessionStorage.getItem('userId')}"}`, 'appdata', 'Kinvey')
                .then(requester.handler)
                .then((coins) => {
                    this.setState({ coins });
                });
        });
    };

    render() {
        const { posts } = this.state;
        const { coins } = this.state;

        const SingleCoin = (data) => {
            if (data.id) {
                return Object.entries(data).map(coin => {
                    return (
                        <Fragment key={coin.id}>
                            <CoinCard {...this.props.match.params.coin = coin}/>
                        </Fragment>
                    )
                })
            } else {
                return null
            }
        }

        if (coins !== undefined) {
            for (const key in coins) {
                Object.keys(posts).map((i) => {
                    if (posts[i].id === coins[key].coinId) {
                        SingleCoin(posts[i]);
                    }
                })
            }
        }

        return (
            <div id="dashboard-holder">
                {SingleCoin(coins)}
                <h1>{!coins && 'No favorite coins'}</h1>
            </div>
        )
    }
}

export default Dashboard;