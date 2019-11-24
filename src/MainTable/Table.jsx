import React from 'react';
import { Table } from 'react-bootstrap';
import './styles.css';
import postService from '../services/post-service';
import NumberFormat from 'react-number-format';
import { Sparklines, SparklinesCurve } from 'react-sparklines';

let data = [];
let criptoId = [];
let chartsPrice = {};

class MainTable extends React.Component {
    state = {
        posts: {}
    };

    componentDidMount() {
        postService.loadData().then(posts => {
            this.setState({ posts });

            posts.map(m => criptoId.push(m.id));

            for (const priceID of criptoId) {
                postService.loadDiagrams(priceID, 7).then(m => {
                    m.prices.map(m => {
                       if(!chartsPrice[priceID]) {
                        chartsPrice[priceID] = [];
                       }
                        chartsPrice[priceID].push(m[1]);
                    });
                })
            }
            console.log(chartsPrice);
        })
    }



    render() {
        const { posts } = this.state;
        return (
            <Table className='table' hover>
                <thead>
                    <tr>
                        <th><a href='#Number'>#</a></th>
                        <th><a href='#Name'>Name</a></th>
                        <th><a href='#Price'>Price</a></th>
                        <th><a href='#Market_Cap'>Market Cap</a></th>
                        <th><a href='#Circulating_Supply'>Circulating Supply</a></th>
                        <th><a href='#24h_Volume'>24h Volume</a></th>
                        <th><a href='#Change_(24h)'>Change (24h)</a></th>
                        <th><a href='#Price_Graph_(7d)'>Price Graph (7d)</a></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(posts).map((i) => {
                        data = posts[i];

                        let color = data.market_data.market_cap_change_percentage_24h.toFixed(2) > 0 ? 'green' : 'red';
                        return (
                            <tr key={data.id}>
                                <td>{data.market_data.market_cap_rank}</td>
                                <td width="170"><img src={data.image.thumb} alt='' />{data.name}</td>
                                <td className='CriptoName'><NumberFormat value={data.market_data.current_price.usd} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                <td><NumberFormat value={data.market_data.market_cap.usd} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                <td><NumberFormat value={data.market_data.circulating_supply} displayType={'text'} decimalScale={0} thousandSeparator={true} /></td>
                                <td className='CriptoName'><NumberFormat value={data.market_data.total_volume.usd} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                <td className={color}>{data.market_data.market_cap_change_percentage_24h.toFixed(2)}%</td>
                                <td>
                                    <Sparklines data={[1, 5, 19]} width={164} height={48}>
                                        <SparklinesCurve style={{ stroke: "orange", strokeWidth: "1", fill: "none" }} />
                                    </Sparklines>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }
}

export default MainTable;