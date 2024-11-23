<template>
    <div class="paper-search">
        <h1>科研论文搜索</h1>
        <el-input v-model="searchQuery" placeholder="请输入关键词..." class="search-input" />
        <el-button type="primary" class="search-button" @click="searchPapers">搜索</el-button>

        <PaperList v-if="filteredPapers.length > 0" :papers="filteredPapers" />
    </div>
</template>

<script>
import { papers } from '../data/paper_demo.js';
import PaperList from './PaperList.vue';
import { search_papers } from '../api/papers.js'

export default {
    components: {
        PaperList,
    },
    data() {
        return {
            searchQuery: '',
            papers,
            filteredPapers: [],
        };
    },
    methods: {
        async searchPapers() {
            if (this.searchQuery === '') {
                alert('请输入关键词。');
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
            console.log("搜索结果", this.filteredPapers);
            if (this.filteredPapers.length === 0) {
                alert('没有找到相关论文。');
            }
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

.search-button {
    margin-top: 10px;
}
</style>
