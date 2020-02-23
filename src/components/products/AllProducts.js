import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as productActions from '../../actions/product'

import Product from "../products/Product";

class AllProducts extends Component {

    async componentDidMount() {
        await this.props.getAllProducts()
    }

    render() {
        const { products } = this.props;
        return (
            <div className="container">
                <h5>All Product List</h5>
                <div className="row">
                    {products && products.map((product, i) => <Product key={i} product={product} />)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state :', state);
    return {
        products: state.products.allProducts
    }
}

export default connect(mapStateToProps, { ...productActions })(AllProducts);