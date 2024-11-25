import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '@/views/ListView.vue'
import PaperView from "@/views/PaperView.vue";
// import { papers } from '@/data/paper_demo'
// 假数据作为演示，获取category为cs.CR的论文列表
// const fake_papers = papers.filter(paper => paper.category === 'cs.CR')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { //同类论文列表
    path: '/papers/category/:category',
    name:'papers-in-same-category',
    component: ListView,
    props: {
      title: '同类论文列表',
    }
  },
    { //引用论文列表
    path: '/papers/cited',
    name:'cited-papers',
    component: ListView,
    props: {
      title: '引用论文列表',
    }
  },
  { //相似论文列表
    path: '/papers/similar',
    name:'similar-papers',
    component: ListView,
    props: {
      title: '相似论文列表',
    }
  },
  { // 推荐论文列表
    path: '/papers/recommend',
    name:'recommend-papers',
    component: ListView,
    props: {
      title: '推荐论文列表',
    }
  },
  {
    path:'/paper/:paper_title',
    name: 'paper-detail',
    component: PaperView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
