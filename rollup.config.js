const dev = process.env.NODE_ENV !== 'production'

console.log(`running in ${dev ? 'development' : 'production'} mode`)

const sourcemap = dev ? 'inline' : false

export default {
  input: './app/js/script.js',

  output: {
    file: './build/bundle.js',
    format: 'iife',
    sourcemap: true
  }
}
