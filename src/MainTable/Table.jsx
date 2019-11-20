import React from 'react';
import { Table } from 'react-bootstrap';
import './styles.css';
import postService from '../services/post-service';
import NumberFormat from 'react-number-format';

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
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>Circulating Supply</th>
                        <th>24h Volume</th>
                        <th>Last 7 Days</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(posts).map((i) => {
                        let data = posts[i];
                        //console.log(data);
                        return (
                            <tr key={data.id}>
                                <td>{data.market_data.market_cap_rank}</td>
                                <td><img src={data.image.thumb} alt=''/>{data.name}</td>
                                <td><NumberFormat value={data.market_data.current_price.usd} displayType={'text'} thousandSeparator={true} prefix={'$'}/></td>
                                <td><NumberFormat value={data.market_data.market_cap.usd} displayType={'text'} thousandSeparator={true} prefix={'$'}/></td>
                                <td><NumberFormat value={data.market_data.circulating_supply} displayType={'text'} decimalScale={0} thousandSeparator={true}/></td>
                                <td><NumberFormat value={data.market_data.total_volume.usd}displayType={'text'} thousandSeparator={true} prefix={'$'}/></td>
                                <td><NumberFormat value={data.market_data.total_volume.usd}displayType={'text'} thousandSeparator={true} prefix={'$'}/></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }
}

export default MainTable;