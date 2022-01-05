import axios from 'axios'
import { productSchema, responseSchema } from '@/functions/schema'

const state = {
    array: [],
    offset: 1,
}

const mutations = {
    list(state, payload) {
        state.array.push(payload.data)
    },
}

const actions = {
    fetch(context, payload) {
        axios
            .get(`https://e2a7-152-166-116-41.ngrok.io/api/v1/products?offset=${state.offset}&limit=${payload.limit}`)
            .then(function (response) {
                responseSchema(response).forEach((product) => {
                    context.commit('list', { data: productSchema(product) })
                })
            })
            .catch(function (error) {
                console.log(error)
            })
            .then(function () {
                state.offset++
            })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
