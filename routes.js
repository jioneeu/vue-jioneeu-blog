import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';
import HomeKor from './views/HomeKor.vue';
import HomeJap from './views/HomeJap.vue';

import About from './views/About.vue';
import AboutKor from './views/AboutKor.vue';
import AboutJap from './views/AboutJap.vue';

import Algorithm from './views/Algorithm.vue';
import AlgorithmKor from './views/AlgorithmKor.vue';
import AlgorithmJap from './views/AlgorithmJap.vue';

import DataStructure from './views/DataStructure.vue';
import DataStructureKor from './views/DataStructureKor.vue';
import DataStructureJap from './views/DataStructureJap.vue';

import Dcp from './views/DCP.vue';
import DcpKor from './views/DCPKor.vue';
import DcpJap from './views/DCPJap.vue';

Vue.use(VueRouter);

import BlogEntries from './statics/data/blogs.json';

const blogRoutes = Object.keys(BlogEntries).map(section => {
    const children = BlogEntries[section].map(child => ({
        path: child.id,
        name: child.id,
        lang: child.lang,
        component: () => import(`./posts/${child.lang}/${section}/${child.id}.md`)
    }));
    return {
        path: `/${section}`,
        name: section,
        component: () => import('./views/Blog.vue'),
        children
    }
});


export default new VueRouter({
    base: __dirname,
    routes: [
        { path: '/', name: 'home', component: Home, alias: ['/public/', '/home/eng-home/'] },
        { path: '/home/-kor-home/', name: 'home-kor', component: HomeKor, alias: '/home/kor-home' },
        { path: '/home/-jap-home/', name: 'home-jap', component: HomeJap, alias: '/home/jap-home'},
        { path: '/eng/eng-about/', name: 'about', component: About },
        { path: '/kor/kor-about/', name: 'about-kor', component: AboutKor },
        { path: '/jap/jap-about/', name: 'about-jap', component: AboutJap },
        { path: '/eng/eng-algorithm', name: 'algorithm', component: Algorithm },
        { path: '/kor/kor-algorithm', name: 'algorithm-kor', component: AlgorithmKor },
        { path: '/jap/jap-algorithm', name: 'algorithm-jap', component: AlgorithmJap },
        { path: '/eng/eng-data-structure', name: 'data-structure', component: DataStructure },
        { path: '/kor/kor-data-structure', name: 'data-structure-kor', component: DataStructureKor },
        { path: '/jap/jap-data-structure', name: 'data-structure-jap', component: DataStructureJap },
        { path: '/eng/eng-daily-coding-problem', name: 'dcp', component: Dcp },	
        { path: '/kor/kor-daily-coding-problem', name: 'dcp-kor', component: DcpKor },	
        { path: '/jap/jap-daily-coding-problem', name: 'dcp-jap', component: DcpJap },	
        ...blogRoutes
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})