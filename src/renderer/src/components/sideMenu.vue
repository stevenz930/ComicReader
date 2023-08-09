<script setup>
import { ref, onMounted, onUpdated } from 'vue'

import { useWidthStore } from '../store/index';
const widthStore = useWidthStore()

var showSideMenu = ref(true)
function sideMenu() {
    if(showSideMenu.value == true){
        showSideMenu.value = false
        console.log("Side Menu hide");
    }else{
        showSideMenu.value = true
        console.log("Side Menu show");
    }
}

function chooseLibrary(id) {
    console.log("-----------");

    items.value.forEach(item => {
        if(id == item.id && item.isClick == false){//切换
            item.isClick = true
        }else if(id == item.id && item.isClick == true){//当点击同一个选项时不改变
            item.isClick = true
        }else{
            item.isClick = false
        }
        console.log(item.id, item.isClick);
    });
}

function libraryNameChange() {
    console.log("Library Name Change");
}

function setting() {
    console.log("To setting");
}


var items = ref([{id: 1, isClick: true},
                {id: 2, isClick: false},
                {id: 3, isClick: false},
                {id: 4, isClick: false},
                {id: 5, isClick: false},
                ])

onMounted(() => {
    console.log('MOUNTED sideMenu');
})

onUpdated(() => {
    var sideMenu = document.getElementById('sideMenu')
    widthStore.width = sideMenu.clientWidth
    //console.log(sideMenu.clientWidth);
})

</script>

<template>

    <div class="fixed top-0 left-0 z-40" id="sideMenu">

        <div class="float-left h-screen w-auto bg-gray-100 flex flex-col justify-between">

            <div class="flex flex-col justify-start">

                <div class="px-3 h-10 flex items-center hover:bg-gray-200 sideMenuBtn" @click="sideMenu">
                    <div class="text-sm i-zondicons-menu"/>
                </div>

                <div v-for="item in items" :key="item.id">
                    <div class="px-3 h-10 flex justify-start items-center text-sm hover:bg-gray-200 sideMenuBtn" :class="{'bg-gray-400':item.isClick}" @click="chooseLibrary(item.id)">
                        <div class="flex justify-center items-center">
                            <div class="i-zondicons-library"></div>
                        </div>
                        <div class="flex justify-between items-center w-36" v-show="showSideMenu">
                            <p class="m-0 ps-3">库{{item.id}}</p>
                            <div @click="libraryNameChange">
                                <div class="i-zondicons-edit-pencil"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="px-3 h-10 flex justify-start items-center hover:bg-gray-200 sideMenuBtn" @click="setting">
                <div class="i-zondicons-cog"/>
                <p class="m-0 text-sm ps-3" v-show="showSideMenu">设置</p>
            </div>
        
        </div>

    </div>

    

</template>

<style scoped>
.sideMenuBtn:hover{
    cursor: pointer;
}
</style>
