import Vue from "vue"
import Vuex from "vuex"
import detail from "./detail"
import message from "./message"


Vue.use(Vuex);
const state = {}
const actions = {}
const mutations = {}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules:{
        detail,
        message
    }
})