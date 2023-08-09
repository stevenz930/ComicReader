<script setup>
import { ref, onMounted } from 'vue'
//import { storeToRefs } from 'pinia'//解构读取用的
import { useWidthStore } from '../store/index';
const widthStore = useWidthStore()
widthStore.$subscribe((mutations, state) => {
    //console.log('mutations', mutations);
    //console.log('state.width', state.width);

    let optionBar = document.getElementById('optionBar')
    let libraryContent = document.getElementById('libraryContent')
    optionBar.style.paddingLeft = state.width + 'px'
    libraryContent.style.marginLeft = state.width + 5 + 'px'
})

function searchBtn() {
    console.log("search button");
}

function refreshBtn() {
    console.log("refresh button");

    //widthStore.changeWidth()
    //console.log('width store:', widthStore.width);
}

function sortBtn() {
    console.log("sort button");
}

function otherBtn() {
    console.log("other button");
}

onMounted(() => {
    console.log('MOUNTED main');
    //console.log('width store:', widthStore.width);
})

</script>

<template>
    <div class="h-screen w-screen">

        <div class="ps-10 w-auto fixed z-30 absolute top-0 inset-x-0" id="optionBar">
            
            <div class=" h-12 flex justify-between content-center bg-white">
                <div class="p-0 mx-2 flex justify-center items-center relative">
                    <input type="text" value=" 搜索" class="ps-2 h-6 rounded border-2 border-solid border-gray-400">
                    <div class="absolute right-2 text-sm func" @click="searchBtn">
                        <div class="i-zondicons-search"/>
                    </div>
                </div>
                <div class="p-0 py-2 flex justify-between">
                    <div class="p-0 pe-3 mx-2 flex justify-center items-center border-0 border-r-1 border-solid border-gray-400 func" @click="refreshBtn">
                        <div class="i-zondicons-refresh"/>
                        <p class="m-0 text-sm ps-3">刷新</p>
                    </div>
                    <div class="p-0 pe-2 mx-2 flex justify-center items-center border-0 border-r-1 border-solid border-gray-400 func" @click="sortBtn">
                        <div class="i-zondicons-filter"/>
                        <p class="m-0 text-sm px-3">排序</p>
                        <div class="i-zondicons-cheveron-right"/>
                    </div>
                    <div class="p-0 mx-2 flex justify-center items-center func" @click="otherBtn">
                        <p class="m-0 text-sm pe-3">其他</p>
                        <div class="i-zondicons-cheveron-right"/>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xxl:grid-cols-8 xxxl:grid-cols-10 xxxxl:grid-cols-12 grid-flow-row gap-4 mt-16 absolute inset-x-0" id="libraryContent">
            <div class="bg-red-100 h-58 w-42 object-contain mx-1" v-for="i in 20">{{i}}</div>
        </div>

        <!--div class="flex flex-wrap flex-row w-auto mt-16 justify-around content-start absolute top-0 inset-x-0" id="libraryContent">
            <div class="bg-blue-100 h-58 w-42 m-1 object-contain" v-for="i in 20">{{i}}</div>
        </div-->

    </div>
    
</template>

<style scoped>
.func:hover{
    cursor: pointer;
}
</style>
