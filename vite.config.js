import path from 'path';
export default {
    plugins: [
        {
            enforce: 'pre',
            async resolveId(id) {
                let [file, query] = id.split('?');
                const probe = query && query.match(/xoption=([^&]+)/)
                const x = probe && Number(probe[1])
                if (x) {
                    const realone = path.resolve(file);
                    console.log('IS THIS FILE REAL ON THE FS?', realone);
                    return {id: realone, meta: {x}}
                }
            },
            async transform(blob, id) {
                const x = this.getModuleInfo(id)?.meta?.x
                if (x) return `window.THE_X = ${x}\n` + blob;
            }
        }
    ]
}
