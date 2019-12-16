import React from 'react';
import { Table } from 'react-bootstrap';
import './styles.css';
import postService from '../service/post-service';
import NumberFormat from 'react-number-format';
import { Sparklines, SparklinesCurve } from 'react-sparklines';

class MainTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: {},
            chartsPrice: {},
            criptoId: []
        };
    };

    componentDidMount() {
        postService.loadData().then(posts => {
            this.setState({ posts });

            let cryptoIDs = posts.map((post) => post.id);
            this.setState({ criptoId: cryptoIDs });

            for (const priceID of this.state.criptoId) {
                postService.loadDiagrams(priceID, 7).then(m => {
                    this.setState({ chartsPrice: { ...this.state.chartsPrice, [priceID]: m.prices } })
                })
            }

        });
    };

    render() {
        const { posts } = this.state;
        const { chartsPrice } = this.state;

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
                        <th><a href='#Change_(7d)'>Change (7d)</a></th>
                        <th><a href='#Price_Graph_(7d)'>Price Graph (7d)</a></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(posts).map((i) => {
                        let data = posts[i];
                        let priceFor7days = [];
                        
                        for (const key in chartsPrice) {
                            if (key === data.id) {
                                priceFor7days = [];
                                for (const price of chartsPrice[key]) {
                                    priceFor7days.push(price[1]);
                                }
                            }
                            continue;
                        }

                        let color = data.market_data.market_cap_change_percentage_24h.toFixed(2) > 0 ? 'green' : 'red';
                        let colorCharts = data.market_data.price_change_percentage_7d.toFixed(2) > 0 ? 'green' : 'red';
                        return (
                            <tr key={data.id}>
                                <td>{data.market_data.market_cap_rank}</td>
                                <td width="170"><img src={data.image.thumb} alt='' /><a href={data.name}>{data.name}</a></td>
                                <td className='CriptoName'><NumberFormat value={data.market_data.current_price.usd} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                <td><NumberFormat value={data.market_data.market_cap.usd} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                <td><NumberFormat value={data.market_data.circulating_supply} displayType={'text'} decimalScale={0} thousandSeparator={true} /></td>
                                <td className='CriptoName'><NumberFormat value={data.market_data.total_volume.usd} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                <td className={color}>{data.market_data.market_cap_change_percentage_24h.toFixed(2)}%</td>
                                <td className={colorCharts}>{data.market_data.price_change_percentage_7d.toFixed(2)}%</td>
                                <td>
                                    <Sparklines data={priceFor7days} width={164} height={48}>
                                        <SparklinesCurve style={{ stroke: [colorCharts], strokeWidth: "1", fill: "none" }} />
                                    </Sparklines>
                                </td>
                            </tr>
                        );
                    })
                    }
                </tbody>
            </Table>
        );
    }
}

export default MainTable;