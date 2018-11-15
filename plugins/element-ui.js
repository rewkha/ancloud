import Vue from 'vue';
import ElementUI from 'element-ui';

const locale = require('element-ui/lib/locale/lang/en');
console.log(locale);
Vue.use(ElementUI, { locale });
