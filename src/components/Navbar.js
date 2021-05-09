import React, { useState } from 'react';
import logo from '../Assets/imgs/logo.png';
import '../App.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Navbar(props) {

	const [show, setShow] = useState(false)



	const clearCart = () => {
		props.setCart([]);
		setShow(false)
	}
	return (
		<div>
			<div className="navbar">
				<a href="/">
					<img src={logo} className="app_logo" alt="logo" />
				</a>
				<div style={{ position: 'relative' }}>
					<ShoppingCartOutlinedIcon style={{ fontSize: 40, cursor: 'pointer' }} onClick={() => setShow(!show)} />
					{props.cart.length > 0 ?<p className="cart_badge">{props.cart.length}</p> : null}
					<div style={{ padding: 20, display: show?'':'none' }} className="cart">
						<div style={{ maxHeight: 200, minHeight: 200, overflow: 'auto' }}>
							{props.cart.map((data, i) => (
								<div key={data.props}>
									<div className="row">
										<div className="col-sm-7">
											<p className="cap_title">{data.name}</p>
											<p className="item_price">${data.price}</p>
										</div>
										<div className="col-sm-5">
											<img style={{ width: '100%', height: 90,objectFit: 'cover' }} src={data.image} alt="cart_image" />
										</div>
									</div>
									<hr />
								</div>
							))}
						</div>
						<div className="d-grid gap-2">
							<button type="button" className="btn btn-outline-dark btn-lg button top_mini" onClick={clearCart}>
								CLEAR
							</button>
						</div>
					</div>
				</div>
			</div>
			<hr style={{ height: 4 }} />
		</div>
	);
}

export default Navbar;
