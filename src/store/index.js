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
    mutations: { // 准备mutations-- 用于操作数据（state)
        Add( state, value ) {
            console.error( 'Mutations:', state, value )
            state.sum += value
        },
        Reduce( state, value ) {
            state.sum -= value
        },
    },
    actions: { // 准备 action-- 用于响应组件中的动作
        add( context, value ) {
            console.log( 'action:', context, value )
            context.commit( 'Add', value )
        },
        surplus( context, value ) {
            if ( context.state.sum % 2 ) {
                console.error( 'Surplus' )
                context.commit( 'Add', value )
            }
        },
        addAsync( context, value ) {
            setTimeout( () => {
                context.commit( 'Add', value )
            }, 500 )
        },
    },
    modules: {},
} )
