import fn from '@foo.js?xoption=21'
document.querySelector('#app').innerHTML = `<h1>Hello Vite: ${fn()}</h1>`
