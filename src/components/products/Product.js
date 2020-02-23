import React from 'react'

const Product = ({ product: { name, price, imageUrl } }) => {
    return (
        <div className="col s4">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={`https://homepages.cae.wisc.edu/~ece533/images/${imageUrl}`} />
                    <span className="card-title red">{price}$</span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{name}
                        <i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
        </div>
    )
};

export default Product