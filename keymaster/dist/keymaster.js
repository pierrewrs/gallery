define("gallery/keymaster/1.0.2/keymaster",[],function(a,b,c){function d(a,b){for(var c=a.length;c--;)if(a[c]===b)return c;return-1}function e(a,b){var c,e,f,g,i;if(c=a.keyCode,-1==d(x,c)&&x.push(c),(93==c||224==c)&&(c=91),c in t){t[c]=!0;for(f in v)v[f]==c&&(h[f]=!0)}else if(h.filter.call(this,a)&&c in s)for(g=0;s[c].length>g;g++)if(e=s[c][g],e.scope==b||"all"==e.scope){i=e.mods.length>0;for(f in t)(!t[f]&&d(e.mods,+f)>-1||t[f]&&-1==d(e.mods,+f))&&(i=!1);(0!=e.mods.length||t[16]||t[18]||t[17]||t[91])&&!i||e.method(a,e)===!1&&(a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation&&a.stopPropagation(),a.cancelBubble&&(a.cancelBubble=!0))}}function f(a){var b,c=a.keyCode,e=d(x,c);if(e>=0&&x.splice(e,1),(93==c||224==c)&&(c=91),c in t){t[c]=!1;for(b in v)v[b]==c&&(h[b]=!1)}}function g(){for(q in t)t[q]=!1;for(q in v)h[q]=!1}function h(a,b,c){var d,e,f,g;for(void 0===c&&(c=b,b="all"),a=a.replace(/\s/g,""),d=a.split(","),""==d[d.length-1]&&(d[d.length-2]+=","),f=0;d.length>f;f++){if(e=[],a=d[f].split("+"),a.length>1){for(e=a.slice(0,a.length-1),g=0;e.length>g;g++)e[g]=v[e[g]];a=[a[a.length-1]]}a=a[0],a=w[a]||a.toUpperCase().charCodeAt(0),a in s||(s[a]=[]),s[a].push({shortcut:d[f],scope:b,method:c,key:d[f],mods:e})}}function i(a){if("string"==typeof a){if(1!=a.length)return!1;a=a.toUpperCase().charCodeAt(0)}return-1!=d(x,a)}function j(){return x}function k(a){var b=(a.target||a.srcElement).tagName;return!("INPUT"==b||"SELECT"==b||"TEXTAREA"==b)}function l(a){u=a||"all"}function m(){return u||"all"}function n(a){var b,c,d;for(b in s)for(c=s[b],d=0;c.length>d;)c[d].scope===a?c.splice(d,1):d++}function o(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,function(){c(window.event)})}function p(){var a=r.key;return r.key=y,a}var q,r={},s={},t={16:!1,18:!1,17:!1,91:!1},u="all",v={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},w={backspace:8,tab:9,clear:12,enter:13,"return":13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,"delete":46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},x=[];for(q=1;20>q;q++)v["f"+q]=111+q;for(q in v)h[q]=!1;o(document,"keydown",function(a){e(a,u)}),o(document,"keyup",f),o(window,"focus",g);var y=r.key;r.key=h,r.key.setScope=l,r.key.getScope=m,r.key.deleteScope=n,r.key.filter=k,r.key.isPressed=i,r.key.getPressedKeyCodes=j,r.key.noConflict=p,"undefined"!=typeof c&&(c.exports=r.key)});