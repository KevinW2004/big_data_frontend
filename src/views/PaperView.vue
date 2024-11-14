<script >
import router from "@/router";

export default {
  data(){
    return{
      paperDetail:{
        "title": "A Polyhedral Approximation Framework for Convex and Robust Distributed Optimization",
        "abstract": "In this paper, we consider a general problem setup for a wide class of convex and robust distributed optimization problems in peer-to-peer networks. In this setup, convex constraint sets are distributed to the network processors who have to compute the optimizer of a linear cost function subject to the constraints. We propose a novel fully distributed and asynchronous algorithm, named cutting-plane consensus, to solve the problem, based on a polyhedral outer approximation of the constraint sets. Processors running the algorithm compute and exchange linear approximations of their locally feasible sets. Independently of the number of processors in the network, each processor stores only a small number of linear constraints, making the algorithm scalable to large networks. The cutting-plane consensus algorithm is presented and analyzed for the general framework. Specifically, we prove the correctness of the algorithm, and show its robustness against communication or processor failures. Then, the cutting-plane consensus algorithm is specified to three different classes of distributed optimization problems, namely 1) inequality constrained problems, 2) robust optimization problems, and 3) almost separable optimization problems. For each one of these problem classes we solve a concrete problem and present computational results. That is, we show how to solve: position estimation in wireless sensor networks, a distributed robust linear program, and a distributed microgrid control problem.",
        "category": "cs.SY",
        "year": "2014",
        "": ""
      },
      title:"",
      abstract:"",
      category:"",
      year:""
    }
  },
  methods:{
    fetchData(){
      this.title=this.paperDetail.title;
      this.abstract=this.paperDetail.abstract;
      this.category=this.paperDetail.category;
      this.year=this.paperDetail.year;
    },
    backToHome(){
      router.push('/');
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<template>
<div class="container">
  <div class="title">
    <h1>Title:{{this.title}}</h1>
    <div class="abstract">
      <p><span class="abstract-title">Abstract:</span> {{this.abstract}}</p>
    </div>
    <div class="category">
      <p><span class="category-title">Category:</span> {{this.category}}</p>
    </div>
    <div class="buttons">
      <el-button type="success" plain class="buttons-el-button1">查看同类论文</el-button>
      <el-button type="success" plain class="buttons-el-button">查看相似论文【VIP】</el-button>
      <el-button type="success" plain class="buttons-el-button">查看引用论文【VIP】</el-button>
      <el-button type="success" plain class="buttons-el-button" @click="backToHome">返回首页</el-button>
    </div>
  </div>
</div>
</template>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  align-items: flex-start; /* Align content to the top of the container */
}
.title{
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
}
.abstract ,.category{
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;
  text-align: left;
}
.abstract-title ,.category-title{
  font-weight: bolder;
  font-size: large;
}
.buttons{
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap:20px;
  justify-content: center;
  align-items: center;
}
.buttons-el-button{
  width: 60%;
  height: 100%;
  font-size: larger;
  color: seagreen;
  font-weight: bolder;
  margin: 0;
  padding: 10px 0;
}
.buttons-el-button1{
  width: 60%;
  height: 100%;
  font-size: larger;
  color: seagreen;
  font-weight: bolder;
  padding: 10px 0;
  margin-left: 10px;
}
</style>
