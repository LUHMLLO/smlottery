import { createStore } from 'vuex'

import products from './modules/endpoints/products'
import deals from './modules/endpoints/deals'
import coupons from './modules/endpoints/coupons'
import search from './modules/endpoints/search'

import article from './modules/article'
import theme from './modules/theme'
import searchMode from './modules/searchMode'

import alert from './modules/modals/alert'
import toast from './modules/modals/toast'

const store = createStore({
    modules: { theme, alert, toast, products, deals, coupons, article, search, searchMode },
})

export default store
