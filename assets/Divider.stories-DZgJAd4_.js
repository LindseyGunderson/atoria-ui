import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{n as r,t as i}from"./cn-D76EcPql.js";function a({orientation:e=`horizontal`,label:t,className:n,...r}){let a=e===`horizontal`?`h-px flex-1`:`w-px flex-1`;return(0,o.jsxs)(`div`,{className:i(`flex items-center`,s[e],n),...r,children:[(0,o.jsx)(`span`,{className:i(`bg-border`,a)}),t&&(0,o.jsx)(`span`,{className:`px-3 text-sm text-text-secondary`,children:t}),(0,o.jsx)(`span`,{className:i(`bg-border`,a)})]})}var o,s,c=t((()=>{r(),o=n(),s={horizontal:`w-full flex-row`,vertical:`h-full flex-col`},a.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:``,defaultValue:{value:`"horizontal"`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``}},composes:[`HTMLAttributes`]}})),l=e({Default:()=>f,Layout:()=>h,Vertical:()=>m,WithLabel:()=>p,__namedExportsOrder:()=>g,default:()=>d}),u,d,f,p,m,h,g,_=t((()=>{c(),u=n(),d={title:`Components/Divider`,component:a},f={args:{}},p={args:{label:`OR`}},m={render:()=>(0,u.jsx)(`div`,{className:`h-32`,children:(0,u.jsx)(a,{orientation:`vertical`})})},h={render:()=>(0,u.jsxs)(`div`,{className:`flex h-10 items-center gap-4`,children:[(0,u.jsx)(`span`,{children:`Profile`}),(0,u.jsx)(a,{orientation:`vertical`}),(0,u.jsx)(`span`,{children:`Settings`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "OR"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="h-32">\r
      <Divider orientation="vertical" />\r
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-10 items-center gap-4">\r
      <span>Profile</span>\r
\r
      <Divider orientation="vertical" />\r
\r
      <span>Settings</span>\r
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithLabel`,`Vertical`,`Layout`]}));_();export{f as Default,h as Layout,m as Vertical,p as WithLabel,g as __namedExportsOrder,d as default,_ as n,l as t};