import axios from 'axios'
import { responseSchema, productSchema, dealSchema, couponSchema } from '@/functions/schema'

const state = {
    arrays: {
        products: [],
        deals: [],
        coupons: [],
    },
}

const mutations = {
    setArray_Product(state, payload) {
        state.arrays.products.push(payload.data)
    },

    setArray_Deal(state, payload) {
        state.arrays.deals.push(payload.data)
    },

    setArray_Coupon(state, payload) {
        state.arrays.coupons.push(payload.data)
    },
}

const actions = {
    fetch(context, payload) {
        axios
            .post('https://e2a7-152-166-116-41.ngrok.io/api/v1/filters', { filters: '' })
            .then(function (response) {
                responseSchema(response).forEach((product) => {
                    if (product.type == 'Product') {
                        context.commit('setArray_Product', { data: productSchema(product) })
                    }
                    if (product.type == 'Deal') {
                        context.commit('setArray_Deal', { data: dealSchema(product) })
                    }
                    if (product.type == 'Coupon') {
                        context.commit('setArray_Coupon', { data: couponSchema(product) })
                    }
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
