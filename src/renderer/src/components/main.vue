<script setup>
import { ref, onMounted } from 'vue'

var showFolderPath = ref(null)
var files = ref(null)

function sendMsg() {
    console.log("sendMsg");
    const func = async () => {
      const response = await window.electron.ping()
      console.log(response) // prints out 'pong'
    }
    func()
    console.log(window.api);//object{testNum:123}
    console.log(window.api.testNum);//123
    window.api.printTestNum()
}

function selectFolder(){
    console.log("Select Folder Now");
    const func = async () => {
        //this.showFolderPath = await window.api.selectFolder()
        let res = await window.api.selectFolder()
        showFolderPath.value = res.filePath
        files.value = res.files
        console.log('res:', res);
    }
    func()
}

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
