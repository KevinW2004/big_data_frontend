<template>
    <div class="paper-list">
      <div class="paper-item" v-for="(paper, index) in papers" :key="index">
        <div class="title">{{ paper.title }}</div>
        <div class="abstract">{{ paper.abstract }}</div>
        <div class="category-year">分类: {{ paper.category }} | 年份: {{ paper.year }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      papers: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .paper-list {
    margin-top: 20px;
  }
  .paper-item {
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  .paper-item:last-child {
    border-bottom: none;
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
  </style>