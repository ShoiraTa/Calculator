(this.webpackJsonpculculator=this.webpackJsonpculculator||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),r=a.n(o),c=a(5),s=a(1),i=a(4),u=(a(15),a(2)),m=a(7),b=a.n(m);function g(e,t,a){var n=b()(e),l=b()(t);if("+"===a)return n.plus(l).toString();if("-"===a)return n.minus(l).toString();if("x"===a)return n.times(l).toString();if("\xf7"===a)try{return n.div(l).toString()}catch(o){return"Can't divide by 0."}if("%"===a)return n.mod(l).toString();throw Error("Unknown operation '".concat(a,"'"))}a(16);var p=function(){return l.a.createElement("header",{className:"header"},l.a.createElement(c.b,{className:"logo",to:"/Calculator/"},"Math Magicians"),l.a.createElement("nav",null,l.a.createElement(c.b,{className:"link",to:"/Calculator/"},"Home"),l.a.createElement(c.b,{className:"link",to:"/Calculator/app"},"Calculator"),l.a.createElement(c.b,{className:"link",to:"/Calculator/quotes"},"Quote")))},h=function(){var e=Object(n.useState)({total:"0",next:null,operation:null}),t=Object(i.a)(e,2),a=t[0],o=t[1],r=function(e){var t,n;o((t=a,"AC"===(n=e.target.innerText)?{total:null,next:null,operation:null}:n.match(/[0-9]+/)?"0"===n&&"0"===t.next?{}:t.operation?t.next?Object(u.a)(Object(u.a)({},t),{},{next:t.next+n}):Object(u.a)(Object(u.a)({},t),{},{next:n}):t.next?{next:t.next+n,total:null}:{next:n,total:null}:"."===n?t.next?t.next.includes(".")?Object(u.a)({},t):Object(u.a)(Object(u.a)({},t),{},{next:"".concat(t.next,".")}):t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total,".")}:{total:"0."}:"="===n?t.next&&t.operation?{total:g(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===n?t.next?Object(u.a)(Object(u.a)({},t),{},{next:(-1*parseFloat(t.next)).toString()}):t.total?Object(u.a)(Object(u.a)({},t),{},{total:(-1*parseFloat(t.total)).toString()}):{}:t.next||!t.total||t.operation?t.operation?t.total&&!t.next?Object(u.a)(Object(u.a)({},t),{},{operation:n}):{total:g(t.total,t.next,t.operation),next:null,operation:n}:t.next?{total:t.next,next:null,operation:n}:{operation:n}:Object(u.a)(Object(u.a)({},t),{},{operation:n})))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement("div",{className:"calculator"},l.a.createElement("h1",null,"Let's do some Math"),l.a.createElement("div",{className:"calculator-container"},l.a.createElement("div",{className:"result"},a.total,a.operation,a.next),l.a.createElement("div",{className:"calculator-oprtaitions"},l.a.createElement("button",{type:"button",onClick:r,className:"bg-gray single-cell "},"AC"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-gray single-cell "},"%"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-gray single-cell "},"+/-"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-orange single-cell"},"\xf7"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-gray single-cell"},"7"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-gray single-cell "},"8"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-gray single-cell "},"9"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-orange single-cell"},"x"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-gray single-cell "},"4"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-gray single-cell"},"5"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-gray single-cell"},"6"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-orange single-cell"},"-"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-gray single-cell"},"1"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-gray single-cell"},"2"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-gray single-cell"},"3"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-orange single-cell"},"+"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-gray zero single-cell"},"0"),l.a.createElement("button",{type:"button",onClick:r,className:"bg-gray single-cell"},"."),l.a.createElement("button",{type:"button",onClick:r,className:"bg-orange single-cell"},"=")))))},d=function(){return l.a.createElement(h,null)};a(17);var y=function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement("main",null,l.a.createElement("h1",null,"Welcome to  our page!"),l.a.createElement("p",null,"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",l.a.createElement("br",null),l.a.createElement("br",null)," There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.")))};a(18);var E=function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"`Pure mathematics is, in its way, the poetry of logical ideas. \u2014",l.a.createElement("br",null),l.a.createElement("span",null,"Albert Einstein, German theoretical physicist"),"`")))};r.a.render(l.a.createElement(c.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"Calculator/",element:l.a.createElement(y,null)}),l.a.createElement(s.a,{path:"Calculator/app",element:l.a.createElement(d,null)}),l.a.createElement(s.a,{path:"Calculator/quotes",element:l.a.createElement(E,null)}))),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.fdf05dd9.chunk.js.map