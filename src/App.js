import Navbar from './components/Navbar';
import './App.css';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Item from './components/Item';
import ReactPaginate from 'react-paginate';
import ListIcon from '@material-ui/icons/List';

import { useState } from 'react';
import { connect } from 'react-redux';
import {
	filter_multiple,
	paginated_data,
	range_price,
	rearrange_products,
	sort_products
} from './services/product.service';

function App(props) {
	const [ cart, setCart ] = useState([]);
	const [ sort, setSort ] = useState(true);

	const [open, setOpen] = useState(false)

	const [ page_size ] = useState(6);

	const [ checked, setChecked ] = useState({});

	const handleChange = (event) => {
		setChecked({ ...checked, [event.target.name]: event.target.checked });
		props.filt(event.target);
	};

	const handlefilter = () => {
		setSort(!sort);
		props.arrange(sort);
	};

	return (
		<div className="app_padding">
			<Navbar cart={cart} setCart={setCart} />
			<div className="row top">
				<div className="col">
					<h2 className="title">{props.product.featured.name}</h2>
				</div>
				<div className="col col-auto top_button">
					<button type="button" className="btn btn-dark btn-lg button">
						ADD TO CART
					</button>
				</div>
			</div>
			<div className="row top_mini">
				<div className="col-sm-12">
					<div className="home_bg">
						<img src={props.product.featured.image.src} className="img-fluid home_image" alt="caption" />
						<p className="home_caption">Photo of the day</p>
					</div>
					<div className="d-grid gap-2">
						<button type="button" className="btn btn-dark btn-lg button top_mini lower_button">
							ADD TO CART
						</button>
					</div>
				</div>
			</div>
			<div className="row top">
				<div className="col-md-6 col-sm-12">
					<h2 className="cap_title">About the {props.product.featured.name}</h2>
					<h2 className="cap_grey">Pets</h2>
					<p className="cap_paragraph">{props.product.featured.details.description}</p>
				</div>
				<div className="col-md-6 col-sm-12">
					<h2 className="cap_title cap_align">People also buy</h2>
					<div className="row cap_images_align">
						{props.product.featured.details.recommendations.map((data) => (
							<img src={data.src} className="img-fluid cap_images" alt="caption" />
						))}
					</div>
					<h2 className="cap_title cap_align top_mini">Details</h2>
					<p className="cap_paragraph cap_align">
						Size: {props.product.featured.details.dimmentions.width} x{' '}
						{props.product.featured.details.dimmentions.height} pixel
					</p>
					<p className="cap_paragraph cap_align">Size: {props.product.featured.details.size / 1000} mb</p>
				</div>
			</div>
			<hr style={{ height: 4, marginTop: 40 }} />
			<div className="navbar">
				<p className="cap_title" style={{ width: '71%' }}>
					Photography / <span className="cap_grey">Premium Photos</span>
				</p>
				<div className="lower_button cap_grey">
					<ListIcon style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)} />
				</div>
				<div style={{ position: 'relative' }} className="top_button">
					<div
						style={{ display: 'flex', fontWeight: 100, fontSize: 14, float: 'right' }}
						className="cap_grey"
					>
						{/* <IconButton aria-label="delete" size="small"> */}
						<SwapVertIcon style={{ cursor: 'pointer' }} onClick={handlefilter} />
						{/* </IconButton> */}
						<p>Sort By</p>
						<select
							style={{ width: 100, marginTop: -8, border: 'none', height: 40 }}
							className="form-select"
							aria-label="Default select example"
							onChange={(e) => props.sort(e.target.value)}
						>
							<option value="price">Price</option>
							<option value="alphabetically">Alphabetically</option>
						</select>
					</div>
				</div>
			</div>
			<div className="row top">
				<div className={`${open ? 'open sidenav col-sm-3': 'sidenav col-sm-3'}`}>
					<p className="cap_title">Category</p>
					<div className="form-check top">
						<input
							className="form-check-input"
							type="checkbox"
							name="people"
							value={checked.people}
							onChange={handleChange}
							id="flexCheckDefault1"
						/>
						<label className="form-check-label filter_item" htmlFor="flexCheckDefault1">
							People
						</label>
					</div>
					<div className="form-check top">
						<input
							className="form-check-input"
							type="checkbox"
							name="premium"
							value={checked.premium}
							onChange={handleChange}
							id="flexCheckDefault2"
						/>
						<label className="form-check-label filter_item" htmlFor="flexCheckDefault2">
							Premium
						</label>
					</div>
					<div className="form-check top">
						<input
							className="form-check-input"
							type="checkbox"
							name="pets"
							value={checked.pets}
							onChange={handleChange}
							id="flexCheckDefault3"
						/>
						<label className="form-check-label filter_item" htmlFor="flexCheckDefault3">
							Pets
						</label>
					</div>
					<div className="form-check top">
						<input
							className="form-check-input"
							type="checkbox"
							name="foods"
							value={checked.foods}
							onChange={handleChange}
							id="flexCheckDefault4"
						/>
						<label className="form-check-label filter_item" htmlFor="flexCheckDefault4">
							Foods
						</label>
					</div>
					<div className="form-check top">
						<input
							className="form-check-input"
							type="checkbox"
							name="landmark"
							value={checked.landmark}
							onChange={handleChange}
							id="flexCheckDefault5"
						/>
						<label className="form-check-label filter_item" htmlFor="flexCheckDefault5">
							Landmark
						</label>
					</div>
					<div className="form-check top">
						<input
							className="form-check-input"
							type="checkbox"
							name="cities"
							value={checked.cities}
							onChange={handleChange}
							id="flexCheckDefault6"
						/>
						<label className="form-check-label filter_item" htmlFor="flexCheckDefault6">
							Cities
						</label>
					</div>
					<div className="form-check top">
						<input
							className="form-check-input"
							type="checkbox"
							name="nature"
							value={checked.nature}
							onChange={handleChange}
							id="flexCheckDefault7"
						/>
						<label className="form-check-label filter_item" htmlFor="flexCheckDefault7">
							Nature
						</label>
					</div>
					<hr className="top" />
					<p className="cap_title top">Price range</p>

					<div className="form-check top">
						<input
							className="form-check-input"
							type="radio"
							value={JSON.stringify({ min: 0, max: 20 })}
							onChange={(e) => props.price_arrange(e.currentTarget.value)}
							name="flexRadioDefault"
							iid="flexCheckDefault8"
						/>
						<label className="form-check-label filter_item" htmlFor="flexCheckDefault8">
							Lower than $20
						</label>
					</div>
					<div className="form-check top">
						<input
							className="form-check-input"
							type="radio"
							value={JSON.stringify({ min: 20, max: 100 })}
							onChange={(e) => props.price_arrange(e.currentTarget.value)}
							name="flexRadioDefault"
							id="flexRadioDefault1"
						/>
						<label className="form-check-label filter_item" htmlFor="flexRadioDefault1">
							$20 - $100
						</label>
					</div>
					<div className="form-check top">
						<input
							className="form-check-input"
							type="radio"
							value={JSON.stringify({ min: 100, max: 200 })}
							onChange={(e) => props.price_arrange(e.currentTarget.value)}
							name="flexRadioDefault"
							id="flexRadioDefault1"
						/>
						<label className="form-check-label filter_item" htmlFor="flexRadioDefault1">
							$100 - $200
						</label>
					</div>
					<div className="form-check top">
						<input
							className="form-check-input"
							type="radio"
							value={JSON.stringify({ min: 200, max: 10000000000000 })}
							onChange={(e) => props.price_arrange(e.currentTarget.value)}
							name="flexRadioDefault"
							id="flexRadioDefault1"
						/>
						<label className="form-check-label filter_item" htmlFor="flexRadioDefault1">
							More than $200
						</label>
					</div>
				</div>
				<div className="col-sm-9">
					<div className="row">
						{props.product.paginated.map((data, i) => (
							<div className="col-sm-4">
								<Item
									name={data.name}
									bestseller={data.bestseller}
									category={data.category}
									price={data.price}
									cart={cart}
									setCart={setCart}
								/>
							</div>
						))}
					</div>
					<ReactPaginate
						previousLabel={<ArrowBackIosIcon />}
						nextLabel={<ArrowForwardIosIcon />}
						breakLabel={'...'}
						breakClassName={'break-me'}
						pageCount={Math.ceil(props.product.products.length / page_size)}
						marginPagesDisplayed={3}
						pageRangeDisplayed={3}
						onPageChange={props.paginate_products}
						containerClassName={'pagination'}
						activeClassName={'active'}
					/>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		product: state.product
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		paginate_products: (num) => dispatch(paginated_data(num)),
		filt: (payload) => dispatch(filter_multiple(payload)),
		sort: (payload) => dispatch(sort_products(payload)),
		arrange: (payload) => dispatch(rearrange_products(payload)),
		price_arrange: (payload) => dispatch(range_price(payload))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
