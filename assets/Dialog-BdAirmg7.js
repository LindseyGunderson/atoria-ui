import{i as e}from"./preload-helper-BdFrVu1K.js";import{i as t}from"./react-B35xfB42.js";import{c as n,n as r,s as i}from"./blocks-C8Bj4DlW.js";import{t as a}from"./jsx-runtime-f3rHp9ZU.js";import{t as o}from"./mdx-react-shim-Cs5xf-ce.js";import{Confirmation as s,Default as c,Sizes as l,n as u,t as d}from"./Dialog.stories-C_UQo-vg.js";function f(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:d}),`
`,(0,m.jsx)(n.h1,{id:`dialog`,children:`Dialog`}),`
`,(0,m.jsx)(n.p,{children:`The Dialog component presents important information or requests user input in a modal window. It provides an accessible, composable API built with React Context and supports keyboard interaction, overlay dismissal, and customizable layouts.`}),`
`,(0,m.jsx)(n.hr,{}),`
`,(0,m.jsx)(n.h2,{id:`features`,children:`Features`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsx)(n.li,{children:`Compound component API`}),`
`,(0,m.jsx)(n.li,{children:`Accessible dialog semantics`}),`
`,(0,m.jsx)(n.li,{children:`Keyboard support (Escape to close)`}),`
`,(0,m.jsx)(n.li,{children:`Overlay click dismissal`}),`
`,(0,m.jsx)(n.li,{children:`Multiple dialog sizes`}),`
`,(0,m.jsx)(n.li,{children:`Close button support`}),`
`,(0,m.jsx)(n.li,{children:`Flexible header and footer composition`}),`
`]}),`
`,(0,m.jsx)(n.hr,{}),`
`,(0,m.jsx)(n.h2,{id:`default`,children:`Default`}),`
`,(0,m.jsx)(r,{of:c}),`
`,(0,m.jsx)(n.hr,{}),`
`,(0,m.jsx)(n.h2,{id:`confirmation`,children:`Confirmation`}),`
`,(0,m.jsx)(r,{of:s}),`
`,(0,m.jsx)(n.hr,{}),`
`,(0,m.jsx)(n.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsx)(n.hr,{}),`
`,(0,m.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`<Dialog>\r
  <DialogTrigger>\r
    Open Dialog\r
  </DialogTrigger>\r
\r
  <DialogContent>\r
    <DialogCloseButton />\r
\r
    <DialogHeader>\r
      <DialogTitle>\r
        Delete account?\r
      </DialogTitle>\r
\r
      <DialogDescription>\r
        This action cannot be undone.\r
      </DialogDescription>\r
    </DialogHeader>\r
\r
    <DialogFooter>\r
      <DialogClose>\r
        Cancel\r
      </DialogClose>\r
\r
      <Button variant="destructive">\r
        Delete\r
      </Button>\r
    </DialogFooter>\r
  </DialogContent>\r
</Dialog>
`})}),`
`,(0,m.jsx)(n.hr,{}),`
`,(0,m.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,m.jsx)(n.h3,{id:`dialog-1`,children:`Dialog`}),`
`,(0,m.jsxs)(`table`,{children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:`Prop`}),(0,m.jsx)(`th`,{children:`Type`}),(0,m.jsx)(`th`,{children:`Default`}),(0,m.jsx)(`th`,{children:`Description`})]})}),(0,m.jsx)(`tbody`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`children`})}),(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`ReactNode`})}),(0,m.jsx)(`td`,{children:`—`}),(0,m.jsx)(`td`,{children:`Wraps all dialog components and provides dialog state.`})]})})]}),`
`,(0,m.jsx)(n.h3,{id:`dialogcontent`,children:`DialogContent`}),`
`,(0,m.jsxs)(`table`,{children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:`Prop`}),(0,m.jsx)(`th`,{children:`Type`}),(0,m.jsx)(`th`,{children:`Default`}),(0,m.jsx)(`th`,{children:`Description`})]})}),(0,m.jsxs)(`tbody`,{children:[(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`size`})}),(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`"sm" | "md" | "lg"`})}),(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`"md"`})}),(0,m.jsx)(`td`,{children:`Controls the maximum width of the dialog.`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`className`})}),(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`string`})}),(0,m.jsx)(`td`,{children:`—`}),(0,m.jsx)(`td`,{children:`Additional custom classes.`})]})]})]}),`
`,(0,m.jsx)(n.h3,{id:`dialogtrigger`,children:`DialogTrigger`}),`
`,(0,m.jsxs)(`table`,{children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:`Prop`}),(0,m.jsx)(`th`,{children:`Type`}),(0,m.jsx)(`th`,{children:`Default`}),(0,m.jsx)(`th`,{children:`Description`})]})}),(0,m.jsx)(`tbody`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`children`})}),(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`ReactNode`})}),(0,m.jsx)(`td`,{children:`—`}),(0,m.jsx)(`td`,{children:`Interactive element used to open the dialog.`})]})})]}),`
`,(0,m.jsx)(n.h3,{id:`dialogclose`,children:`DialogClose`}),`
`,(0,m.jsxs)(`table`,{children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:`Prop`}),(0,m.jsx)(`th`,{children:`Type`}),(0,m.jsx)(`th`,{children:`Default`}),(0,m.jsx)(`th`,{children:`Description`})]})}),(0,m.jsx)(`tbody`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`children`})}),(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`ReactNode`})}),(0,m.jsx)(`td`,{children:`—`}),(0,m.jsx)(`td`,{children:`Button used to close the dialog.`})]})})]}),`
`,(0,m.jsx)(n.h3,{id:`dialogclosebutton`,children:`DialogCloseButton`}),`
`,(0,m.jsxs)(`table`,{children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:`Prop`}),(0,m.jsx)(`th`,{children:`Type`}),(0,m.jsx)(`th`,{children:`Default`}),(0,m.jsx)(`th`,{children:`Description`})]})}),(0,m.jsx)(`tbody`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`className`})}),(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`string`})}),(0,m.jsx)(`td`,{children:`—`}),(0,m.jsx)(`td`,{children:`Additional styling for the close button.`})]})})]}),`
`,(0,m.jsx)(n.h3,{id:`dialogheader`,children:`DialogHeader`}),`
`,(0,m.jsxs)(`table`,{children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:`Prop`}),(0,m.jsx)(`th`,{children:`Type`}),(0,m.jsx)(`th`,{children:`Default`}),(0,m.jsx)(`th`,{children:`Description`})]})}),(0,m.jsx)(`tbody`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`children`})}),(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`ReactNode`})}),(0,m.jsx)(`td`,{children:`—`}),(0,m.jsx)(`td`,{children:`Groups the dialog title and description.`})]})})]}),`
`,(0,m.jsx)(n.h3,{id:`dialogtitle`,children:`DialogTitle`}),`
`,(0,m.jsxs)(`table`,{children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:`Prop`}),(0,m.jsx)(`th`,{children:`Type`}),(0,m.jsx)(`th`,{children:`Default`}),(0,m.jsx)(`th`,{children:`Description`})]})}),(0,m.jsx)(`tbody`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`children`})}),(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`ReactNode`})}),(0,m.jsx)(`td`,{children:`—`}),(0,m.jsx)(`td`,{children:`Accessible title for the dialog.`})]})})]}),`
`,(0,m.jsx)(n.h3,{id:`dialogdescription`,children:`DialogDescription`}),`
`,(0,m.jsxs)(`table`,{children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:`Prop`}),(0,m.jsx)(`th`,{children:`Type`}),(0,m.jsx)(`th`,{children:`Default`}),(0,m.jsx)(`th`,{children:`Description`})]})}),(0,m.jsx)(`tbody`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`children`})}),(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`ReactNode`})}),(0,m.jsx)(`td`,{children:`—`}),(0,m.jsx)(`td`,{children:`Additional descriptive text for the dialog.`})]})})]}),`
`,(0,m.jsx)(n.h3,{id:`dialogfooter`,children:`DialogFooter`}),`
`,(0,m.jsxs)(`table`,{children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:`Prop`}),(0,m.jsx)(`th`,{children:`Type`}),(0,m.jsx)(`th`,{children:`Default`}),(0,m.jsx)(`th`,{children:`Description`})]})}),(0,m.jsx)(`tbody`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`children`})}),(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`ReactNode`})}),(0,m.jsx)(`td`,{children:`—`}),(0,m.jsx)(`td`,{children:`Container for dialog actions.`})]})})]}),`
`,(0,m.jsx)(n.hr,{}),`
`,(0,m.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsx)(n.p,{children:`The Dialog component follows accessible modal patterns by:`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[`Applying `,(0,m.jsx)(n.code,{children:`role="dialog"`}),` and `,(0,m.jsx)(n.code,{children:`aria-modal="true"`})]}),`
`,(0,m.jsxs)(n.li,{children:[`Linking the dialog title and description using `,(0,m.jsx)(n.code,{children:`aria-labelledby`}),` and `,(0,m.jsx)(n.code,{children:`aria-describedby`})]}),`
`,(0,m.jsxs)(n.li,{children:[`Closing when the `,(0,m.jsx)(n.strong,{children:`Escape`}),` key is pressed`]}),`
`,(0,m.jsx)(n.li,{children:`Closing when the overlay is clicked`}),`
`,(0,m.jsx)(n.li,{children:`Providing an accessible label for the close button`}),`
`]}),`
`,(0,m.jsx)(n.hr,{}),`
`,(0,m.jsx)(n.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsx)(n.li,{children:`Keep dialog content concise and task-focused.`}),`
`,(0,m.jsx)(n.li,{children:`Use clear, action-oriented button labels.`}),`
`,(0,m.jsx)(n.li,{children:`Reserve dialogs for important actions or confirmations.`}),`
`,(0,m.jsx)(n.li,{children:`Always provide a way to dismiss the dialog.`}),`
`,(0,m.jsx)(n.li,{children:`Prefer confirmation dialogs for destructive actions.`}),`
`]}),`
`,(0,m.jsx)(n.hr,{}),`
`,(0,m.jsx)(n.h2,{id:`related-components`,children:`Related Components`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsx)(n.li,{children:`Button`}),`
`,(0,m.jsx)(n.li,{children:`Tooltip`}),`
`,(0,m.jsx)(n.li,{children:`Alert`}),`
`,(0,m.jsx)(n.li,{children:`Progress`}),`
`]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=a(),o(),n(),u()}))();export{p as default};