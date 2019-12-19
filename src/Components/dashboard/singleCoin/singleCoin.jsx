import React, { Component } from 'react';
import styles from './styles.css';
import { Link } from 'react-router-dom';

class SingleCoin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

    this.interval = null
  }

  handleMouseOver = () => {
    this.interval = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 1000);
  }

  handleMouseOut = () => {
    clearInterval(this.interval)
  }

  render() {
    const { image, title, brand, price, id } = this.props

    return (
      <div className={styles.container} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}>
        <Link to={`/product/${id}`}>
          <ProductImage image={image} title={title} />
        </Link>
        <div>
          <span className={styles["product-brand"]}>{brand}</span>
          <span className={styles["product-title"]}>{title}</span>
          <ProductPrice price={price} />
          <span className={styles["product-seconds"]}>Seconds Counter: {this.state.counter}</span>
        </div>
      </div>
    )
  }
}