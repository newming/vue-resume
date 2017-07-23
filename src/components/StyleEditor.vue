<template>
  <div class="style-editor" ref='container'>
    <pre v-html='highlightedCode'></pre>
    <div v-html='styleCode'></div>
  </div>
</template>

<script>
import Prism from 'prismjs';

export default {
  name: 'style-editor',
  props: [
    'code'
  ],
  computed:{
    highlightedCode: function () {
      return Prism.highlight(this.code, Prism.languages.css)
    },
    styleCode(){
      return `<style>${this.code}<style>`
    }
  },
  methods: {
    goBottom() {
      // console.log('bottom');
      this.$refs.container.scrollTop = 100000
    }
  }
}
</script>

<style>
</style>
