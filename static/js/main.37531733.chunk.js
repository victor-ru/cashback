(this["webpackJsonpcashback-assistant"]=this["webpackJsonpcashback-assistant"]||[]).push([[0],{17:function(e,t,n){e.exports={pageContent:"styles_pageContent__306IV"}},18:function(e,t,n){e.exports={percent:"styles_percent__1Icnb"}},19:function(e,t,n){e.exports={deleteButton:"styles_deleteButton__18buj"}},43:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),r=n.n(c),i=n(15),o=n.n(i),s=n(5),l=n(1),d=n(17),u=n.n(d);function j(e){return Object(a.jsx)(l.Page,{renderToolbar:function(){return Object(a.jsxs)(l.Toolbar,{children:[e.backButtonText&&Object(a.jsx)("div",{className:"left",children:Object(a.jsx)(l.BackButton,{children:e.backButtonText})}),Object(a.jsx)("div",{className:"center",children:e.title}),e.rightButton&&Object(a.jsx)("div",{className:"right",children:e.rightButton})]})},children:Object(a.jsx)("div",{className:u.a.pageContent,children:e.children})})}var b=n(7),O=n.n(b),g=n(18),f=n.n(g),h=n(3),m={id:1,name:"Category 1"},x={id:2,name:"Category 2"},p={id:3,name:"Category 3"},v=[{id:1,name:"Card 1",bank:"Bank 1",basePercent:2,cashbackCategories:[{category:m,percent:5},{category:x,percent:10},{category:p,percent:2}]},{id:2,name:"Card 2",bank:"Bank 2",basePercent:1,cashbackCategories:[{category:m,percent:5}]}],C=[m,x,p],y=n(10),k=n.n(y),N=r.a.createContext({cards:[],setCards:function(){},categories:[],setCategories:function(){}});function B(e){var t=Object(c.useState)([]),n=Object(h.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)([]),s=Object(h.a)(o,2),l=s[0],d=s[1];Object(c.useEffect)((function(){var e=k.a.get("cards",v);i(e);var t=k.a.get("categories",C);d(t)}),[]);return Object(a.jsx)(N.Provider,{value:{cards:r,setCards:function(e){i(e),k.a.set("cards",e)},categories:l,setCategories:function(e){d(e),k.a.set("categories",e)}},children:e.children})}function L(e){var t=e.cards.map((function(e){return e.name})).join(", ");return Object(a.jsxs)(l.ListItem,{children:[Object(a.jsx)("div",{className:"center",children:e.category.name}),Object(a.jsx)("div",{className:"right",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"list-item__title",children:t}),Object(a.jsxs)("div",{className:O()("list-item__subtitle",f.a.percent),children:[e.percent,"%"]})]})})]})}function _(){var e=Object(c.useContext)(N),t=e.cards,n=function(e,t){return e.map((function(e){var n=0,a=[],c=0,r=[];if(t.forEach((function(t){t.basePercent===n&&a.push(t),t.basePercent>n&&(n=t.basePercent,a=[t]);var i=t.cashbackCategories.find((function(t){return t.category.id===e.id}));if(void 0!==i)return i.percent>c?(c=i.percent,void(r=[t])):void(i.percent!==c||r.push(t))})),c>n)return{category:e,percent:c,cards:r};if(n>c)return{category:e,percent:n,cards:a};var i=[].concat(Object(s.a)(r),Object(s.a)(a)),o=Array.from(new Set(i));return{category:e,percent:c,cards:o}}))}(e.categories,t);return Object(a.jsxs)(j,{title:"Summary",children:["zxc",Object(a.jsx)(l.List,{dataSource:n,renderRow:function(e){return Object(a.jsx)(L,{category:e.category,cards:e.cards,percent:e.percent},e.category.id)}})]})}n(41),n(42);var S=n(4),I=n(19),w=n.n(I);function P(e){var t=e.confirm,n=void 0===t||t,c=r.a.useState(!1),i=Object(h.a)(c,2),o=i[0],s=i[1];return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(l.Button,{className:w.a.deleteButton,modifier:"quiet",onClick:function(t){null===t||void 0===t||t.stopPropagation(),n?s(!0):e.onClick()},children:Object(a.jsx)(l.Icon,{icon:"fa-trash-alt"})}),Object(a.jsxs)(l.AlertDialog,{isOpen:o,onCancel:function(){return s(!1)},modifier:"rowfooter",children:[Object(a.jsx)("div",{className:"alert-dialog-title",children:"Are you sure?"}),Object(a.jsx)("div",{className:"alert-dialog-content",children:"The item will be deleted permanently"}),Object(a.jsxs)("div",{className:"alert-dialog-footer",children:[Object(a.jsx)(l.Button,{onClick:function(){return s(!1)},className:"alert-dialog-button alert-dialog-button--rowfooter",children:"Cancel"}),Object(a.jsx)(l.Button,{onClick:function(){s(!1),e.onClick()},className:"alert-dialog-button alert-dialog-button--rowfooter",children:"Ok"})]})]})]})}function T(){var e=r.a.useState(null),t=Object(h.a)(e,2),n=t[0],i=t[1],o=Object(c.useContext)(N),d=o.categories,u=o.setCategories;return Object(a.jsxs)(j,{title:"Categories",children:[Object(a.jsx)(l.List,{dataSource:d,renderFooter:function(){return Object(a.jsx)(l.ListItem,{children:Object(a.jsx)(l.Button,{onClick:function(){i({id:0,name:""})},modifier:"large",children:"Add category"})})},renderRow:function(e){return Object(a.jsxs)(l.ListItem,{tappable:!0,onClick:function(){i(e)},children:[Object(a.jsx)("div",{className:"center",children:Object(a.jsx)("span",{className:"list-item__title",children:e.name})}),Object(a.jsx)("div",{className:"right",children:Object(a.jsx)(P,{onClick:function(){var t=d.filter((function(t){return t.id!==e.id}));u(t)}})})]},e.id)}}),Object(a.jsxs)(l.AlertDialog,{isOpen:null!==n,onCancel:function(){return i(null)},modifier:"rowfooter",children:[Object(a.jsx)("div",{className:"alert-dialog-title",children:"Category Name"}),Object(a.jsx)("div",{className:"alert-dialog-content",children:Object(a.jsx)(l.Input,{placeholder:"Type here",modifier:"underbar",value:null===n?"":n.name,onChange:function(e){null!==n&&i(Object(S.a)(Object(S.a)({},n),{},{name:e.target.value}))}})}),Object(a.jsxs)("div",{className:"alert-dialog-footer",children:[Object(a.jsx)(l.Button,{onClick:function(){return i(null)},className:"alert-dialog-button alert-dialog-button--rowfooter",children:"Cancel"}),Object(a.jsx)(l.Button,{onClick:function(){if(null!==n){var e=function(e,t){if(0===t.id){var n=e.map((function(e){return e.id})),a=n.length>0?Math.max.apply(Math,Object(s.a)(n))+1:1;return[].concat(Object(s.a)(e),[Object(S.a)(Object(S.a)({},t),{},{id:a})])}return e.map((function(e){return e.id===t.id?t:e}))}(d,n);u(e),i(null)}},className:"alert-dialog-button alert-dialog-button--rowfooter",children:"Ok"})]})]})]})}var A=n(12),E=n(9),M=n.n(E);function R(e){return Object(a.jsx)("div",{className:O()("left",M.a.leftLabel,Object(A.a)({},M.a.leftLabelLong,e.long)),children:e.children})}function D(e){var t=e.categories,n=e.onChange;return Object(a.jsx)(l.List,{dataSource:t,renderHeader:function(){return Object(a.jsx)(l.ListHeader,{children:"Cashback Categories"})},renderRow:function(e){return Object(a.jsxs)(l.ListItem,{children:[Object(a.jsx)(R,{long:!0,children:e.category.name}),Object(a.jsx)("div",{className:"center",children:Object(a.jsx)(l.Input,{value:String(e.percent),onChange:function(a){n(t.map((function(t){return t.category.id!==e.category.id?t:Object(S.a)(Object(S.a)({},t),{},{percent:parseInt(a.target.value)||0})})))},float:!0,placeholder:"Cashback %"})}),Object(a.jsx)("div",{className:"right",children:Object(a.jsx)(P,{confirm:!1,onClick:function(){n(t.filter((function(t){return t.category.id!==e.category.id})))}})})]},e.category.id)}})}function F(e){var t=r.a.useState(null),n=Object(h.a)(t,2),i=n[0],o=n[1],s=r.a.useState(""),d=Object(h.a)(s,2),u=d[0],j=d[1],b=Object(c.useContext)(N).categories;return Object(c.useEffect)((function(){e.isOpen&&(o(null),j(""))}),[e.isOpen]),Object(a.jsxs)(l.AlertDialog,{isOpen:e.isOpen,onCancel:e.onClose,modifier:"rowfooter",children:[Object(a.jsx)("div",{className:"alert-dialog-title",children:"Add cashback category"}),Object(a.jsx)("div",{className:O()("alert-dialog-content",M.a.addCategoryAlertContent),children:Object(a.jsxs)(l.Row,{children:[Object(a.jsxs)(l.Select,{value:null!==i?String(i.id):"",onChange:function(e){if(void 0!==b){var t=parseInt(e.target.value),n=b.find((function(e){return e.id===t}));o(n||null)}},children:[Object(a.jsx)("option",{value:"",children:"Select category"}),b.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(a.jsx)(l.Input,{value:u,type:"number",modifier:"underbar",float:!0,onChange:function(e){j(e.target.value)},placeholder:"Cashback %"})]})}),Object(a.jsxs)("div",{className:"alert-dialog-footer",children:[Object(a.jsx)(l.Button,{onClick:e.onClose,className:"alert-dialog-button alert-dialog-button--rowfooter",children:"Cancel"}),Object(a.jsx)(l.Button,{onClick:function(){null!==i&&""!==u&&(e.onSave({category:i,percent:parseInt(u)||0}),e.onClose())},className:"alert-dialog-button alert-dialog-button--rowfooter",children:"Ok"})]})]})}var H={id:0,name:"",bank:"",basePercent:0,cashbackCategories:[]};function J(e){var t=e.card;return Object(a.jsxs)(l.ListItem,{tappable:!0,onClick:function(){e.navigator.pushPage({component:q.cardsEdit,props:{card:t}})},children:[Object(a.jsxs)("div",{className:"center",children:[Object(a.jsx)("span",{className:"list-item__title",children:t.name}),Object(a.jsx)("span",{className:"list-item__subtitle",children:t.bank})]}),Object(a.jsx)("div",{className:"right",children:Object(a.jsx)(P,{onClick:e.onDelete})})]})}var q={cardsList:function(e){var t=Object(c.useContext)(N),n=t.cards,r=t.setCards;return Object(a.jsx)(j,{title:"Cards",children:Object(a.jsx)(l.List,{dataSource:n,renderFooter:function(){return Object(a.jsx)(l.ListItem,{children:Object(a.jsx)(l.Button,{onClick:function(){e.navigator.pushPage({component:q.cardsEdit})},modifier:"large",children:"Add card"})})},renderRow:function(t){return Object(a.jsx)(J,{navigator:e.navigator,card:t,onDelete:function(){var e=n.filter((function(e){return e.id!==t.id}));r(e)}},t.id)}})})},cardsEdit:function(e){var t=e.card,n=void 0===t?H:t,i=e.navigator,o=n.id,d=r.a.useState(n.name),u=Object(h.a)(d,2),b=u[0],O=u[1],g=r.a.useState(n.bank),f=Object(h.a)(g,2),m=f[0],x=f[1],p=r.a.useState(String(n.basePercent)),v=Object(h.a)(p,2),C=v[0],y=v[1],k=r.a.useState(n.cashbackCategories),B=Object(h.a)(k,2),L=B[0],_=B[1],I=r.a.useState(!1),w=Object(h.a)(I,2),P=w[0],T=w[1],A=Object(c.useContext)(N),E=A.cards,M=A.setCards;return Object(a.jsxs)(j,{backButtonText:"All Cards",rightButton:Object(a.jsx)(l.ToolbarButton,{onClick:function(){var e={id:o,name:b,bank:m,basePercent:parseInt(C)||0,cashbackCategories:L};M(function(e,t){if(0===t.id){var n=e.map((function(e){return e.id})),a=n.length>0?Math.max.apply(Math,Object(s.a)(n))+1:1;return[].concat(Object(s.a)(e),[Object(S.a)(Object(S.a)({},t),{},{id:a})])}return e.map((function(e){return e.id===t.id?t:e}))}(E,e)),i.popPage()},children:"Save"}),children:[Object(a.jsxs)(l.List,{children:[Object(a.jsxs)(l.ListItem,{children:[Object(a.jsx)(R,{children:"Title"}),Object(a.jsx)("div",{className:"center",children:Object(a.jsx)(l.Input,{value:b,onChange:function(e){return O(e.target.value)},float:!0,placeholder:"Card name"})})]}),Object(a.jsxs)(l.ListItem,{children:[Object(a.jsx)(R,{children:"Bank"}),Object(a.jsx)("div",{className:"center",children:Object(a.jsx)(l.Input,{value:m,onChange:function(e){return x(e.target.value)},float:!0,placeholder:"Card bank"})})]}),Object(a.jsxs)(l.ListItem,{children:[Object(a.jsx)(R,{children:"Cashback %"}),Object(a.jsx)("div",{className:"center",children:Object(a.jsx)(l.Input,{type:"number",value:C,onChange:function(e){return y(e.target.value)},float:!0,placeholder:"Base cashback %"})})]})]}),Object(a.jsx)(D,{categories:L,onChange:_}),Object(a.jsx)(l.ListItem,{children:Object(a.jsx)(l.Button,{modifier:"large",onClick:function(){return T(!0)},children:"Add category"})}),Object(a.jsx)(F,{isOpen:P,onClose:function(){return T(!1)},onSave:function(e){L.find((function(t){return t.category.id===e.category.id}))||_([].concat(Object(s.a)(L),[e]))}})]})},categoriesList:T,summary:_};function z(e,t){var n=e.props||{};return n.navigator=t,n.key=e.component.name,r.a.createElement(e.component,n)}function V(){return Object(a.jsx)(B,{children:Object(a.jsx)(l.Page,{children:Object(a.jsx)(l.Tabbar,{index:1,position:"bottom",renderTabs:function(){return[{content:Object(a.jsx)(l.Navigator,{animation:"lift",initialRoute:{component:q.cardsList},renderPage:z},"cards"),tab:Object(a.jsx)(l.Tab,{label:"Cards",icon:"md-card"},"cards")},{content:Object(a.jsx)(_,{},"summary"),tab:Object(a.jsx)(l.Tab,{label:"Summary",icon:"md-local-atm"},"summary")},{content:Object(a.jsx)(T,{},"categories"),tab:Object(a.jsx)(l.Tab,{label:"Categories",icon:"md-view-list"},"categories")}]}})})})}o.a.render(Object(a.jsx)(V,{}),document.getElementById("root"))},9:function(e,t,n){e.exports={leftLabel:"styles_leftLabel__2snlM",leftLabelLong:"styles_leftLabelLong__3BFjc",addCategoryAlertContent:"styles_addCategoryAlertContent__30hMY"}}},[[43,1,2]]]);
//# sourceMappingURL=main.37531733.chunk.js.map