(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),o=a.n(c),s=a(15),l=a.n(s),n=(a(22),a(10)),i=(a(23),a(8)),r=a(0);function d(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(i.b,{className:"navbar-brand",to:"/textutils",style:{color:"blue"===e.mode?"white":"black"},children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/textutils",style:{color:"blue"===e.mode?"white":"black"},children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link",to:"/about",style:{color:"blue"===e.mode?"white":"black"},children:e.about})})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"blue":"light"," mx-2"),children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toogleBlue}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:Object(r.jsx)("b",{children:"Blue Mode"})})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),o=a[0],s=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",style:{color:"blue"===e.mode?"white":"black"},children:[Object(r.jsx)("h3",{className:"my-3",children:e.heading}),Object(r.jsx)("div",{className:"my-3",children:Object(r.jsx)("textarea",{className:"form-control",value:o,onChange:function(e){s(e.target.value)},style:{backgroundColor:"blue"===e.mode?"#434040":"white",color:"blue"===e.mode?"white":"black"},id:"myBox",rows:"8"})}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(){var t=o.toUpperCase();s(t),e.showAlert("Converted to UpperCase","success")},children:"Convert to Uppercase"}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary mx-2",onClick:function(){var t=o.toLowerCase();s(t),e.showAlert("Converted to LowerCase","success")},children:"Convert to Lowercase"}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(){s(""),e.showAlert("Text cleared","success")},children:"Clear Text"}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text copied to clipboard","success")},children:"Copy Text"}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(){var t=o.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces removed","success")},children:"Remove extra spaces"})]}),Object(r.jsxs)("div",{className:"container",style:{color:"blue"===e.mode?"white":"black"},children:[Object(r.jsx)("h2",{className:"my-3",children:"Your text summary"}),Object(r.jsxs)("p",{className:"my-3",children:[o.split(" ").length," words and ",o.length," characters"]}),Object(r.jsxs)("p",{className:"my-3",children:[.008*o.split(" ").length," Minutes to read"]}),Object(r.jsx)("h3",{className:"my-3",children:"Preview"}),Object(r.jsx)("p",{className:"my-3",children:o.length>0?o:"Enter something in the textbox above to preview it here"})]})]})}function h(e){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{className:"my-3",style:{color:"blue"===e.mode?"white":"black"},children:"About Us"}),Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:{backgroundColor:"blue"===e.mode?"#021633":"white",color:"blue"===e.mode?"white":"black"},children:"Accordion Item #1"})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:{backgroundColor:"blue"===e.mode?"#021633":"white",color:"blue"===e.mode?"white":"black"},children:[Object(r.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:{backgroundColor:"blue"===e.mode?"#021633":"white",color:"blue"===e.mode?"white":"black"},children:"Accordion Item #2"})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:{backgroundColor:"blue"===e.mode?"#021633":"white",color:"blue"===e.mode?"white":"black"},children:[Object(r.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:{backgroundColor:"blue"===e.mode?"#021633":"white",color:"blue"===e.mode?"white":"black"},children:"Accordion Item #3"})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:{backgroundColor:"blue"===e.mode?"#021633":"white",color:"blue"===e.mode?"white":"black"},children:[Object(r.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})]})}d.defaultProps={title:"Set title here",about:"About"};var u=function(e){return e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})},m=a(2);var j=function(){var e=Object(c.useState)("light"),t=Object(n.a)(e,2),a=t[0],o=t[1],s=Object(c.useState)(null),l=Object(n.a)(s,2),j=l[0],p=l[1],x=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),2e3)},g=function(){"light"===a?(o("blue"),document.body.style.backgroundColor="#021633",x("Blue mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(o("light"),document.body.style.backgroundColor="white",x("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(d,{title:"TextUtils",mode:a,toogleBlue:g}),Object(r.jsx)(u,{alert:j}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{exact:!0,path:"/about",children:Object(r.jsx)(h,{mode:a,toogleBlue:g})}),Object(r.jsx)(m.a,{exact:!0,path:"/textutils",children:Object(r.jsx)(b,{showAlert:x,heading:"Try TextUtils - word counter,character counter,remove extra spaces",mode:a})})]})})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),o(e),s(e),l(e)}))};l.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.85e2efd6.chunk.js.map