let styleCode = [`
/*
  大家好，我是 newming
  非常高兴加入到极客邦科技
  这个页面是我个人展示页
  那么先来简单装饰下吧
*/

/* 先来做一个简单css reset */

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* 加上过渡效果酷酷的 */
  transition: all 0.5s;
}
img{
  height: 0;
}
body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* 来个背景色 */
  background: rgb(0,43,54);
  color: #fff;
}
#app{
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1em;
  max-width: 680px;
  margin: 0 auto;
  position: relative;
}
/* 文字距离太紧了 */
.style-editor{
  flex-basis: 100%;
  padding: 1em;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.7);
}
/* 增加点代码高亮 */
.token.selector{
  color: rgb(133,153,0);
}
.token.property{
  color: rgb(187,137,0);
}
.token.punctuation{
  color: yellow;
}
.token.function{
  color: rgb(42,161,152);
}
/* 接下来增加我的自我介绍舞台 */
.style-editor{
  flex-basis: 28%;
  margin-bottom: 2%;
}
.info-editor{
  flex-basis: 0%;
  flex-shrink: 0;
  background: #fff;
  color: #222;
}
.info-editor{
  flex-basis: 70%;
  width: 100%;
  overflow: auto;
  padding: 1em 1em 2em;
}
`,
`
/*
* 哇这简历太难看了吧
* 接下来先把简历的 markdown 语法转为正常的 html 吧
*/
`,
`
/* 在给html加些样式 */
.info-editor h2{
  display: inline-block;
  border-bottom: 1px solid #000;
  margin: 1em 0 .5em;
}
.info-editor img{
  max-width: 100%;
}
.info-editor ul{
  list-style-position: inside;
  padding-left: 0.5em;
}
.info-editor blockquote p{
  margin: 0.5em;
  padding: .5em;
  background: #ddd;
}
`,
`
/* OK 大功告成 */
.info-editor{
  position: absolute;
  flex-basis: 100%;
  top: 0;
  left: 0;
}
img{
  height: auto;
}
.style-editor{
  display: none;
}
`
]

let infoCode = `
## 钮旭明（newming）

![avatar](http://7xopqp.com1.z0.glb.clouddn.com/aboutme.jpg)

前端工程师，毕业于秦皇岛河北科技师范学院，物理学专业。。。


技能
----

- html, css, javascript 等基础知识
- React, Vue 技术栈
- 熟悉 nodejs 后台知识
- 了解 mongodb 数据库
- 了解服务器基本配置部署

连接
----

- [github 主页](https://github.com/newming)
- [coding 主页](https://coding.net/u/newming)
- [个人主页](http://www.newming.cn)

爱好
----

- 专研代码
- 听音乐（只听）
- 吃甜食
- 爱猫

> 电话/微信：18033562690 （欢迎添加）
`

export {styleCode, infoCode}
