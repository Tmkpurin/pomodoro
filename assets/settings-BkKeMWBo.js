import{a3 as r}from"./index-gMIba-Tp.js";const i=r("settings",{state:()=>({alarms:[{id:1,name:"鬧鐘",file:new URL(""+new URL("alarm-BgEXsNyQ.mp3",import.meta.url).href,import.meta.url).href},{id:2,name:"耶",file:new URL(""+new URL("yay-BvpvSbeL.mp3",import.meta.url).href,import.meta.url).href},{id:3,name:"念書",file:new URL(""+new URL("bennkyou-CcTp1Y0v.mp3",import.meta.url).href,import.meta.url).href},{id:4,name:"linkstart",file:new URL(""+new URL("linkstart-qc_NXU_g.mp3",import.meta.url).href,import.meta.url).href},{id:5,name:"c8763",file:new URL(""+new URL("c8763-Cm7rbKO8.mp3",import.meta.url).href,import.meta.url).href}],selected:1}),getters:{selectedFile(){const e=this.alarms.findIndex(t=>t.id===this.selected);return this.alarms[e].file},persist:{key:"pomodoro-settings",pick:["selected"]}}});export{i as u};