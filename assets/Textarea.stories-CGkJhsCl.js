import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{D as r}from"./iframe-CP9FSVIB.js";import{t as i}from"./jsx-runtime-f3rHp9ZU.js";import{n as a,t as o}from"./cn-D76EcPql.js";var s,c,l,u=t((()=>{s=n(r(),1),a(),c=i(),l=(0,s.forwardRef)(function({id:e,label:t,helperText:n,error:r,className:i,required:a,...l},u){let d=(0,s.useId)(),f=e??d;return(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[t&&(0,c.jsxs)(`label`,{htmlFor:f,className:`text-sm font-medium text-text-primary`,children:[t,a&&(0,c.jsx)(`span`,{"aria-hidden":`true`,children:` *`})]}),(0,c.jsx)(`textarea`,{id:f,ref:u,className:o(`min-h-24 rounded-md border px-3 py-2`,`bg-surface text-text-primary`,i),"aria-describedby":f||void 0,"aria-invalid":r?!0:void 0,"aria-required":a,...l}),(n||r)&&(0,c.jsx)(`p`,{className:r?`text-sm text-error`:`text-sm text-text-secondary`,children:r??n})]})}),l.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{label:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``}},composes:[`TextareaHTMLAttributes`]}})),d=e({Default:()=>p,Disabled:()=>_,Error:()=>g,LongContent:()=>y,Resize:()=>v,WithHelperText:()=>h,WithLabel:()=>m,__namedExportsOrder:()=>b,default:()=>f}),f,p,m,h,g,_,v,y,b,x=t((()=>{u(),f={title:`Components/Textarea`,component:l},p={args:{placeholder:`Enter your message...`}},m={args:{label:`Notes`,placeholder:`Add your notes here...`}},h={args:{label:`Task Description`,helperText:`Include details that help us understand your request.`}},g={args:{label:`Task Description`,placeholder:`Describe your task...`,defaultValue:`Short description`,error:`Please enter more than 20 characters`}},_={args:{label:`Task Description`,defaultValue:`Enter a task description that is relevant to the task at hand.`,disabled:!0}},v={args:{label:`Description`,placeholder:`Drag the bottom corner to resize...`,rows:3}},y={args:{label:`Description`,defaultValue:`This is an example of longer content inside a textarea.

It demonstrates how multiple lines of text are displayed.

The component should remain readable and comfortable to use.`,rows:6}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your message..."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Notes",
    placeholder: "Add your notes here..."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Task Description",
    helperText: "Include details that help us understand your request."
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Task Description",
    placeholder: "Describe your task...",
    defaultValue: "Short description",
    error: "Please enter more than 20 characters"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Task Description",
    defaultValue: "Enter a task description that is relevant to the task at hand.",
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    placeholder: "Drag the bottom corner to resize...",
    rows: 3
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    defaultValue: \`This is an example of longer content inside a textarea.

It demonstrates how multiple lines of text are displayed.

The component should remain readable and comfortable to use.\`,
    rows: 6
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithLabel`,`WithHelperText`,`Error`,`Disabled`,`Resize`,`LongContent`]}));x();export{p as Default,_ as Disabled,g as Error,y as LongContent,v as Resize,h as WithHelperText,m as WithLabel,b as __namedExportsOrder,f as default,x as n,d as t};