<template>
  <div class="paper-list">
    <el-row>
      <el-col v-for="(paper, index) in paginatedPapers" :key="index" :span="24">
        <el-card class="paper-item" @click="goToDetail(paper)">
          <div class="title">{{ paper.title }}</div>
          <!-- ><div class="abstract">{{ paper.abstract }}</div><!-->
          <div class="category-year">分类: {{ paper.category }} | 年份: {{ paper.year }}</div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :total="papers.length"
      @current-change="handlePageChange"
      layout="prev, pager, next"
      class="pagination"
    />
  </div>
</template>
<script>
import router from "@/router";
import {update_history} from "@/api/papers";
import {ElMessage} from "element-plus";

export default {
  props: {
    papers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 6, // 每页显示的论文数量
    };
  },
  computed: {
    paginatedPapers() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.papers.slice(start, start + this.pageSize);
    },
  },
  methods: {
    goToDetail(paper) {
      // 跳转到论文详情页面
      router.push(`/paper/${paper.title}`)
      update_history(paper.title).then(res=>{
        console.log(res.data)
      }).catch(()=>{
        ElMessage({
          message:"error",
          type:'error',
          center:true
        })
      })
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>
.paper-list {
  margin-top: 20px;
}
.paper-item {
  margin-bottom: 20px;
  height: fit-content;
  width: 100%;
  cursor: pointer; /* 鼠标悬停效果 */
  transition: box-shadow 0.3s;
}
.paper-item:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* 悬停效果 */
}
.title {
  font-weight: bold;
  color: #2980b9;
}
.abstract {
  color: #7f8c8d;
}
.category-year {
  font-size: 0.9em;
  color: #95a5a6;
  margin-top: 5px;
}
.pagination {
  margin-top: 20px;
  text-align: center;
  justify-self: center;
}
</style>
