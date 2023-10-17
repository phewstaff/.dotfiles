module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.deactivate=t.activate=void 0;const i=n(1),s=n(2),o=n(5);function a(e){return r(this,void 0,void 0,(function*(){yield i.tasks.executeTask(e);return new Promise(e=>{let t=i.tasks.onDidEndTask(n=>{n.execution.task.group===i.TaskGroup.Build&&(t.dispose(),e())})})}))}t.activate=function(e){e.subscriptions.push(i.commands.registerCommand("extension.refreshBrowser",()=>r(this,void 0,void 0,(function*(){const e=i.workspace.getConfiguration("refreshBrowser");if(!0===e.get("runBuildTask")){const e=yield function(){return r(this,void 0,void 0,(function*(){return new Promise(e=>{i.tasks.fetchTasks().then(t=>{e(t.filter(e=>e.group===i.TaskGroup.Build))})})}))}();for(const t of e)yield a(t)}(function(e){return new Promise((t,n)=>{s.execString(e,(e,r)=>{e?n(e):t(r)})})})(o.default.get(e.get("browser"),e.get("urlPrefixes"))).catch(e=>{console.log(e),i.window.showErrorMessage("Unexpected AppleScript error occurred while trying to refresh browser. Please report to https://git.io/Ju4oG. "+String(e))})}))))},t.deactivate=function(){}},function(e,t){e.exports=require("vscode")},function(e,t,n){var r=n(3).spawn;t.Parsers=n(4);var i=t.Parsers.parse;function s(e,n,s){var a=!1;Array.isArray(n)||(s=n,n=[],a=!0),n.push("-ss"),a||n.push(e);var u=r(t.osascript,n);o(u.stdout),o(u.stderr),u.on("exit",(function(t){var n,r=i(u.stdout.body);t&&((n=new Error(u.stderr.body)).appleScript=e,n.exitCode=t),s&&s(n,r,u.stderr.body)})),a&&(u.stdin.write(e),u.stdin.end())}function o(e){e.body="",e.setEncoding("utf8"),e.on("data",(function(t){e.body+=t}))}t.osascript="osascript",t.execFile=function(e,t,n){return Array.isArray(t)||(n=t,t=[]),s(e,t,n)},t.execString=function(e,t){return s(e,t)}},function(e,t){e.exports=require("child_process")},function(e,t){function n(){var e=this.value[this.index];switch(e){case"{":return t.ArrayParser.call(this);case'"':return t.StringParser.call(this);case"a":if("alias"==this.value.substring(this.index,this.index+5))return t.AliasParser.call(this);break;case"«":if("«data"==this.value.substring(this.index,this.index+5))return t.DataParser.call(this)}return isNaN(e)?t.UndefinedParser.call(this):t.NumberParser.call(this)}t.parse=function(e){if(0!=e.length)return n.call({value:e,index:0})},t.AliasParser=function(){return this.index+=6,"/Volumes/"+t.StringParser.call(this).replace(/:/g,"/")},t.ArrayParser=function(){for(var e=[],t=this.value[++this.index];"}"!=t;)e.push(n.call(this)),","==this.value[this.index]&&(this.index+=2),t=this.value[this.index];return this.index++,e},t.DataParser=function(){var e=t.UndefinedParser.call(this),n=(e=e.substring(6,e.length-1)).substring(0,4);e=e.substring(4,e.length);for(var r=new Buffer(e.length/2),i=0,s=0,o=e.length;s<o;s+=2)r[i++]=parseInt(e[s]+e[s+1],16);return r.type=n,r},t.NumberParser=function(){return Number(t.UndefinedParser.call(this))},t.StringParser=function(e){for(var t="",n=++this.index,r=this.value[n++];'"'!=r;)"\\"==r&&(t+=this.value.substring(this.index,n-1),this.index=n++),r=this.value[n++];return t+=this.value.substring(this.index,n-1),this.index=n,t};var r=/}|,|\n/;t.UndefinedParser=function(){for(var e=this.index,t=this.value[e++];!r.test(t);)t=this.value[e++];var n=this.value.substring(this.index,e-1);return this.index=e-1,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r={safari:["Safari","Webkit","Safari Technology Preview"],chrome:["Google Chrome","Opera","Microsoft Edge","Vivaldi","Brave Browser","Yandex","Chromium","Google Chrome Canary"]},i={safari:(e,t)=>`\n${s}\n\nset URL_PREFIXES to {${t.map(e=>`"${e}"`).join(",")}}\n\ntell application "${e}"\n    set _target to current tab of front window\n\n    if ((count of URL_PREFIXES) > 0) then\n        repeat with _window in windows\n            repeat with _tab in tabs of _window\n                if (my startswith(URL of _tab, URL_PREFIXES)) then\n                    set _target to _tab\n                    set current tab of _window to _tab\n                    exit repeat\n                end if\n            end repeat\n        end repeat\n    end if\n\n    if (URL of _target is not missing value) then\n        set URL of _target to (URL of _target)\n    end if\nend tell\n    `,chrome:(e,t)=>`\n${s}\n\nset URL_PREFIXES to {${t.map(e=>`"${e}"`).join(",")}}\n\ntell application "${e}"\n    set _wIndex to 0\n    set _tIndex to 0\n    set _target to active tab of front window\n\n    if ((count of URL_PREFIXES) > 0) then\n        repeat with _window in windows\n            set _wIndex to _wIndex + 1\n            repeat with _tab in tabs of _window\n                set _tIndex to _tIndex + 1\n\n                if (my startswith(URL of _tab, URL_PREFIXES)) then\n                    set _target to _tab\n                    set active tab index of window _wIndex to _tIndex\n                    exit repeat\n                end if\n            end repeat\n        end repeat\n    end if\n\n    reload _target\nend tell\n    `},s="\non startswith(_str, _list)\n    repeat with i in _list\n        if _str starts with i then return true\n    end repeat\n    false\nend startswith\n",o={getBrowserType:e=>Object.keys(r).find(t=>r[t].includes(e)),get(e,t){const n=this.getBrowserType(e);if(void 0!==n)return i[n](e,t)}};t.default=o}]);
//# sourceMappingURL=extension.js.map