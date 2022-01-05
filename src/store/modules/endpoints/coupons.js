import axios from 'axios'
import { couponSchema, responseSchema } from '@/functions/schema'

const state = {
    array: [],
}

const mutations = {
    list(state, payload) {
        state.array.push(payload.data)
    },
}

const actions = {
    fetch(context) {
        axios
            .get(`https://e2a7-152-166-116-41.ngrok.io/api/v1/coupons`)
            .then(function (response) {
                responseSchema(response).forEach((product) => {
                    context.commit('list', { data: couponSchema(product) })
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
