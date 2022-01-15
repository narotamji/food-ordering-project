(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__1glvB",control:"Checkout_control__2Mz47",actions:"Checkout_actions__10CEs",submit:"Checkout_submit__1O2Vr",invalid:"Checkout_invalid__2SeUb"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__YMFg3",total:"Cart_total__mJ-km",actions:"Cart_actions__3kgsw","button--alt":"Cart_button--alt__1A2AT",button:"Cart_button__3usXm"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2reqC",summary:"CartItem_summary__-760Q",price:"CartItem_price__2QYJr",amount:"CartItem_amount__1aHLD",actions:"CartItem_actions__1EIK7"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2SWJu",icon:"HeaderCartButton_icon__3etsp",badge:"HeaderCartButton_badge__3zsm_",bump:"HeaderCartButton_bump__1Tkdb"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__3e-qv",modal:"Modal_modal__dDobT","slide-down":"Modal_slide-down__8H-k8"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1iDi_","meals-appear":"AvailableMeals_meals-appear__3fqiZ",mealsLoading:"AvailableMeals_mealsLoading__3N7rd",mealsError:"AvailableMeals_mealsError__3JKFq"}},function(e,t,n){e.exports={meal:"MealItem_meal__1Vyhi",description:"MealItem_description__2ug2R",price:"MealItem_price__3H_wK"}},,function(e,t,n){e.exports={header:"Header_header__1s9o-","main-image":"Header_main-image__vHIgQ"}},,function(e,t,n){e.exports={card:"Card_card__2ncfW"}},function(e,t,n){e.exports={input:"Input_input__2jtBD"}},function(e,t,n){e.exports={form:"MealItemForm_form__2hA8D"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__Yi1zL"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n(6),l=n.n(o),u=n(12),d=n(4),j=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),m=n(13),b=n.n(m),O=n(0),h=function(e){return Object(O.jsx)("div",{onClick:e.onClose,className:b.a.backdrop})},x=function(e){return Object(O.jsx)("div",{className:b.a.modal,children:Object(O.jsx)("div",{className:b.a.content,children:e.children})})},f=document.getElementById("overlays"),p=function(e){return Object(O.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(O.jsx)(h,{onClose:e.onClose}),f),c.a.createPortal(Object(O.jsx)(x,{children:e.children}),f)]})},_=n(5),v=n.n(_),C=n(7),g=n.n(C),y=function(e){var t="$".concat(e.price.toFixed(2));return Object(O.jsxs)("li",{className:g.a["cart-item"],children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsxs)("div",{className:g.a.summary,children:[Object(O.jsx)("span",{className:g.a.price,children:t}),Object(O.jsxs)("span",{className:g.a.amount,children:["x ",e.amount]})]})]}),Object(O.jsxs)("div",{className:g.a.actions,children:[Object(O.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(O.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},N=n(3),k=n.n(N),A=function(e){return""===e.trim()},I=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),d="".concat(k.a.control," ").concat(a.name?"":k.a.invalid),j="".concat(k.a.control," ").concat(a.street?"":k.a.invalid),m="".concat(k.a.control," ").concat(a.postalCode?"":k.a.invalid),b="".concat(k.a.control," ").concat(a.city?"":k.a.invalid);return Object(O.jsxs)("form",{className:k.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=o.current.value,r=l.current.value,i=u.current.value,d=!A(n),j=!A(a),m=!A(i),b=6===r.trim().length;c({name:d,street:j,city:m,postalCode:b}),d&&j&&m&&b&&e.onConfirm({name:n,street:a,city:i,postalCode:r})},children:[Object(O.jsxs)("div",{className:d,children:[Object(O.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(O.jsx)("input",{type:"text",id:"name",ref:s}),!a.name&&Object(O.jsx)("p",{children:"Please enter valid name!"})]}),Object(O.jsxs)("div",{className:j,children:[Object(O.jsx)("label",{htmlFor:"street",children:"Street"}),Object(O.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(O.jsx)("p",{children:"Please enter valid street!"})]}),Object(O.jsxs)("div",{className:m,children:[Object(O.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(O.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(O.jsx)("p",{children:"Please enter valid postal Code (6 characters long)"})]}),Object(O.jsxs)("div",{className:b,children:[Object(O.jsx)("label",{htmlFor:"city",children:"City"}),Object(O.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(O.jsx)("p",{children:"Please enter valid city!"})]}),Object(O.jsxs)("div",{className:k.a.actions,children:[Object(O.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(O.jsx)("button",{className:k.a.submit,children:"Confirm"})]})]})},w=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(i.useState)(!1),m=Object(r.a)(o,2),b=m[0],h=m[1],x=Object(i.useState)(!1),f=Object(r.a)(x,2),_=f[0],C=f[1],g=Object(i.useContext)(j),N=g.totalAmount.toFixed(2),k=g.items.length>0,A=function(e){g.removeItem(e)},w=function(e){g.addItem(Object(d.a)(Object(d.a)({},e),{},{amount:1}))},S=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,fetch("https://in-custom-hooks-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:g.items})});case 3:h(!1),C(!0),g.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object(O.jsx)("ul",{className:v.a["cart-items"],children:g.items.map((function(e){return Object(O.jsx)(y,{name:e.name,amount:e.amount,price:e.price,onRemove:A.bind(null,e.id),onAdd:w.bind(null,e)},e.id)}))}),H=Object(O.jsxs)("div",{className:v.a.actions,children:[Object(O.jsx)("button",{onClick:e.onHideCart,className:v.a["button--alt"],children:"Close"}),k&&Object(O.jsx)("button",{onClick:function(){c(!0)},className:v.a.button,children:"Order"})]}),F=Object(O.jsxs)(s.a.Fragment,{children:[M,Object(O.jsxs)("div",{className:v.a.total,children:[Object(O.jsx)("span",{children:"Total Amount"}),Object(O.jsxs)("span",{children:["$",N]})]}),a&&Object(O.jsx)(I,{onConfirm:S,onCancel:e.onHideCart}),!a&&H]}),E=Object(O.jsx)("p",{children:"Sending order data..."}),R=Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)("p",{children:"Successfully sent the order!"}),Object(O.jsx)("div",{className:v.a.actions,children:Object(O.jsx)("button",{onClick:e.onHideCart,className:v.a.button,children:"Close"})})]});return Object(O.jsxs)(p,{onClose:e.onHideCart,children:[!b&&!_&&F,b&&E,!b&&_&&R]})},S=n(17),M=n.n(S),H=n.p+"static/media/meals.2971f633.jpg",F=function(){return Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(O.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},E=n(10),R=n.n(E),D=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(j).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(R.a.button," ").concat(a?R.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(O.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(O.jsx)("span",{className:R.a.icon,children:Object(O.jsx)(F,{})}),Object(O.jsx)("span",{children:"Your Cart"}),Object(O.jsx)("span",{className:R.a.badge,children:o})]})};var P=function(e){return Object(O.jsxs)(i.Fragment,{children:[Object(O.jsxs)("header",{className:M.a.header,children:[Object(O.jsx)("h1",{children:"ReactMeals"}),Object(O.jsx)(D,{onClick:e.onShowCart})]}),Object(O.jsx)("div",{className:M.a["main-image"],children:Object(O.jsx)("img",{src:H,alt:"Meals"})})]})},T=n(19),B=n.n(T),L=function(e){return Object(O.jsx)("div",{className:B.a.card,children:e.children})},J=n(14),z=n.n(J),q=n(15),V=n.n(q),Y=n(20),K=n.n(Y),Q=s.a.forwardRef((function(e,t){return Object(O.jsxs)("div",{className:K.a.input,children:[Object(O.jsx)("label",{HTMLFor:e.input.id,children:e.label}),Object(O.jsx)("input",Object(d.a)({ref:t},e.input))]})})),$=n(21),W=n.n($),U=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(O.jsxs)("form",{className:W.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(O.jsx)(Q,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(O.jsx)("button",{children:"+ Add"}),!a&&Object(O.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},X=function(e){var t=Object(i.useContext)(j),n="$".concat(e.price.toFixed(2));return Object(O.jsxs)("li",{className:V.a.meal,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.name}),Object(O.jsx)("div",{className:V.a.description,children:e.description}),Object(O.jsx)("div",{className:V.a.price,children:n})]}),Object(O.jsx)("div",{children:Object(O.jsx)(U,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},Z=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!0),s=Object(r.a)(c,2),o=s[0],d=s[1],j=Object(i.useState)(),m=Object(r.a)(j,2),b=m[0],h=m[1];if(Object(i.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://food-ordering-items-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)console.log(r),console.log(n),c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),d(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){d(!1),h(e.message)}))}),[]),o)return Object(O.jsx)("section",{className:z.a.mealsLoading,children:Object(O.jsx)("p",{children:"Loading..."})});if(b)return Object(O.jsx)("section",{className:z.a.mealsError,children:Object(O.jsx)("p",{children:b})});var x=n.map((function(e){return Object(O.jsx)(X,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(O.jsx)("section",{className:z.a.meals,children:Object(O.jsx)(L,{children:Object(O.jsx)("ul",{children:x})})})},G=n(22),ee=n.n(G),te=function(){return Object(O.jsxs)("section",{className:ee.a.summary,children:[Object(O.jsx)("h2",{children:"Delicious Food, Delivered to you"}),Object(O.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(O.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},ne=function(){return Object(O.jsxs)(i.Fragment,{children:[Object(O.jsx)(te,{}),Object(O.jsx)(Z,{})]})};var ae=function(){var e=Object(i.useContext)(j),t="the total number of items is ".concat(e?e.items.length:0);return Object(O.jsx)("div",{children:t})},ce=n(18),re={items:[],totalAmount:0},ie=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(d.a)(Object(d.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ce.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(d.a)(Object(d.a)({},l),{},{amount:l.amount-1});(s=Object(ce.a)(e.items))[o]=j}return{items:s,totalAmount:u}}return t.type,re},se=function(e){var t=Object(i.useReducer)(ie,re),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(O.jsx)(j.Provider,{value:s,children:e.children})};var oe=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)(ae,{}),Object(O.jsxs)(se,{children:[n&&Object(O.jsx)(w,{onHideCart:function(){a(!1)}}),Object(O.jsx)(P,{onShowCart:function(){a(!0)}}),Object(O.jsx)("main",{children:Object(O.jsx)(ne,{})})]})]})};c.a.render(Object(O.jsx)(oe,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.0f863e37.chunk.js.map