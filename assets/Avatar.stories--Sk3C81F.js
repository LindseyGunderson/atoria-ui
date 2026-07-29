import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{n as r,t as i}from"./cn-D76EcPql.js";var a,o=t((()=>{a=e=>e.split(` `).filter(Boolean).map(e=>e[0]).join(``).toUpperCase()}));function s({src:e,alt:t,name:n,size:r=`md`,variant:o=`circle`,className:s,...d}){let f=!!n?.trim();return(0,c.jsx)(`div`,{className:i(`flex shrink-0 items-center justify-center`,`overflow-hidden`,`bg-primary text-white font-medium`,l[r],u[o],s),...d,children:e?(0,c.jsx)(`img`,{src:e,alt:t??n,className:`h-full w-full object-cover`}):f?(0,c.jsx)(`span`,{children:a(n)}):(0,c.jsx)(`span`,{children:`?`})})}var c,l,u,d=t((()=>{r(),o(),c=n(),l={sm:`h-8 w-8 text-xs`,md:`h-10 w-10 text-sm`,lg:`h-14 w-14 text-lg`},u={circle:`rounded-full`,square:`rounded-md`},s.__docgenInfo={description:``,methods:[],displayName:`Avatar`,props:{src:{required:!1,tsType:{name:`string`},description:``},alt:{required:!1,tsType:{name:`string`},description:``},name:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"circle" | "square"`,elements:[{name:`literal`,value:`"circle"`},{name:`literal`,value:`"square"`}]},description:``,defaultValue:{value:`"circle"`,computed:!1}}},composes:[`HTMLAttributes`]}})),f=e({Default:()=>h,Empty:()=>b,Shapes:()=>y,Sizes:()=>v,WithImage:()=>g,WithInitials:()=>_,__namedExportsOrder:()=>x,default:()=>m}),p,m,h,g,_,v,y,b,x,S=t((()=>{d(),p=n(),m={title:`Components/Avatar`,component:s,parameters:{layout:`centered`}},h={args:{name:`Lindsay Smith`}},g={args:{src:`https://i.pravatar.cc/150?img=47`,alt:`Profile picture`,name:`Lindsay Smith`}},_={args:{name:`Lindsay Smith`}},v={render:()=>(0,p.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,p.jsx)(s,{name:`Lindsay Smith`,size:`sm`}),(0,p.jsx)(s,{name:`Lindsay Smith`,size:`md`}),(0,p.jsx)(s,{name:`Lindsay Smith`,size:`lg`})]})},y={render:()=>(0,p.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,p.jsx)(s,{name:`Lindsay Smith`,variant:`circle`}),(0,p.jsx)(s,{name:`Lindsay Smith`,variant:`square`})]})},b={args:{}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Lindsay Smith"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/150?img=47",
    alt: "Profile picture",
    name: "Lindsay Smith"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Lindsay Smith"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Avatar name="Lindsay Smith" size="sm" />\r
      <Avatar name="Lindsay Smith" size="md" />\r
      <Avatar name="Lindsay Smith" size="lg" />\r
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Avatar name="Lindsay Smith" variant="circle" />\r
\r
      <Avatar name="Lindsay Smith" variant="square" />\r
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithImage`,`WithInitials`,`Sizes`,`Shapes`,`Empty`]}));S();export{h as Default,b as Empty,y as Shapes,v as Sizes,g as WithImage,_ as WithInitials,x as __namedExportsOrder,m as default,S as n,f as t};