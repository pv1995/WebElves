(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{221:function(e,t,n){var a=n(223);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(7).default)("73be0140",a,!0,{sourceMap:!1})},222:function(e,t,n){"use strict";var a=n(221);n.n(a).a},223:function(e,t,n){var a=n(118);(e.exports=n(6)(!1)).push([e.i,"\n.banner>svg{position:absolute;bottom:0;width:100%;height:5vw\n}\n.banner{height:75vh;background:#232931;background-repeat:no-repeat;background-size:cover;overflow:hidden\n}\n.banner-alternate{height:100vh;background:url("+a(n(224))+");background-repeat:no-repeat;background-size:cover\n}\n.wrapper-3d{position:relative;top:65px;width:35%;margin:0 auto\n}\n.banner-image-wrapper{height:650px;overflow:hidden\n}\n.banner-text{margin-top:10rem;font-size:30px!important\n}\n.banner-text>h5{margin-bottom:3rem\n}\n@-webkit-keyframes rocking{\n0%,to{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)\n}\n50%{-webkit-transform:rotate(10deg);transform:rotate(10deg)\n}\n}\n@keyframes rocking{\n0%,to{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)\n}\n50%{-webkit-transform:rotate(10deg);transform:rotate(10deg)\n}\n}\n.vue-typer{font-family:Arial,Helvetica Neue,Helvetica,sans-serif\n}\n.vue-typer>.left{font-size:28px\n}\n.vue-typer .custom.char.typed{color:#ffe867\n}\n.vue-typer .custom.char.selected{color:#232931\n}\n.vue-typer .custom.caret{-webkit-animation:rocking 1s ease-in-out 0s infinite;animation:rocking 1s ease-in-out 0s infinite\n}\n.vue-typer .custom.caret.typing{background-color:#ffe867\n}\n.vue-typer .custom.caret.selecting{display:inline-block;background-color:#232931\n}\n.banner-row{position:relative;top:10%\n}\n.banner-row>.col>.container{min-height:80vh\n}\n.banner-subheading{font-size:24px\n}",""])},224:function(e,t,n){e.exports=n.p+"img/4bf676d.png"},225:function(e,t,n){"use strict";var a={props:["bannerText","bannerSubText","typerText","homepage","imageURL","altBG","bannerBackground"],components:{},data:function(){return{}},computed:{typer:function(){return this.typerText?this.typerText:[]},bannerClass:function(){return this.background}}},r=(n(222),n(4)),o=Object(r.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("no-ssr",[e.homepage?n("div",[n("section",{staticClass:"banner"},[n("div",{staticClass:"wrapper-3d animated bounceInRight"},[n("img",{attrs:{src:"/images/home3D.jpeg",width:"100%",alt:"Web Development Company"}})]),e._v(" "),n("div",{staticClass:"banner-text text-center white-color"},[n("h2",[e._v(e._s(e.bannerText))]),e._v(" "),n("h5",{staticClass:"animated rubberBand"},[e._v(e._s(e.bannerSubText))]),e._v(" "),n("no-ssr",[n("vue-typer",{staticStyle:{"font-weight":"900","text-transform":"uppercase","font-size":"28px"},attrs:{text:e.typer,repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":50,"pre-erase-delay":1e3,"erase-delay":50,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"smooth"}})],1)],1),e._v(" "),n("svg",{staticClass:"d-none",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[n("polygon",{attrs:{fill:"white",points:"0,100 100,0 100,100"}})]),e._v(" "),n("no-ssr",[n("vue-particles",{staticStyle:{position:"absolute",top:"10%",left:"0",width:"100%",height:"60%"},attrs:{color:"#ffdb00",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1)],1)]):n("div",[n("section",{staticClass:"banner"},[e.bannerBackground?n("div",{staticClass:"row banner-row"},[n("div",{staticClass:"banner-image-wrapper",staticStyle:{position:"absolute",width:"100%"}},[n("img",{attrs:{src:e.imageURL,width:"100%",alt:"Web Application Development Services"}})]),e._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"banner-content white-color mob-about-banner"},[n("h1",{staticClass:"banner-heading tertiary-color animated fadeIn delay-1s"},[e._v(e._s(e.bannerText))]),e._v(" "),n("h5",{staticClass:"banner-subheading animated rubberBand delay-1s"},[e._v(e._s(e.bannerSubText))]),e._v(" "),n("no-ssr",[n("vue-typer",{attrs:{text:e.typer,repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":1e3,"erase-delay":70,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"smooth"}})],1)],1)])]):n("div",{staticClass:"row banner-row"},[n("div",{staticClass:"col tertiary-color"},[n("div",{staticClass:"container"},[n("div",{staticClass:"banner-content white-color"},[n("h1",{staticClass:"banner-heading tertiary-color animated fadeIn delay-1s"},[e._v(e._s(e.bannerText))]),e._v(" "),n("h5",{staticClass:"banner-subheading animated rubberBand delay-1s"},[e._v(e._s(e.bannerSubText))]),e._v(" "),n("no-ssr",[n("vue-typer",{attrs:{text:e.typer,repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":1e3,"erase-delay":70,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"smooth"}})],1)],1)])]),e._v(" "),n("div",{staticClass:"col mob-hidden"},[n("div",{staticClass:"banner-image-wrapper"},[n("img",{attrs:{src:e.imageURL,width:"100%",alt:"Web Development Agency"}})])])]),e._v(" "),n("svg",{staticClass:"d-none",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[n("polygon",{attrs:{fill:"white",points:"0,100 100,0 100,100"}})])])])])},[],!1,null,null,null);o.options.__file="banner.vue";t.a=o.exports},252:function(e,t,n){var a=n(333);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(7).default)("63eeeab1",a,!0,{sourceMap:!1})},253:function(e,t,n){var a=n(335);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(7).default)("87aa7d10",a,!0,{sourceMap:!1})},332:function(e,t,n){"use strict";var a=n(252);n.n(a).a},333:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,"\n.blog-card[data-v-e0ebe66c]{cursor:pointer;width:500px;margin:0 auto\n}\n.blog-card>.card>img[data-v-e0ebe66c]{height:350px\n}\n.blog-card[data-v-e0ebe66c]:hover{box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)\n}\n.blog-card-heading[data-v-e0ebe66c]{font-size:22px;text-align:center;margin-top:.5rem\n}",""])},334:function(e,t,n){"use strict";var a=n(253);n.n(a).a},335:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,"\n.blog-page[data-v-6ed56c77]{padding:5rem 10rem\n}\n.blog-wrapper[data-v-6ed56c77]{margin:1rem 0!important\n}",""])},386:function(e,t,n){"use strict";n.r(t);var a=n(225),r={props:{heading:{type:String,required:!0},blogImg:{type:String,required:!0},altImg:{type:String}},data:function(){return{imgHeight:"500px"}},methods:{onBlogClick:function(){this.$emit("touched")}}},o=(n(332),n(4)),i=Object(o.a)(r,function(){var e=this.$createElement,t=this._self._c||e;return t("no-ssr",[t("div",{staticClass:"blog-card"},[t("b-card",{attrs:{overlay:"","img-src":this.blogImg,"img-alt":this.altImg,"text-variant":"white"},on:{click:this.onBlogClick}},[t("h5",{staticClass:"primary-color blog-card-heading",attrs:{slot:"footer"},slot:"footer"},[this._v(this._s(this.heading))])])],1)])},[],!1,null,"e0ebe66c",null);i.options.__file="blog-card.vue";var s=i.exports,l={components:{Banner:a.a,BlogCard:s},head:function(){return{title:"Blogs | WebElves",meta:[{hid:"description",name:"description",content:"WebElves is a premier website development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications."},{hid:"keywords",name:"keywords",content:"web application development company, Mobile App Development Agency, hybrid mobile app development company, UI/UX Design Agency, graphic design services, graphic design agency, hire designers, hire developers, web application development company, mobile app development company, digital marketing company."}]}},data:function(){return{tabIndex:0,homePage:!1,background:"banner-alternate",bannerHeading:"Insights",bannerSubHeading:"Our take on the latest tech & design trends in the industry",image:"/images/banner2.jpeg",bannerBackground:!0,blogs:[{id:1,heading:"The WebElves Development Process",img:"/images/blog1.jpeg",author:"Dhruv Mishra",authorImg:"",route:"our-development-process",altImg:"Product Development Company"},{id:2,heading:"Top 7 UI/UX Design Trends in 2019",img:"/images/blog2.jpeg",author:"Ishita Dey",authorImg:"",route:"top-uiux-design-trends",altImg:"UI/UX Design Company"},{id:3,heading:"Top 10 [Must Have] Features of an E-Commerce Application",img:"/images/blog3.jpeg",author:"Shubham Prasanna",authorImg:"",route:"top-10-must-have-features-of-an-ecommerce-app",altImg:"E-commerce Development Company"},{id:4,heading:"Why Companies should choose VueJS for Application Development",img:"/images/blog4.jpeg",author:"Shubham Prasanna",authorImg:"",route:"why-choose-vuejs-for-development",altImg:"VueJS Development Company"}]}},methods:{goToSingleBlog:function(e){this.$router.push(e)}}},c=(n(334),Object(o.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Banner",{attrs:{bannerText:e.bannerHeading,bannerSubText:e.bannerSubHeading,altBG:e.background,homepage:e.homePage,imageURL:e.image,bannerBackground:e.bannerBackground}}),e._v(" "),n("section",{staticClass:"blog-page"},[n("div",{staticClass:"row"},e._l(e.blogs,function(t){return n("div",{key:t.id,staticClass:"col-sm-12 col-md-6 blog-wrapper"},[n("BlogCard",{attrs:{heading:t.heading,blogImg:t.img},on:{touched:function(n){return e.goToSingleBlog(t.route)}}})],1)}),0)])],1)},[],!1,null,"6ed56c77",null));c.options.__file="blogs.vue";t.default=c.exports}}]);