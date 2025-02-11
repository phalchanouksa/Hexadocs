"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8555],{9057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"HTML/html-attributes","title":"HTML Attributes","description":"Ready to level up your HTML ? We\u2019re diving into HTML Attributes\u2014the extra that turn your plain HTML elements into absolute legends. Think of attributes as the trendy filters on your favorite selfie, adding that perfect touch to make everything pop!","source":"@site/docs/HTML/3.md","sourceDirName":"HTML","slug":"/HTML/html-attributes","permalink":"/Hexadocs/docs/HTML/html-attributes","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"html-attributes","title":"HTML Attributes"},"sidebar":"tutorialSidebar","previous":{"title":"HTML Elements","permalink":"/Hexadocs/docs/HTML/html-elements"},"next":{"title":"Typography","permalink":"/Hexadocs/docs/category/typography"}}');var i=n(4848),r=n(8453),l=n(2995);const a={id:"html-attributes",title:"HTML Attributes"},o="HTML Attributes",c={},d=[{value:"What Are HTML Attributes?",id:"what-are-html-attributes",level:2},{value:"How Do HTML Attributes Work?",id:"how-do-html-attributes-work",level:2},{value:"Some Must-Know Attributes",id:"some-must-know-attributes",level:3},{value:"Real-World Example",id:"real-world-example",level:2},{value:"Breaking Down the Code:",id:"breaking-down-the-code",level:3},{value:"Quick Tips for Beginners",id:"quick-tips-for-beginners",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"html-attributes",children:"HTML Attributes"})}),"\n",(0,i.jsxs)(t.p,{children:["Ready to level up your HTML ? We\u2019re diving into ",(0,i.jsx)(t.strong,{children:"HTML Attributes"}),"\u2014the extra that turn your plain HTML elements into absolute legends. Think of attributes as the trendy filters on your favorite selfie, adding that perfect touch to make everything pop!"]}),"\n",(0,i.jsx)(t.h2,{id:"what-are-html-attributes",children:"What Are HTML Attributes?"}),"\n",(0,i.jsx)(t.p,{children:"They provide additional information to your elements, helping browsers know exactly how to display and interact with them."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"The Anatomy of an Attribute:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Name:"})," The key that tells the browser what type of info you\u2019re dropping (like ",(0,i.jsx)(t.code,{children:"src"}),", ",(0,i.jsx)(t.code,{children:"href"}),", ",(0,i.jsx)(t.code,{children:"class"}),", etc.)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Value:"})," The content for that key, usually wrapped in quotes."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A basic attribute looks like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<tagname attribute="value">Content here</tagname>\n'})}),"\n",(0,i.jsx)(t.p,{children:"For example, in an image tag:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<img src="https://placekitten.com/200/300" alt="Cute kitten" />\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"src"})," tells the browser where the image is."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"alt"})," gives a fallback description if the image doesn\u2019t load or for screen readers."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"how-do-html-attributes-work",children:"How Do HTML Attributes Work?"}),"\n",(0,i.jsx)(t.p,{children:"HTML attributes live inside the opening tag of an element. They\u2019re like the sidekicks that give your main tag that extra flair and functionality. You can add as many attributes as you need to customize your element\u2019s behavior\u2014just like adding multiple stickers to your laptop."}),"\n",(0,i.jsx)(t.h3,{id:"some-must-know-attributes",children:"Some Must-Know Attributes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"class:"})})," Use this to assign a class to your element for styling with CSS. It\u2019s like giving your element a cool nickname."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"id:"})})," Provides a unique identifier to target the element directly, whether for styling or JavaScript shenanigans."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"href"})}),": Found in anchor tags ",(0,i.jsxs)(t.strong,{children:["(",(0,i.jsx)(t.code,{children:"<a>"}),")"]}),", this attribute points to another page or resource."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"src"})}),": Used for images, scripts, and more to define the source file."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"alt"})}),": Describes the content of an image if it can\u2019t be displayed."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"real-world-example",children:"Real-World Example"}),"\n",(0,i.jsx)(t.p,{children:"Check out this lit example where attributes are put to work:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <title>My Epic Site with Attributes</title>\r\n  </head>\r\n  <body>\r\n    <header id="main-header" class="header-style">\r\n      <h1>Welcome to the Ultimate Website!</h1>\r\n      <nav>\r\n        <a href="https://example.com" target="_blank" rel="noopener"\r\n          >Visit Example.com</a\r\n        >\r\n      </nav>\r\n    </header>\r\n    <main>\r\n      <img\r\n        src="https://placekitten.com/400/300"\r\n        alt="Adorable Kitten"\r\n        class="responsive-img"\r\n      />\r\n      <p class="intro-text">\r\n        This site is on fire, thanks to some mad attribute skills.\r\n      </p>\r\n    </main>\r\n    <footer>\r\n      <small id="footer-note">\xa9 2025 All rights reserved. Stay awesome!</small>\r\n    </footer>\r\n  </body>\r\n</html>\n'})}),"\n",(0,i.jsx)(l.A,{initialHTML:'\n\n<html>\n<head>\n  <title>My Epic Site with Attributes</title>\n</head>\n<body>\n  <header id="main-header" class="header-style">\n    <h1>Welcome to the Ultimate Website!</h1>\n    <nav>\n      <a href="https://example.com" target="_blank" rel="noopener"\n        >Visit Example.com</a\n      >\n    </nav>\n  </header>\n  <main>\n    <img\n      src="https://placekitten.com/400/300"\n      alt="Adorable Kitten"\n      class="responsive-img"\n    />\n    <p class="intro-text">\n      This site is on fire, thanks to some mad attribute skills.\n    </p>\n  </main>\n  <footer>\n    <small id="footer-note">\xa9 2025 All rights reserved. Stay awesome!</small>\n  </footer>\n</body>\n</html> \n'}),"\n",(0,i.jsx)(t.h3,{id:"breaking-down-the-code",children:"Breaking Down the Code:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:'id="main-header" & id="footer-note":'})," Unique identifiers for targeting with CSS or JavaScript."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:'class="header-style" & class="responsive-img":'})," Classes used to apply styling\u2014think of them as style presets."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:["href & target in ",(0,i.jsx)(t.code,{children:"<a>"}),":"]})," These attributes turn a simple text into a clickable link that opens in a new tab."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:'rel="noopener":'})," A security boost when linking to external sites, preventing potential performance issues."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"quick-tips-for-beginners",children:"Quick Tips for Beginners"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Keep It Simple:"})," Start with one or two attributes as you get comfy with HTML."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Wrap Your Values in Quotes:"})," Always enclose attribute values in quotes for smooth sailing."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Name Things Wisely:"})," Use clear and descriptive names for your id and class attributes\u2014it saves time and confusion later."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2995:(e,t,n)=>{n.d(t,{A:()=>j});var s=n(6540);const i="wrapper_zPyj",r="container_zdH3",l="editors_eC5O",a="editorSection_tdsp",o="collapsed_rmwB",c="editorHeader_Ctqc",d="editorTab_A7qh",h="active_wXNF",u="toggleIcon_v2w8",m="editorContainer_PY3U",p="editor_HuoD",x="preview_cjgr";var g=n(4848);const j=e=>{let{initialHTML:t="",initialCSS:n="",initialJS:j=""}=e;const[b,v]=(0,s.useState)(t),[f,y]=(0,s.useState)(n),[w,k]=(0,s.useState)(j),[T,H]=(0,s.useState)({html:!0,css:!1,js:!1}),M=e=>{if("Tab"===e.key){e.preventDefault();const t=e.target,n=t.selectionStart,s=t.selectionEnd;t.value=t.value.substring(0,n)+"  "+t.value.substring(s),t.selectionStart=t.selectionEnd=n+2}};(0,s.useEffect)((()=>{const e=setTimeout((()=>{const e=`\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <meta charset="UTF-8">\n            <meta name="viewport" content="width=device-width, initial-scale=1.0">\n            <style>\n              body {\n                margin: 0;\n                padding: 1rem;\n                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n                line-height: 1.5;\n                max-width: 100%;\n                overflow-x: hidden;\n                color: #1a1a1a;\n              }\n              * { box-sizing: border-box; }\n              ${f}\n            </style>\n          </head>\n          <body>\n            ${b}\n            <script>${w}<\/script>\n          </body>\n        </html>\n      `,t=document.createElement("iframe");t.style.width="100%",t.style.height="100%",t.style.border="none";const n=document.getElementById("preview-container");n&&(n.innerHTML="",n.appendChild(t),t.contentWindow.document.open(),t.contentWindow.document.write(e),t.contentWindow.document.close())}),200);return()=>clearTimeout(e)}),[b,f,w]);const S=e=>{let{label:t,panel:n,visible:s}=e;return(0,g.jsx)("div",{className:c,children:(0,g.jsxs)("button",{className:`${d} ${s?h:""}`,onClick:()=>(e=>{H((t=>({...t,[e]:!t[e]})))})(n),children:[(0,g.jsx)("span",{children:t}),(0,g.jsx)("span",{className:u,children:s?"\u2212":"+"})]})})};return(0,g.jsx)("div",{className:i,children:(0,g.jsxs)("div",{className:r,children:[(0,g.jsxs)("div",{className:l,children:[(0,g.jsxs)("div",{className:`${a} ${T.html?"":o}`,children:[(0,g.jsx)(S,{label:"HTML",panel:"html",visible:T.html}),T.html&&(0,g.jsx)("div",{className:m,children:(0,g.jsx)("textarea",{className:p,value:b,onChange:e=>v(e.target.value),onKeyDown:M,spellCheck:"false",placeholder:"HTML"})})]}),(0,g.jsxs)("div",{className:`${a} ${T.css?"":o}`,children:[(0,g.jsx)(S,{label:"CSS",panel:"css",visible:T.css}),T.css&&(0,g.jsx)("div",{className:m,children:(0,g.jsx)("textarea",{className:p,value:f,onChange:e=>y(e.target.value),onKeyDown:M,spellCheck:"false",placeholder:"CSS"})})]}),(0,g.jsxs)("div",{className:`${a} ${T.js?"":o}`,children:[(0,g.jsx)(S,{label:"JS",panel:"js",visible:T.js}),T.js&&(0,g.jsx)("div",{className:m,children:(0,g.jsx)("textarea",{className:p,value:w,onChange:e=>k(e.target.value),onKeyDown:M,spellCheck:"false",placeholder:"JavaScript"})})]})]}),(0,g.jsx)("div",{id:"preview-container",className:x})]})})}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var s=n(6540);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);