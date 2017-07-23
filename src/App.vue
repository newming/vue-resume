<template>
  <div id="app">
    <StyleEditor :code='showStyle' ref='styleEditor'></StyleEditor>
    <InfoEditor ref='infoEditor' :info='showInfo' :rawContent='rawContent'></InfoEditor>
  </div>
</template>

<script>
import {styleCode, infoCode} from './assets/code.js';
import StyleEditor from './components/StyleEditor';
import InfoEditor from './components/InfoEditor';

export default {
  name: 'app',
  data(){
    return {
      interval: 40,
      showStyle: '', // 传给子组件展示的style
      fullStyle: styleCode, // 完整的style数组
      showInfo: '',
      fullInfo: infoCode,
      rawContent: true
    }
  },
  components: {
    StyleEditor,
    InfoEditor
  },
  mounted(){
    this.goPlay()
  },
  methods:{
    goPlay: async function () {
      await this.progressDisplayStyle(0).then(()=>console.log('style 111 fini'))
      await this.progressDisplayInfo().then(()=>console.log('show info fini'))
      await this.progressDisplayStyle(1).then(()=>console.log('style 222 fini'))
      await this.transMarkdown().then(()=>console.log('transform md into html'))
      await this.progressDisplayStyle(2).then(()=>console.log('style 333 fini'))
      await this.progressDisplayStyle(3).then(()=>console.log('style 444 fini'))
    },
    progressDisplayStyle(n){
      let lastContentLength = 0;
  		if (n !== 0) {lastContentLength = this.showStyle.length;}
  		let style = this.fullStyle[n];
  		let len = style.length;
  		return new Promise((resolve, reject) => {
  			let addStyle = function () {
  				let currentLen = this.showStyle.length - lastContentLength;
  				if (currentLen < len) {
  					let char = style.substring(currentLen, currentLen+1);
            // console.log(char);
            this.showStyle += char
            if (char === '\n' && this.$refs.styleEditor) {
              // console.log('换行了');
              this.$nextTick(() => {
                this.$refs.styleEditor.goBottom()
              })
            }
  					setTimeout(addStyle, this.interval);
  				} else {
  					resolve();
  				}
  			}.bind(this);
  			addStyle();
  		});
    },
    progressDisplayInfo(){
      let content = this.fullInfo;
  		let len = content.length;
  		return new Promise((resolve, reject) => {
  			let showContent = function() {
  				let currentLen = this.showInfo.length;
  				if (currentLen < len) {
  					let char = content.substring(currentLen, currentLen+1);
  					this.showInfo += char
            if (char === '\n' && this.$refs.infoEditor) {
              // console.log('换行了');
              this.$nextTick(() => {
                this.$refs.infoEditor.goBottom()
              })
            }
  					setTimeout(showContent, this.interval);
  				} else {
  					resolve();
  				}
  			}.bind(this);
  			setTimeout(()=>showContent(), 1000)
  		});
    },
    transMarkdown(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          this.rawContent=false
          resolve()
        }, 1000)
      })
    }
  }
}
</script>

<style>
</style>
