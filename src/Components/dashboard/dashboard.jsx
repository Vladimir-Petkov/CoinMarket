import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import postService from '../service/post-service';
import './styles.css';
import NumberFormat from 'react-number-format';
import { Sparklines, SparklinesCurve } from 'react-sparklines';
import coinController from '../service/coinsController';

function getData (props) {
    let coinId = coinController.getMyCoins();
    console.log(props);
}

class DetailsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: {},
            coinId: props.match.params.id,
            // chartsPrice: {},
            // criptoId: [],
            // user: sessionStorage.getItem('username')
        };
    };

    componentDidMount() {
        postService.loadData().then(posts => {
            this.setState({ posts });

            // let cryptoIDs = posts.map((post) => post.id);
            // this.setState({ criptoId: cryptoIDs });

            // for (const priceID of this.state.criptoId) {
            //     postService.loadDiagrams(priceID, 7).then(m => {
            //         this.setState({ chartsPrice: { ...this.state.chartsPrice, [priceID]: m.prices } })
            //     })
            // }

            return this.state;
        });
    };

    render() {

        const { posts } = this.state;
        const { coinId } = this.state;
        let data = [];
        let allData = Object.keys(posts).filter((i) => {
            if (posts[i].id === coinId) {
                data = posts[i];
            }
        })

        return (
            <div id="dashboard-holder">
                <div className="card overflow-hidden current-card details">
                    <div className="card-body">
                        <p className="card-text">{}</p>
                    </div>
                    <img className="card-image" src="" alt=""></img>
                    <a className="btn" href="#/ideas/details/{{_id}}">Details</a>
                </div>
                <h1>No ideas yet! Be the first one :)</h1>
            </div>
        )
    }
}


export default DetailsPage