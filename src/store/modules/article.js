import axios from 'axios'
import { cleanString } from '@/functions/strings'
import { responseSchema, productSchema, dealSchema, couponSchema } from '@/functions/schema'

const state = {
    is: false,
    data: {},
    arrays: {
        products: [],
        deals: [],
        coupons: [],
    },
}

const mutations = {
    setData(state, payload) {
        state.is = true
        state.data = payload.data
    },

    setArray_Product(state, payload) {
        state.arrays.products.push(payload.data)
    },

    setArray_Deal(state, payload) {
        state.arrays.deals.push(payload.data)
    },

    setArray_Coupon(state, payload) {
        state.arrays.coupons.push(payload.data)
    },

    drop(state) {
        state.is = false
        state.data = {}
        state.arrays.products = []
        state.arrays.deals = []
        state.arrays.coupons = []
    },
}
const actions = {
    fetch(context, payload) {
        document.getElementById('app-content').scrollTo(0, 0)
        context.commit('drop')
        axios
            .get('https://e2a7-152-166-116-41.ngrok.io/api/v1/products')
            .then((response) => {
                responseSchema(response).forEach((product) => {
                    if (cleanString(product.merchantName) == payload.merchant && cleanString(product.productName) == payload.product) {
                        context.commit('setData', { data: productSchema(product) })

                        axios.post('https://e2a7-152-166-116-41.ngrok.io/api/v1/advertisers/recommended', { api: product.api, mid: product.mid }).then((response) => {
                            responseSchema(response).forEach((product) => {
                                if (product.type == 'Product') {
                                    if (cleanString(product.productName) != payload.product) {
                                        context.commit('setArray_Product', { data: productSchema(product) })
                                    }
                                }
                                if (product.type == 'Deal') {
                                    if (cleanString(product.productName) != payload.product) {
                                        context.commit('setArray_Deal', { data: dealSchema(product) })
                                    }
                                }
                                if (product.type == 'Coupon') {
                                    context.commit('setArray_Coupon', { data: couponSchema(product) })
                                }
                            })
                        })
                    }
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    },

    set(context, payload) {
        document.getElementById('app-content').scrollTo(0, 0)
        context.commit('drop')
        context.commit('setData', { data: payload.data })

        axios.post('https://e2a7-152-166-116-41.ngrok.io/api/v1/advertisers/recommended', { api: state.data.reference.api, mid: state.data.reference.mid }).then((response) => {
            responseSchema(response).forEach((product) => {
                if (product.type == 'Product') {
                    if (cleanString(product.productName) != payload.product) {
                        context.commit('setArray_Product', { data: productSchema(product) })
                    }
                }
                if (product.type == 'Deal') {
                    if (cleanString(product.productName) != payload.product) {
                        context.commit('setArray_Deal', { data: dealSchema(product) })
                    }
                }
                if (product.type == 'Coupon') {
                    context.commit('setArray_Coupon', { data: couponSchema(product) })
                }
            })
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
