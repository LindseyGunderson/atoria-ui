import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{D as r}from"./iframe-q9FXp4el.js";import{t as i}from"./jsx-runtime-f3rHp9ZU.js";import{n as a,t as o}from"./cn-D76EcPql.js";import{i as s,n as c,o as l,r as u,t as d}from"./fi-AXl-iKn0.js";function f({children:e}){let[t,n]=(0,m.useState)([]);function r(e){let t={id:crypto.randomUUID(),title:e.title,description:e.description,variant:e.variant??`info`};n(e=>[...e,t])}function i(e){n(t=>t.filter(t=>t.id!==e))}return(0,h.jsx)(g.Provider,{value:{toasts:t,addToast:r,removeToast:i},children:e})}function p(){let e=(0,m.useContext)(g);if(!e)throw Error(`useToast must be used inside ToastProvider`);return e}var m,h,g,_=t((()=>{m=n(r(),1),h=i(),g=(0,m.createContext)(void 0),f.__docgenInfo={description:``,methods:[],displayName:`ToastProvider`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}}}));function v({title:e,description:t,variant:n=`info`,onClose:r,duration:i=5e3,className:a,...s}){let[c,l]=(0,y.useState)(!1),u=x[n].icon;(0,y.useEffect)(()=>{if(!r)return;let e=window.setTimeout(()=>{l(!0)},i);return()=>{window.clearTimeout(e)}},[i,r]);function d(){l(!0)}function f(){c&&r?.()}return(0,b.jsxs)(`div`,{role:n===`error`?`alert`:`status`,onTransitionEnd:f,className:o(`relative`,`w-full max-w-sm`,`rounded-lg`,`border`,`bg-white`,`p-4`,`shadow-lg`,`transition-all`,`duration-200`,c?`translate-x-full opacity-0`:`translate-x-0 opacity-100`,x[n].container,a),...s,children:[(0,b.jsxs)(`div`,{className:`flex gap-3 pr-6`,children:[(0,b.jsx)(u,{className:`\r
            mt-0.5\r
            h-5\r
            w-5\r
            shrink-0\r
            `,"aria-hidden":`true`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{className:o(`text-sm`,`font-semibold`,x[n].title),children:e}),t&&(0,b.jsx)(`p`,{className:`mt-1 text-sm text-neutral-600`,children:t})]})]}),r&&(0,b.jsx)(`button`,{type:`button`,"aria-label":`Close notification`,className:`\r
            absolute\r
            right-3\r
            top-3\r
            text-neutral-500\r
            transition-colors\r
            duration-150\r
            hover:text-neutral-900\r
          `,onClick:d,children:`×`})]})}var y,b,x,S=t((()=>{y=n(r(),1),a(),l(),b=i(),x={success:{container:`border-success bg-success-background`,title:`text-success`,icon:u},error:{container:`border-error bg-error-background`,title:`text-error`,icon:d},warning:{container:`border-warning bg-warning-background`,title:`text-warning`,icon:c},info:{container:`border-info bg-info-background`,title:`text-info`,icon:s}},v.__docgenInfo={description:``,methods:[],displayName:`Toast`,props:{title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"success" | "error" | "warning" | "info"`,elements:[{name:`literal`,value:`"success"`},{name:`literal`,value:`"error"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"info"`}]},description:``,defaultValue:{value:`"info"`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},duration:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5000`,computed:!1}}},composes:[`HTMLAttributes`]}}));function C(){let{toasts:e,removeToast:t}=p();return(0,w.jsx)(`div`,{className:`\r
        fixed\r
        right-4\r
        top-4\r
        z-50\r
        flex\r
        w-full\r
        max-w-sm\r
        flex-col\r
        gap-3\r
        p-4\r
      `,children:e.map(e=>(0,w.jsx)(v,{title:e.title,description:e.description,variant:e.variant,onClose:()=>t(e.id)},e.id))})}var w,T=t((()=>{S(),_(),w=i(),C.__docgenInfo={description:``,methods:[],displayName:`ToastContainer`}})),E=e({Default:()=>A,Error:()=>M,Info:()=>P,Multiple:()=>F,Success:()=>j,Warning:()=>N,__namedExportsOrder:()=>I,default:()=>k});function D({variant:e=`info`}){let{addToast:t}=p();return(0,O.jsxs)(`button`,{onClick:()=>t({title:`${e} notification`,description:`This is an example toast notification.`,variant:e}),className:`\r
        rounded-md\r
        bg-neutral-900\r
        px-4\r
        py-2\r
        text-sm\r
        text-white\r
      `,children:[`Show `,e,` Toast`]})}var O,k,A,j,M,N,P,F,I,L=t((()=>{_(),T(),O=i(),k={title:`Components/Toast`,decorators:[e=>(0,O.jsxs)(f,{children:[(0,O.jsx)(e,{}),(0,O.jsx)(C,{})]})]},A={render:()=>(0,O.jsx)(D,{})},j={render:()=>(0,O.jsx)(D,{variant:`success`})},M={render:()=>(0,O.jsx)(D,{variant:`error`})},N={render:()=>(0,O.jsx)(D,{variant:`warning`})},P={render:()=>(0,O.jsx)(D,{variant:`info`})},F={render:()=>(0,O.jsx)(()=>{let{addToast:e}=p();return(0,O.jsx)(`button`,{onClick:()=>{e({title:`Upload complete`,description:`Your file has been uploaded.`,variant:`success`}),setTimeout(()=>{e({title:`New message`,description:`You received a new notification.`,variant:`info`})},300),setTimeout(()=>{e({title:`Storage warning`,description:`You are almost out of space.`,variant:`warning`})},600)},className:`\r
            rounded-md\r
            bg-neutral-900\r
            px-4\r
            py-2\r
            text-sm\r
            text-white\r
          `,children:`Show Multiple Toasts`})},{})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <ToastButton />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <ToastButton variant="success" />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <ToastButton variant="error" />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <ToastButton variant="warning" />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <ToastButton variant="info" />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Demo = () => {
      const {
        addToast
      } = useToast();
      return <button onClick={() => {
        addToast({
          title: "Upload complete",
          description: "Your file has been uploaded.",
          variant: "success"
        });
        setTimeout(() => {
          addToast({
            title: "New message",
            description: "You received a new notification.",
            variant: "info"
          });
        }, 300);
        setTimeout(() => {
          addToast({
            title: "Storage warning",
            description: "You are almost out of space.",
            variant: "warning"
          });
        }, 600);
      }} className="\r
            rounded-md\r
            bg-neutral-900\r
            px-4\r
            py-2\r
            text-sm\r
            text-white\r
          ">\r
          Show Multiple Toasts\r
        </button>;
    };
    return <Demo />;
  }
}`,...F.parameters?.docs?.source}}},I=[`Default`,`Success`,`Error`,`Warning`,`Info`,`Multiple`]}));L();export{A as Default,M as Error,P as Info,F as Multiple,j as Success,N as Warning,I as __namedExportsOrder,k as default,L as n,E as t};