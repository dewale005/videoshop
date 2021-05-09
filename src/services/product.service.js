import { multiple_filter, paginate, price_range, rearrange, sorting } from "../store/action/actions"


export const paginated_data = (payload) => {
    return dispatch => {
        dispatch(paginate(payload))
    }
}

export const filter_multiple = (payload) => {
    return dispatch => {
        dispatch(multiple_filter(payload))
    }
}

export const sort_products = (payload) => {
    return dispatch => {
        dispatch(sorting(payload))
    }
}

export const rearrange_products = (payload) => {
    return dispatch => {
        dispatch(rearrange(payload))
    }
}

export const range_price = (payload) => {
    return dispatch => {
        dispatch(price_range(payload))
    }
}