(this["webpackJsonpradio-uibceb"]=this["webpackJsonpradio-uibceb"]||[]).push([[0],{1685:function(e,t,a){},1702:function(e,t,a){"use strict";a.r(t);a(387),a(396);var r=a(0),o=a.n(r),n=a(65),i=a.n(n),c=a(131),l=a(51),u=a(365),d=a(382),s=a(1821),p=a(1822),m=(a(594),a(56)),g=a(383),b=a(8),f={primary:{contrastText:"#FFFFFF",dark:b.a.indigo[900],main:b.a.indigo[500],light:b.a.indigo[100]},secondary:{contrastText:"#FFFFFF",dark:b.a.blue[900],main:b.a.blue.A700,light:b.a.blue.A400},error:{contrastText:"#FFFFFF",dark:b.a.red[900],main:b.a.red[600],light:b.a.red[400]},text:{primary:b.a.blueGrey[900],secondary:b.a.blueGrey[600],link:b.a.blue[600]},link:b.a.blue[800],icon:b.a.blueGrey[600],background:{default:"#F4F6F8",paper:"#FFFFFF"},divider:b.a.grey[200]},h={h1:{color:f.text.primary,fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px",lineHeight:"40px"},h2:{color:f.text.primary,fontWeight:500,fontSize:"29px",letterSpacing:"-0.24px",lineHeight:"32px"},h3:{color:f.text.primary,fontWeight:500,fontSize:"24px",letterSpacing:"-0.06px",lineHeight:"28px"},h4:{color:f.text.primary,fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px",lineHeight:"24px"},h5:{color:f.text.primary,fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"20px"},h6:{color:f.text.primary,fontWeight:500,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"20px"},subtitle1:{color:f.text.primary,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"25px"},subtitle2:{color:f.text.secondary,fontWeight:400,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body1:{color:f.text.primary,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body2:{color:f.text.secondary,fontSize:"12px",letterSpacing:"-0.04px",lineHeight:"18px"},button:{color:f.text.primary,fontSize:"14px"},caption:{color:f.text.secondary,fontSize:"11px",letterSpacing:"0.33px",lineHeight:"13px"},overline:{color:f.text.secondary,fontSize:"11px",fontWeight:500,letterSpacing:"0.33px",lineHeight:"13px",textTransform:"uppercase"}},x={palette:f,typography:h,overrides:{MuiButton:{contained:{boxShadow:"0 1px 1px 0 rgba(0,0,0,0.14)",backgroundColor:b.a.grey[100],"&:hover":{backgroundColor:b.a.grey[300]}}},MuiCardActions:{root:{padding:"16px 24px"}},MuiCardContent:{root:{padding:24}},MuiCardHeader:{root:{padding:"16px 24px"}},MuiChip:{root:{backgroundColor:b.a.blueGrey[50],color:b.a.blueGrey[900]},deletable:{"&:focus":{backgroundColor:b.a.blueGrey[100]}}},MuiIconButton:{root:{color:f.icon,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.03)"}}},MuiInputBase:{root:{},input:{"&::placeholder":{opacity:1,color:f.text.secondary}}},MuiLinearProgress:{root:{borderRadius:3,overflow:"hidden"},colorPrimary:{backgroundColor:b.a.blueGrey[50]}},MuiListItem:{button:{"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.04)"}}},MuiListItemIcon:{root:{color:f.icon,minWidth:32}},MuiOutlinedInput:{root:{},notchedOutline:{borderColor:"rgba(0,0,0,0.15)"}},MuiPaper:{root:{},elevation1:{boxShadow:"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)"}},MuiTableCell:{root:Object(m.a)({},h.body1,{borderBottom:"1px solid ".concat(f.divider)})},MuiTableHead:{root:{backgroundColor:b.a.grey[50]}},MuiTableRow:{root:{"&$selected":{backgroundColor:f.background.default},"&$hover":{"&:hover":{backgroundColor:f.background.default}}}},MuiToggleButton:{root:{color:f.icon,"&:hover":{backgroundColor:"rgba(208, 208, 208, 0.20)"},"&$selected":{backgroundColor:"rgba(208, 208, 208, 0.20)",color:f.primary.main,"&:hover":{backgroundColor:"rgba(208, 208, 208, 0.30)"}},"&:first-child":{borderTopLeftRadius:4,borderBottomLeftRadius:4},"&:last-child":{borderTopRightRadius:4,borderBottomRightRadius:4}}},MuiTypography:{gutterBottom:{marginBottom:8}}}},v=Object(g.a)(x),E=(Object(g.a)(Object(m.a)({},x,{direction:"rtl"})),a(55)),y=a(367),O=a(368),S={loggedIn:!0,user:{first_name:"Giacinto",last_name:"Pettorino",email:"giacinto.pettorino@fasolit.ch",avatar:"/images/avatars/avatar_11.png",bio:"admin",role:"ADMIN"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SESSION_LOGIN":return Object(m.a)({},S);case"SESSION_LOGOUT":return Object(m.a)({},e,{loggedIn:!1,user:{role:"GUEST"}});default:return e}},k=Object(E.combineReducers)({session:j});var C=function(){var e=Object(c.b)();return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e.pathname]),null},N=a(33),T=a(21),w=a(371),F=a.n(w),M=a(1823),R=a(1824),B=Object(T.b)({plugins:[].concat(Object(N.a)(Object(M.a)().plugins),[F()()])});var W=function(e){var t=e.direction,a=e.children;return"rtl"!==t?a:o.a.createElement(R.b,{jss:B},o.a.createElement("div",{dir:"rtl"},a))},_=a(126);a.n(_).a.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"seconds",ss:"%ss",m:"1m",mm:"%dm",h:"1h",hh:"%dh",d:"1d",dd:"%dd",M:"1M",MM:"%dM",y:"1Y",yy:"%dY"}});var I=a(183),z=a.n(I);z.a.validators=Object(m.a)({},z.a.validators,{regex:function(e,t){if(!new RegExp(t.pattern).test(e))return t.message},checked:function(e,t){if(!0!==e)return t.message||"must be checked"}});a(596),a(597),a(598),a(599),a(600),a(601),a(602),a(603),a(604),a(605),a(606);var H=a(372),L=a.n(H),G=a(179),P=a.n(G).a.create(),A=new L.a(P,{delayResponse:0}),D=a(105),U=a.n(D);A.onGet("/api/management/user/list").reply(200,{users:Object(N.a)(Array(35).keys()).map((function(){return{id:U.a.random.number(),firstName:U.a.name.firstName(void 0),lastName:U.a.name.lastName(void 0),username:U.a.internet.userName()}}))});a(1685);var $=a(1706),K=a(1695),J=a(4),V=a(373),Y=Object({NODE_ENV:"production",PUBLIC_URL:"/radio-uibceb",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}),q=Y.NODE_ENV,Q=Y.REACT_APP_GA_MEASUREMENT_ID;var X=function(e){var t=e.title,a=e.children,n=Object(J.a)(e,["title","children"]),i=Object(c.b)();return Object(r.useEffect)((function(){"production"===q&&window.gtag&&window.gtag("config",Q,{page_path:i.pathname,page_name:t})}),[]),o.a.createElement("div",n,o.a.createElement(V.Helmet,null,o.a.createElement("title",null,t)),a)},Z=a(20),ee=a(7),te=a(67),ae=a(376),re=a.n(ae),oe=a(1690),ne=Object($.a)((function(e){return{root:{backgroundColor:"#fff",padding:1,"&:hover":{backgroundColor:"#fff"},borderBottom:"1px solid #b9b6b6"}}})),ie=function(e){var t=e.onClick,a=ne();return o.a.createElement(oe.a,{color:"primary",className:a.root,onClick:function(){return t()}},o.a.createElement(re.a,{style:{fontSize:95}}))},ce=a(377),le=a.n(ce),ue=Object($.a)((function(e){return{root:{backgroundColor:"#fff",padding:1,"&:hover":{backgroundColor:"#fff"},borderBottom:"1px solid #b9b6b6"}}})),de=function(e){var t=e.onClick,a=ue();return o.a.createElement(oe.a,{color:"primary",className:a.root,onClick:function(){return t()}},o.a.createElement(le.a,{style:{fontSize:95}}))},se=a(378),pe=a.n(se),me=a(1693),ge=a(84),be=Object($.a)((function(e){return{root:{backgroundColor:"#fff",padding:1,"&:hover":{backgroundColor:"#fff"},borderBottom:"1px solid #b9b6b6"},wrapper:{position:"relative",marginTop:-98,marginLeft:-3},buttonProgress:{color:ge.a[500],position:"absolute"}}})),fe=function(){var e=be();return o.a.createElement(o.a.Fragment,null,o.a.createElement(oe.a,{color:"primary",className:e.root},o.a.createElement(pe.a,{style:{fontSize:95}})),o.a.createElement("div",{className:e.wrapper},o.a.createElement(me.a,{size:100,className:e.buttonProgress,thickness:3})))},he=a(1694),xe=a(1818),ve=a(1819),Ee=a(1703),ye=Object($.a)({root:{width:230,marginTop:35,backgroundColor:"#fff",borderRadius:"5px",paddingLeft:15,paddingRight:"7px",marginLeft:"-10px",borderBottom:"1px solid #b9b6b6"},slider:{paddingTop:"0 !important"}}),Oe=function(e){var t=e.onChange,a=ye(),n=Object(r.useState)(70),i=Object(te.a)(n,2),c=i[0],l=i[1];return o.a.createElement("div",{className:a.root},o.a.createElement(he.a,{container:!0,spacing:2},o.a.createElement(he.a,{item:!0},o.a.createElement(xe.a,null)),o.a.createElement(he.a,{item:!0,xs:!0,className:a.slider},o.a.createElement(Ee.a,{value:c,onChange:function(e,a){l(a),t(a)},style:{padding:"20px 0"},"aria-labelledby":"continuous-slider"})),o.a.createElement(he.a,{item:!0},o.a.createElement(ve.a,null))))},Se=a(379),je=Object($.a)((function(e){return{root:{display:"flex",alignItems:"center"}}})),ke=function(){je();var e=Object(r.useState)(!1),t=Object(te.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)(!0),c=Object(te.a)(i,2),l=c[0],u=(c[1],Object(r.useState)(70)),d=Object(te.a)(u,2),s=d[0],p=d[1],m=Object(r.useRef)();Object(r.useEffect)((function(){m.current.onloadstart=function(){return console.log("onloadstart")},m.current.oncanplay=function(){return console.log("oncanplay")},m.current.onended=function(){return console.log("onended")},m.current.onpause=function(){return console.log("onpause")},m.current.onWaiting=function(){return console.log("onWaiting")}}),[]),Object(r.useEffect)((function(){m.current.volume=s/100}),[s]);var g=Object(Se.debounce)(p,100);return o.a.createElement(o.a.Fragment,null,o.a.createElement(he.a,{container:!0},o.a.createElement(he.a,{item:!0},l?a?o.a.createElement(de,{onClick:function(){return m.current.pause(),void n(!1)}}):o.a.createElement(ie,{onClick:function(){return m.current.play(),void n(!0)}}):o.a.createElement(fe,null)),o.a.createElement(he.a,{item:!0},o.a.createElement(Oe,{onChange:function(e){return g(e)}}))),o.a.createElement("audio",{ref:m},o.a.createElement("source",{src:"https://de1.internet-radio.com/proxy/radiouibceb?mp=/stream",type:"audio/mp3",on:!0})))},Ce=a(1696),Ne=Object($.a)((function(e){return{root:{},siteTitle:{paddingTop:100},cover:{position:"relative",height:250,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"bottom","&:before":{position:"absolute",content:'" "',top:0,left:0,height:"100%",width:"100%",backgroundImage:"linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)"},"&:hover":{"& $changeButton":{visibility:"visible"}}},container:Object(Z.a)({padding:e.spacing(2,3),position:"relative",display:"flex",flexWrap:"wrap"},e.breakpoints.down("sm"),{flexDirection:"column"})}})),Te=function(e){var t=e.className,a=Object(J.a)(e,["className"]),r=Ne();return o.a.createElement("div",Object.assign({},a,{className:Object(ee.a)(r.root,t)}),o.a.createElement("div",{className:r.cover,style:{backgroundImage:"url(images/cover.jpg)"}},o.a.createElement(K.a,null,o.a.createElement(he.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},o.a.createElement(Ce.a,{component:"h3",variant:"h3",className:r.siteTitle},o.a.createElement("div",{style:{backgroundColor:"#fff",padding:"10px",borderRadius:"5px",boxShadow:"1px 1px 16px 2px"}},o.a.createElement("span",null,"Radio Adunarea Nr.2 Chisinau")))))),o.a.createElement(K.a,{maxWidth:"lg",className:r.container},o.a.createElement("div",{style:{marginTop:"-64px"}},o.a.createElement(ke,null))))},we=a(1697),Fe=a(1698),Me=a(1701),Re=a(1820),Be=a(1699),We=a(1704),_e=Object(Re.a)((function(e){return{root:{display:"flex",marginBottom:120},details:{display:"flex",flexDirection:"column"},bible:{padding:15},verse:{paddingLeft:13,borderLeft:"5px solid #3f51b5"},content:{flex:"1 0 auto"},cover:{width:300}}})),Ie=function(){var e=_e();return o.a.createElement(we.a,{className:e.root},o.a.createElement("div",{className:e.details},o.a.createElement(Fe.a,{className:e.content},o.a.createElement(Ce.a,{component:"h5",variant:"h5",className:e.bible},"Biblia"),o.a.createElement(Ce.a,{variant:"subtitle1",color:"textSecondary",className:e.verse},"C\u0103ci n-avem un Mare Preot care s\u0103 n-aib\u0103 mil\u0103 de sl\u0103biciunile noastre, ci Unul care \xeen toate lucrurile a fost ispitit ca \u015fi noi, dar f\u0103r\u0103 p\u0103cat. S\u0103 ne apropiem, dar, cu deplin\u0103 \xeencredere de scaunul harului, ca s\u0103 c\u0103p\u0103t\u0103m \xeendurare \u015fi s\u0103 g\u0103sim har, pentru ca s\u0103 fim ajuta\u0163i la vreme de nevoie.")),o.a.createElement(Be.a,null,"Evrei 4:15,16")),o.a.createElement(We.a,{xsDown:!0},o.a.createElement(Me.a,{className:e.cover,image:"images/Bible.jpg"})))},ze=Object($.a)((function(e){return{root:{},container:{marginTop:e.spacing(3)},divider:{backgroundColor:b.a.grey[300]},content:{marginTop:e.spacing(3)}}})),He=function(){var e=ze();return o.a.createElement(X,{className:e.root,title:"Radio Adunarea Nr.2 Chisinau"},o.a.createElement(Te,null),o.a.createElement(K.a,{maxWidth:"md"},o.a.createElement(Ie,null)))},Le=Object(l.a)(),Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[y.a],a=Object(O.composeWithDevTools)(E.applyMiddleware.apply(void 0,t)),r=[a],o=E.compose.apply(void 0,r),n=Object(E.createStore)(k,e,o);return n}(),Pe=function(){return o.a.createElement(d.a,{store:Ge},o.a.createElement(s.a,{theme:v},o.a.createElement(W,{direction:"ltr"},o.a.createElement(p.a,{utils:u.a},o.a.createElement(c.a,{history:Le},o.a.createElement(C,null),o.a.createElement(He,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},386:function(e,t,a){e.exports=a(1702)}},[[386,1,2]]]);
//# sourceMappingURL=main.b34805a1.chunk.js.map