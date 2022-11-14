import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

export default new Vuex.Store( {
    state: {
        sum: 2,
        address: 'shenzhen',
    },
    getters: {
        bigSum( state ) {
            return state.sum * 10
        },
    },
    mutations: {},
    actions: {},
    modules: {},
} )
