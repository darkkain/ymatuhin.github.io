function $(a){return document.getElementById(a)}function dsp(b,a){if(a==undefined){return b.style.display}else{b.style.display=a}}function sh(b,a){if(a==undefined){if(dsp(b)!="none"&&dsp(b)!=""){return b.offsetHeight}viz=b.style.visibility;b.style.visibility="hidden";o=dsp(b);dsp(b,"block");r=parseInt(b.offsetHeight);dsp(b,o);b.style.visibility=viz;return r}else{b.style.height=a}}s=7;t=10;function ct(a){a=$(a);if(sh(a)>0){v=Math.round(sh(a)/a.s);v=(v<1)?1:v;v=(sh(a)-v);sh(a,v+"px");a.style.opacity=(v/a.maxh);a.style.filter="alpha(opacity="+(v*100/a.maxh)+");"}else{sh(a,0);dsp(a,"none");clearInterval(a.t)}}function et(a){a=$(a);if(sh(a)<a.maxh){v=Math.round((a.maxh-sh(a))/a.s);v=(v<1)?1:v;v=(sh(a)+v);sh(a,v+"px");a.style.opacity=(v/a.maxh);a.style.filter="alpha(opacity="+(v*100/a.maxh)+");"}else{sh(a,a.maxh);clearInterval(a.t)}}function cl(a){if(dsp(a)=="block"){clearInterval(a.t);a.t=setInterval('ct("'+a.id+'")',t)}}function ex(a){if(dsp(a)=="none"){dsp(a,"block");a.style.height="0px";clearInterval(a.t);a.t=setInterval('et("'+a.id+'")',t)}}function cc(b,a){s=b.className.split(/\s+/);for(p=0;p<s.length;p++){if(s[p]==a+b.tc){s.splice(p,1);b.className=s.join(" ");break}}}function Accordian(e,b,a){l=$(e).getElementsByTagName("div");c=[];for(i=0;i<l.length;i++){h=l[i].id;if(h.substr(h.indexOf("-")+1,h.length)=="content"){c.push(h)}}sel=null;for(i=0;i<l.length;i++){h=l[i].id;if(h.substr(h.indexOf("-")+1,h.length)=="header"){e=$(h.substr(0,h.indexOf("-"))+"-content");e.style.display="none";e.style.overflow="hidden";e.maxh=sh(e);e.s=(b==undefined)?7:b;h=$(h);h.tc=a;h.c=c;h.onclick=function(){for(i=0;i<this.c.length;i++){cn=this.c[i];n=cn.substr(0,cn.indexOf("-"));if((n+"-header")==this.id){ex($(n+"-content"));n=$(n+"-header");cc(n,"__");n.className=n.className+" "+n.tc}else{cl($(n+"-content"));cc($(n+"-header"),"")}}};if(h.className.match(/selected+/)!=undefined){sel=h}}}if(sel!=undefined){sel.onclick()}};