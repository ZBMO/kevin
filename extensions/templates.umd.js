(function(e,h){typeof exports=="object"&&typeof module<"u"?module.exports=h(require("vue"),require("../injectionKeys.ts")):typeof define=="function"&&define.amd?define(["vue","../injectionKeys.ts"],h):(e=typeof globalThis<"u"?globalThis:e||self,e.StreamsyncCustomComponentTemplates=h(e.vue,e.injectionKeys))})(this,function(e,h){"use strict";var l=(a=>(a.Text="Text",a.KeyValue="Key-Value",a.Color="Color",a.Shadow="Shadow",a.Number="Number",a.Object="Object",a.IdKey="Identifying Key",a))(l||{}),g=(a=>(a.General="General",a.Style="Style",a))(g||{});const $={name:"Accent",type:l.Color,category:g.Style,applyStyleVariable:!0},j={name:"Primary text",type:l.Color,category:g.Style,applyStyleVariable:!0},A={name:"Secondary text",type:l.Color,category:g.Style,applyStyleVariable:!0};l.Color,g.Style;const L={name:"Container background",type:l.Color,category:g.Style,applyStyleVariable:!0},M={name:"Container shadow",type:l.Shadow,category:g.Style,applyStyleVariable:!0},v={name:"Separator",type:l.Color,category:g.Style,applyStyleVariable:!0},V={name:"Button",type:l.Color,category:g.Style,applyStyleVariable:!0},T={name:"Button text",type:l.Color,category:g.Style,applyStyleVariable:!0},N={name:"Button shadow",type:l.Shadow,category:g.Style,applyStyleVariable:!0};l.Color,g.Style;const E={name:"Custom CSS classes",type:l.Text,category:g.Style,desc:"CSS classes, separated by spaces. You can define classes in custom stylesheets."},F={key:0},J={streamsync:{name:"Section",description:"A container component that divides the layout into sections, with an optional title.",category:"Layout",allowedChildrenTypes:["*"],fields:{title:{name:"Title",init:"Section Title",desc:"Leave blank to hide.",type:l.Text},accentColor:$,primaryTextColor:j,secondaryTextColor:A,containerBackgroundColor:L,containerShadow:M,separatorColor:v,buttonColor:V,buttonTextColor:T,buttonShadow:N,snapMode:{name:"Snap mode",type:l.Text,options:{no:"No",yes:"Yes"},default:"no",init:"no",category:g.Style,desc:"Use as much space as possible without altering the size of the container."},cssClasses:E},previewField:"title"}},P=e.defineComponent({...J,__name:"CustomCoreSection",setup(a){const u=e.inject(h.core),d=e.inject(h.instancePath);function p(c){const t=c.target.closest("[data-streamsync-id]");var s=u.getComponentById(t.dataset.streamsyncId);console.log("target component: "),console.log(s);var o=s.content.customId,n=t.dataset.streamsyncId;return o!=""?o:n}function _(c,t){const s=c.target.nodeName;return t.includes(s)}function y(c){if(c.stopPropagation(),!_(c,["BUTTON"]))return;const t=p(c),s=new CustomEvent("click",{detail:{payload:{id:t}}});u.forwardEvent(s,d,!0)}function C(c){if(c.stopPropagation(),!_(c,["SELECT","INPUT"]))return;const t=p(c),s=c.target.value,o=new CustomEvent("change",{detail:{payload:{id:t,value:s}}});u.forwardEvent(o,d,!0)}const b=e.inject(h.evaluatedFields);return(c,t)=>(e.openBlock(),e.createElementBlock("section",{class:e.normalizeClass(["CoreSection",{snapMode:e.unref(b).snapMode.value=="yes"}]),ref:"rootEl",onClickCapture:y},[e.unref(b).title.value?(e.openBlock(),e.createElementBlock("h2",F,e.toDisplayString(e.unref(b).title.value)+" CUSTOM SECTION",1)):e.createCommentVNode("",!0),e.createElementVNode("div",{"data-streamsync-container":"",onChangeCapture:C},[e.renderSlot(c.$slots,"default",{},void 0,!0)],32)],34))}}),pe="",B=(a,u)=>{const d=a.__vccOpts||a;for(const[p,_]of u)d[p]=_;return d},H=B(P,[["__scopeId","data-v-aec38c3b"]]);function U(a){const u={ctrlKey:a.ctrlKey,shiftKey:a.shiftKey,metaKey:a.metaKey};return new CustomEvent("ss-click",{detail:{payload:u}})}const Y=["aria-disabled"],q={streamsync:{name:"Button",description:"A standalone button component that can be linked to a click event handler.",docs:"\nStreamsync uses the library RemixIcon to display icons. To include an icon, check remixicon.com, find the icon's id (such as `arrow-up`) and it to your _Button_.\n",category:"Other",events:{"ss-click":{desc:"Capture single clicks.",stub:`
def handle_button_click(state):

	# Increment counter when the button is clicked

	state["counter"] += 1`.trim()}},fields:{text:{name:"Text",init:"Button Text",type:l.Text},customId:{name:"CustomId",init:"Button CustomId",type:l.Text},isDisabled:{name:"Disabled",default:"no",type:l.Text,options:{yes:"Yes",no:"No"},desc:"Disables all event handlers."},buttonColor:V,buttonTextColor:T,icon:{name:"Icon",type:l.Text,desc:'A RemixIcon id, such as "arrow-up".',category:g.Style},buttonShadow:N,separatorColor:v,cssClasses:E},previewField:"text"}},z=e.defineComponent({...q,__name:"CustomCoreButton",setup(a){const u=e.ref(null),d=e.inject(h.evaluatedFields),p=e.inject(h.isDisabled);e.watch(d.isDisabled,y=>{p.value=y=="yes"},{immediate:!0});function _(y){const C=U(y);u.value.dispatchEvent(C)}return(y,C)=>(e.openBlock(),e.createElementBlock("button",{class:"CoreButton","aria-disabled":e.unref(p),ref_key:"rootEl",ref:u,onClick:_},[e.unref(d).icon.value?(e.openBlock(),e.createElementBlock("i",{key:0,class:e.normalizeClass([`ri-${e.unref(d).icon.value}-line`,`ri-${e.unref(d).icon.value}`])},null,2)):e.createCommentVNode("",!0),e.createTextVNode(" "+e.toDisplayString(e.unref(d).text.value),1)],8,Y))}}),_e="",K=B(z,[["__scopeId","data-v-866d7116"]]);function R(a){const u=/[\\]?@{([^}]*)}/g;function d(t,s){var m;let o=[],n="",r=0;for(let i=0;i<t.length;i++){const f=t.charAt(i);f=="."?r==0?(o.push(n),n=""):n+=f:f=="["?(r==0?(o.push(n),n=""):n+=f,r++):f=="]"?(r--,r==0?n=(m=p(n,s))==null?void 0:m.toString():n+=f):n+=f}return n&&o.push(n),o}function p(t,s){let n=s?_(s):void 0,r=a.getUserState(),m=d(t,s);for(let i=0;i<m.length;i++)n=n==null?void 0:n[m[i]],r=r==null?void 0:r[m[i]];return n??r}function _(t){var o,n;const s={};for(let r=0;r<t.length-1;r++){const m=t[r],{componentId:i}=m,{type:f}=a.getComponentById(i);if(f!=="repeater"||r+1>=t.length)continue;const S=t.slice(0,r+1),k=t.slice(0,r+2),{instanceNumber:I}=k.at(-1),x=b(S,"repeaterObject");if(!x)continue;const w=Object.entries(x),ie=b(S,"keyVariable"),ue=b(S,"valueVariable");s[ie]=(o=w[I])==null?void 0:o[0],s[ue]=(n=w[I])==null?void 0:n[1]}return s}function y(t,s){return t==null?"":t.replace(u,(n,r)=>{if(n.charAt(0)=="\\")return n.substring(1);const m=r.trim();if(!m)return"";const i=p(m,s);return typeof i>"u"?"":typeof i=="object"?JSON.stringify(i):i.toString()})}function C(t){const{componentId:s}=t.at(-1),o=a.getComponentById(s);if(!o)return;const n={},{fields:r}=a.getComponentDefinition(o.type);if(r)return Object.keys(r).forEach(m=>{n[m]=e.computed(()=>b(t,m))}),n}function b(t,s){var I;const{componentId:o}=t.at(-1),n=a.getComponentById(o);if(!n)return;const{fields:r}=a.getComponentDefinition(n.type),m=(I=n.content)==null?void 0:I[s],i=r[s].default,f=y(m,t),S=r[s].type,k=typeof f>"u"||f===null||f==="";if(S==l.Object||S==l.KeyValue){if(!f)return JSON.parse(i)??null;if(typeof f!="string")return f;let x;try{x=JSON.parse(f)}catch{return JSON.parse(i)??null}return x}else if(S==l.Number){const x=i===null?null:parseFloat(i);if(k)return x??null;const w=parseFloat(f);return typeof w===void 0||Number.isNaN(w)?x??null:w}else return S==l.IdKey?m:k?i??"":f}function c(t,s){const o=a.getComponentById(t);return o?typeof o.visible>"u"||o.visible===!0?!0:o.visible===!1?!1:!!p(o.visible,s):void 0}return{getEvaluatedFields:C,isComponentVisible:c,evaluateExpression:p}}function D(a,u,d){const p=e.ref(),_=e.ref(!1),y=e.ref(null),C=u.at(-1).componentId,b=e.computed(()=>a.getComponentById(C)),{evaluateExpression:c}=R(a);function t(){var n;const o=a.getComponentById(C);if((n=o==null?void 0:o.binding)!=null&&n.stateRef)return c(o.binding.stateRef,u)}function s(o,n,r){var k,I;p.value=o;const m=(k=b.value.handlers)==null?void 0:k[n],i=((I=b.value.binding)==null?void 0:I.eventType)==n;if(!m&&!i)return;if(_.value){y.value={eventValue:o,emitEventType:n};return}_.value=!0;const f=()=>{_.value=!1,y.value&&(s(y.value.eventValue,y.value.emitEventType),y.value=null),r==null||r()},S=new CustomEvent(n,{detail:{payload:o,callback:f}});d.value.dispatchEvent(S)}return e.watch(()=>t(),o=>{_.value||(p.value=o)},{immediate:!0}),e.watch(p,o=>{typeof o>"u"&&(p.value="")},{immediate:!0}),{formValue:p,handleInput:s}}const G={class:"mainLabel"},Q={class:"selectContainer"},W=["value"],X=["value"],Z="A user input component that allows users to select a single value from a list of options using a dropdown menu.",ee={a:"Option A",b:"Option B"},te=`
def onchange_handler(state, payload):

	# Set the state variable "selected" to the selected option

	state["selected"] = payload`,ne={streamsync:{name:"Dropdown Input",description:Z,category:"Input",fields:{label:{name:"Label",init:"Input Label",type:l.Text},customId:{name:"CustomId",init:"Dropdown CustomId",type:l.Text},options:{name:"Options",desc:"Key-value object with options. Must be a JSON string or a state reference to a dictionary.",type:l.KeyValue,default:JSON.stringify(ee,null,2)},cssClasses:E},events:{"ss-option-change":{desc:"Sent when the selected option changes.",stub:te.trim(),bindable:!0}}}},oe=e.defineComponent({...ne,__name:"CoreDropdownInput",setup(a){const u=e.inject(h.evaluatedFields),d=e.ref(null),p=e.inject(h.core),_=e.inject(h.instancePath),{formValue:y,handleInput:C}=D(p,_,d);return(b,c)=>(e.openBlock(),e.createElementBlock("div",{class:"CoreDropdownInput",ref_key:"rootEl",ref:d},[e.createElementVNode("label",G,e.toDisplayString(e.unref(u).label.value),1),e.createElementVNode("div",Q,[e.createElementVNode("select",{value:e.unref(y),onInput:c[0]||(c[0]=t=>e.unref(C)(t.target.value,"ss-option-change"))},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(u).options.value,(t,s)=>(e.openBlock(),e.createElementBlock("option",{key:s,value:s},e.toDisplayString(t),9,X))),128))],40,W)])],512))}}),ge="",ae=B(oe,[["__scopeId","data-v-13a00097"]]),se=["type","value","placeholder"],re="A user input component that allows users to enter single-line text values.",O=`
def onchange_handler(state, payload):

	# Set the state variable "new_val" to the new value

	state["new_val"] = payload`,le={streamsync:{name:"Text Input",description:re,category:"Input",fields:{label:{name:"Label",init:"Input Label",type:l.Text},customId:{name:"CustomId",init:"Input CustomId",type:l.Text},placeholder:{name:"Placeholder",type:l.Text},passwordMode:{name:"Password mode",default:"no",type:l.Text,options:{no:"No",yes:"Yes"},category:g.Style},cssClasses:E},events:{"ss-change":{desc:"Capture changes as they happen.",stub:O,bindable:!0},"ss-change-finish":{desc:"Capture changes once this control has lost focus.",stub:O}}}},ce=e.defineComponent({...le,__name:"CoreTextInput",setup(a){const u=e.inject(h.evaluatedFields),d=e.ref(null),p=e.inject(h.core),_=e.inject(h.instancePath),{formValue:y,handleInput:C}=D(p,_,d);return(b,c)=>(e.openBlock(),e.createElementBlock("div",{class:"CoreTextInput",ref_key:"rootEl",ref:d},[e.createElementVNode("label",null,e.toDisplayString(e.unref(u).label.value),1),e.createElementVNode("input",{type:e.unref(u).passwordMode.value=="yes"?"password":"text",value:e.unref(y),onInput:c[0]||(c[0]=t=>e.unref(C)(t.target.value,"ss-change")),onChange:c[1]||(c[1]=t=>e.unref(C)(t.target.value,"ss-change-finish")),placeholder:e.unref(u).placeholder.value,"aria-autocomplete":"none"},null,40,se)],512))}}),he="";return{customcoresection:H,customcorebutton:K,customdropdown:ae,customtextinput:B(ce,[["__scopeId","data-v-84296550"]])}});
