import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{D as r}from"./iframe-q9FXp4el.js";import{t as i}from"./jsx-runtime-f3rHp9ZU.js";import{n as a,t as o}from"./cn-D76EcPql.js";import{a as s,o as c}from"./fi-AXl-iKn0.js";function l(){let e=(0,y.useContext)(S);if(!e)throw Error(`Dialog components must be used inside a Dialog provider.`);return e}function u({children:e}){let[t,n]=(0,y.useState)(!1),r=(0,y.useId)(),i=(0,y.useId)();return(0,b.jsx)(S.Provider,{value:{open:t,setOpen:n,titleId:r,descriptionId:i},children:e})}function d({children:e,className:t,...n}){let{setOpen:r}=l();return(0,b.jsx)(`button`,{className:t,onClick:()=>r(!0),...n,children:e})}function f({children:e,className:t,size:n=`md`,...r}){let{open:i,setOpen:a,titleId:s,descriptionId:c}=l();return(0,y.useEffect)(()=>{function e(e){e.key===`Escape`&&a(!1)}return i&&document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[i,a]),i?(0,b.jsx)(`div`,{className:`\r
        fixed\r
        inset-0\r
        z-50\r
        flex\r
        items-center\r
        justify-center\r
        bg-neutral-900/50\r
        backdrop-blur-sm\r
        p-4\r
        animate-dialog-overlay\r
      `,onClick:()=>a(!1),children:(0,b.jsx)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":s,"aria-describedby":c,className:o(`relative`,`w-full`,x[n],`rounded-lg`,`bg-white`,`p-6`,`shadow-lg`,`animate-dialog-content`,t),onClick:e=>e.stopPropagation(),...r,children:e})}):null}function p({children:e,className:t,...n}){return(0,b.jsx)(`div`,{className:o(`mb-4`,`space-y-2`,t),...n,children:e})}function m({children:e,className:t,...n}){let{titleId:r}=l();return(0,b.jsx)(`h2`,{id:r,className:o(`text-lg`,`font-semibold`,`text-neutral-900`,t),...n,children:e})}function h({children:e,className:t,...n}){let{descriptionId:r}=l();return(0,b.jsx)(`p`,{id:r,className:o(`text-sm`,`text-neutral-600`,t),...n,children:e})}function g({children:e,className:t,...n}){return(0,b.jsx)(`div`,{className:o(`mt-6`,`flex`,`justify-end`,`gap-3`,t),...n,children:e})}function _({children:e,className:t,...n}){let{setOpen:r}=l();return(0,b.jsx)(`button`,{className:t,onClick:()=>r(!1),...n,children:e})}function v({className:e,...t}){let{setOpen:n}=l();return(0,b.jsx)(`button`,{type:`button`,"aria-label":`Close dialog`,className:o(`absolute right-4 top-4`,`flex h-8 w-8 items-center justify-center`,`rounded-md`,`text-neutral-500`,`transition-colors`,`active:scale-95`,`duration-150`,`hover:bg-neutral-100`,`hover:text-neutral-900`,e),onClick:()=>n(!1),...t,children:(0,b.jsx)(s,{size:16})})}var y,b,x,S,C=t((()=>{c(),y=n(r(),1),a(),b=i(),x={sm:`max-w-sm`,md:`max-w-md`,lg:`max-w-lg`},S=(0,y.createContext)(void 0),u.__docgenInfo={description:``,methods:[],displayName:`Dialog`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}},d.__docgenInfo={description:``,methods:[],displayName:`DialogTrigger`},f.__docgenInfo={description:``,methods:[],displayName:`DialogContent`,props:{size:{defaultValue:{value:`"md"`,computed:!1},required:!1}}},p.__docgenInfo={description:``,methods:[],displayName:`DialogHeader`},m.__docgenInfo={description:``,methods:[],displayName:`DialogTitle`},h.__docgenInfo={description:``,methods:[],displayName:`DialogDescription`},g.__docgenInfo={description:``,methods:[],displayName:`DialogFooter`},_.__docgenInfo={description:``,methods:[],displayName:`DialogClose`},v.__docgenInfo={description:``,methods:[],displayName:`DialogCloseButton`}})),w=e({Confirmation:()=>O,Default:()=>D,Sizes:()=>k,__namedExportsOrder:()=>A,default:()=>E}),T,E,D,O,k,A,j=t((()=>{C(),T=i(),E={title:`Components/Dialog`,component:u,parameters:{layout:`centered`}},D={render:()=>(0,T.jsxs)(u,{children:[(0,T.jsx)(d,{children:`Open Dialog`}),(0,T.jsxs)(f,{children:[(0,T.jsx)(v,{}),(0,T.jsxs)(p,{children:[(0,T.jsx)(m,{children:`Delete account?`}),(0,T.jsx)(h,{children:`This action cannot be undone. All of your data will be permanently removed.`})]}),(0,T.jsxs)(g,{children:[(0,T.jsx)(_,{children:`Cancel`}),(0,T.jsx)(`button`,{children:`Delete`})]})]})]})},O={render:()=>(0,T.jsxs)(u,{children:[(0,T.jsx)(d,{children:`Delete Project`}),(0,T.jsxs)(f,{children:[(0,T.jsx)(v,{}),(0,T.jsxs)(p,{children:[(0,T.jsx)(m,{children:`Delete project?`}),(0,T.jsx)(h,{children:`This will permanently remove your project and all associated data.`})]}),(0,T.jsxs)(g,{children:[(0,T.jsx)(_,{children:`Cancel`}),(0,T.jsx)(`button`,{className:`rounded-md bg-red-600 px-4 py-2 text-white`,children:`Delete`})]})]})]})},k={render:()=>(0,T.jsxs)(`div`,{className:`flex gap-4`,children:[(0,T.jsxs)(u,{children:[(0,T.jsx)(d,{children:`Small`}),(0,T.jsx)(f,{size:`sm`,children:(0,T.jsx)(m,{children:`Small Dialog`})})]}),(0,T.jsxs)(u,{children:[(0,T.jsx)(d,{children:`Medium`}),(0,T.jsx)(f,{size:`md`,children:`Medium Dialog`})]}),(0,T.jsxs)(u,{children:[(0,T.jsx)(d,{children:`Large`}),(0,T.jsx)(f,{size:`lg`,children:`Large Dialog`})]})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>\r
      <DialogTrigger>Open Dialog</DialogTrigger>\r
\r
      <DialogContent>\r
        <DialogCloseButton />\r
\r
        <DialogHeader>\r
          <DialogTitle>Delete account?</DialogTitle>\r
\r
          <DialogDescription>\r
            This action cannot be undone. All of your data will be permanently\r
            removed.\r
          </DialogDescription>\r
        </DialogHeader>\r
\r
        <DialogFooter>\r
          <DialogClose>Cancel</DialogClose>\r
\r
          <button>Delete</button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>\r
      <DialogTrigger>Delete Project</DialogTrigger>\r
\r
      <DialogContent>\r
        <DialogCloseButton />\r
\r
        <DialogHeader>\r
          <DialogTitle>Delete project?</DialogTitle>\r
\r
          <DialogDescription>\r
            This will permanently remove your project and all associated data.\r
          </DialogDescription>\r
        </DialogHeader>\r
\r
        <DialogFooter>\r
          <DialogClose>Cancel</DialogClose>\r
\r
          <button className="rounded-md bg-red-600 px-4 py-2 text-white">\r
            Delete\r
          </button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Dialog>\r
        <DialogTrigger>Small</DialogTrigger>\r
\r
        <DialogContent size="sm">\r
          <DialogTitle>Small Dialog</DialogTitle>\r
        </DialogContent>\r
      </Dialog>\r
\r
      <Dialog>\r
        <DialogTrigger>Medium</DialogTrigger>\r
\r
        <DialogContent size="md">Medium Dialog</DialogContent>\r
      </Dialog>\r
\r
      <Dialog>\r
        <DialogTrigger>Large</DialogTrigger>\r
\r
        <DialogContent size="lg">Large Dialog</DialogContent>\r
      </Dialog>\r
    </div>
}`,...k.parameters?.docs?.source}}},A=[`Default`,`Confirmation`,`Sizes`]}));j();export{O as Confirmation,D as Default,k as Sizes,A as __namedExportsOrder,E as default,j as n,w as t};