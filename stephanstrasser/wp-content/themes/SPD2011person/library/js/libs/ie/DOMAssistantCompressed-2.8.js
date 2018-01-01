// Developed by Robert Nyman/DOMAssistant team, code/licensing: http://domassistant.googlecode.com/, documentation: http://www.domassistant.com/documentation, version 2.8
var DOMAssistant=function(){var j=function(){},o=window,g=o.$,k=o.$$,d=/*@cc_on!@*/false,i=d&&parseFloat(navigator.appVersion)<6,h,c={},q={},a=true,n=Array.prototype.slice,p={accesskey:"accessKey","class":"className",colspan:"colSpan","for":"htmlFor",maxlength:"maxLength",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",valign:"vAlign",cellspacing:"cellSpacing",cellpadding:"cellPadding"},m={rules:/\s*,\s*/g,selector:/^(\w+|\*)?(#[\w\u00C0-\uFFFF\-=$]+)?((\.[\w\u00C0-\uFFFF\-]+)*)?((\[\w+\s*([~^$*|])?(=\s*([-\w\u00C0-\uFFFF\s.]+|"[^"]*"|'[^']*'))?\]+)*)?((:\w[-\w]*(\((odd|even|\-?\d*n?([-+]\d+)?|[:#]?[-\w\u00C0-\uFFFF.]+|"[^"]*"|'[^']*'|((\w*\.[-\w\u00C0-\uFFFF]+)*)?|(\[#?\w+([~^$*|])?=?[-\w\u00C0-\uFFFF\s.'"]+\]+)|(:\w[-\w]*\(.+\)))\))?)*)?([+>~])?/,selectorSplit:/(?:\[.*\]|\(.*\)|[^\s+>~[(])+|[+>~]/g,id:/^#([-\w\u00C0-\uFFFF=$]+)$/,tag:/^\w+/,relation:/^[+>~]$/,pseudo:/^:(\w[-\w]*)(\((.+)\))?$/,pseudos:/:(\w[-\w]*)(\((([^(]+)|([^(]+\([^(]+)\))\))?/g,attribs:/\[(\w+)\s*([~^$*|])?(=)?\s*([^\[\]]*|"[^"]*"|'[^']*')?\](?=$|\[|:|\s)/g,classes:/\.([-\w\u00C0-\uFFFF]+)/g,quoted:/^["'](.*)["']$/,nth:/^((odd|even)|([1-9]\d*)|((([1-9]\d*)?)n([-+]\d+)?)|(-(([1-9]\d*)?)n\+(\d+)))$/,special:/(:check|:enabl|\bselect)ed\b/},f=function(t,u,r){var s=t.tagName;while((t=t[u+"Sibling"])&&(t.nodeType!==1||(r?t.tagName!==s:t.tagName==="!"))){}return t},b=function(r){return typeof r!=="undefined"},l=function(r){return(l=r[0].compareDocumentPosition?function(s){return s.sort(function(u,t){return 3-(u.compareDocumentPosition(t)&6)})}:d?function(s){return s.sort(function(u,t){return u.sourceIndex-t.sourceIndex})}:function(s){return s.sort(function(w,u){var v=document.createRange(),t=document.createRange();v.setStart(w,0);v.setEnd(w,0);t.setStart(u,0);t.setEnd(u,0);return v.compareBoundaryPoints(Range.START_TO_END,t)})})(r)};var e=function(s,r){s.push.apply(s,n.apply(r));return s};if(d){e=function(t,s){if(s.slice){return t.concat(s)}var r=0,u;while((u=s[r++])){t[t.length]=u}return t}}return{isIE:d,camel:p,def:b,allMethods:[],publicMethods:["prev","next","hasChild","cssSelect","elmsByClass","elmsByAttribute","elmsByTag"],harmonize:function(){o.$=g;o.$$=k;return this},initCore:function(){this.applyMethod.call(o,"$",this.$);this.applyMethod.call(o,"$$",this.$$);o.DOMAssistant=this;if(d){j=Array}j.prototype=[];(function(r){r.each=function(v,u){for(var t=0,s=this.length;t<s;t++){if(v.call(u||this[t],this[t],t,this)===false){break}}return this};r.first=function(){return b(this[0])?DOMAssistant.addMethodsToElm(this[0]):null};r.end=function(){return this.previousSet};r.indexOf=r.indexOf||function(u){for(var t=0,s=this.length;t<s;t++){if(t in this&&this[t]===u){return t}}return -1};r.map=function(w,v){var u=[];for(var t=0,s=this.length;t<s;t++){if(t in this){u[t]=w.call(v||this[t],this[t],t,this)}}return u};r.filter=function(w,v){var u=new j();u.previousSet=this;for(var t=0,s=this.length;t<s;t++){if(t in this&&w.call(v||this[t],this[t],t,this)){u.push(this[t])}}return u};r.every=function(v,u){for(var t=0,s=this.length;t<s;t++){if(t in this&&!v.call(u||this[t],this[t],t,this)){return false}}return true};r.some=function(v,u){for(var t=0,s=this.length;t<s;t++){if(t in this&&v.call(u||this[t],this[t],t,this)){return true}}return false}})(j.prototype);this.attach(this)},addMethods:function(r,s){if(!b(this.allMethods[r])){this.allMethods[r]=s;this.addHTMLArrayPrototype(r,s)}},addMethodsToElm:function(s){for(var r in this.allMethods){if(b(this.allMethods[r])){this.applyMethod.call(s,r,this.allMethods[r])}}return s},applyMethod:function(s,r){if(typeof this[s]!=="function"){this[s]=r}},attach:function(t){var r=t.publicMethods;if(!b(r)){for(var v in t){if(v!=="init"&&b(t[v])){this.addMethods(v,t[v])}}}else{if(r.constructor===Array){for(var s=0,u;(u=r[s]);s++){this.addMethods(u,t[u])}}}if(typeof t.init==="function"){t.init()}},addHTMLArrayPrototype:function(r,s){j.prototype[r]=function(){var v=new j();v.previousSet=this;for(var u=0,t=this.length;u<t;u++){v.push(s.apply(DOMAssistant.$$(this[u]),arguments))}return v}},cleanUp:function(u){var s=u.all||u.getElementsByTagName("*");for(var r=0,t;(t=s[r++]);){if(t.hasData&&t.hasData()){if(t.removeEvent){t.removeEvent()}t.unstore()}}u.innerHTML=""},setCache:function(r){a=r},$:function(){var u=arguments[0];if(arguments.length===1&&(typeof u==="object"||(typeof u==="function"&&!!u.nodeName))){return DOMAssistant.$$(u)}var w=!!u?new j():null;for(var s=0,r,v;(r=arguments[s]);s++){if(typeof r==="string"){r=r.replace(/^[^#\(]*(#)/,"$1");if(m.id.test(r)){if((v=DOMAssistant.$$(r.substr(1),false))){w.push(v)}}else{var t=(document.all||document.getElementsByTagName("*")).length;w=(!document.querySelectorAll&&a&&q.rule&&q.rule===r&&q.doc===t)?q.elms:e(w,DOMAssistant.cssSelection.call(document,r));q={rule:r,elms:w,doc:t}}}}return w},$$:function(x,u){var w=(typeof x==="object"||typeof x==="function"&&!!x.nodeName)?x:document.getElementById(x),v=b(u)?u:true,t=function(z){var y=z.id;return typeof y!=="object"?y:z.attributes.id.nodeValue};if(typeof x==="string"&&w&&t(w)!==x){w=null;for(var r=0,s;(s=document.all[r]);r++){if(t(s)===x){w=s;break}}}if(w&&v&&!w.next){DOMAssistant.addMethodsToElm(w)}return w},prev:function(){return DOMAssistant.$$(f(this,"previous"))},next:function(){return DOMAssistant.$$(f(this,"next"))},hasChild:function(r){return this===document||this!==r&&(this.contains?this.contains(r):!!(this.compareDocumentPosition(r)&16))},getSequence:function(v){var w,u=2,s=-1,r=-1,t=m.nth.exec(v.replace(/^0n\+/,"").replace(/^2n$/,"even").replace(/^2n+1$/,"odd"));if(!t){return null}if(t[2]){w=(t[2]==="odd")?1:2;r=(w===1)?1:0}else{if(t[3]){w=s=parseInt(t[3],10);u=0}else{if(t[4]){u=t[6]?parseInt(t[6],10):1;w=t[7]?parseInt(t[7],10):0;while(w<1){w+=u}r=(w>=u)?(w-u)%u:w}else{if(t[8]){u=t[10]?parseInt(t[10],10):1;w=s=parseInt(t[11],10);while(w>u){w-=u}r=(s>=u)?(s-u)%u:s}}}}return{start:w,add:u,max:s,modVal:r}},cssByDOM:function(v){var aU,I,D,N,av,x,ah,A,K,w,aq,aN,y,aI,at,aB=new j(),aR=aB.indexOf,ap=[],aG=[],aK=v.replace(m.rules,",").split(","),aF={};function aQ(s){s=s||ap;for(var r=s.length;r--;){s[r].added=null;s[r].removeAttribute("added")}}function C(){for(var r=aU.length;r--;){aU[r].childElms=null}}function am(t,r){for(var u=0,aX;(aX=t[u]);u++){var aW=false;for(var s=0,aV;(aV=r[s]);s++){if(aV===aX){aW=true;r.splice(s,1);break}}if(aW){t.splice(u--,1)}}return t}function E(s,r){return(d||m.special.test(r))?s[p[r.toLowerCase()]||r]:s.getAttribute(r,2)}function P(r,s){r=r?r.replace(m.quoted,"$1").replace(/(\.|\[|\])/g,"\\$1"):null;return{"^":"^"+r,"$":r+"$","*":r,"|":"^"+r+"(\\-\\w+)*$","~":"\\b"+r+"\\b"}[s]||(r!==null?"^"+r+"$":r)}function W(r){return(r||this).tagName!=="!"}function S(r,s){return i?(r==="*"?s.all:s.all.tags(r)):s.getElementsByTagName(r)}function aL(r,s){r=r||"*";s=s||document;return(s===document||s.lastModified)?c[r]||(c[r]=S(r,document)):S(r,s)}function ar(aX,bf,u){aU=[];var aV=bf.split("-"),a0=[],a5=0,be=/\-of\-type$/.test(bf),a4,aZ={first:function(bg){return !f(bg,"previous",be)},last:function(bg){return !f(bg,"next",be)},empty:function(bg){return !bg.firstChild},enabled:function(bg){return !bg.disabled&&bg.type!=="hidden"},disabled:function(bg){return bg.disabled},checked:function(bg){return bg.checked},contains:function(bg){return(bg.innerText||bg.textContent||"").indexOf(u.replace(m.quoted,"$1"))>-1},other:function(bg){return E(bg,bf)===u}};function t(bg){while((A=aX[a5++])){if(W(A)&&aZ[bg](A)){a0[a0.length]=A}}return a0}var bb=aV[0]||null;if(bb&&aZ[bb]){return t(bb)}switch(bb){case"only":var a1,aW;while((A=aX[a5++])){K=A.parentNode;var a6=A.nodeName;if(K!==a1||a6!==aW){if(aZ.first(A)&&aZ.last(A)){a0[a0.length]=A}a1=K;aW=a6}}break;case"nth":if(u==="n"){a0=aX}else{var bd=(aV[1]==="last")?["lastChild","previousSibling"]:["firstChild","nextSibling"];aI=DOMAssistant.getSequence(u);if(aI){while((A=aX[a5++])){K=A.parentNode;K.childElms=K.childElms||{};var a7=A.nodeName;if(!K.childElms[a7]){var ba=0;aN=aI.start;y=K[bd[0]];while(y&&(aI.max<0||aN<=aI.max)){var bc=y.nodeName;if((be&&bc===a7)||(!be&&y.nodeType===1&&bc!=="!")){if(++ba===aN){if(bc===a7){a0[a0.length]=y}aN+=aI.add}}y=y[bd[1]]}if(at){h++}K.childElms[a7]=true;aU[aU.length]=K}}C()}}break;case"target":var s=document.location.hash.slice(1);if(s){while((A=aX[a5++])){if(E(A,"name")===s||E(A,"id")===s){a0[a0.length]=A;break}}}break;case"not":if((a4=m.pseudo.exec(u))){a0=am(aX,ar(aX,a4[1]?a4[1].toLowerCase():null,a4[3]||null))}else{for(var a8 in m){if(m[a8].lastIndex){m[a8].lastIndex=0}}u=u.replace(m.id,"[id=$1]");var a3=m.tag.exec(u);var aY=m.classes.exec(u);var a2=m.attribs.exec(u);var r=new RegExp(a2?P(a2[4],a2[2]):"(^|\\s)"+(a3?a3[0]:aY?aY[1]:"")+"(\\s|$)","i");while((w=aX[a5++])){aq=null;if(a3&&!r.test(w.nodeName)||aY&&!r.test(w.className)){aq=w}else{if(a2){var a9=E(w,a2[1]);if(!b(a9)||a9===false||typeof a9==="string"&&!r.test(a9)){aq=w}}}if(aq&&!aq.added){aq.added=true;a0[a0.length]=aq}}}break;default:return t("other")}return a0}function Z(aV,t){var r=0,u=aV,aW;while((aW=t[r++])){if(!u.length||u.indexOf(aW)<0){aV.push(aW)}}return aV}h=-1;for(var ak=0,aJ=[];(I=aK[ak]);ak++){if(!(D=I.match(m.selectorSplit))||ak&&aR.call(aK.slice(0,ak),I)>-1){continue}ap=[this];for(var ai=0,G;(G=D[ai]);ai++){aG=[];if((N=m.relation.exec(G))){var an=null,aS=D[ai+1];if((av=m.tag.exec(aS))){av=av[0];x=new RegExp("(^|\\s)"+av+"(\\s|$)","i")}else{if(m.id.test(aS)){an=DOMAssistant.$(aS)||null}}for(var ag=0,M;(M=ap[ag]);ag++){switch(N[0]){case">":var aD=an||aL(av,M);for(var ae=0,ay;(ay=aD[ae]);ae++){if(ay.parentNode===M){aG[aG.length]=ay}}break;case"+":if((M=f(M,"next"))){if((an&&an[0]===M)||(!an&&(!av||x.test(M.nodeName)))){aG[aG.length]=M}}break;case"~":while((M=M.nextSibling)&&!M.added){if((an&&an[0]===M)||(!an&&(!av||x.test(M.nodeName)))){M.added=true;aG[aG.length]=M}}break}}ap=aG;aQ();G=D[++ai];if(/^\w+$/.test(G)||m.id.test(G)){continue}ap.skipTag=true}var au=m.selector.exec(G);aF={tag:au[1]?au[1]:"*",id:au[2],allClasses:au[3],allAttr:au[5],allPseudos:au[10]};at=(aF.tag==="*");if(aF.id){var O=0,al=document.getElementById(aF.id.slice(1));if(al){while(ap[O]&&!DOMAssistant.hasChild.call(ap[O],al)){O++}aG=(O<ap.length&&(at||aF.tag===al.tagName.toLowerCase()))?[al]:[]}ap=aG}else{if(aF.tag&&!ap.skipTag){if(ai===0&&!aG.length&&ap.length===1){ap=aG=e([],aL(aF.tag,ap[0]))}else{for(var ad=0,aO=ap.length,az,aw;ad<aO;ad++){az=aL(aF.tag,ap[ad]);for(var aa=0;(aw=az[aa]);aa++){if(!aw.added){aw.added=true;aG[aG.length]=aw}}}ap=aG;aQ()}}}if(!aG.length){break}ap.skipTag=false;if(aF.allClasses){var Y=0,ab=[],J=aF.allClasses.split(".").slice(1);while((ah=ap[Y++])){var af=true,ax=ah.className;if(ax&&ax.length){ax=ax.split(" ");for(var X=J.length;X--;){if(ax.indexOf(J[X])<0){af=false;break}}if(af){ab[ab.length]=ah}}}ap=aG=ab}if(aF.allAttr){var B,T=0,aC=[],ac=[],aH=aF.allAttr.match(m.attribs);for(var H=/^\[(selected|readonly)(\s*=.+)?\]$/,V=0,z=aH.length,U,aP;V<z;V++){m.attribs.lastIndex=0;U=m.attribs.exec(aH[V].replace(H,"[$1]"));aP=P(U[4],U[2]||null);aC[V]=[(aP?new RegExp(aP):null),U[1]]}while((ah=aG[T++])){for(var R=0,aE=aC.length;R<aE;R++){var aA=aC[R][0],aj=E(ah,aC[R][1]);B=true;if(!aA&&aj===true){continue}if((!aA&&(!aj||typeof aj!=="string"||!aj.length))||(!!aA&&!aA.test(aj))){B=false;break}}if(B){ac[ac.length]=ah}}ap=aG=ac}if(aF.allPseudos){var F=aF.allPseudos.match(m.pseudos);for(var Q=0,ao=F.length;Q<ao;Q++){m.pseudos.lastIndex=0;var aT=m.pseudos.exec(F[Q]);var L=aT[1]?aT[1].toLowerCase():null;var aM=aT[3]||null;aG=ar(aG,L,aM);aQ(aG)}ap=aG}}aB=((aJ.length&&(at||aR.call(aJ,aF.tag)>=0||aR.call(aJ,"*")>=0))?Z:e)(aB,ap);aJ.push(aF.tag);if(d&&at){aB=aB.filter(W)}}return((aB.length>1&&aK.length>1)||h>0)?l(aB):aB},cssByXpath:function(s){var t={xhtml:"http://www.w3.org/1999/xhtml"},u=(document.documentElement.namespaceURI===t.xhtml)?"xhtml:":"",r=function v(w){return t[w]||null};DOMAssistant.cssByXpath=function(N){var R,T,J,z,A,E,B=new j(),C=N.replace(m.rules,",").split(",");function M(W){var X=W?"[":"",V=W?"]":"";return function(Y,ac,ab,aa,Z){Z=(Z||"").replace(m.quoted,"$1");if(ac===Z&&ac==="readonly"){aa=null}return X+({"^":"starts-with(@"+ac+', "'+Z+'")',"$":"substring(@"+ac+", (string-length(@"+ac+") - "+(Z.length-1)+"), "+Z.length+') = "'+Z+'"',"*":'contains(concat(" ", @'+ac+', " "), "'+Z+'")',"|":"@"+ac+'="'+Z+'" or starts-with(@'+ac+', "'+Z+'-")',"~":'contains(concat(" ", @'+ac+', " "), " '+Z+' ")'}[ab]||("@"+ac+(aa?'="'+Z+'"':"")))+V}}function P(W,Y,X){W=/\-child$/.test(Y)?"*":W;var aa=Y.split("-"),V=((aa[1]==="last")?"(count(following-sibling::":"(count(preceding-sibling::")+W+") + 1)",Z,ab;switch(aa[0]){case"nth":return(X!=="n"&&(E=DOMAssistant.getSequence(X)))?((E.start===E.max)?V+" = "+E.start:V+" mod "+E.add+" = "+E.modVal+((E.start>1)?" and "+V+" >= "+E.start:"")+((E.max>0)?" and "+V+" <= "+E.max:"")):"";case"not":return"not("+((Z=m.pseudo.exec(X))?P(W,Z[1]?Z[1].toLowerCase():null,Z[3]||null):X.replace(m.id,"[id=$1]").replace(m.tag,"self::$0").replace(m.classes,'contains(concat(" ", @class, " "), " $1 ")').replace(m.attribs,M()))+")";case"first":return"not(preceding-sibling::"+W+")";case"last":return"not(following-sibling::"+W+")";case"only":return"not(preceding-sibling::"+W+" or following-sibling::"+W+")";case"empty":return"not(child::*) and not(text())";case"contains":return'contains(., "'+X.replace(m.quoted,"$1")+'")';case"enabled":return'not(@disabled) and not(@type="hidden")';case"disabled":return"@disabled";case"target":return'@name="'+(ab=document.location.hash.slice(1))+'" or @id="'+ab+'"';default:return"@"+Y+'="'+X+'"'}}for(var O=0;(R=C[O]);O++){if(!(T=R.match(m.selectorSplit))||O&&B.indexOf.call(C.slice(0,O),R)>-1){continue}J=J?J+" | .":".";for(var L=0,Q=T.length;L<Q;L++){z=m.selector.exec(T[L]);A={tag:u+(z[1]?z[1]:"*"),id:z[2],allClasses:z[3],allAttr:z[5],allPseudos:z[10],tagRelation:z[20]};J+=(A.tagRelation?({">":"/","+":"/following-sibling::*[1]/self::","~":"/following-sibling::"}[A.tagRelation]||""):((L>0&&m.relation.test(T[L-1]))?A.tag:("//"+A.tag)))+(A.id||"").replace(m.id,'[@id = "$1"]')+(A.allClasses||"").replace(m.classes,'[contains(concat(" ", @class, " "), " $1 ")]')+(A.allAttr||"").replace(m.attribs,M(true));if(A.allPseudos){var D=A.allPseudos.match(m.pseudos);for(var K=0,x=D.length;K<x;K++){m.pseudos.lastIndex=0;var y=m.pseudos.exec(D[K]),U=y[1]?y[1].toLowerCase():null,w=y[3]||null,G=P(A.tag,U,w);if(G.length){J+="["+G+"]"}}}}}try{var I=document.evaluate(J,this,r,7,null),H,F=0;while((H=I.snapshotItem(F++))){B.push(H)}}catch(S){}return B};return DOMAssistant.cssByXpath.call(this,s)},cssSelection:function(s){if(!s){return null}var r=m.special.test(s);try{if(document.querySelectorAll&&!r){return e(new j(),this.querySelectorAll(s))}}catch(t){}return((document.evaluate&&!r&&!/-of-type/.test(s))?DOMAssistant.cssByXpath:DOMAssistant.cssByDOM).call(this,s)},cssSelect:function(r){return DOMAssistant.cssSelection.call(this,r)},elmsByClass:function(t,r){var s=(r||"")+"."+t;return DOMAssistant.cssSelection.call(this,s)},elmsByAttribute:function(s,t,r,v){var u=(r||"")+"["+s+((t&&t!=="*")?((v||"")+"="+t+"]"):"]");return DOMAssistant.cssSelection.call(this,u)},elmsByTag:function(r){return DOMAssistant.cssSelection.call(this,r)}}}();DOMAssistant.initCore();DOMAssistant.Storage=function(){var c=1,a=[],b="_da"+ +new Date();return{hasData:function(){var d=this[b];return !!d&&!!a[d]},retrieve:function(d){if(!DOMAssistant.def(d)){return this[b]||(this[b]=c++)}if(!this[b]||!a[this[b]]){return}return a[this[b]][d]},store:function(f,g){var e=this[b]||(this[b]=c++);a[e]=a[e]||{};if(typeof f==="object"){for(var d in f){if(typeof d==="string"){a[e][d]=f[d]}}}else{a[e][f]=g}return this},unstore:function(e){var d=this[b]||(this[b]=c++);if(a[d]){if(DOMAssistant.def(e)){delete a[d][e]}else{a[d]=null}}return this}}}();DOMAssistant.attach(DOMAssistant.Storage);DOMAssistant.AJAX=function(){var globalXMLHttp=null,readyState=0,status=-1,statusText="",requestPool=[],createAjaxObj=function(url,method,callback,addToContent){var params=null;if(/POST/i.test(method)){url=url.split("?");params=url[1];url=url[0]}return{url:url,method:method,callback:callback,params:params,headers:{},responseType:"text",addToContent:addToContent||false}};return{publicMethods:["ajax","get","post","load"],initRequest:function(){var XMLHttp=null;if(!!window.XMLHttpRequest&&!DOMAssistant.isIE){XMLHttp=new XMLHttpRequest();DOMAssistant.AJAX.initRequest=function(){return requestPool.length?requestPool.pop():new XMLHttpRequest()}}else{if(!!window.ActiveXObject){var XMLHttpMS=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP","Microsoft.XMLHTTP"];for(var i=0;i<XMLHttpMS.length;i++){try{XMLHttp=new window.ActiveXObject(XMLHttpMS[i]);DOMAssistant.AJAX.initRequest=function(){return requestPool.length?requestPool.pop():new window.ActiveXObject(XMLHttpMS[i])};break}catch(e){XMLHttp=null}}}}return XMLHttp},ajax:function(ajaxObj){if(!ajaxObj.noParse&&ajaxObj.url&&/\?/.test(ajaxObj.url)&&ajaxObj.method&&/POST/i.test(ajaxObj.method)){var url=ajaxObj.url.split("?");ajaxObj.url=url[0];ajaxObj.params=url[1]+((url[1].length>0&&ajaxObj.params)?("&"+ajaxObj.params):"")}return DOMAssistant.AJAX.makeCall.call(this,ajaxObj)},get:function(url,callback,addToContent){return DOMAssistant.AJAX.makeCall.call(this,createAjaxObj(url,"GET",callback,addToContent))},post:function(url,callback){return DOMAssistant.AJAX.makeCall.call(this,createAjaxObj(url,"POST",callback))},load:function(url,addToContent){this.get(url,DOMAssistant.AJAX.replaceWithAJAXContent,addToContent)},makeCall:function(ajaxObj){var XMLHttp=DOMAssistant.AJAX.initRequest();if(XMLHttp){globalXMLHttp=XMLHttp;(function(elm){var url=ajaxObj.url,method=ajaxObj.method||"GET",callback=ajaxObj.callback,params=ajaxObj.params,headers=ajaxObj.headers,responseType=ajaxObj.responseType||"text",addToContent=ajaxObj.addToContent,timeout=ajaxObj.timeout||null,ex=ajaxObj.exception,timeoutId=null,done=false;XMLHttp.open(method,url,true);XMLHttp.setRequestHeader("AJAX","true");XMLHttp.setRequestHeader("X-Requested-With","XMLHttpRequest");if(method==="POST"){XMLHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");XMLHttp.setRequestHeader("Content-length",params?params.length:0);if(XMLHttp.overrideMimeType){XMLHttp.setRequestHeader("Connection","close")}}if(responseType==="json"){XMLHttp.setRequestHeader("Accept","application/json, text/javascript, */*")}for(var i in headers){if(typeof i==="string"){XMLHttp.setRequestHeader(i,headers[i])}}if(typeof callback==="function"){XMLHttp.onreadystatechange=function(){try{if(XMLHttp.readyState===4&&!done){window.clearTimeout(timeoutId);done=true;status=XMLHttp.status;statusText=XMLHttp.statusText;readyState=4;if((status||location.protocol!=="file:")&&(status<200||status>=300)){throw new Error(statusText)}var response=/xml/i.test(responseType)?XMLHttp.responseXML:XMLHttp.responseText;if(/json/i.test(responseType)&&!!response){response=(typeof JSON==="object"&&typeof JSON.parse==="function")?JSON.parse(response):eval("("+response+")")}globalXMLHttp=null;XMLHttp.onreadystatechange=function(){};requestPool.push(XMLHttp);callback.call(elm,response,addToContent)}}catch(e){globalXMLHttp=XMLHttp=null;if(typeof ex==="function"){ex.call(elm,e);ex=null}}}}XMLHttp.send(params);if(timeout){timeoutId=window.setTimeout(function(){if(!done){XMLHttp.abort();done=true;if(typeof ex==="function"){readyState=0;status=408;statusText="Request timeout";globalXMLHttp=XMLHttp=null;ex.call(elm,new Error(statusText));ex=null}}},timeout)}})(this)}return this},replaceWithAJAXContent:function(content,add){if(add){this.innerHTML+=content}else{DOMAssistant.cleanUp(this);this.innerHTML=content}},getReadyState:function(){return(globalXMLHttp&&DOMAssistant.def(globalXMLHttp.readyState))?globalXMLHttp.readyState:readyState},getStatus:function(){return status},getStatusText:function(){return statusText}}}();DOMAssistant.attach(DOMAssistant.AJAX);DOMAssistant.CSS=function(){var a=DOMAssistant.def,b={display:true};return{addClass:function(d){if(!this.hasClass(d)){var c=this.className;this.className=c+(c.length?" ":"")+d}return this},removeClass:function(c){return this.replaceClass(c)},replaceClass:function(d,e){var c=new RegExp(("(^|\\s)"+d+"(\\s|$)"),"i");this.className=this.className.replace(c,function(f,h,g){return e?(h+e+g):" "}).replace(/^\s+|\s+$/g,"");return this},hasClass:function(c){return(" "+this.className+" ").indexOf(" "+c+" ")>-1},setStyle:function(f,g){var e=this.style;if("filters" in this&&(typeof f==="string"?/opacity/i.test(f):a(f.opacity))){e.zoom=1;e.filter=(e.filter||"").replace(/alpha\([^)]*\)/,"")+"alpha(opacity="+(a(f.opacity)?f.opacity:g)*100+")"}if(a(e.cssText)){var c=e.cssText;if(typeof f==="object"){for(var d in f){if(typeof d==="string"){if(b[d]){e[d]=f[d]}c+=";"+d+":"+f[d]}}}else{if(b[f]){e[f]=g}c+=";"+f+":"+g}e.cssText=c}return this},getStyle:function(c){var e="",d;c=c.toLowerCase();if(document.defaultView&&document.defaultView.getComputedStyle){e=document.defaultView.getComputedStyle(this,"").getPropertyValue(c)}else{if(this.currentStyle){if("filters" in this&&c==="opacity"){e=(d=this.style.filter||this.currentStyle.filter)&&d.indexOf("opacity=")>=0?parseFloat(d.match(/opacity=([^)]*)/)[1])/100:1}else{c=c.replace(/^float$/,"styleFloat").replace(/\-(\w)/g,function(f,g){return g.toUpperCase()});e=this.currentStyle[c]}if(e==="auto"&&/^(width|height)$/.test(c)&&this.currentStyle.display!=="none"){e=this["offset"+c.charAt(0).toUpperCase()+c.substr(1)]+"px"}}}return e}}}();DOMAssistant.attach(DOMAssistant.CSS);DOMAssistant.Content=function(){var a=DOMAssistant.$$;return{init:function(){DOMAssistant.setCache(false)},create:function(d,c,b,e){var f=a(document.createElement(d));if(c){f=f.setAttributes(c)}if(DOMAssistant.def(e)){f.addContent(e)}if(b){this.appendChild(f)}return f},setAttributes:function(b){if(DOMAssistant.isIE){var c=function(g,e,f){var d=e.toLowerCase();switch(d){case"name":case"type":case"multiple":return a(document.createElement(g.outerHTML.replace(new RegExp(d+"(=[a-zA-Z]+)?")," ").replace(">"," "+d+"="+f+">")));case"style":g.style.cssText=f;return g;default:g[DOMAssistant.camel[d]||e]=f;return g}};DOMAssistant.Content.setAttributes=function(d){var h=this;var g=this.parentNode;for(var f in d){if(typeof d[f]==="string"||typeof d[f]==="number"){var e=c(h,f,d[f]);if(g&&/(name|type)/i.test(f)){if(h.innerHTML){e.innerHTML=h.innerHTML}g.replaceChild(e,h)}h=e}}return h}}else{DOMAssistant.Content.setAttributes=function(d){for(var e in d){if(/class/i.test(e)){this.className=d[e]}else{this.setAttribute(e,d[e])}}return this}}return DOMAssistant.Content.setAttributes.call(this,b)},addContent:function(f){var d=typeof f;if(d==="string"||d==="number"){if(!this.firstChild){this.innerHTML=f}else{var c=document.createElement("div");c.innerHTML=f;for(var b=c.childNodes.length-1,e=null;b>=0;b--){e=this.insertBefore(c.childNodes[b],e)}}}else{if(d==="object"||(d==="function"&&!!f.nodeName)){this.appendChild(f)}}return this},replaceContent:function(b){DOMAssistant.cleanUp(this);return this.addContent(b)},replace:function(g,b){var f=typeof g;if(f==="string"||f==="number"){var e=this.parentNode;var d=DOMAssistant.Content.create.call(e,"div",null,false,g);for(var c=d.childNodes.length;c--;){e.insertBefore(d.childNodes[c],this.nextSibling)}g=this.nextSibling;e.removeChild(this)}else{if(f==="object"||(f==="function"&&!!g.nodeName)){this.parentNode.replaceChild(g,this)}}return b?g:this},remove:function(){DOMAssistant.cleanUp(this);if(this.hasData()){if(this.removeEvent){this.removeEvent()}this.unstore()}this.parentNode.removeChild(this);return null}}}();DOMAssistant.attach(DOMAssistant.Content);DOMAssistant.Events=function(){var i,g="_events",c=!!document.addEventListener,a={focus:true,blur:true},b=DOMAssistant.isIE?{focus:"activate",blur:"deactivate",mouseenter:"mouseover",mouseleave:"mouseout"}:{mouseenter:"mouseover",mouseleave:"mouseout"},f={special:/^submit|reset|change|select$/i,mouseenterleave:/^mouse(enter|leave)$/i,dom:/^DOM/,on:/^on/i},e=function(j){return DOMAssistant.isIE&&f.special.test(j)},d=function(j){return b[j]||j},h=function(n,k,m){n=n||window.event||{};if(n.event){return n}var l={event:n,type:k||n.type,bubbles:n.bubbles||true,cancelable:n.cancelable||false,target:m||n.target||n.srcElement,clientX:n.clientX||0,clientY:n.clientY||0,altKey:n.altKey||false,ctrlKey:n.ctrlKey||false,shiftKey:n.shiftKey||false,button:n.button||null,timeStamp:+new Date(),preventDefault:function(){if(n.preventDefault){n.preventDefault()}this.returnValue=n.returnValue=false},stopPropagation:function(){if(n.stopPropagation){n.stopPropagation()}this.cancelBubble=n.cancelBubble=true}};if(l.target&&3===l.target.nodeType){l.target=l.target.parentNode}l.currentTarget=l.target;l.relatedTarget=n.relatedTarget||(n.fromElement===l.target?n.toElement:n.fromElement)||null;var o=document.documentElement,j=document.body;l.pageX=DOMAssistant.def(n.pageX)?n.pageX:(l.clientX+(o.scrollLeft||j.scrollLeft)-(o.clientLeft||0));l.pageY=DOMAssistant.def(n.pageY)?n.pageY:(l.clientY+(o.scrollTop||j.scrollTop)-(o.clientTop||0));if("number"===typeof n.which){l.keyCode=n.keyCode;l.charCode=l.which=n.which}else{if(n.keyCode){l.keyCode=l.charCode=n.keyCode}}return l};return{publicMethods:["triggerEvent","addEvent","removeEvent","relayEvent","unrelayEvent","preventDefault","cancelBubble"],init:function(){DOMAssistant.preventDefault=this.preventDefault;DOMAssistant.cancelBubble=this.cancelBubble;i=this.handleEvent},triggerEvent:function(r,o,q){var m=d(r),s=this.retrieve(g),j=q||h(q,m,o||this);j.currentTarget=this;if(s&&s[m]){for(var n=0,l=s[m].length;n<l;n++){if(s[m][n].call(this,j)===false){j.stopPropagation()}}}else{if(typeof this["on"+m]==="function"){this["on"+m].call(this,j)}}var k=DOMAssistant.$$(this.parentNode);if(!j.cancelBubble&&k&&k.nodeType===1){k.triggerEvent(m,o,j)}return this},addEvent:function(r,l,k,q,n){var j,m=d(r),p=m+this.retrieve(),o="on"+m;if(!(l.attachedElements&&l.attachedElements[p])){var s=this.retrieve(g)||{};if(!s[m]){s[m]=[];j=this[o];this[o]=null}if(typeof this.window==="object"){this.window[o]=i}else{if(!s[m].length){if(c){this.addEventListener(m,i,a[m])}else{this[o]=i}}}if(j){s[m].push(j)}if(m!==r){l.evt=r}l.relay=k;l.proxy=q;l.selector=n;l.attachedElements=l.attachedElements||{};l.attachedElements[p]=true;s[m].push(l);this.store(g,s)}return this},handleEvent:function(r){var q=(r&&f.dom.test(r.type)&&c)?r:h(r),o=d(q.type),p=q.target,l=q.relatedTarget,n=this.retrieve(g)[o].slice(0),t,j,s;if((t=n.length)){for(var m=0;m<t;m++){if(typeof n[m]==="function"){if((s=n[m].evt)&&s!==o){q.type=s;if(l&&f.mouseenterleave.test(s)){if(n[m].relay){var k=n[m].elms||(n[m].elms=this.cssSelect(n[m].selector));if(k.indexOf(p)<0||!DOMAssistant.hasChild.call(l,p)){continue}}else{if(this===l||this.hasChild(l)){continue}}}}j=n[m].call(this,q)}}if(j===false){q.stopPropagation()}return j}},removeEvent:function(w,l,k,s){var q=(w=d(w))+this.retrieve(),x=this.retrieve(g),p="on"+w;if(x&&!w){for(var v in x){if(x[v].length){this.removeEvent(v)}}var r=this.attributes;for(var t,m=r.length;m--;){t=r[m].nodeName.toLowerCase();if(f.on.test(t)&&typeof this[t]==="function"){this[t]=null}}}else{if(x&&x[w]){var o=x[w];for(var u,n=o.length;n--;){u=l||o[n];if(o[n]===u&&k===u.relay&&s===u.proxy){o.splice(n,1);if(!!s&&u.selector){this.cssSelect(u.selector).removeEvent(s)}if(u.attachedElements){u.attachedElements[q]=null}}}if(!x[w].length){if(c){this.removeEventListener(w,i,a[w])}else{this[p]=null}}}else{if(this[p]&&!l&&!k){this[p]=null}}}return this},relayEvent:function(k,j,m,l){if(e(k)){this.relayEvent("focus",j,function(){DOMAssistant.$$(this).removeEvent(k).addEvent(k,function(n){return m.call(this,h(n))})},k).relayEvent("blur",j,function(){DOMAssistant.$$(this).removeEvent(k)},k);return this}return this.addEvent(k,function(s){s=h(s);var r=s.target,n=arguments,o=0,t,p=this.cssSelect(j);while((t=p[o++])){if((t===r||DOMAssistant.hasChild.call(t,r))&&!t.disabled){s.currentTarget=t;var q=m.apply(t,n);if(!q){s.preventDefault()}return q}}},true,l,j)},unrelayEvent:function(j){if(e(j)){return this.removeEvent("focus",null,true,j).removeEvent("blur",null,true,j)}return this.removeEvent(j,null,true)},preventDefault:function(j){if(j.preventDefault){j.preventDefault()}j.returnValue=false},cancelBubble:function(j){if(j.stopPropagation){j.stopPropagation()}j.cancelBubble=true}}}();DOMAssistant.attach(DOMAssistant.Events);DOMAssistant.DOMLoad=function(){var g=false,a=null,f=[],b={},c=null,d=function(){for(var j=0,h=f.length;j<h;j++){try{f[j]()}catch(k){if(c&&typeof c==="function"){c(k)}}}f=[]},e=function(){if(g){return}g=true;d()};
/*@cc_on @if(@_win32||@_win64)document.write("<script id=\"ieScriptLoad\" defer src=\"//:\"><\/script>");document.getElementById("ieScriptLoad").onreadystatechange=function(){if(this.readyState==="complete"){e()}}@end@*/
if(document.addEventListener){document.addEventListener("DOMContentLoaded",e,false)}if(/KHTML|WebKit|iCab/i.test(navigator.userAgent)){a=setInterval(function(){if(/loaded|complete/i.test(document.readyState)){e();clearInterval(a)}},10)}window.onload=e;return{DOMReady:function(){for(var j=0,h=arguments.length,k;j<h;j++){k=arguments[j];if(!k.DOMReady&&!b[k]){if(typeof k==="string"){b[k]=true;k=new Function(k)}k.DOMReady=true;f.push(k)}}if(g){d()}},setErrorHandling:function(h){c=h}}}();DOMAssistant.DOMReady=DOMAssistant.DOMLoad.DOMReady;