import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '@/views/ListView.vue'
import { papers } from '@/data/paper_demo'
import PaperView from "@/views/PaperView.vue";
// 假数据作为演示，获取category为cs.CR的论文列表
const fake_papers = papers.filter(paper => paper.category === 'cs.CR')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { //同类论文列表
    path: '/papers/same-category',
    name:'papers-in-same-category',
    component: ListView,
    props: {
      title: '同类论文列表',
      papers: fake_papers
    }
  },
  { //相似论文列表
    path: '/papers/similar',
    name:'similar-papers',
    component: ListView,
    props: {
      title: '相似论文列表',
      papers: fake_papers
    }
  },
  { // 推荐论文列表
    path: '/papers/recommend',
    name:'recommend-papers',
    component: ListView,
    props: {
      title: '推荐论文列表',
      papers: fake_papers
    }
  },
  {
    path:'/paper',
    name: 'paper-detail',
    component: PaperView,
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
