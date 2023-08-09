<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
    console.log('MOUNTED main');
    //this.sendMsg();
})

</script>

<template>
    <div class="h-screen w-screen">
        <div class="py-2 pe-2">
            <h1 class="m-0">Manga Reader</h1>
            <h3>本地图库</h3>
            <button @click="selectFolder">选择文件夹</button>
            <h4>图库文件夹：{{ showFolderPath }}</h4>
            <p>漫画：</p>
            <p v-for="file in files">{{ file }}</p>
        </div>
    </div>
    
</template>

<style scoped>

</style>
