import { PAGINATE_PRODUCTS, PRODUCTS, MULTIPLE_FILTER, SORTING, REARRANGING, PRICE_RAGE } from '../action.types';
import Data from '../../Assets/data';

const intialState = {
	products: Data.products,
	page_size: 6,
	paginated: Data.products.slice(0 * 6, 1 * 6),
	value: [],
    featured: Data.products.filter(e => e.featured === true)[0]
};

const paginate = (data, page_number, page_size) => {
	let doc = data.slice(page_number * page_size, (page_number + 1) * page_size);
	return doc;
};

var result = (value) =>
	Data.products.filter(function(e) {
		var keys = [ 'category' ];
		return keys.every(function(a) {
			return value.includes(e[a]);
		});
	});

const sort = (data, payload) => {
	if (payload === 'price') {
		return data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
	} else {
		return data.sort((a, b) => {
			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
			return 0;
		});
	}
};

const rearrange = (data, payload) => {
	if (payload) {
		return data.sort((a, b) => {
			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
			return 0;
		});
	} else {
		return data.sort((a, b) => {
			if (a.name > b.name) return -1;
			if (a.name < b.name) return 1;
			return 0;
		});
	}
};

const price = (data, payload) => {
	let range = JSON.parse(payload);
	return data.filter(function(o) {
		return o.price <= range.max && o.price >= range.min;
	});
};

export const productsReducer = (state = intialState, action) => {
	switch (action.type) {
		case PRODUCTS:
			return {
				bank: action.payload
			};
		case PAGINATE_PRODUCTS:
			return {
				...state,
				paginated: paginate(state.products, action.payload.selected, state.page_size)
			};
		case MULTIPLE_FILTER:
			action.payload.checked
				? (state.value = [ ...state.value, action.payload.name ])
				: (state.value = state.value.filter(function(ele) {
						return ele !== action.payload.name;
					}));
			return {
				...state,
				products: result(state.value).length === 0 ? Data.products : result(state.value),
				paginated: paginate(
					result(state.value).length === 0 ? Data.products : result(state.value),
					0,
					state.page_size
				)
			};
		case SORTING:
			return {
				...state,
				products: sort(state.products, action.payload),
				paginated: paginate(sort(state.products, action.payload), 0, state.page_size)
			};
		case REARRANGING:
			return {
				...state,
				products: rearrange(state.products, action.payload),
				paginated: paginate(rearrange(state.products, action.payload), 0, state.page_size)
			};
		case PRICE_RAGE:
			return {
				...state,
				products: price(Data.products, action.payload),
				paginated: paginate(price(Data.products, action.payload), 0, state.page_size)
			};
		default:
			return state;
	}
};
