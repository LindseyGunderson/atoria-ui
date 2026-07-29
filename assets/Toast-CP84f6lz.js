import{i as e}from"./preload-helper-BdFrVu1K.js";import{i as t}from"./react-B35xfB42.js";import{c as n,n as r,s as i}from"./blocks-C8Bj4DlW.js";import{t as a}from"./jsx-runtime-f3rHp9ZU.js";import{t as o}from"./mdx-react-shim-Cs5xf-ce.js";import{Default as s,Error as c,Info as l,Multiple as u,Success as d,Warning as f,n as p,t as m}from"./Toast.stories-48kDBmu4.js";function h(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:m}),`
`,(0,_.jsx)(n.h1,{id:`toast`,children:`Toast`}),`
`,(0,_.jsx)(n.p,{children:`The Toast component provides lightweight, temporary feedback messages for users after an action occurs.`}),`
`,(0,_.jsx)(n.p,{children:`Toasts are commonly used for:`}),`
`,(0,_.jsxs)(n.ul,{children:[`
`,(0,_.jsx)(n.li,{children:`Successful actions`}),`
`,(0,_.jsx)(n.li,{children:`Errors or failures`}),`
`,(0,_.jsx)(n.li,{children:`Warnings that require attention`}),`
`,(0,_.jsx)(n.li,{children:`Informational updates`}),`
`]}),`
`,(0,_.jsx)(n.p,{children:`The component supports:`}),`
`,(0,_.jsxs)(n.ul,{children:[`
`,(0,_.jsx)(n.li,{children:`Multiple variants`}),`
`,(0,_.jsx)(n.li,{children:`Icons`}),`
`,(0,_.jsx)(n.li,{children:`Auto-dismiss behavior`}),`
`,(0,_.jsx)(n.li,{children:`Manual dismissal`}),`
`,(0,_.jsx)(n.li,{children:`Animated entrance and exit transitions`}),`
`,(0,_.jsx)(n.li,{children:`Provider-based state management`}),`
`]}),`
`,(0,_.jsx)(n.hr,{}),`
`,(0,_.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,_.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,_.jsx)(r,{of:s}),`
`,(0,_.jsx)(n.h3,{id:`success`,children:`Success`}),`
`,(0,_.jsx)(r,{of:d}),`
`,(0,_.jsx)(n.h3,{id:`error`,children:`Error`}),`
`,(0,_.jsx)(r,{of:c}),`
`,(0,_.jsx)(n.h3,{id:`warning`,children:`Warning`}),`
`,(0,_.jsx)(r,{of:f}),`
`,(0,_.jsx)(n.h3,{id:`info`,children:`Info`}),`
`,(0,_.jsx)(r,{of:l}),`
`,(0,_.jsx)(n.h3,{id:`multiple-toasts`,children:`Multiple Toasts`}),`
`,(0,_.jsx)(r,{of:u}),`
`,(0,_.jsx)(n.hr,{}),`
`,(0,_.jsx)(n.h1,{id:`usage`,children:`Usage`}),`
`,(0,_.jsxs)(n.p,{children:[`Toast notifications are managed through the `,(0,_.jsx)(n.code,{children:`ToastProvider`}),`.`]}),`
`,(0,_.jsx)(n.p,{children:`Wrap your application with the provider:`}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:`language-tsx`,children:`<ToastProvider>\r
  <App />\r
  <ToastContainer />\r
</ToastProvider>
`})}),`
`,(0,_.jsxs)(n.p,{children:[`Then use the `,(0,_.jsx)(n.code,{children:`useToast`}),` hook to trigger notifications:`]}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:`language-tsx`,children:`const { addToast } = useToast();\r
\r
addToast({\r
  title: "Profile updated",\r
  description: "Your changes were saved successfully.",\r
  variant: "success",\r
});
`})}),`
`,(0,_.jsx)(n.hr,{}),`
`,(0,_.jsx)(n.h1,{id:`variants`,children:`Variants`}),`
`,(0,_.jsx)(n.p,{children:`Toast supports four semantic feedback states.`}),`
`,(0,_.jsxs)(`table`,{children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`Variant`}),(0,_.jsx)(`th`,{children:`Purpose`}),(0,_.jsx)(`th`,{children:`Icon`})]})}),(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`success`}),(0,_.jsx)(`td`,{children:`Confirms a completed action.`}),(0,_.jsx)(`td`,{children:`Check circle`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`error`}),(0,_.jsx)(`td`,{children:`Communicates a failed action or issue.`}),(0,_.jsx)(`td`,{children:`Alert circle`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`warning`}),(0,_.jsx)(`td`,{children:`Highlights something requiring attention.`}),(0,_.jsx)(`td`,{children:`Alert triangle`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`info`}),(0,_.jsx)(`td`,{children:`Provides general information or updates.`}),(0,_.jsx)(`td`,{children:`Information icon`})]})]})]}),`
`,(0,_.jsx)(n.hr,{}),`
`,(0,_.jsx)(n.h1,{id:`behavior`,children:`Behavior`}),`
`,(0,_.jsx)(n.h2,{id:`auto-dismiss`,children:`Auto Dismiss`}),`
`,(0,_.jsx)(n.p,{children:`Toasts automatically dismiss after a default duration.`}),`
`,(0,_.jsx)(n.p,{children:`The lifecycle is:`}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{children:`Toast appears\r
      ↓\r
Timer starts\r
      ↓\r
Closing animation begins\r
      ↓\r
Toast is removed
`})}),`
`,(0,_.jsx)(n.hr,{}),`
`,(0,_.jsx)(n.h2,{id:`manual-dismiss`,children:`Manual Dismiss`}),`
`,(0,_.jsx)(n.p,{children:`Users can manually close a toast using the close button.`}),`
`,(0,_.jsx)(n.p,{children:`Manual dismissal uses the same closing animation as auto-dismiss.`}),`
`,(0,_.jsx)(n.hr,{}),`
`,(0,_.jsx)(n.h2,{id:`multiple-toasts-1`,children:`Multiple Toasts`}),`
`,(0,_.jsx)(n.p,{children:`Multiple notifications can appear at the same time.`}),`
`,(0,_.jsx)(n.p,{children:`Toasts are stacked vertically and managed independently.`}),`
`,(0,_.jsx)(n.hr,{}),`
`,(0,_.jsx)(n.h1,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(n.h2,{id:`toast-1`,children:`Toast`}),`
`,(0,_.jsxs)(`table`,{children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`Prop`}),(0,_.jsx)(`th`,{children:`Type`}),(0,_.jsx)(`th`,{children:`Default`}),(0,_.jsx)(`th`,{children:`Description`})]})}),(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`title`})}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`string`})}),(0,_.jsx)(`td`,{children:`—`}),(0,_.jsx)(`td`,{children:`Main notification heading.`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`description`})}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`string`})}),(0,_.jsx)(`td`,{children:`—`}),(0,_.jsx)(`td`,{children:`Additional supporting information.`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`variant`})}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`"success" | "error" | "warning" | "info"`})}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`"info"`})}),(0,_.jsx)(`td`,{children:`Controls semantic styling and icon.`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`duration`})}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`number`})}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`5000`})}),(0,_.jsx)(`td`,{children:`Controls how long before auto-dismiss begins.`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`onClose`})}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`() => void`})}),(0,_.jsx)(`td`,{children:`—`}),(0,_.jsx)(`td`,{children:`Callback triggered after closing animation completes.`})]})]})]}),`
`,(0,_.jsx)(n.hr,{}),`
`,(0,_.jsx)(n.h2,{id:`toastprovider`,children:`ToastProvider`}),`
`,(0,_.jsxs)(`table`,{children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`Prop`}),(0,_.jsx)(`th`,{children:`Type`}),(0,_.jsx)(`th`,{children:`Default`}),(0,_.jsx)(`th`,{children:`Description`})]})}),(0,_.jsx)(`tbody`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`children`})}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`ReactNode`})}),(0,_.jsx)(`td`,{children:`—`}),(0,_.jsx)(`td`,{children:`Application content wrapped by the provider.`})]})})]}),`
`,(0,_.jsx)(n.hr,{}),`
`,(0,_.jsx)(n.h2,{id:`toastcontainer`,children:`ToastContainer`}),`
`,(0,_.jsxs)(`table`,{children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:`Prop`}),(0,_.jsx)(`th`,{children:`Type`}),(0,_.jsx)(`th`,{children:`Default`}),(0,_.jsx)(`th`,{children:`Description`})]})}),(0,_.jsx)(`tbody`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`children`})}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:`ReactNode`})}),(0,_.jsx)(`td`,{children:`—`}),(0,_.jsx)(`td`,{children:`Renders active toast notifications.`})]})})]}),`
`,(0,_.jsx)(n.hr,{}),`
`,(0,_.jsx)(n.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsx)(n.p,{children:`Toast notifications follow accessible feedback patterns:`}),`
`,(0,_.jsxs)(n.ul,{children:[`
`,(0,_.jsx)(n.li,{children:`Uses semantic status messaging.`}),`
`,(0,_.jsx)(n.li,{children:`Error notifications use assertive alert behavior.`}),`
`,(0,_.jsx)(n.li,{children:`Icons are decorative and hidden from screen readers.`}),`
`,(0,_.jsx)(n.li,{children:`Users can manually dismiss notifications.`}),`
`,(0,_.jsx)(n.li,{children:`Notifications remain readable with supporting text.`}),`
`]}),`
`,(0,_.jsx)(n.hr,{}),`
`,(0,_.jsx)(n.h1,{id:`design-notes`,children:`Design Notes`}),`
`,(0,_.jsx)(n.p,{children:`Toast uses semantic feedback tokens rather than hardcoded colors.`}),`
`,(0,_.jsx)(n.p,{children:`Variants consume the design system feedback palette:`}),`
`,(0,_.jsxs)(n.ul,{children:[`
`,(0,_.jsx)(n.li,{children:`Success uses success tokens.`}),`
`,(0,_.jsx)(n.li,{children:`Error uses error tokens.`}),`
`,(0,_.jsx)(n.li,{children:`Warning uses warning tokens.`}),`
`,(0,_.jsx)(n.li,{children:`Info uses information tokens.`}),`
`]}),`
`,(0,_.jsx)(n.p,{children:`This keeps Toast consistent with other feedback components such as Alert.`}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{})})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=a(),o(),n(),p()}))();export{g as default};