import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity, price, key} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }

    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>${price}</p>
            <br/>
            <button onClick={ () => props.handleRemoveProduct(key)} className="main-button">Remove</button>

        </div>
    );
};

export default ReviewItem;