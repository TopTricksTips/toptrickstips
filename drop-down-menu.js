/*
Drop Down Menu Script
URL : www.toptrickstips.com
*/

if(typeof dd_domreadycheck=="undefined")var dd_domreadycheck=false;var ddlevelsmenu={enableshim:true,arrowpointers:{downarrow:["http://3.bp.blogspot.com/-qkrQ5e7sggg/UQwAVRoPq8I/AAAAAAAADGk/aimTYsFNDL8/s1600/Down.png",8,8],rightarrow:["http://1.bp.blogspot.com/-D6XAubYlxnE/UQwAPyWJEII/AAAAAAAADGc/932oXhQUGDc/s1600/Right.png",9,9],showarrow:{toplevel:true,sublevel:true}},hideinterval:200,effects:{enableswipe:true,enableslide:true,enablefade:true,duration:200},httpsiframesrc:"blank.htm",topmenuids:[],topitems:{},subuls:{},lastactivesubul:{},topitemsindex:-1,ulindex:-1,hidetimers:{},shimadded:false,nonFF:!/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent),ismobile:navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)!=null,getoffset:function(e,t){return e.offsetParent?e[t]+this.getoffset(e.offsetParent,t):e[t]},getoffsetof:function(e){e._offsets={left:this.getoffset(e,"offsetLeft"),top:this.getoffset(e,"offsetTop")}},getwindowsize:function(){this.docwidth=window.innerWidth?window.innerWidth-10:this.standardbody.clientWidth-10;this.docheight=window.innerHeight?window.innerHeight-15:this.standardbody.clientHeight-18},gettopitemsdimensions:function(){for(var e=0;e<this.topmenuids.length;e++){var t=this.topmenuids[e];for(var n=0;n<this.topitems[t].length;n++){var r=this.topitems[t][n];var i=document.getElementById(r.getAttribute("rel"));r._dimensions={w:r.offsetWidth,h:r.offsetHeight,submenuw:i.offsetWidth,submenuh:i.offsetHeight}}}},isContained:function(e,t){var t=window.event||t;var n=t.relatedTarget||(t.type=="mouseover"?t.fromElement:t.toElement);while(n&&n!=e)try{n=n.parentNode}catch(t){n=e}if(n==e)return true;else return false},addpointer:function(e,t,n,r){var i=document.createElement("img");i.src=n[0];i.style.width=n[1]+"px";i.style.height=n[2]+"px";if(t=="rightarrowpointer"){i.style.left=e.offsetWidth-n[2]-2+"px"}i.className=t;var s=e.childNodes[e.firstChild.nodeType!=1?1:0];if(s&&s.tagName=="SPAN"){e=s}if(r=="before")e.insertBefore(i,e.firstChild);else e.appendChild(i)},css:function(e,t,n){var r=new RegExp("(^|\\s+)"+t+"($|\\s+)","ig");if(n=="check")return r.test(e.className);else if(n=="remove")e.className=e.className.replace(r,"");else if(n=="add"&&!r.test(e.className))e.className+=" "+t},addshimmy:function(e){var t=!window.opera?document.createElement("iframe"):document.createElement("div");t.className="ddiframeshim";t.setAttribute("src",location.protocol=="https:"?this.httpsiframesrc:"about:blank");t.setAttribute("frameborder","0");e.appendChild(t);try{t.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)"}catch(n){}return t},positionshim:function(e,t,n,r,i){if(e._istoplevel){var i=window.pageYOffset?window.pageYOffset:this.standardbody.scrollTop;var s=e._offsets.top-i;var o=i+this.docheight-e._offsets.top-e._dimensions.h;if(s>0){this.shimmy.topshim.style.left=r+"px";this.shimmy.topshim.style.top=i+"px";this.shimmy.topshim.style.width="99%";this.shimmy.topshim.style.height=s+"px"}if(o>0){this.shimmy.bottomshim.style.left=r+"px";this.shimmy.bottomshim.style.top=e._offsets.top+e._dimensions.h+"px";this.shimmy.bottomshim.style.width="99%";this.shimmy.bottomshim.style.height=o+"px"}}},hideshim:function(){this.shimmy.topshim.style.width=this.shimmy.bottomshim.style.width=0;this.shimmy.topshim.style.height=this.shimmy.bottomshim.style.height=0},buildmenu:function(e,t,n,r,i,s){t._master=e;t._pos=r;t._istoplevel=i;if(i){this.addEvent(t,function(e){ddlevelsmenu.hidemenu(ddlevelsmenu.subuls[this._master][parseInt(this._pos)].parentNode)},"click")}this.subuls[e][r]=n;t._dimensions={w:t.offsetWidth,h:t.offsetHeight,submenuw:n.offsetWidth,submenuh:n.offsetHeight};this.getoffsetof(t);n.parentNode.style.left=0;n.parentNode.style.top=0;n.parentNode.style.visibility="hidden";n.style.visibility="hidden";this.addEvent(t,function(e){if(ddlevelsmenu.ismobile||!ddlevelsmenu.isContained(this,e)){var n=ddlevelsmenu.subuls[this._master][parseInt(this._pos)];if(this._istoplevel){ddlevelsmenu.css(this,"selected","add");clearTimeout(ddlevelsmenu.hidetimers[this._master][this._pos])}ddlevelsmenu.getoffsetof(t);var r=window.pageXOffset?window.pageXOffset:ddlevelsmenu.standardbody.scrollLeft;var i=window.pageYOffset?window.pageYOffset:ddlevelsmenu.standardbody.scrollTop;var o=this._offsets.left+this._dimensions.submenuw+(this._istoplevel&&s=="topbar"?0:this._dimensions.w);var u=this._offsets.top+this._dimensions.submenuh;var a=this._istoplevel?this._offsets.left+(s=="sidebar"?this._dimensions.w:0):this._dimensions.w;if(o-r>ddlevelsmenu.docwidth){a+=-this._dimensions.submenuw+(this._istoplevel&&s=="topbar"?this._dimensions.w:-this._dimensions.w)}n.parentNode.style.left=a+"px";var f=this._istoplevel?this._offsets.top+(s=="sidebar"?0:this._dimensions.h):this.offsetTop;if(u-i>ddlevelsmenu.docheight){if(this._dimensions.submenuh<this._offsets.top+(s=="sidebar"?this._dimensions.h:0)-i){f+=-this._dimensions.submenuh+(this._istoplevel&&s=="topbar"?-this._dimensions.h:this._dimensions.h)}else{f+=-(this._offsets.top-i)+(this._istoplevel&&s=="topbar"?-this._dimensions.h:0)}}n.parentNode.style.top=f+"px";if(ddlevelsmenu.enableshim&&(ddlevelsmenu.effects.enableswipe==false||ddlevelsmenu.nonFF)){ddlevelsmenu.positionshim(t,n,s,r,i)}else{n.FFscrollInfo={x:r,y:i}}ddlevelsmenu.showmenu(t,n,s);if(!ddlevelsmenu.ismobile){if(e.preventDefault)e.preventDefault();if(e.stopPropagation)e.stopPropagation()}else{if(t._istoplevel||e.target.parentNode.getElementsByTagName("ul").length>0){e.preventDefault();e.stopPropagation()}}}},this.ismobile?"click":"mouseover");this.addEvent(t,function(e){var t=ddlevelsmenu.subuls[this._master][parseInt(this._pos)];if(this._istoplevel){if(!ddlevelsmenu.isContained(this,e)&&!ddlevelsmenu.isContained(t.parentNode,e))ddlevelsmenu.hidemenu(t.parentNode)}else if(!this._istoplevel&&!ddlevelsmenu.isContained(this,e)){ddlevelsmenu.hidemenu(t.parentNode)}},"mouseout")},setopacity:function(e,t){e.style.opacity=t;if(typeof e.style.opacity!="string"){e.style.MozOpacity=t;try{if(e.filters){e.style.filter="progid:DXImageTransform.Microsoft.alpha(opacity="+t*100+")"}}catch(n){}}},showmenu:function(e,t,n){if(this.effects.enableswipe||this.effects.enablefade){if(this.effects.enableswipe){var r=e._istoplevel&&n=="topbar"?e._dimensions.submenuh:e._dimensions.submenuw;t.parentNode.style.width=t.parentNode.style.height=0;t.parentNode.style.overflow="hidden"}if(this.effects.enablefade){t.parentNode.style.width=t.offsetWidth+"px";t.parentNode.style.height=t.offsetHeight+"px";this.setopacity(t.parentNode,0)}t._curanimatedegree=0;t.parentNode.style.visibility="visible";t.style.visibility="visible";clearInterval(t._animatetimer);t._starttime=(new Date).getTime();t._animatetimer=setInterval(function(){ddlevelsmenu.revealmenu(e,t,r,n)},10)}else{t.parentNode.style.visibility="visible";t.style.visibility="visible"}},revealmenu:function(e,t,n,r){var i=(new Date).getTime()-t._starttime;if(i<this.effects.duration){if(this.effects.enableswipe){if(t._curanimatedegree==0){t.parentNode.style[e._istoplevel&&r=="topbar"?"width":"height"]=(e._istoplevel&&r=="topbar"?t.offsetWidth:t.offsetHeight)+"px"}t.parentNode.style[e._istoplevel&&r=="topbar"?"height":"width"]=t._curanimatedegree*n+"px";if(this.effects.enableslide){t.style[e._istoplevel&&r=="topbar"?"top":"left"]=Math.floor((t._curanimatedegree-1)*n)+"px"}}if(this.effects.enablefade){this.setopacity(t.parentNode,t._curanimatedegree)}}else{clearInterval(t._animatetimer);if(this.effects.enableswipe){t.parentNode.style.width=t.offsetWidth+"px";t.parentNode.style.height=t.offsetHeight+"px";t.parentNode.style.overflow="visible";if(this.effects.enableslide){t.style.top=0;t.style.left=0}}if(this.effects.enablefade){this.setopacity(t.parentNode,1);t.parentNode.style.filter=""}if(this.enableshim&&t.FFscrollInfo)this.positionshim(e,t,r,t.FFscrollInfo.x,t.FFscrollInfo.y)}t._curanimatedegree=(1-Math.cos(i/this.effects.duration*Math.PI))/2},hidemenu:function(e){if(typeof e._pos!="undefined"){this.css(this.topitems[e._master][parseInt(e._pos)],"selected","remove");if(this.enableshim)this.hideshim()}clearInterval(e.firstChild._animatetimer);e.style.left=0;e.style.top="-1000px";e.style.visibility="hidden";e.firstChild.style.visibility="hidden"},addEvent:function(e,t,n){if(e.addEventListener)e.addEventListener(n,t,false);else if(e.attachEvent)e.attachEvent("on"+n,function(){return t.call(e,window.event)})},domready:function(e){if(dd_domreadycheck){e();return}if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);e();dd_domreadycheck=true},false)}else if(document.attachEvent){if(document.documentElement.doScroll&&window==window.top)(function(){if(dd_domreadycheck){e();return}try{document.documentElement.doScroll("left")}catch(t){setTimeout(arguments.callee,0);return}e();dd_domreadycheck=true})()}if(document.attachEvent&&parent.length>0)this.addEvent(window,function(){e()},"load")},init:function(e,t){this.standardbody=document.compatMode=="CSS1Compat"?document.documentElement:document.body;this.topitemsindex=-1;this.ulindex=-1;this.topmenuids.push(e);this.topitems[e]=[];this.subuls[e]=[];this.hidetimers[e]=[];if(this.enableshim&&!this.shimadded){this.shimmy={};this.shimmy.topshim=this.addshimmy(document.body);this.shimmy.bottomshim=this.addshimmy(document.body);this.shimadded=true}var n=document.getElementById(e);var r=n.getElementsByTagName("a");this.getwindowsize();for(var i=0;i<r.length;i++){if(r[i].getAttribute("rel")){this.topitemsindex++;this.ulindex++;var s=r[i];this.topitems[e][this.topitemsindex]=s;var o=document.getElementById(s.getAttribute("rel"));var u=document.createElement("div");u.className="ddsubmenustyle";o.removeAttribute("class");u.appendChild(o);document.body.appendChild(u);u.style.zIndex=2e3;u._master=e;u._pos=this.topitemsindex;this.addEvent(u,function(){ddlevelsmenu.hidemenu(this)},"click");var a=t=="sidebar"?"rightarrowpointer":"downarrowpointer";var f=t=="sidebar"?this.arrowpointers.rightarrow:this.arrowpointers.downarrow;if(this.arrowpointers.showarrow.toplevel)this.addpointer(s,a,f,t=="sidebar"?"before":"after");this.buildmenu(e,s,o,this.ulindex,true,t);u.onmouseover=function(){clearTimeout(ddlevelsmenu.hidetimers[this._master][this._pos])};this.addEvent(u,function(e){if(!ddlevelsmenu.isContained(this,e)&&!ddlevelsmenu.isContained(ddlevelsmenu.topitems[this._master][parseInt(this._pos)],e)){var t=this;if(ddlevelsmenu.enableshim)ddlevelsmenu.hideshim();ddlevelsmenu.hidetimers[this._master][this._pos]=setTimeout(function(){ddlevelsmenu.hidemenu(t)},ddlevelsmenu.hideinterval)}},"mouseout");var l=o.getElementsByTagName("ul");for(var c=0;c<l.length;c++){this.ulindex++;var h=l[c].parentNode;var p=document.createElement("div");p.appendChild(l[c]);h.appendChild(p);if(this.arrowpointers.showarrow.sublevel)this.addpointer(h.getElementsByTagName("a")[0],"rightarrowpointer",this.arrowpointers.rightarrow,"before");this.buildmenu(e,h,l[c],this.ulindex,false,t)}}}this.addEvent(window,function(){ddlevelsmenu.getwindowsize();ddlevelsmenu.gettopitemsdimensions()},"resize")},setup:function(e,t){this.domready(function(){ddlevelsmenu.init(e,t)})}}