import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

function Item(props) {
	const add_to_cart = () => {
		let item = {image: props.image, price: props.price, name: props.name}
		props.setCart((cartdata) => [...cartdata, item])
	};

	return (
		<div>
			<div style={{ position: 'relative' }} className="item">
				{props.bestseller ? <p className="item_bestseller">Best Seller</p> : null}
				<img style={{ width: '100%' }} src={props.image} alt="item_image" />
				<div className="d-grid gap-2">
					<button type="button" className="btn btn-dark btn-lg button item_button" onClick={add_to_cart}>
						ADD TO CART
					</button>
				</div>
			</div>
			<p className="item_category">{props.category}</p>
			<p className="item_title">{props.name}</p>
			<p className="item_price">$ {props.price}</p>
		</div>
	);
}

Item.propTypes = {
	image: PropTypes.string,
	category: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
	bestseller: PropTypes.bool
};

Item.defaultProps = {
	image:
		'https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?cs=srgb&dl=pexels-simon-migaj-885880.jpg&fm=jpg',
	category: 'People',
	name: 'Red Bench',
	price: 2000.0,
	bestseller: true
};

export default Item;
