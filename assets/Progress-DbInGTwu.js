import{i as e}from"./preload-helper-BdFrVu1K.js";import{i as t}from"./react-Tw-SnIr7.js";import{c as n,i as r,n as i,s as a}from"./blocks-B2FR8XNW.js";import{t as o}from"./jsx-runtime-f3rHp9ZU.js";import{t as s}from"./mdx-react-shim-C3oMyBDw.js";import{Complete as c,CustomMax as l,Default as u,ShowValue as d,Variants as f,WithLabel as p,WithLabelAndValue as m,n as h,t as g}from"./Progress.stories-BfiQJqpr.js";function _(e){let n={code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{of:g}),`
`,(0,y.jsx)(n.h1,{id:`progress`,children:`Progress`}),`
`,(0,y.jsxs)(n.p,{children:[`The `,(0,y.jsx)(n.code,{children:`Progress`}),` component communicates the completion status of a task, process, or operation.`]}),`
`,(0,y.jsx)(n.p,{children:`Progress provides a consistent way to visually represent completion while supporting semantic variants, labels, and accessible progress information.`}),`
`,(0,y.jsx)(n.p,{children:`The component supports:`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsx)(n.li,{children:`Percentage-based progress tracking`}),`
`,(0,y.jsx)(n.li,{children:`Custom maximum values`}),`
`,(0,y.jsx)(n.li,{children:`Optional labels`}),`
`,(0,y.jsx)(n.li,{children:`Optional percentage display`}),`
`,(0,y.jsx)(n.li,{children:`Semantic status variants`}),`
`,(0,y.jsx)(n.li,{children:`Accessible progress attributes`}),`
`]}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,y.jsx)(n.p,{children:`Use Progress when users need to understand the current state of a task or process.`}),`
`,(0,y.jsx)(n.p,{children:`Common examples include:`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsx)(n.li,{children:`File uploads`}),`
`,(0,y.jsx)(n.li,{children:`Form completion`}),`
`,(0,y.jsx)(n.li,{children:`Multi-step workflows`}),`
`,(0,y.jsx)(n.li,{children:`Data processing`}),`
`,(0,y.jsx)(n.li,{children:`Loading operations`}),`
`,(0,y.jsx)(n.li,{children:`Task completion`}),`
`]}),`
`,(0,y.jsx)(n.p,{children:`Progress should communicate meaningful status information and should not be used as a decorative loading indicator.`}),`
`,(0,y.jsx)(n.p,{children:`For continuous loading states where completion cannot be determined, consider using a Spinner component instead.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`default-progress`,children:`Default Progress`}),`
`,(0,y.jsx)(n.p,{children:`The default Progress component displays completion without additional text.`}),`
`,(0,y.jsx)(i,{of:u}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Progress value={40} />
`})}),`
`,(0,y.jsxs)(n.p,{children:[`The `,(0,y.jsx)(n.code,{children:`value`}),` prop represents the current progress amount.`]}),`
`,(0,y.jsxs)(n.p,{children:[`By default, `,(0,y.jsx)(n.code,{children:`max`}),` is set to `,(0,y.jsx)(n.code,{children:`100`}),`.`]}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`progress-with-label`,children:`Progress With Label`}),`
`,(0,y.jsx)(n.p,{children:`Labels provide additional context about the operation being completed.`}),`
`,(0,y.jsx)(i,{of:p}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Progress\r
  value={40}\r
  label="Uploading files"\r
/>
`})}),`
`,(0,y.jsx)(n.p,{children:`Use labels when the progress indicator alone does not provide enough context.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`displaying-progress-values`,children:`Displaying Progress Values`}),`
`,(0,y.jsxs)(n.p,{children:[`The `,(0,y.jsx)(n.code,{children:`showValue`}),` prop displays the current completion percentage.`]}),`
`,(0,y.jsx)(i,{of:d}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Progress\r
  value={65}\r
  showValue\r
/>
`})}),`
`,(0,y.jsx)(n.p,{children:`The displayed percentage is calculated automatically from the current value and maximum value.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`label-with-progress-value`,children:`Label With Progress Value`}),`
`,(0,y.jsx)(n.p,{children:`Labels and values can be combined to provide both context and completion status.`}),`
`,(0,y.jsx)(i,{of:m}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Progress\r
  value={75}\r
  label="Processing interview questions"\r
  showValue\r
/>
`})}),`
`,(0,y.jsx)(n.p,{children:`This pattern is useful for longer-running tasks where users need both a description and current progress.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`variants`,children:`Variants`}),`
`,(0,y.jsx)(n.p,{children:`Progress supports semantic variants for communicating different states.`}),`
`,(0,y.jsx)(i,{of:f}),`
`,(0,y.jsx)(n.p,{children:`Available variants:`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`default`}),` - General progress tracking`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`success`}),` - Completed or successful progress`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`warning`}),` - Progress requiring attention`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`error`}),` - Failed or interrupted progress`]}),`
`]}),`
`,(0,y.jsx)(n.p,{children:`Example:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Progress\r
  value={75}\r
  variant="success"\r
/>
`})}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`complete-progress`,children:`Complete Progress`}),`
`,(0,y.jsxs)(n.p,{children:[`A completed progress state can be represented using a value of `,(0,y.jsx)(n.code,{children:`100`}),`.`]}),`
`,(0,y.jsx)(i,{of:c}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Progress\r
  value={100}\r
  variant="success"\r
  label="Complete"\r
  showValue\r
/>
`})}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`custom-maximum-values`,children:`Custom Maximum Values`}),`
`,(0,y.jsxs)(n.p,{children:[`Progress can represent values that do not use a maximum of `,(0,y.jsx)(n.code,{children:`100`}),`.`]}),`
`,(0,y.jsx)(i,{of:l}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Progress\r
  value={3}\r
  max={5}\r
  label="Completed steps"\r
  showValue\r
/>
`})}),`
`,(0,y.jsx)(n.p,{children:`The component calculates the completion percentage automatically:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{children:`3 / 5 = 60%
`})}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(r,{}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`accessibility-guidelines`,children:`Accessibility Guidelines`}),`
`,(0,y.jsx)(n.p,{children:`Progress uses the native progress pattern through ARIA attributes.`}),`
`,(0,y.jsx)(n.p,{children:`The component communicates:`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsxs)(n.li,{children:[`Current value with `,(0,y.jsx)(n.code,{children:`aria-valuenow`})]}),`
`,(0,y.jsxs)(n.li,{children:[`Minimum value with `,(0,y.jsx)(n.code,{children:`aria-valuemin`})]}),`
`,(0,y.jsxs)(n.li,{children:[`Maximum value with `,(0,y.jsx)(n.code,{children:`aria-valuemax`})]}),`
`]}),`
`,(0,y.jsx)(n.p,{children:`Example output:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-html`,children:`<div\r
  role="progressbar"\r
  aria-valuemin="0"\r
  aria-valuemax="100"\r
  aria-valuenow="75"\r
>\r
</div>
`})}),`
`,(0,y.jsx)(n.p,{children:`Accessibility recommendations:`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsx)(n.li,{children:`Provide a meaningful label when the purpose of the progress indicator is not obvious.`}),`
`,(0,y.jsx)(n.li,{children:`Avoid using color alone to communicate status.`}),`
`,(0,y.jsx)(n.li,{children:`Use appropriate variants based on the meaning of the progress state.`}),`
`,(0,y.jsx)(n.li,{children:`Do not use Progress for indefinite loading states.`}),`
`]}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`design-notes`,children:`Design Notes`}),`
`,(0,y.jsx)(n.p,{children:`Progress uses semantic design tokens rather than hardcoded colors.`}),`
`,(0,y.jsx)(n.p,{children:`The component relies on:`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsx)(n.li,{children:`Primary color tokens`}),`
`,(0,y.jsx)(n.li,{children:`Feedback color tokens`}),`
`,(0,y.jsx)(n.li,{children:`Border tokens`}),`
`,(0,y.jsx)(n.li,{children:`Shared radius tokens`}),`
`,(0,y.jsx)(n.li,{children:`Motion tokens`}),`
`]}),`
`,(0,y.jsx)(n.p,{children:`The track represents incomplete progress using a neutral surface, while the indicator communicates the current completion state.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`composition`,children:`Composition`}),`
`,(0,y.jsx)(n.p,{children:`Progress is intentionally lightweight and focuses only on displaying completion status.`}),`
`,(0,y.jsx)(n.p,{children:`The component does not include:`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsx)(n.li,{children:`Automatic loading behavior`}),`
`,(0,y.jsx)(n.li,{children:`Timers`}),`
`,(0,y.jsx)(n.li,{children:`Data fetching logic`}),`
`,(0,y.jsx)(n.li,{children:`Internal state management`}),`
`,(0,y.jsx)(n.li,{children:`Complex animations`}),`
`]}),`
`,(0,y.jsx)(n.p,{children:`These behaviors should be controlled by the consuming application.`}),`
`,(0,y.jsx)(n.p,{children:`Example:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`function UploadStatus() {\r
  return (\r
    <Progress\r
      value={uploadPercentage}\r
      label="Uploading files"\r
      showValue\r
    />\r
  );\r
}
`})}),`
`,(0,y.jsx)(n.p,{children:`This keeps Progress reusable across different application contexts while maintaining consistent visual and accessibility patterns.`})]})}function v(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,y.jsx)(n,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=o(),s(),n(),h()}))();export{v as default};