"use strict";(self.webpackChunkmaritime_directory=self.webpackChunkmaritime_directory||[]).push([[922],{922:(Z,h,g)=>{g.r(h),g.d(h,{HighlightsModule:()=>H});var s=g(895),a=g(651),p=g(4),i=g(274);function c(t,e){if(1&t&&(i.ynx(0),i._UZ(1,"img",10),i.BQk()),2&t){const n=i.oxw().$implicit,o=i.oxw(2);i.xp6(1),i.Q6J("src",o.imgEndpoint+n.thumbnailUrl,i.LSH)}}function r(t,e){if(1&t&&i._UZ(0,"img",11),2&t){const n=i.oxw().$implicit,o=i.oxw(2);i.Q6J("src",o.imgEndpoint+n.thumbnailUrl,i.LSH)}}function m(t,e){if(1&t&&(i.TgZ(0,"span"),i._uU(1),i.qZA()),2&t){const n=i.oxw().$implicit;i.xp6(1),i.hij("",n.year," | ")}}function d(t,e){if(1&t&&(i.TgZ(0,"article",3)(1,"div",4),i.YNc(2,c,2,1,"ng-container",0),i.YNc(3,r,1,1,"ng-template",null,5,i.W1O),i.qZA(),i.TgZ(5,"ul",6)(6,"li",7),i._uU(7),i.qZA(),i.TgZ(8,"li",8),i.YNc(9,m,2,1,"span",9),i._uU(10),i.qZA(),i.TgZ(11,"li"),i._uU(12),i.qZA()()()),2&t){const n=e.$implicit,o=e.index,l=i.MAs(4);i.xp6(2),i.Q6J("ngIf",o<4)("ngIfElse",l),i.xp6(5),i.Oqu(n.price),i.xp6(2),i.Q6J("ngIf",n.year),i.xp6(1),i.Oqu(n.category),i.xp6(2),i.Oqu(n.description)}}function x(t,e){if(1&t&&(i.ynx(0),i.YNc(1,d,13,6,"article",2),i.BQk()),2&t){const n=e.ngIf;i.xp6(1),i.Q6J("ngForOf",n)}}function u(t,e){1&t&&(i.TgZ(0,"article",3),i._UZ(1,"div",4),i.TgZ(2,"ul",12),i._UZ(3,"li")(4,"li")(5,"li",13),i.qZA()())}const f=function(){return[]};function _(t,e){1&t&&i.YNc(0,u,6,0,"article",2),2&t&&i.Q6J("ngForOf",i.DdM(1,f).constructor(12))}let w=(()=>{class t{constructor(){this.imgEndpoint="https://mexico-marino-deep-blue-eu-central-1.s3.eu-central-1.amazonaws.com/v3/"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-hl-listings"]],inputs:{highlights:"highlights"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],["class","hl-listing",4,"ngFor","ngForOf"],[1,"hl-listing"],[1,"hl-listing-img-box"],["lazy",""],[1,"hl-listing-details"],[1,"hl-listing-price"],[1,""],[4,"ngIf"],["fetchpriority","high","loading","eager",1,"hl-listing-img",3,"src"],["fetchpriority","low","loading","lazy",1,"hl-listing-img",3,"src"],[1,"hl-listing-details","ghost-hl-listing-details"],[1,"hl-listing-detail-desc"]],template:function(n,o){if(1&n&&(i.YNc(0,x,2,1,"ng-container",0),i.YNc(1,_,1,2,"ng-template",null,1,i.W1O)),2&n){const l=i.MAs(2);i.Q6J("ngIf",o.highlights)("ngIfElse",l)}},dependencies:[s.sg,s.O5],styles:["app-hl-listings{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));width:100vw;max-width:1400px}@media (max-width: 900px){app-hl-listings{grid-template-columns:repeat(auto-fit,minmax(165px,1fr))}}.hl-listing{box-shadow:0 0 4px #00000038,0 0 4px #00000038;margin:auto auto 25px;height:345px;width:min-content;background-color:#897c31;padding:5px;border-radius:8px}@media (max-width: 900px){.hl-listing{height:300px;margin-bottom:10px}}.ghost-hl-listing-details li{margin-left:0!important;color:#0000!important;height:20px;border-radius:5px;animation-duration:10s;animation-iteration-count:infinite;animation-name:placeholderShimmer;animation-timing-function:linear;background:#779cc2;background-image:linear-gradient(90deg,rgba(255,210,0,0) 0,rgba(255,208,0,.2) 20%,rgba(255,210,0,.5) 60%,rgba(255,210,0,0))}@keyframes placeholderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}.hl-listing-detail-desc{min-height:60px}.hl-listing-img-box{box-shadow:0 0 4px #00000038,0 0 4px #00000038;overflow:hidden;border-radius:8px;height:220px;width:220px;background-image:url(https://mexicomarino.com/img/icons/icon-picture.svg);background-size:cover}@media (max-width: 1400px){.hl-listing-img-box{width:200px;height:200px}}@media (max-width: 900px){.hl-listing-img-box{width:150px;height:150px}}@media (max-width: 490px){.hl-listing-img-box{width:44vw}}.hl-listing-img{min-height:100%;min-width:100%}@media (max-width: 900px){.hl-listing-img{height:150px}}.hl-listing-details{color:#fff;font-weight:100}.hl-listing-details li{margin-left:8px;margin-bottom:5px}.hl-listing-price{color:#ffd200;font-weight:900}\n"],encapsulation:2}),t})();const b=[{path:"",component:(()=>{class t{constructor(n){this.activatedRoute=n}ngOnInit(){this.highlights$=this.activatedRoute.data.pipe((0,p.U)(n=>n.highlights$))}}return t.\u0275fac=function(n){return new(n||t)(i.Y36(a.gz))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-highlights"]],decls:6,vars:3,consts:[[1,"highlights-hero-text"],[1,"highlights-title"],[3,"highlights"]],template:function(n,o){if(1&n&&(i.TgZ(0,"h1",0),i._uU(1," Descubre tu pr\xf3xima embarcaci\xf3n, anuncia tus productos y servicios marinos\n"),i.qZA(),i.TgZ(2,"h2",1),i._uU(3,"DESTACADOS"),i.qZA(),i._UZ(4,"app-hl-listings",2),i.ALo(5,"async")),2&n){let l;i.xp6(4),i.Q6J("highlights",null!==(l=i.lcZ(5,1,o.highlights$))&&void 0!==l?l:void 0)}},dependencies:[w,s.Ov],styles:[".highlights-hero-text{padding-top:40px;padding-bottom:40px;font-size:50px;font-weight:500;font-style:italic;text-align:center;margin:auto;max-width:1140px}@media (max-width: 900px){.highlights-hero-text{font-size:30px}}@media (max-width: 600px){.highlights-hero-text{font-size:20px;padding-top:20px;padding-bottom:20px}}.highlights-title{padding-top:30px;padding-bottom:30px;font-size:24px;font-weight:500;text-align:center;margin:auto}\n"],encapsulation:2}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[a.Bz.forChild(b),a.Bz]}),t})(),H=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[s.ez,y]}),t})()}}]);