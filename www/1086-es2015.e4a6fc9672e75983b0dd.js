"use strict";(self.webpackChunkonTarget=self.webpackChunkonTarget||[]).push([[1086],{11086:function(n,t,e){e.r(t),e.d(t,{SubscriptionPageModule:function(){return M}});var i=e(38583),o=e(3679),c=e(92859),s=e(54655),p=e(60762),r=e(37716);const g=[{path:"",component:p.V}];let l=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[s.Bz.forChild(g)],s.Bz]}),n})();var a=e(44466),d=e(98863),u=e(22238);function f(n,t){1&n&&(r.TgZ(0,"p",16),r._uU(1," POPULAR! "),r.O4$(),r.TgZ(2,"svg",17),r._UZ(3,"path",18),r.qZA(),r.qZA())}function C(n,t){if(1&n&&(r.ynx(0),r.TgZ(1,"p",2),r._uU(2),r.qZA(),r.YNc(3,f,4,0,"p",11),r.TgZ(4,"div",12),r.TgZ(5,"p",13),r._uU(6),r.qZA(),r.TgZ(7,"div",14),r.TgZ(8,"p"),r._uU(9,"/"),r.qZA(),r.TgZ(10,"p"),r._uU(11),r.qZA(),r.qZA(),r.qZA(),r.TgZ(12,"p",15),r._uU(13),r.qZA(),r.BQk()),2&n){const n=r.oxw().$implicit;r.xp6(2),r.Oqu(n.timeLimit),r.xp6(1),r.Q6J("ngIf",n.isPopular),r.xp6(3),r.Oqu(n.price),r.xp6(5),r.Oqu(n.title?n.title:n.type),r.xp6(2),r.Oqu(n.description)}}const P=function(n){return{selected:n}};function O(n,t){if(1&n){const n=r.EpF();r.TgZ(0,"li",10),r.NdJ("click",function(){const t=r.CHM(n).$implicit;return r.oxw(2).selectedAndReload(t)}),r.YNc(1,C,14,5,"ng-container",4),r.qZA()}if(2&n){const n=t.$implicit;r.Q6J("ngClass",r.VKq(2,P,n.isSelected)),r.xp6(1),r.Q6J("ngIf",n.price)}}function _(n,t){if(1&n&&(r.ynx(0),r.TgZ(1,"ul",8),r.YNc(2,O,2,4,"li",9),r.qZA(),r.BQk()),2&n){const n=r.oxw();r.xp6(2),r.Q6J("ngForOf",n.products)}}let m=(()=>{class n{constructor(n,t){this.purchaseService=n,this.dialogRef=t,this.exit=new r.vpe,this.prices=[{timeLimit:"ONE TIME USE",price:3,pricePer:"session",sessionForFree:"Two session for free",isPopular:!1,isSelected:!1},{timeLimit:"ONE TIME USE",price:3,pricePer:"session",sessionForFree:"Two session for free",isPopular:!1,isSelected:!1},{timeLimit:"NO LIMIT",price:16.99,pricePer:"month",sessionForFree:"Unlimited session!",isPopular:!0,isSelected:!0}]}ngOnInit(){console.log("IN PAYMETN.COMP"),this.purchaseService.$notifyPurchaseApproved.subscribe(n=>{n&&this.dialogRef.close()})}onPurchase(){}selectedAndReload(n){this.products.forEach(n=>n.isSelected=!1),n.isSelected=!0}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(d.B3),r.Y36(u.so))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-payment"]],outputs:{exit:"exit"},decls:15,vars:1,consts:[[1,"payment"],[1,"container"],[1,"title"],[1,"text"],[4,"ngIf"],[1,"explanation"],[1,"controls"],[1,"confirm",3,"click"],[1,"prices"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"ngClass","click"],["class","popular",4,"ngIf"],[1,"price"],[1,"price-amount"],[1,"container-price"],[1,"for-free"],[1,"popular"],["width","17","height","16","viewBox","0 0 17 16","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M16.0074 5.56251L11.0484 4.84181L8.83162 0.347664C8.77107 0.224617 8.67146 0.125007 8.54841 0.0644604C8.23982 -0.0878834 7.86482 0.0390698 7.71052 0.347664L5.49372 4.84181L0.534736 5.56251C0.398017 5.58204 0.273017 5.64649 0.177313 5.74415C0.0616135 5.86307 -0.0021424 6.02306 5.49725e-05 6.18896C0.00225235 6.35486 0.0702232 6.5131 0.189032 6.62892L3.77693 10.127L2.92927 15.0664C2.90939 15.1813 2.92211 15.2995 2.96597 15.4075C3.00984 15.5156 3.0831 15.6092 3.17745 15.6777C3.2718 15.7462 3.38346 15.7869 3.49978 15.7952C3.61609 15.8035 3.7324 15.7791 3.83552 15.7246L8.27107 13.3926L12.7066 15.7246C12.8277 15.7891 12.9683 15.8106 13.1031 15.7871C13.4429 15.7285 13.6715 15.4063 13.6129 15.0664L12.7652 10.127L16.3531 6.62892C16.4508 6.53321 16.5152 6.40821 16.5347 6.27149C16.5875 5.9297 16.3492 5.61329 16.0074 5.56251Z","fill","black"]],template:function(n,t){1&n&&(r.TgZ(0,"section",0),r.TgZ(1,"div",1),r.TgZ(2,"p",2),r._uU(3,"Unlock your"),r.TgZ(4,"span"),r._uU(5,"membership"),r.qZA(),r.qZA(),r.TgZ(6,"p",3),r._uU(7,"Get access to all training sessions (drills and challenges)"),r.qZA(),r.qZA(),r.YNc(8,_,3,1,"ng-container",4),r.TgZ(9,"div",5),r.TgZ(10,"p"),r._uU(11,"*Limit the bullets to 30 hits on target **Session counts only if you hit the target"),r.qZA(),r.qZA(),r.TgZ(12,"div",6),r.TgZ(13,"button",7),r.NdJ("click",function(){return t.onPurchase()}),r._uU(14,"ACCEPT"),r.qZA(),r.qZA(),r.qZA()),2&n&&(r.xp6(8),r.Q6J("ngIf",t.products))},directives:[i.O5,i.sg,i.mk],styles:["[_nghost-%COMP%]{height:100%}section.payment[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;box-sizing:border-box;padding:63px 16px 0;overflow-y:auto;justify-content:space-between;background:radial-gradient(71.47% 224.04% at 19.09% 13.6%,#404658 0%,#161820 100%)}section.payment[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]{display:flex;flex-direction:column}section.payment[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:27px;color:#fff;margin:0 auto;padding-bottom:14px}section.payment[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fce651;padding-left:.3em}section.payment[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%]{font-size:18px;color:#fff;margin:0 auto;width:270px;text-align:center;font-weight:300}section.payment[_ngcontent-%COMP%]   ul.prices[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0;padding:0;list-style:none;height:100%;justify-content:space-around}section.payment[_ngcontent-%COMP%]   ul.prices[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:rgba(255,255,255,.1);border-radius:16px;box-sizing:border-box;padding:19px 22px;display:flex;flex-direction:column;position:relative;transition:all .3s;margin-bottom:10px}section.payment[_ngcontent-%COMP%]   ul.prices[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:#fff}section.payment[_ngcontent-%COMP%]   ul.prices[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%], section.payment[_ngcontent-%COMP%]   ul.prices[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]   div.price[_ngcontent-%COMP%]   div.container-price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], section.payment[_ngcontent-%COMP%]   ul.prices[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]   p.for-free[_ngcontent-%COMP%]{color:#000}section.payment[_ngcontent-%COMP%]   ul.prices[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%]{color:#fff;margin:0;padding-bottom:10px}section.payment[_ngcontent-%COMP%]   ul.prices[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p.popular[_ngcontent-%COMP%]{display:flex;position:absolute;top:13px;right:16px;margin:0;justify-content:space-between;width:110px;background-color:#fce651;color:#000;box-sizing:border-box;padding:3px 5px;font-weight:700}section.payment[_ngcontent-%COMP%]   ul.prices[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.price[_ngcontent-%COMP%]{display:flex;padding-bottom:13px;align-items:baseline}section.payment[_ngcontent-%COMP%]   ul.prices[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.price[_ngcontent-%COMP%]   p.price-amount[_ngcontent-%COMP%]{margin:0;font-weight:bold;font-size:50px;line-height:59px;color:#fc5151;display:flex;align-items:center;padding-right:8px}section.payment[_ngcontent-%COMP%]   ul.prices[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.price[_ngcontent-%COMP%]   div.container-price[_ngcontent-%COMP%]{display:flex;align-items:center}section.payment[_ngcontent-%COMP%]   ul.prices[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.price[_ngcontent-%COMP%]   div.container-price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:18px;line-height:21px;color:#fff}section.payment[_ngcontent-%COMP%]   ul.prices[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p.for-free[_ngcontent-%COMP%]{font-size:12px;line-height:14px;color:#fff;opacity:.6;margin:0}section.payment[_ngcontent-%COMP%]   div.explanation[_ngcontent-%COMP%]{padding-top:15px;padding-bottom:22px}section.payment[_ngcontent-%COMP%]   div.explanation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:16px;line-height:19px;color:#fff;opacity:.7;font-weight:300}section.payment[_ngcontent-%COMP%]   div.controls[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;margin-bottom:40px}section.payment[_ngcontent-%COMP%]   div.controls[_ngcontent-%COMP%]   button.confirm[_ngcontent-%COMP%]{height:56px;border-radius:4px;background-color:#fce651;color:#000;font-size:14px;line-height:16px;letter-spacing:1.25px;margin-bottom:.5em}"]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[i.ez,o.u5,c.Pc,a.m,l]]}),n})();r.B6R(p.V,[c.Gu,c.sr,c.Sm,c.gu,c.wd,c.W2,m],[])}}]);