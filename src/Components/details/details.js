import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import postService from '../service/post-service';
import './styles.css';
import NumberFormat from 'react-number-format';
import { Sparklines, SparklinesCurve } from 'react-sparklines';

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


    //   const coin = posts.filter((item) => {
    //     return item.id === props.match.params.id
    //   })[0]
    render() {
        const { posts } = this.state;
        const { coinId } = this.state;
        let data = [];
        let allData = Object.keys(posts).filter((i) => {
            if (posts[i].id === coinId) {
                data = posts[i];
            }
        })
        const user = sessionStorage.getItem('username');

        if (data.id) {
            return (
                <div className="row event-details">
                    <div className="col-md-12 text-center overflow-hidden">
                        <h2 className="display-5">{data.id}</h2>
                        <img className="details-img" src={data.image.small} alt='' />
                        <div className="my-3 p-3">
                            <p className="infoType">Market Rank: {data.market_data.market_cap_rank}</p>
                            <p className="event-description">Price: <NumberFormat value={data.market_data.current_price.usd} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                            <p className="infoType">Market Cap: {<NumberFormat value={data.market_data.market_cap.usd} displayType={'text'} thousandSeparator={true} prefix={'$'} />}</p>
                            <p className="infoType">Circulating Supply: <NumberFormat value={data.market_data.circulating_supply} displayType={'text'} decimalScale={0} thousandSeparator={true} /></p>
                            {}
                            <p className="infoType">Max Supply: <NumberFormat value={data.market_data.total_supply} displayType={'text'} decimalScale={0} thousandSeparator={true} /></p>
                        </div>
                        {user && <Link to={`/favoriteCoins/${data.id}`} className="btn btn-info btn-lg">Make Favorite</Link>}
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}


export default DetailsPage