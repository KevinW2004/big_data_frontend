<template>
    <div class="paper-search">
        <h1>科研论文搜索</h1>
        <el-input v-model="searchQuery" placeholder="请输入关键词..." class="search-input" />
        <el-button type="primary" class="search-button" @click="searchPapers">搜索</el-button>
        <div v-if="filteredPapers.length === 0" class="no-result">
          <span style="margin-top: 5px">或者您可以：</span>
          <el-button type="text" @click="jumpToHistory">查看历史记录</el-button>
          <el-divider direction="vertical"/>
          <el-button type="text" @click="jumpToRecommendations">查看专属推荐【VIP】</el-button>
        </div>
        <PaperList v-if="filteredPapers.length > 0" :papers="filteredPapers" />
        <PaperList v-if="historyPapers.length > 0" :papers="historyPapers" />
    </div>
</template>

<script>
import { papers } from '@/data/paper_demo';
import PaperList from './PaperList.vue';
import {get_history, get_paper_by_title, search_papers} from '@/api/papers'

export default {
    components: {
        PaperList,
    },
    data() {
        return {
            searchQuery: '',
            papers,
            filteredPapers: [],
            historyPapers:[],
            titles:[],
            record:{}
        };
    },
    methods: {
        async searchPapers() {
            if (this.searchQuery === '') {
                await this.$alert('请输入关键词。');
                this.filteredPapers = [];
                return;
            }
            const query = this.searchQuery.toLowerCase();
            // this.filteredPapers = this.papers.filter(paper =>
            //     paper.title.toLowerCase().includes(query) ||
            //     paper.abstract.toLowerCase().includes(query)
            // );
            console.log("开始搜索", query);
            this.filteredPapers = await search_papers(query);
            if (!this.filteredPapers) {
              this.$alert('请先登录', '提示', { type: 'warning' });
              this.filteredPapers = [];
              return;
            }
            if (this.filteredPapers.error) {
              this.$alert(this.filteredPapers.error);
              this.filteredPapers = [];
              return;
            }
            console.log("搜索结果", this.filteredPapers);
            if (this.filteredPapers.length === 0) {
                await this.$alert('没有找到相关论文。');
            }
        },
        jumpToHistory() {
          get_history().then(res=>{
            this.titles=res.data.msg
            console.log(this.titles)
            this.titles.forEach((title)=>{
              get_paper_by_title(title.title)
                  .then(res=>{
                    this.record=res.data
                    console.log(res)
                    this.historyPapers.push(res)
                  })
            })
          })
        },
        jumpToRecommendations() {
            this.$alert("TODO")
        },
    },
};
</script>

<style scoped>
.paper-search {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    /* background-color: #f0f8ff; */
    background-color: rgba(240, 248, 255, 0.8);
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.search-input {
    width: 300px;
    margin-right: 10px;
}

.no-result {
  margin-top: 10px;
}

.search-button {
}
</style>
