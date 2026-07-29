import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{D as r}from"./iframe-q9FXp4el.js";import{t as i}from"./jsx-runtime-f3rHp9ZU.js";import{n as a,t as o}from"./cn-D76EcPql.js";var s,c,l,u=t((()=>{s=n(r(),1),a(),c=i(),l=(0,s.forwardRef)(function({id:e,label:t,helperText:n,error:r,className:i,required:a,...l},u){let d=(0,s.useId)(),f=e??d,p=[n&&`${f}-helper`,r&&`${f}-error`].filter(Boolean).join(` `),m=`${f}-description`;return(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[t&&(0,c.jsxs)(`label`,{htmlFor:f,className:`text-sm font-medium text-text-primary`,children:[t,a&&(0,c.jsx)(`span`,{"aria-hidden":`true`,children:` *`})]}),(0,c.jsx)(`input`,{id:f,ref:u,className:o(`h-10 rounded-md border px-3`,`bg-surface text-text-primary`,`placeholder:text-text-secondary`,`border-border`,`transition-colors`,`focus:border-primary`,`focus:ring-focus`,r?[`border-error`,`focus:border-error`,`focus:ring-error/20`,`text-error`]:[`border-border`,`focus:border-primary`,`focus:ring-primary`],`disabled:cursor-not-allowed`,`disabled:bg-neutral-100`,`disabled:text-text-secondary`,`disabled:border-border`,i),"aria-describedby":p||void 0,"aria-invalid":r?!0:void 0,"aria-required":a,...l}),(n||r)&&(0,c.jsx)(`p`,{id:m,className:r?`text-sm text-error`:`text-sm text-text-secondary`,children:r??n})]})}),l.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{label:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``}},composes:[`InputHTMLAttributes`]}})),d=e({Default:()=>m,Disabled:()=>v,Email:()=>y,Error:()=>_,FormExample:()=>S,Required:()=>b,States:()=>x,WithHelperText:()=>g,WithLabel:()=>h,__namedExportsOrder:()=>C,default:()=>p}),f,p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{u(),f=i(),p={title:`Components/Input`,component:l},m={args:{placeholder:`Enter your email`}},h={args:{label:`Email address`,placeholder:`you@example.com`}},g={args:{label:`Password`,type:`password`,helperText:`Must be at least 8 characters long.`}},_={args:{label:`Email address`,value:`invalid-email`,error:`Please enter a valid email address.`}},v={args:{label:`Username`,value:`username123`,disabled:!0}},y={args:{label:`Email address`,type:`email`,placeholder:`you@example.com`}},b={args:{label:`Full name`,required:!0,placeholder:`Jane Doe`}},x={render:()=>(0,f.jsxs)(`div`,{className:`flex flex-col gap-4 w-80`,children:[(0,f.jsx)(l,{label:`Default`,placeholder:`Default input`}),(0,f.jsx)(l,{label:`Helper text`,helperText:`Additional information.`}),(0,f.jsx)(l,{label:`Error`,error:`Something went wrong.`}),(0,f.jsx)(l,{label:`Disabled`,disabled:!0,value:`Disabled input`})]})},S={render:()=>(0,f.jsxs)(`div`,{className:`flex flex-col gap-4 w-80`,children:[(0,f.jsx)(l,{label:`First name`,placeholder:`Jane`}),(0,f.jsx)(l,{label:`Email address`,placeholder:`jane@example.com`,helperText:`We'll only use this for account updates.`}),(0,f.jsx)(l,{label:`Password`,type:`password`,error:`Password must be at least 8 characters.`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your email"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    placeholder: "you@example.com"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    helperText: "Must be at least 8 characters long."
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    value: "invalid-email",
    error: "Please enter a valid email address."
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    value: "username123",
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    type: "email",
    placeholder: "you@example.com"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Full name",
    required: true,
    placeholder: "Jane Doe"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">\r
      <Input label="Default" placeholder="Default input" />\r
\r
      <Input label="Helper text" helperText="Additional information." />\r
\r
      <Input label="Error" error="Something went wrong." />\r
\r
      <Input label="Disabled" disabled value="Disabled input" />\r
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">\r
      <Input label="First name" placeholder="Jane" />\r
\r
      <Input label="Email address" placeholder="jane@example.com" helperText="We'll only use this for account updates." />\r
\r
      <Input label="Password" type="password" error="Password must be at least 8 characters." />\r
    </div>
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithLabel`,`WithHelperText`,`Error`,`Disabled`,`Email`,`Required`,`States`,`FormExample`]}));w();export{m as Default,v as Disabled,y as Email,_ as Error,S as FormExample,b as Required,x as States,g as WithHelperText,h as WithLabel,C as __namedExportsOrder,p as default,w as n,d as t};