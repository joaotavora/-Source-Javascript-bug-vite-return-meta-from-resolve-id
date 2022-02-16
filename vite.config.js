const virtualId = "@foo.js"
import path from 'path';
export default {
  plugins: [
    {
      enforce: 'pre',
      async resolveId(id) {
        let [prequery, query] = id.split('?');
        if (prequery !== virtualId) return;
        const probe = query && query.match(/xoption=([^&]+)/)
        const x = probe && Number(probe[1])
        if (x) {
          return {id: prequery, meta: {x}}
        }
      },
      async load(id) {
        if (id === virtualId) {
          const x = this.getModuleInfo(id)?.meta?.x
          if (!x) throw new Error('OOPS')
          return `export default function () {`+
            `return 21 + ${this.getModuleInfo(id)?.meta?.x};`+
            `}`
        }
      }
    }
  ]
}
