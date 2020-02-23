import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as productActions from '../../actions/product'

import Product from "../products/Product";

class SuggestedProducts extends Component {
    async componentDidMount() {
        await this.props.getSuggestedProducts(1)
    }

    render() {
        const { products } = this.props;
        return (
            <div className="container">
                <h5>Suggested Products</h5>
                <div className="row">
                    {products && products.map((product, i) => <Product key={i} product={product} />)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.suggestedProducts
    }
}

export default connect(mapStateToProps, { ...productActions })(SuggestedProducts)