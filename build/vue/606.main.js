"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[606],{606:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var i=s(252),r=s(577),n={id:"credit"},c=(0,i._)("div",{class:"loader"},null,-1),l={class:"container"},d=(0,i._)("h2",{class:"title"},[(0,i.Uk)(" Начните пользоваться "),(0,i._)("br"),(0,i.Uk)(" пивоварней уже сейчас ")],-1),a={class:"credit-wrapper"},o={class:"credit-steps"},u={class:"circle"},f=["innerHTML"],_={class:"credit-offer"},p={class:"credit-offer__price"},w={class:"old"},b={class:"new"},v=(0,i._)("span",null," / 4 мес.",-1);var m=s(921),k=s(695),h={store:m.Z,mixins:[k.Z],data:function(){return{steps:[{title:"Нажмите кнопку <br /> «Купить в рассрочку»"},{title:"В появившемся окне выберите нужную комплектацию"},{title:" Нажмите<br /> «Заказать»"}],oldP:m.Z.state.models[1823].oldPrice,newP:Math.floor(m.Z.state.models[1823].price/4)}},methods:{setCredit:function(e){m.Z.commit("updateUserCredit",e)}},mounted:function(){this.btnAnim("#credit",".credit-offer a.button")}},C=(0,s(744).Z)(h,[["render",function(e,t,s,m,k,h){return(0,i.wg)(),(0,i.iD)("section",n,[c,(0,i._)("div",{class:(0,r.C_)("credit-bg "+e.$store.state.webpSupport)},[(0,i._)("div",l,[d,(0,i._)("div",a,[(0,i._)("div",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(k.steps,(function(e,t){return(0,i.wg)(),(0,i.iD)("div",{key:t,class:"credit-steps__item"},[(0,i._)("div",u,(0,r.zw)(t+1),1),(0,i._)("p",{innerHTML:e.title},null,8,f)])})),128))]),(0,i._)("div",_,[(0,i._)("a",{draggable:"false",onClick:t[0]||(t[0]=function(e){return h.setCredit(!0)}),href:"#modal-order","data-fancybox":"",class:"button"},"Купить в рассрочку"),(0,i._)("div",p,[(0,i._)("p",w,(0,r.zw)(k.oldP)+" ₽ ",1),(0,i._)("p",b,[(0,i.Uk)(" от "+(0,r.zw)(k.newP)+" ₽ ",1),v])])])])])],2)])}]])}}]);