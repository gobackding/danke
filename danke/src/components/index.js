import Vue from "vue";

import Bottom from "./Bottom/index.vue";
import Header from "./Header/index.vue"
import search from "./search/index.vue"
import HomeBanner from "./HomeBanner/index.vue"
import Details from "./details/index.vue"
import appointment from "./appointment/index.vue"

import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Bottom.name,Bottom)
Vue.component(Header.name,Header)
Vue.component(search.name,search)
Vue.component(HomeBanner.name,HomeBanner)
Vue.component(Details.name,Details)
Vue.component(appointment.name,appointment)
