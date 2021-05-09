import { PAGINATE_PRODUCTS, MULTIPLE_FILTER, SORTING, REARRANGING, PRICE_RAGE } from "../action.types"

export const paginate = (payload) => {
    return {
        type: PAGINATE_PRODUCTS,
        payload
    }
}

export const multiple_filter = (payload) => {
    return {
        type: MULTIPLE_FILTER,
        payload
    }
}

export const sorting = (payload) => {
    return {
        type: SORTING,
        payload
    }
}

export const rearrange = (payload) => {
    return {
        type: REARRANGING,
        payload
    }
}

export const price_range = (payload) => {
    return {
        type: PRICE_RAGE,
        payload
    }
}