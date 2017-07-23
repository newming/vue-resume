<template>
  <div class="info-editor" ref='playground' :class="{htmlMode:!rawContent}">
    <pre v-if='rawContent' v-html='result'></pre>
    <div v-else v-html='result'></div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  name: 'info-editor',
  props: [
    'info', 'rawContent'
  ],
  computed: {
    result: function () {
      return this.rawContent ? this.info : marked(this.info)
    }
  },
  methods: {
    goBottom() {
      // console.log('bottom');
      this.$refs.playground.scrollTop = 100000
    }
  }
}
</script>

<style scoped>
  .htmlMode{
    animation: flip 2s;
  }
  @keyframes flip {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
</style>
