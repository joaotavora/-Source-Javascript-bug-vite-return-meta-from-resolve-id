import fn from './foo.js?xoption=21'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite: ${fn()}</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
