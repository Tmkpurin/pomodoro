import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  // state: () => {
  //   return{
  //     }
  // }
  state: () => ({
    alarms: [
      { id: 1, name: '鬧鐘', file: new URL('@/assets/alarm.mp3', import.meta.url).href },
      { id: 2, name: '耶', file: new URL('@/assets/yay.mp3', import.meta.url).href },
      { id: 3, name: '念書', file: new URL('@/assets/bennkyou.mp3', import.meta.url).href },
      { id: 4, name: 'linkstart', file: new URL('@/assets/linkstart.mp3', import.meta.url).href },
    ],
    selected: 1,
  }),
  getters: {
    selectedFile() {
      const i = this.alarms.findIndex((alarms) => alarms.id === this.selected)
      return this.alarms[i].file
    },
    persist: {
      key: 'pomodoro-settings',
      pick: ['selected'],
    },
  },
})
