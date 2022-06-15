import { createApp } from 'vue'
import App from './App.vue'
import vueRouter from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./assets/font-icon/iconfont.css"
import mitt from 'mitt'
let Bus =  mitt()
const app = createApp(App);
app.config.globalProperties.$Bus = Bus;
declare module 'vue'{
    export interface ComponentCustomProperties{
        $Bus:typeof Bus
    }
}
app.use(ElementPlus);
app.use(vueRouter);
app.mount('#app');
