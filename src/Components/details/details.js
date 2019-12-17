import React from 'react';
import table from '../table/table';

class Product extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    handleClick = (event) => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        // const { product, Price } = this.props
        console.log(table);
        return (
            <div className="product-tile">
                <img className="product-image" src='dsa' alt='' />
                <div>
                    <span className="product-brand">Test</span>
                    <span className="product-title">Test</span>
                    <div className="product-price">
                        Price:
        <span>
                        </span>
                        {this.context.auth ? (
                            <p>You have a 10% discount!</p>
                        ) : null}
                    </div>
                </div>
                <button onClick={this.handleClick}>Click me: {this.state.counter}</button>
            </div>
        )
    }

}

export default Product