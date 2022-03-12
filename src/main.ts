// 这里是开发时，查看的页面的入口
// 用jq / vue 或者其他都行，跟你插件的代码无关，只是开发时的页面用到

import $ from 'jquery'
import { MyPlugin } from './plugins/MyPlugin'
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <button id="say">Say</button>
`

const test = new MyPlugin()

$('#say').on('click', () => {
  test.say()
})