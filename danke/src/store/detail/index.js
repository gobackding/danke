const state ={
    Id:"",
    detail:""
}
const mutations={
    Handlerdetail(state,value){
        state.detail=value
        console.log(value)
    }
}
const actions={
    ClickHandler({commit},value){
       commit("Handlerdetail",value)
    }
}
export default{
    state,
    mutations,
    actions,
    namespaced:true

}