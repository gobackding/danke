const state={
    message:{},
    content:"",
    phone:""
}

const actions={
    
}

const mutations={
    inputclick(state,e){
        state.content=e.target.value
    },
    PhoneHandler(state,e){
        state.phone=e.target.value
    },
    clickHandler(state){
        state.message.content=state.content
        if(!(/^1[34578]\d{9}$/.test(state.phone))){
            alert("请填写正确的手机号")
        }else{
            state.message.phone=state.phone
            location.href="/#/Home"
        }
        
        console.log(state.message)
    }
}


export default{
    state,
    actions,
    mutations,
    namespaced:true
}