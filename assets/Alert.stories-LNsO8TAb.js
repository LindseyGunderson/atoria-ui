import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{i as r,n as i,r as a,t as o}from"./Icon-CmZRwnm8.js";import{n as s,t as c}from"./cn-D76EcPql.js";function l({variant:e=`info`,title:t,icon:n,children:r,className:i,...a}){let o=d[e];return(0,u.jsxs)(`div`,{role:`alert`,className:c(`flex items-start gap-3 rounded-md border p-4`,o.container,i),...a,children:[n&&(0,u.jsx)(`div`,{className:`shrink-0`,children:n}),(0,u.jsxs)(`div`,{children:[t&&(0,u.jsx)(`p`,{className:c(`font-medium`,o.title),children:t}),r&&(0,u.jsx)(`div`,{className:c(`mt-1 text-sm`,o.text),children:r})]})]})}var u,d,f=t((()=>{s(),u=n(),d={success:{container:`border-success bg-success-background`,title:`text-success-strong`,text:`text-success-strong`},error:{container:`border-error bg-error-background`,title:`text-error-strong`,text:`text-error-strong`},warning:{container:`border-warning bg-warning-background`,title:`text-warning-strong`,text:`text-warning-strong`},info:{container:`border-info bg-info-background`,title:`text-info-strong`,text:`text-info-strong`}},l.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{required:!1,tsType:{name:`union`,raw:`"success" | "error" | "warning" | "info"`,elements:[{name:`literal`,value:`"success"`},{name:`literal`,value:`"error"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"info"`}]},description:``,defaultValue:{value:`"info"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`HTMLAttributes`]}})),p=e({Default:()=>g,Error:()=>v,Info:()=>b,Success:()=>_,Warning:()=>y,WithIcon:()=>x,__namedExportsOrder:()=>S,default:()=>h}),m,h,g,_,v,y,b,x,S,C=t((()=>{r(),i(),f(),m=n(),h={title:`Components/Alert`,component:l},g={args:{children:`This is an informational alert message.`}},_={args:{variant:`success`,children:`Your changes have been saved successfully.`}},v={args:{variant:`error`,title:`Unable to save changes`,children:`Please check your connection and try again.`}},y={args:{variant:`warning`,title:`Your session is about to expire`,children:`Please save your work before continuing.`}},b={args:{variant:`info`,children:`You can update your profile information at any time.`}},x={render:()=>(0,m.jsx)(l,{variant:`success`,icon:(0,m.jsx)(o,{icon:a}),title:`Profile updated`,children:`Your changes were saved successfully.`})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: "This is an informational alert message."
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    children: "Your changes have been saved successfully."
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Unable to save changes",
    children: "Please check your connection and try again."
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Your session is about to expire",
    children: "Please save your work before continuing."
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "You can update your profile information at any time."
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="success" icon={<Icon icon={CheckIcon} />} title="Profile updated">\r
      Your changes were saved successfully.\r
    </Alert>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Success`,`Error`,`Warning`,`Info`,`WithIcon`]}));C();export{g as Default,v as Error,b as Info,_ as Success,y as Warning,x as WithIcon,S as __namedExportsOrder,h as default,C as n,p as t};