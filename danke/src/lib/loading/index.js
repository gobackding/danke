import Loading from "./index.vue";
import Vue from "vue";
export default () => {


    let LoadingComponent = Vue.extend(Loading);

    let child = new LoadingComponent({
        el: document.createElement("div"),
        data:{
            flag:false
        },
        methods: {
            handlemount(bool) {
                this.flag = bool;
            },
            handleDestory() {
               this.flag = false;
            }
        }
    })

    document.body.appendChild(child.$mount().$el)
    return child;

}
