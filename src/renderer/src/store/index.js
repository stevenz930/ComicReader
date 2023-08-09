import { defineStore } from 'pinia'

export const useWidthStore = defineStore('widthStore', {
  state: () => {
    return {
        width: 100
    }
  },
  getters: {},
  actions: {
    changeWidth () {
      this.width++
    }
  }
})