(this["webpackJsonp@nexys/qrbill"]=this["webpackJsonp@nexys/qrbill"]||[]).push([[0],{123:function(e,t,n){e.exports=n(241)},241:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(33),o=n.n(l),i=n(35),c=n(19),s=n(34),m={borderTop:"1px solid #e5e5e5",borderBottom:"1px solid #e5e5e5",boxShadow:"0 .25rem .75rem rgba(0, 0, 0, .05)"},u="Swiss QR Bill",d=[{name:"QR Reader",link:"/qr/read"},{name:"QR Writer",link:"/qr/write"},{name:"Convert",link:"/convert"},{name:"Validate",link:"/validate"}].map((function(e){return e.link="/qrbill/build"+e.link,e}));var p=function(e){var t=a.a.createElement("header",null,a.a.createElement("div",{style:m,className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white"},a.a.createElement("h5",{className:"my-0 mr-md-auto font-weight-normal"},a.a.createElement(s.Link,{to:"/"},u)),a.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},d.map((function(e,t){return a.a.createElement(s.Link,{className:"p-2 text-dark",key:t,to:e.link},e.name)})))));return a.a.createElement(a.a.Fragment,null,t,a.a.createElement("div",{className:"container"},e.children))},f=n(26),h=n(56),E=n(53),g={QRType:"SPC",Version:"0200",Coding:"1"},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={AdrTp:e[t],Name:e[t+1],StrNameOrAdrLine1:e[t+2],StrNameOrAdrLine2:e[t+3],PstCd:e[t+4],TmwNm:e[t+5],Ctry:e[t+6]},r=Object.keys(n).map((function(e){return""===n[e]})).reduce((function(e,t){return e&&t}));return!0===r?null:n},y=function(e){var t={IBAN:e[3],Cdtr:v(e,4)},n=v(e,11),r=v(e,20),a={Ccy:e[19],Amt:e[18]},l={Ustrd:e[29],Trailer:e[30],SrdBkgInfo:e[31]},o={Tp:e[27],Ref:e[28],AddInf:l},i={AltPmt1:e[32],AltPmt2:e[33]};return{Header:g,CdtrInf:t,UltmtCdtr:n,UltmtDtr:r,CcyAmt:a,RmtInf:o,AltPmtInf:i}},b=("S\nRobert Schneider AG\nRue du Lac\n1268\n2501\nBiel\nCH".split("\n"),"SPC\n0200\n1\nCH4431999123000889012\nS\nRobert Schneider AG\nRue du Lac\n1268\n2501\nBiel\nCH\n\n\n\n\n\n\n\n1949.75\nCHF\nS\nPia-Maria Rutschmann-Schnyder\nGrosse Marktgasse\n28\n9400\nRorschach\nCH\nQRR\n210000000003139471430009017\nOrder of 15 June 2020\nEPD\n//S1/10/10201409/11/200701/20/140.000-53/30/102673831/31/200615/32/7.7/33/7.7:139.40/40/0:30\nName AV1: UV;UltraPay005;12345\nName AV2: XY;XYService;54321"),C=(b.split("\n"),{Header:g,CdtrInf:{IBAN:"CH4431999123000889012",Cdtr:{AdrTp:"S",Name:"Robert Schneider AG",StrNameOrAdrLine1:"Rue du Lac",StrNameOrAdrLine2:"1268",PstCd:"2501",TmwNm:"Biel",Ctry:"CH"}},CcyAmt:{Amt:"1949.75",Ccy:"CHF"},UltmtDtr:{AdrTp:"S",Ctry:"CH",Name:"Pia-Maria Rutschmann-Schnyder",PstCd:"9400",StrNameOrAdrLine1:"Grosse Marktgasse",StrNameOrAdrLine2:"28",TmwNm:"Rorschach"},UltmtCdtr:null,RmtInf:{AddInf:{SrdBkgInfo:"//S1/10/10201409/11/200701/20/140.000-53/30/102673831/31/200615/32/7.7/33/7.7:139.40/40/0:30",Trailer:"EPD",Ustrd:"Order of 15 June 2020"},Ref:"210000000003139471430009017",Tp:"QRR"},AltPmtInf:{AltPmt1:"Name AV1: UV;UltraPay005;12345",AltPmt2:"Name AV2: XY;XYService;54321"}});function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(){var e=Object(r.useState)({text:b}),t=Object(h.a)(e,2),n=t[0],l=t[1];return a.a.createElement("div",null,a.a.createElement("h3",null,"Converts output (break line separated text) into JSON"),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-6"},a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=y(n.text.split("\n"));l(O({},n,{convert:t}))}},a.a.createElement(E.Form.Textarea,{onChange:function(e){return l(O({},n,{text:e.value}))},name:"text",value:n.text}),a.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Convert"))),a.a.createElement("div",{className:"col-md-6"},a.a.createElement("pre",null,JSON.stringify(n.convert,null,2)))))},S=n(5),R=n.n(S),A=R.a.object({AdrTp:R.a.string().regex(/^[ST]$/),Ctry:R.a.string().regex(/^[A-Z]{2}$/),Name:R.a.string(),PstCd:R.a.string(),StrNameOrAdrLine1:R.a.string(),StrNameOrAdrLine2:R.a.string(),TmwNm:R.a.string()}).unknown(!0),P=R.a.object({IBAN:R.a.string().regex(/[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/),Cdtr:A}),x=R.a.object({QRType:R.a.string().valid("SPC"),Version:R.a.string().regex(/^\d{4}$/).valid("0200"),Coding:R.a.string().regex(/^1$/)}),j=R.a.object({Amt:R.a.string().regex(/^\d+\.\d{2}$/),Ccy:R.a.string().regex(/^[A-Z]{3}$/)}),k=R.a.object({AddInf:R.a.object({SrdBkgInfo:R.a.string().optional(),Trailer:R.a.string().valid("EPD"),Ustrd:R.a.string().optional()}),Ref:R.a.string().optional(),Tp:R.a.string().valid("QRR")}),T=R.a.object({AltPmt1:R.a.string().optional(),AltPmt2:R.a.string().optional()}),B=R.a.object({Header:x,CdtrInf:P,CcyAmt:j,UltmtDtr:A.allow(null).optional(),UltmtCdtr:A.allow(null).optional(),RmtInf:k,AltPmtInf:T}),I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B;return t.validate(e,{presence:"required"})};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(){var e=Object(r.useState)({text:JSON.stringify(C,null,2)}),t=Object(h.a)(e,2),n=t[0],l=t[1];return a.a.createElement("div",null,a.a.createElement("h3",null,"Validate JSON with JOI"),a.a.createElement("p",null,"see source ",a.a.createElement("a",{href:"https://github.com/Nexysweb/qrbill/blob/master/src/lib/validate.js"},"here")),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-6"},a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=I(JSON.parse(n.text));l(F({},n,{validate:t}))}},a.a.createElement(E.Form.Textarea,{onChange:function(e){return l(F({},n,{text:e.value}))},name:"text",value:n.text}),a.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Validate"))),a.a.createElement("div",{className:"col-md-6"},a.a.createElement("h4",null,"Output of JOI after validating"),a.a.createElement("pre",null,JSON.stringify(n.validate,null,2)))))},Q=n(115),J=n(116),H=n(121),U=n(117),V=n(122),q=n(118),M=n.n(q),$=function(e){function t(e){var n;return Object(Q.a)(this,t),(n=Object(H.a)(this,Object(U.a)(t).call(this,e))).handleScan=function(e){if(e){var t=e.split("\n"),r=y(t);console.log(r),I(B,r)?n.setState({result:r}):n.setState({result:"The QR Code read is not a valid Swiss QRBIll"})}},n.handleError=function(e){console.error(e)},n.state={show:!0,result:"No result"},n}return Object(V.a)(t,e),Object(J.a)(t,[{key:"renderReader",value:function(){return this.state.show?a.a.createElement(M.a,{delay:300,onError:this.handleError,onScan:this.handleScan,style:{width:"300px"}}):null}},{key:"toggleReader",value:function(){var e=!this.state.show;this.setState({show:e})}},{key:"render",value:function(){return console.log(this.state.result),a.a.createElement("div",null,this.renderReader(),a.a.createElement("pre",null,JSON.stringify(this.state.result,null,2)))}}]),t}(r.Component),z=n(120),G=n.n(z);var Z=function(e){var t=e.value;if(!Array.isArray(t)||34!==t.length)return console.error("an array is expected as input"),null;var n="#000000",r="#ffffff",l="M",o="svg",i=!1,c=300/46*7;return a.a.createElement("div",{className:"svgHolder",style:{position:"relative"}},a.a.createElement(G.a,{value:t.join("\n"),size:300,fgColor:n,bgColor:r,level:l,renderAs:o,includeMargin:i}),a.a.createElement("svg",{style:{margin:"0 auto",position:"absolute",top:150-c+"px",left:150-c+"px"}},a.a.createElement("rect",{x:18.26086956521739,y:18.26086956521739,width:1.2*c,height:1.2*c,r:c,fill:"white"}),a.a.createElement("rect",{x:c/2,y:c/2,width:c,height:c,r:c,fill:"black"}),a.a.createElement("rect",{x:40.630434782608695,y:27.847826086956523,width:1.1/5*c,height:.78*c,fill:"white"}),a.a.createElement("rect",{x:27.847826086956523,y:40.630434782608695,width:.78*c,height:1.1/5*c,fill:"white"})))},X=["QRType","Version","Coding Type","Compte (IBAN CRE)","Type d'adresse (CRE)","Nom (CRE)","Rue ou ligne d'adresse 1 (CRE)","Num\xe9ro de maison ou ligne d'adresse 2 (CRE)","Code postale (CRE)","Lieu (CRE)","Pays (CRE)","Type d'adresse (CREF)","Nom (CREF)","Rue ou ligne d'adresse 1 (CREF)","Num\xe9ro de maison ou ligne d'adresse 2 (CREF)","Code postale (CREF)","Lieu (CREF)","Pays (CREF)","Montant","Monnaie","Type d'adresse (DEBF)","Nom (DEBF)","Rue ou ligne d'adresse 1 (DEBF)","Num\xe9ro de maison ou ligne d'adresse 2 (DEBF)","Code postale (DEBF)","Lieu (DEBF)","Pays (DEBF)","Type de r\xe9f\xe9rence","R\xe9f\xe9rence","Communication non structur\xe9e","Trailer","Informations de facture","PA1 \u2013 Param\xe8tres","PA2 \u2013 Param\xe8tres"];var Y=function(){return console.log(X),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-6"},a.a.createElement("h3",null," Generated Swiss QR"),a.a.createElement(Z,{value:X})),a.a.createElement("div",{className:"col-md-6"},a.a.createElement("h3",null,"QR Content ",a.a.createElement("small",null,"as JSON")),a.a.createElement("pre",null,JSON.stringify(y(X),null,2))))},W=function(){return a.a.createElement("div",null,a.a.createElement("p",null,"Here you can play with different tools to understand the Swiss QR Bill"),a.a.createElement("p",null,a.a.createElement("b",null,a.a.createElement(s.Link,{to:"/qr/read"},"Click here")," if you would like to read a Swiss QR Code")),a.a.createElement("p",null,"Browse the menu for more options"),a.a.createElement("p",null,"Do you need help with the transition to the new ",a.a.createElement("a",{href:"https://www.six-group.com/interbank-clearing/en/home/standardization/payment-slips.html"},"QR Bill")," and in general ",a.a.createElement("a",{href:"https://www.six-group.com/interbank-clearing/en/home/standardization/iso-payments.html"},"ISO20022"),"? Please get in touch at ",a.a.createElement("a",{href:"info@nexys.ch"},"info [@] nexys.ch")))},K=function(){return a.a.createElement("p",null,"Page Not Found")},_="/qrbill/build";var ee=Object(i.o)((function(e){return a.a.createElement(p,null,a.a.createElement(i.g,null,a.a.createElement(i.d,{path:_+"/qr/read",component:$,props:e}),a.a.createElement(i.d,{path:_+"/qr/write",component:function(){return a.a.createElement(Y,{value:X})},props:e}),a.a.createElement(i.d,{path:_+"/convert",component:N,props:e}),a.a.createElement(i.d,{path:_+"/validate",component:L,props:e}),a.a.createElement(i.d,{exact:!0,path:_+"/",component:W}),a.a.createElement(i.d,{path:"/",component:K})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=c.a();o.a.render(a.a.createElement(i.e,{history:te},a.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[123,1,2]]]);
//# sourceMappingURL=main.204ea881.chunk.js.map