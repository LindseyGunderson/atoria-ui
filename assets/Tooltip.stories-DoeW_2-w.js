import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{D as r}from"./iframe-CP9FSVIB.js";import{t as i}from"./jsx-runtime-f3rHp9ZU.js";import{n as a,t as o}from"./cn-D76EcPql.js";function s({content:e,children:t,side:n=`top`,className:r,...i}){let[a,s]=(0,c.useState)(!1),d=(0,c.useId)();return(0,l.jsxs)(`div`,{className:o(`relative inline-block`,r),...i,children:[(0,c.cloneElement)(t,{"aria-describedby":a?d:void 0,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onFocus:()=>s(!0),onBlur:()=>s(!1)}),(0,l.jsx)(`div`,{id:d,role:`tooltip`,className:o(`absolute`,`z-50`,`rounded-md`,`bg-neutral-900`,`px-3`,`py-2`,`text-sm`,`text-white`,`shadow-md`,`whitespace-nowrap`,`pointer-events-none`,`transition-opacity`,`duration-150`,u[n],a?`visible opacity-100 translate-y-0 duration-fast`:`invisible opacity-0 translate-y-1`),children:e})]})}var c,l,u,d=t((()=>{c=n(r(),1),a(),l=i(),u={top:`bottom-full left-1/2 -translate-x-1/2 mb-2`,bottom:`top-full left-1/2 -translate-x-1/2 mt-2`,left:`right-full top-1/2 -translate-y-1/2 mr-2`,right:`left-full top-1/2 -translate-y-1/2 ml-2`},s.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactElement`},description:``},side:{required:!1,tsType:{name:`union`,raw:`"top" | "bottom" | "left" | "right"`,elements:[{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}]},description:``,defaultValue:{value:`"top"`,computed:!1}}},composes:[`HTMLAttributes`]}})),f=e({Default:()=>g,IconButton:()=>y,LongContent:()=>v,Positions:()=>_,__namedExportsOrder:()=>b,default:()=>m}),p,m,h,g,_,v,y,b,x=t((()=>{d(),p=i(),m={title:`Components/Tooltip`,component:s,parameters:{layout:`centered`}},h=({children:e,...t})=>(0,p.jsx)(`button`,{className:`\r
      rounded-md\r
      bg-primary\r
      px-4\r
      py-2\r
      text-white\r
    `,...t,children:e}),g={render:()=>(0,p.jsx)(s,{content:`Save changes`,children:(0,p.jsx)(h,{children:`Hover me`})})},_={render:()=>(0,p.jsxs)(`div`,{className:`grid grid-cols-3 gap-16 p-20`,children:[(0,p.jsx)(`div`,{}),(0,p.jsx)(s,{content:`Top tooltip`,side:`top`,children:(0,p.jsx)(h,{children:`Top`})}),(0,p.jsx)(`div`,{}),(0,p.jsx)(s,{content:`Left tooltip`,side:`left`,children:(0,p.jsx)(h,{children:`Left`})}),(0,p.jsx)(s,{content:`Center tooltip`,children:(0,p.jsx)(h,{children:`Center`})}),(0,p.jsx)(s,{content:`Right tooltip`,side:`right`,children:(0,p.jsx)(h,{children:`Right`})}),(0,p.jsx)(`div`,{}),(0,p.jsx)(s,{content:`Bottom tooltip`,side:`bottom`,children:(0,p.jsx)(h,{children:`Bottom`})}),(0,p.jsx)(`div`,{})]})},v={render:()=>(0,p.jsx)(s,{content:`This tooltip contains additional information about this action.`,children:(0,p.jsx)(h,{children:`Hover for details`})})},y={render:()=>(0,p.jsx)(s,{content:`Delete item`,children:(0,p.jsx)(`button`,{"aria-label":`Delete item`,className:`\r
          flex\r
          h-10\r
          w-10\r
          items-center\r
          justify-center\r
          rounded-full\r
          bg-error\r
          text-white\r
        `,children:`×`})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="Save changes">\r
      <Trigger>\r
        Hover me\r
      </Trigger>\r
    </Tooltip>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-16 p-20">\r
      <div />\r
\r
      <Tooltip content="Top tooltip" side="top">\r
        <Trigger>\r
          Top\r
        </Trigger>\r
      </Tooltip>\r
\r
      <div />\r
\r
\r
      <Tooltip content="Left tooltip" side="left">\r
        <Trigger>\r
          Left\r
        </Trigger>\r
      </Tooltip>\r
\r
\r
      <Tooltip content="Center tooltip">\r
        <Trigger>\r
          Center\r
        </Trigger>\r
      </Tooltip>\r
\r
\r
      <Tooltip content="Right tooltip" side="right">\r
        <Trigger>\r
          Right\r
        </Trigger>\r
      </Tooltip>\r
\r
\r
      <div />\r
\r
      <Tooltip content="Bottom tooltip" side="bottom">\r
        <Trigger>\r
          Bottom\r
        </Trigger>\r
      </Tooltip>\r
\r
      <div />\r
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="This tooltip contains additional information about this action.">\r
      <Trigger>\r
        Hover for details\r
      </Trigger>\r
    </Tooltip>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="Delete item">\r
      <button aria-label="Delete item" className="\r
          flex\r
          h-10\r
          w-10\r
          items-center\r
          justify-center\r
          rounded-full\r
          bg-error\r
          text-white\r
        ">\r
        ×\r
      </button>\r
    </Tooltip>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Positions`,`LongContent`,`IconButton`]}));x();export{g as Default,y as IconButton,v as LongContent,_ as Positions,b as __namedExportsOrder,m as default,x as n,f as t};