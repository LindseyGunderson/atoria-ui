import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{n as r,t as i}from"./cn-D76EcPql.js";function a({value:e,max:t=100,variant:n=`default`,showValue:r=!1,label:a,className:c,...l}){let u=Math.min(Math.max(e/t*100,0),100);return(0,o.jsxs)(`div`,{className:i(`flex flex-col gap-2`,c),...l,children:[(a||r)&&(0,o.jsxs)(`div`,{className:`flex items-center justify-between`,children:[a&&(0,o.jsx)(`span`,{className:`text-sm font-medium text-text-primary`,children:a}),r&&(0,o.jsxs)(`span`,{className:`text-sm text-text-secondary`,children:[Math.round(u),`%`]})]}),(0,o.jsx)(`div`,{role:`progressbar`,"aria-valuemin":0,"aria-valuemax":t,"aria-valuenow":e,className:i(`h-2 w-full overflow-hidden rounded-full`,`bg-border`),children:(0,o.jsx)(`div`,{className:i(`h-full rounded-full`,`transition-all duration-300`,s[n]),style:{width:`${u}%`}})})]})}var o,s,c=t((()=>{r(),o=n(),s={default:`bg-primary`,success:`bg-success`,warning:`bg-warning`,error:`bg-error`},a.__docgenInfo={description:``,methods:[],displayName:`Progress`,props:{value:{required:!0,tsType:{name:`number`},description:``},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "success" | "warning" | "error"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"error"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},showValue:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``}},composes:[`HTMLAttributes`]}})),l=e({Complete:()=>_,CustomMax:()=>v,Default:()=>f,ShowValue:()=>m,Variants:()=>g,WithLabel:()=>p,WithLabelAndValue:()=>h,__namedExportsOrder:()=>y,default:()=>d}),u,d,f,p,m,h,g,_,v,y,b=t((()=>{c(),u=n(),d={title:`Components/Progress`,component:a},f={args:{value:40}},p={args:{value:40,label:`Uploading files`}},m={args:{value:65,showValue:!0}},h={args:{value:75,label:`Processing interview questions`,showValue:!0}},g={render:()=>(0,u.jsxs)(`div`,{className:`flex w-80 flex-col gap-4`,children:[(0,u.jsx)(a,{value:60,variant:`default`}),(0,u.jsx)(a,{value:75,variant:`success`}),(0,u.jsx)(a,{value:45,variant:`warning`}),(0,u.jsx)(a,{value:25,variant:`error`})]})},_={args:{value:100,variant:`success`,label:`Complete`,showValue:!0}},v={args:{value:3,max:5,label:`Completed steps`,showValue:!0}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 40
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 40,
    label: "Uploading files"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 65,
    showValue: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: "Processing interview questions",
    showValue: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">\r
      <Progress value={60} variant="default" />\r
\r
      <Progress value={75} variant="success" />\r
\r
      <Progress value={45} variant="warning" />\r
\r
      <Progress value={25} variant="error" />\r
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: "success",
    label: "Complete",
    showValue: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    max: 5,
    label: "Completed steps",
    showValue: true
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithLabel`,`ShowValue`,`WithLabelAndValue`,`Variants`,`Complete`,`CustomMax`]}));b();export{_ as Complete,v as CustomMax,f as Default,m as ShowValue,g as Variants,p as WithLabel,h as WithLabelAndValue,y as __namedExportsOrder,d as default,b as n,l as t};