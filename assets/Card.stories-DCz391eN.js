import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{n as r,t as i}from"./cn-D76EcPql.js";function a({variant:e=`default`,className:t,children:n,...r}){return(0,o.jsx)(`div`,{className:i(`rounded-card`,`bg-surface`,`border border-border`,`shadow-card`,`p-6`,e===`outlined`&&`shadow-none`,t),...r,children:n})}var o,s=t((()=>{r(),o=n(),a.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{variant:{required:!1,tsType:{name:`union`,raw:`"default" | "outlined"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"outlined"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}}},composes:[`HTMLAttributes`]}})),c=e({Default:()=>d,Interactive:()=>m,Outlined:()=>f,WithContent:()=>p,__namedExportsOrder:()=>h,default:()=>u}),l,u,d,f,p,m,h,g=t((()=>{s(),l=n(),u={title:`Components/Card`,component:a},d={render:()=>(0,l.jsx)(`div`,{className:`max-w-md`,children:(0,l.jsxs)(a,{children:[(0,l.jsx)(`h3`,{className:`text-lg font-semibold text-text-primary`,children:`Project Overview`}),(0,l.jsx)(`p`,{className:`mt-2 text-text-secondary`,children:`This card demonstrates the default surface style.`})]})})},f={render:()=>(0,l.jsx)(`div`,{className:`max-w-md`,children:(0,l.jsxs)(a,{variant:`outlined`,children:[(0,l.jsx)(`h3`,{className:`text-lg font-semibold text-text-primary`,children:`Outlined Card`}),(0,l.jsx)(`p`,{className:`mt-2 text-text-secondary`,children:`A card without elevation.`})]})})},p={render:()=>(0,l.jsx)(`div`,{className:`max-w-md`,children:(0,l.jsxs)(a,{children:[(0,l.jsx)(`h3`,{className:`text-lg font-semibold text-text-primary`,children:`Project Overview`}),(0,l.jsx)(`p`,{className:`mt-2 text-sm text-text-secondary`,children:`A flexible card component built with Atoria UI tokens and reusable design patterns.`})]})})},m={render:()=>(0,l.jsx)(`div`,{className:`max-w-md`,children:(0,l.jsxs)(a,{children:[(0,l.jsx)(`h3`,{className:`text-lg font-semibold text-text-primary`,children:`Atoria UI`}),(0,l.jsx)(`p`,{className:`mt-2 text-sm text-text-secondary`,children:`A component library built with React, TypeScript, and Storybook.`}),(0,l.jsx)(`button`,{className:`mt-4 text-sm font-medium text-primary hover:text-primary-hover`,children:`View Components`})]})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">\r
      <Card>\r
        <h3 className="text-lg font-semibold text-text-primary">\r
          Project Overview\r
        </h3>\r
        <p className="mt-2 text-text-secondary">\r
          This card demonstrates the default surface style.\r
        </p>\r
      </Card>\r
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">\r
      <Card variant="outlined">\r
        <h3 className="text-lg font-semibold text-text-primary">\r
          Outlined Card\r
        </h3>\r
        <p className="mt-2 text-text-secondary">A card without elevation.</p>\r
      </Card>\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">\r
      <Card>\r
        <h3 className="text-lg font-semibold text-text-primary">\r
          Project Overview\r
        </h3>\r
        <p className="mt-2 text-sm text-text-secondary">\r
          A flexible card component built with Atoria UI tokens and reusable\r
          design patterns.\r
        </p>\r
      </Card>\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">\r
      <Card>\r
        <h3 className="text-lg font-semibold text-text-primary">Atoria UI</h3>\r
        <p className="mt-2 text-sm text-text-secondary">\r
          A component library built with React, TypeScript, and Storybook.\r
        </p>\r
        <button className="mt-4 text-sm font-medium text-primary hover:text-primary-hover">\r
          View Components\r
        </button>\r
      </Card>\r
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Outlined`,`WithContent`,`Interactive`]}));g();export{d as Default,m as Interactive,f as Outlined,p as WithContent,h as __namedExportsOrder,u as default,g as n,c as t};