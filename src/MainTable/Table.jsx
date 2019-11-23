import React from 'react';
import { Table } from 'react-bootstrap';
import './styles.css';
import postService from '../services/post-service';
import NumberFormat from 'react-number-format';
import { Sparklines, SparklinesCurve } from 'react-sparklines';
import { BrowserRouter, Route, Link } from "react-router-dom";

let data = [];

class MainTable extends React.Component {
    state = {
        posts: {}
    };

    componentDidMount() {
        postService.load().then(posts => {
            this.setState({ posts })
        });
    }



    render() {
        const { posts } = this.state;
        return (
            <Table className='table' hover>
                <thead>
                    <tr>
                        <th><a href='#'>#</a></th>
                        <th><a href='#Name'>Name</a></th>
                        <th><a href='#Price'>Price</a></th>
                        <th><a href='#Market_Cap'>Market Cap</a></th>
                        <th><a href='#Circulating_Supply'>Circulating Supply</a></th>
                        <th><a href='#24h_Volume'>24h Volume</a></th>
                        <th><a href='#Change_(24h)'>Change (24h)</a></th>
                        <th><a href='#Last_24h'>Last 24h</a></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(posts).map((i) => {
                        data = posts[i];
                        //console.log(data);
                        let color = data.market_data.market_cap_change_percentage_24h.toFixed(2) > 0 ?'green' : 'red';
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
                                    <Sparklines data={[+data.market_data.high_24h.usd, +data.market_data.low_24h.usd]} width={164} height={48}>
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