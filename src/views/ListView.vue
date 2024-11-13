<template>
    <div class="list-view">
        <h1 class="title">{{ title }}</h1>
        <paper-list :papers="papers" />
        <div class="navigation">
            <button @click="goBack" class="btn">返回首页</button>
        </div>
    </div>
</template>

<script>
import PaperList from '@/components/PaperList.vue';

export default {
    components: {
        PaperList
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        papers: {
            type: Array,
            required: true,
        },
    },
    methods: {
        goBack() {
            this.$router.push('/'); // 返回首页
        },
        goToNext() {
            // 实现下一页的逻辑
            alert('这里是下一页的逻辑'); // 示例提示
        },
    },
};
</script>

<style scoped>
.list-view {
    background-color: rgba(240, 248, 255, 0.8);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 20px auto;
}

.title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
}

.navigation {
    text-align: center;
    margin-top: 20px;
}

.btn {
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    margin: 0 10px;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #218838;
}
</style>