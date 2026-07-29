import{i as e}from"./preload-helper-BdFrVu1K.js";import{i as t}from"./react-Tw-SnIr7.js";import{c as n,i as r,n as i,s as a}from"./blocks-B2FR8XNW.js";import{t as o}from"./jsx-runtime-f3rHp9ZU.js";import{t as s}from"./mdx-react-shim-C3oMyBDw.js";import{Default as c,Error as l,Info as u,Success as d,Warning as f,WithIcon as p,n as m,t as h}from"./Alert.stories-LNsO8TAb.js";function g(e){let n={code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(n.h1,{id:`alert`,children:`Alert`}),`
`,(0,v.jsxs)(n.p,{children:[`The `,(0,v.jsx)(n.code,{children:`Alert`}),` component provides contextual feedback messages to communicate important information, warnings, errors, and successful actions.`]}),`
`,(0,v.jsx)(n.p,{children:`Alerts are designed to provide clear feedback while maintaining consistency through semantic design tokens.`}),`
`,(0,v.jsx)(n.p,{children:`The component supports:`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsx)(n.li,{children:`Success, error, warning, and informational states`}),`
`,(0,v.jsx)(n.li,{children:`Optional titles`}),`
`,(0,v.jsx)(n.li,{children:`Optional icons`}),`
`,(0,v.jsx)(n.li,{children:`Custom content`}),`
`,(0,v.jsx)(n.li,{children:`Theme-based feedback styling`}),`
`]}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,v.jsx)(n.p,{children:`Use Alert when a user needs feedback about the result of an action or important information related to the current context.`}),`
`,(0,v.jsx)(n.p,{children:`Common examples include:`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsx)(n.li,{children:`Confirming a successful action`}),`
`,(0,v.jsx)(n.li,{children:`Displaying validation errors`}),`
`,(0,v.jsx)(n.li,{children:`Warning users about potential issues`}),`
`,(0,v.jsx)(n.li,{children:`Providing helpful information or guidance`}),`
`]}),`
`,(0,v.jsx)(n.p,{children:`Alert should provide meaningful context and should not be used for decorative messages.`}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`default-alert`,children:`Default Alert`}),`
`,(0,v.jsx)(n.p,{children:`The default Alert uses the informational variant and is intended for general messages.`}),`
`,(0,v.jsx)(i,{of:c}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Alert>\r
  This is an informational alert message.\r
</Alert>
`})}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`success-alert`,children:`Success Alert`}),`
`,(0,v.jsx)(n.p,{children:`Use the success variant when communicating that an action completed successfully.`}),`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Alert variant="success">\r
  Your changes have been saved successfully.\r
</Alert>
`})}),`
`,(0,v.jsx)(n.p,{children:`Common examples:`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsx)(n.li,{children:`Saved settings`}),`
`,(0,v.jsx)(n.li,{children:`Completed submissions`}),`
`,(0,v.jsx)(n.li,{children:`Successful updates`}),`
`]}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`error-alert`,children:`Error Alert`}),`
`,(0,v.jsx)(n.p,{children:`Use the error variant when something has failed or requires user attention.`}),`
`,(0,v.jsx)(i,{of:l}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Alert\r
  variant="error"\r
  title="Unable to save changes"\r
>\r
  Please check your connection and try again.\r
</Alert>
`})}),`
`,(0,v.jsx)(n.p,{children:`Error alerts should provide enough information for users to understand what happened and what action they can take next.`}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`warning-alert`,children:`Warning Alert`}),`
`,(0,v.jsx)(n.p,{children:`Use the warning variant when users should be aware of a potential issue before continuing.`}),`
`,(0,v.jsx)(i,{of:f}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Alert\r
  variant="warning"\r
  title="Your session is about to expire"\r
>\r
  Please save your work before continuing.\r
</Alert>
`})}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`info-alert`,children:`Info Alert`}),`
`,(0,v.jsx)(n.p,{children:`Use the informational variant for general guidance or helpful context.`}),`
`,(0,v.jsx)(i,{of:u}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Alert variant="info">\r
  You can update your profile information at any time.\r
</Alert>
`})}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`alert-with-icon`,children:`Alert With Icon`}),`
`,(0,v.jsx)(n.p,{children:`Icons can be provided to reinforce the meaning of the message.`}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Alert\r
  variant="success"\r
  icon={<CheckIcon />}\r
  title="Profile updated"\r
>\r
  Your changes were saved successfully.\r
</Alert>
`})}),`
`,(0,v.jsx)(n.p,{children:`Icons should support the message rather than replace the text content.`}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(r,{}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`accessibility-guidelines`,children:`Accessibility Guidelines`}),`
`,(0,v.jsx)(n.p,{children:`Alerts communicate important information and should be used intentionally.`}),`
`,(0,v.jsxs)(n.p,{children:[`The component uses `,(0,v.jsx)(n.code,{children:`role="alert"`}),` to notify assistive technologies when new alert content appears.`]}),`
`,(0,v.jsx)(n.p,{children:`Accessibility recommendations:`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsx)(n.li,{children:`Keep messages concise and clear.`}),`
`,(0,v.jsx)(n.li,{children:`Provide descriptive text rather than relying only on icons.`}),`
`,(0,v.jsx)(n.li,{children:`Use the appropriate semantic variant for the message purpose.`}),`
`,(0,v.jsx)(n.li,{children:`Avoid using alerts for content that does not require user attention.`}),`
`]}),`
`,(0,v.jsx)(n.p,{children:`For non-urgent updates that do not require immediate announcement, consider using a different component pattern such as a status message or notification.`}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`design-notes`,children:`Design Notes`}),`
`,(0,v.jsx)(n.p,{children:`Alert uses semantic feedback tokens from the design system rather than hardcoded colors.`}),`
`,(0,v.jsx)(n.p,{children:`The component relies on:`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsx)(n.li,{children:`Feedback background colors`}),`
`,(0,v.jsx)(n.li,{children:`Feedback border colors`}),`
`,(0,v.jsx)(n.li,{children:`Feedback text colors`}),`
`,(0,v.jsx)(n.li,{children:`Shared spacing and radius tokens`}),`
`]}),`
`,(0,v.jsx)(n.p,{children:`This allows Alert styling to remain consistent as themes evolve.`}),`
`,(0,v.jsx)(n.p,{children:`The component intentionally does not include:`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsx)(n.li,{children:`Dismiss functionality`}),`
`,(0,v.jsx)(n.li,{children:`Animations`}),`
`,(0,v.jsx)(n.li,{children:`Toast behavior`}),`
`,(0,v.jsx)(n.li,{children:`Automatic timing`}),`
`]}),`
`,(0,v.jsx)(n.p,{children:`Those patterns should be handled by separate components when needed.`}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`composition`,children:`Composition`}),`
`,(0,v.jsx)(n.p,{children:`Alert accepts custom content and icons through composition rather than enforcing a specific internal structure.`}),`
`,(0,v.jsx)(n.p,{children:`Example:`}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Alert\r
  variant="error"\r
  icon={<ErrorIcon />}\r
  title="Payment failed"\r
>\r
  Please update your payment information and try again.\r
</Alert>
`})}),`
`,(0,v.jsx)(n.p,{children:`This keeps the component flexible while maintaining consistent styling and accessibility.`})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=o(),s(),n(),m()}))();export{_ as default};