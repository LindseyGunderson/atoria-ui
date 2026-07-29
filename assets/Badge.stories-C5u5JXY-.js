import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{n as r,t as i}from"./cn-D76EcPql.js";import{n as a,t as o}from"./dist-COnt2_yI.js";var s,c,l,u=t((()=>{a(),r(),s=n(),c=o([`inline-flex`,`items-center`,`justify-center`,`whitespace-nowrap`,`rounded-full`,`font-medium`,`transition-colors`],{variants:{variant:{neutral:`border border-border bg-neutral-100 text-text-primary`,primary:`border border-primary/20 bg-primary/10 text-primary`,success:`border border-success/20 bg-success/10 text-success`,warning:`border border-warning/20 bg-warning/10 text-warning`,error:`border border-error/20 bg-error/10 text-error`,info:`border border-info/20 bg-info/10 text-info`},size:{sm:`px-2 py-0.5 text-xs`,md:`px-2.5 py-1 text-sm`}},defaultVariants:{variant:`neutral`,size:`md`}}),l=({className:e,variant:t,size:n,children:r,...a})=>(0,s.jsx)(`span`,{className:i(c({variant:t,size:n}),e),...a,children:r}),l.__docgenInfo={description:``,methods:[],displayName:`Badge`,composes:[`VariantProps`]}})),d=e({Default:()=>m,Sizes:()=>g,StatusExamples:()=>_,Variants:()=>h,__namedExportsOrder:()=>v,default:()=>p}),f,p,m,h,g,_,v,y=t((()=>{u(),f=n(),p={title:`Components/Badge`,component:l},m={args:{variant:`neutral`,children:`New`}},h={render:()=>(0,f.jsxs)(`div`,{className:`flex gap-3 flex-wrap`,children:[(0,f.jsx)(l,{variant:`neutral`,children:`Neutral`}),(0,f.jsx)(l,{variant:`primary`,children:`Primary`}),(0,f.jsx)(l,{variant:`success`,children:`Success`}),(0,f.jsx)(l,{variant:`warning`,children:`Warning`}),(0,f.jsx)(l,{variant:`error`,children:`Error`}),(0,f.jsx)(l,{variant:`info`,children:`Info`})]})},g={render:()=>(0,f.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,f.jsx)(l,{size:`sm`,children:`Small`}),(0,f.jsx)(l,{size:`md`,children:`Medium`})]})},_={render:()=>(0,f.jsxs)(`div`,{className:`flex flex-1 gap-3`,children:[(0,f.jsx)(l,{variant:`success`,children:`Active`}),(0,f.jsx)(l,{variant:`warning`,children:`Pending Review`}),(0,f.jsx)(l,{variant:`error`,children:`Failed`}),(0,f.jsx)(l,{variant:`primary`,children:`Beta`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "neutral",
    children: "New"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-3 flex-wrap">\r
      <Badge variant="neutral">Neutral</Badge>\r
\r
      <Badge variant="primary">Primary</Badge>\r
\r
      <Badge variant="success">Success</Badge>\r
\r
      <Badge variant="warning">Warning</Badge>\r
\r
      <Badge variant="error">Error</Badge>\r
\r
      <Badge variant="info">Info</Badge>\r
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Badge size="sm">Small</Badge>\r
\r
      <Badge size="md">Medium</Badge>\r
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-1 gap-3">\r
      <Badge variant="success">Active</Badge>\r
\r
      <Badge variant="warning">Pending Review</Badge>\r
\r
      <Badge variant="error">Failed</Badge>\r
\r
      <Badge variant="primary">Beta</Badge>\r
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Variants`,`Sizes`,`StatusExamples`]}));y();export{m as Default,g as Sizes,_ as StatusExamples,h as Variants,v as __namedExportsOrder,p as default,y as n,d as t};