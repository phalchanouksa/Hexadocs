"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5998],{6155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"HTML/4/typography-style","title":"Typography Style","description":"Time to get your aesthetic on point. Typography style is the secret sauce that makes your text look fresh.","source":"@site/docs/HTML/4/2.md","sourceDirName":"HTML/4","slug":"/HTML/4/typography-style","permalink":"/Hexadocs/docs/HTML/4/typography-style","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Typography Style","id":"typography-style"},"sidebar":"tutorialSidebar","previous":{"title":"Paragraph","permalink":"/Hexadocs/docs/HTML/4/paragraph"},"next":{"title":"Typography Formatting","permalink":"/Hexadocs/docs/HTML/4/typography-formatting"}}');var a=n(4848),l=n(8453),o=n(2995);const i={title:"Typography Style",id:"typography-style"},r="Typography Style",c={},h=[{value:"Font Family",id:"font-family",level:2},{value:"Font Size",id:"font-size",level:2},{value:"Font Weight",id:"font-weight",level:2}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"typography-style",children:"Typography Style"})}),"\n",(0,a.jsx)(t.p,{children:"Time to get your aesthetic on point. Typography style is the secret sauce that makes your text look fresh."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"This is just an example we will learn about CSS styling more later"})}),"\n",(0,a.jsx)(t.h2,{id:"font-family",children:"Font Family"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<h1 style="font-family: Arial">Banana</h1>\r\n<p style="font-family: Roboto">Coconut</p>\n'})}),"\n",(0,a.jsx)(t.h2,{id:"font-size",children:"Font Size"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<nav>\r\n  <a style="font-size: 20px" href="https://google.com">Click to go to Mars</a>\r\n</nav>\n'})}),"\n",(0,a.jsx)(t.h2,{id:"font-weight",children:"Font Weight"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<header>\r\n  <h1 style="font-weight: 100">This text 100 kilograms</h1>\r\n  <h1 style="font-weight: 800">This text 800 kilograms</h1>\r\n</header>\n'})}),"\n",(0,a.jsx)(o.A,{initialHTML:'\n\n<html>\n  <p style="font-family: Arial">Banana</p>\n  <p style="font-family: Courier">Coconut</p>\n  <hr><br>\n  <nav>\n      <a style="font-size: 20px" href="https://google.com">Click to go to Mars</a>\n  </nav>\n  <header>\n      <h1 style="font-weight: 100">This text 100 kilograms</h1>\n      <h1 style="font-weight: 800">This text 800 kilograms</h1>\n\n  </header>\n\n</html>\n\n'})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2995:(e,t,n)=>{n.d(t,{A:()=>x});var s=n(6540);const a="wrapper_zPyj",l="container_zdH3",o="editors_eC5O",i="editorSection_tdsp",r="collapsed_rmwB",c="editorHeader_Ctqc",h="editorTab_A7qh",d="active_wXNF",p="toggleIcon_v2w8",m="editorContainer_PY3U",y="editor_HuoD",u="preview_cjgr";var g=n(4848);const x=e=>{let{initialHTML:t="",initialCSS:n="",initialJS:x=""}=e;const[f,v]=(0,s.useState)(t),[j,T]=(0,s.useState)(n),[w,b]=(0,s.useState)(x),[S,C]=(0,s.useState)({html:!0,css:!1,js:!1}),k=e=>{if("Tab"===e.key){e.preventDefault();const t=e.target,n=t.selectionStart,s=t.selectionEnd;t.value=t.value.substring(0,n)+"  "+t.value.substring(s),t.selectionStart=t.selectionEnd=n+2}};(0,s.useEffect)((()=>{const e=setTimeout((()=>{const e=`\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <meta charset="UTF-8">\n            <meta name="viewport" content="width=device-width, initial-scale=1.0">\n            <style>\n              body {\n                margin: 0;\n                padding: 1rem;\n                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n                line-height: 1.5;\n                max-width: 100%;\n                overflow-x: hidden;\n                color: #1a1a1a;\n              }\n              * { box-sizing: border-box; }\n              ${j}\n            </style>\n          </head>\n          <body>\n            ${f}\n            <script>${w}<\/script>\n          </body>\n        </html>\n      `,t=document.createElement("iframe");t.style.width="100%",t.style.height="100%",t.style.border="none";const n=document.getElementById("preview-container");n&&(n.innerHTML="",n.appendChild(t),t.contentWindow.document.open(),t.contentWindow.document.write(e),t.contentWindow.document.close())}),200);return()=>clearTimeout(e)}),[f,j,w]);const N=e=>{let{label:t,panel:n,visible:s}=e;return(0,g.jsx)("div",{className:c,children:(0,g.jsxs)("button",{className:`${h} ${s?d:""}`,onClick:()=>(e=>{C((t=>({...t,[e]:!t[e]})))})(n),children:[(0,g.jsx)("span",{children:t}),(0,g.jsx)("span",{className:p,children:s?"\u2212":"+"})]})})};return(0,g.jsx)("div",{className:a,children:(0,g.jsxs)("div",{className:l,children:[(0,g.jsxs)("div",{className:o,children:[(0,g.jsxs)("div",{className:`${i} ${S.html?"":r}`,children:[(0,g.jsx)(N,{label:"HTML",panel:"html",visible:S.html}),S.html&&(0,g.jsx)("div",{className:m,children:(0,g.jsx)("textarea",{className:y,value:f,onChange:e=>v(e.target.value),onKeyDown:k,spellCheck:"false",placeholder:"HTML"})})]}),(0,g.jsxs)("div",{className:`${i} ${S.css?"":r}`,children:[(0,g.jsx)(N,{label:"CSS",panel:"css",visible:S.css}),S.css&&(0,g.jsx)("div",{className:m,children:(0,g.jsx)("textarea",{className:y,value:j,onChange:e=>T(e.target.value),onKeyDown:k,spellCheck:"false",placeholder:"CSS"})})]}),(0,g.jsxs)("div",{className:`${i} ${S.js?"":r}`,children:[(0,g.jsx)(N,{label:"JS",panel:"js",visible:S.js}),S.js&&(0,g.jsx)("div",{className:m,children:(0,g.jsx)("textarea",{className:y,value:w,onChange:e=>b(e.target.value),onKeyDown:k,spellCheck:"false",placeholder:"JavaScript"})})]})]}),(0,g.jsx)("div",{id:"preview-container",className:u})]})})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(6540);const a={},l=s.createContext(a);function o(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);