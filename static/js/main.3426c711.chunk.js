(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{54:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(14),o=n.n(i),s=(n(54),n(19)),d=n(34),l=n(22),u=n(40),p=n(39),j=n(87),b=n(75),g=n(64),m=n(5),h=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.categories;(0,e.changeActiveCategory)(t[0].name)}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.categories,r=e.changeActiveCategory;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)("h2",{className:t.browseCategories,children:"Browse our Categories"}),Object(a.jsx)(b.a,{variant:"text",color:"primary","aria-label":"text primary button group",children:n.map((function(e){return Object(a.jsx)(g.a,{onClick:function(){return r(e.name)},children:e.displayName},e.name)}))})]})})}}]),n}(r.Component),O={changeActiveCategory:function(e){return{type:"CHANGEACTIVE",payload:e}}},x=Object(m.a)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},heroContent:{padding:e.spacing(8,0,6)},browseCategories:{padding:4,margin:4}}}))(h),f=Object(s.b)((function(e){return{categories:e.categories.categories}}),O)(x),y=n(77),v=n(78),C=n(79),N=n(80),E=n(81),T=n(82),A=n(83),w=n(76),S=Object(w.a)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},fullHeight:{height:"100%"},card:{margin:"1em"},media:{height:0,paddingTop:"56.25%",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"},jss8:{height:"100%",display:"flex",flexDirection:"column",flexWrap:"initial"},jss5:{padding:"64px 0px 48px"},jss7:{paddingTop:"64px",paddingBottom:"64px"}}})),R={addToCart:function(e){return{type:"ADDTOCART",payload:e}},decreaseInventory:function(e){return{type:"DECREASEINVENTORY",payload:e}}},I=Object(s.b)((function(e){return{products:e.products.products}}),R)((function(e){var t=e.products,n=e.addToCart,r=e.decreaseInventory,c=S();return Object(a.jsxs)(y.a,{maxWidth:"md",component:"main",children:[Object(a.jsxs)(j.a,{className:c.jss5,textAlign:"center",children:[Object(a.jsx)(v.a,{variant:"h2",color:"textPrimary",children:t.length>0?t[0].category.toUpperCase():""}),Object(a.jsx)(v.a,{variant:"h6",color:"textSecondary",children:t.length>0?"Category Description Goes Here":""})]}),Object(a.jsx)(C.a,{className:c.jss7,container:!0,spacing:0,direction:"row",justify:"center",alignItems:"center",children:t.map((function(e){return Object(a.jsx)(C.a,{className:c.jss8,container:!0,item:!0,xs:12,sm:6,lg:4,children:Object(a.jsxs)(N.a,{className:c.card,children:[Object(a.jsx)(E.a,{className:c.media,image:e.image,title:e.name}),Object(a.jsxs)(T.a,{children:[Object(a.jsx)(v.a,{variant:"h5",color:"textPrimary",children:e.name}),Object(a.jsx)(v.a,{variant:"h6",color:"textSecondary",children:e.description})]}),Object(a.jsx)(A.a,{children:Object(a.jsx)(g.a,{style:{fontSize:"0.8125rem"},onClick:function(){return function(e){n(e),r(e.name)}(e)},children:"Add to Cart"})})]})},e.name)}))})]})})),F=n(84),B=n(85),D=n(86),V=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("header",{"data-testid":"header",children:[Object(a.jsx)(F.a,{}),Object(a.jsx)(B.a,{position:"static",elevation:0,className:"MuiAppBar-root",children:Object(a.jsx)(D.a,{className:"",children:Object(a.jsxs)(C.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(a.jsx)(v.a,{variant:"h4",children:"Store"}),Object(a.jsx)(v.a,{variant:"h6",children:"Shopping Cart"})]})})})]})})},k=function(){return Object(a.jsx)("footer",{"data-testid":"footer",className:"footer",children:Object(a.jsx)("p",{children:"\xa9 2020"})})},H=(n(59),function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(V,{}),Object(a.jsx)(f,{}),Object(a.jsx)(I,{}),Object(a.jsx)(k,{})]})}),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},G=n(21),P=(n(60),n(38)),L=n(11),Y={categories:[{name:"electronics",displayName:"Electronics",description:"electronics"},{name:"food",displayName:"Food",description:"food"}],activeCategory:null},z={products:[{category:"electronics",name:"Samsung TV",description:'4k Smart tv 65"',price:"999.99",inventoryCount:100,image:"https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/104994/aecbf447-71c2-4053-9091-d1d420737198.jpg"},{category:"food",name:"Burgger",description:"KFC",price:"11.99",inventoryCount:15,image:"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg"},{category:"food",name:"Banana",description:"Banana",price:"16.99",inventoryCount:2e3,image:"https://www.news-medical.net/image.axd?picture=2018%2F2%2Fbanana.jpg"}]},J=n(13),W={items:[]},K=[];K.push(P.a);var U=Object(G.c)({categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"CHANGEACTIVE":return Object(L.a)(Object(L.a)({},e),{},{activeCategory:a});default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"CHANGEACTIVE":return Object(L.a)(Object(L.a)({},e),{},{products:z.products.filter((function(e){return e.category===a}))});case"DECREASEINVENTORY":return Object(L.a)(Object(L.a)({},e),{},{products:e.products.map((function(e){return e.name===a&&(e.inventoryCount-=1),e}))});case"INCREASEINVENTORY":return Object(L.a)(Object(L.a)({},e),{},{products:e.products.map((function(e){return e.name===a&&(e.inventoryCount+=1),e}))});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ADDTOCART":return Object(L.a)(Object(L.a)({},e),{},{items:[].concat(Object(J.a)(e.items),[a])});case"REMOVEFROMCART":return Object(L.a)(Object(L.a)({},e),{},{items:e.items.filter((function(e){return e.name!==a}))});default:return e}}}),q=Object(G.d)(U,G.a.apply(void 0,K));o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(s.a,{store:q,children:Object(a.jsx)(H,{store:q})})}),document.getElementById("root")),M()}},[[61,1,2]]]);
//# sourceMappingURL=main.3426c711.chunk.js.map