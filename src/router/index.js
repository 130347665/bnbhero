import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HeroCalc',
            meta: {
                title: '英雄計算'
            },
            component: r => require.ensure([], () => r(require('@V/HeroCalc')), 'HeroCalc')
        },
        // {
        //     path: '/CalcGF',
        //     name: 'CalcGF',
        //     meta: {
        //         title: '四圍算檔次'
        //     },
        //     component: r => require.ensure([], () => r(require('@V/CalcGF')), 'CalcGF')
        // },
        {
            path: '/FightData',
            name: 'FightData',
            meta: {
                title: '戰鬥數據'
            },
            component: r => require.ensure([], () => r(require('@V/FightData')), 'FightData')
        },
        {
            path: '/Market',
            name: 'Market',
            meta: {
                title: '市場數據'
            },
            component: r => require.ensure([], () => r(require('@V/Market')), 'Market')
        },
        {
            path: '/Sponsor',
            name: 'Sponsor',
            meta: {
                title: '贊助'
            },
            component: r => require.ensure([], () => r(require('@V/Sponsor')), 'Sponsor')
        }
    ]
})
export default router
