import{i as e}from"./preload-helper-BdFrVu1K.js";import{i as t}from"./react-B35xfB42.js";import{c as n,i as r,n as i,s as a}from"./blocks-C8Bj4DlW.js";import{t as o}from"./jsx-runtime-f3rHp9ZU.js";import{t as s}from"./mdx-react-shim-Cs5xf-ce.js";import{Default as c,Disabled as l,Error as u,FormExample as d,Required as f,WithHelperText as p,WithLabel as m,n as h,t as g}from"./Input.stories-rKaGoIUB.js";function _(e){let n={code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{of:g}),`
`,(0,y.jsx)(n.h1,{id:`input`,children:`Input`}),`
`,(0,y.jsxs)(n.p,{children:[`The `,(0,y.jsx)(n.code,{children:`Input`}),` component provides a consistent, accessible foundation for collecting user input across Atoria UI.`]}),`
`,(0,y.jsxs)(n.p,{children:[`It wraps the native HTML `,(0,y.jsx)(n.code,{children:`<input>`}),` element while adding semantic styling, accessibility improvements, and common form features such as labels, helper text, and error messages.`]}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`features`,children:`Features`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsx)(n.li,{children:`Accessible label association`}),`
`,(0,y.jsx)(n.li,{children:`Helper and error messaging`}),`
`,(0,y.jsx)(n.li,{children:`Semantic validation states`}),`
`,(0,y.jsx)(n.li,{children:`Native HTML input support`}),`
`,(0,y.jsx)(n.li,{children:`Disabled and required states`}),`
`,(0,y.jsx)(n.li,{children:`Theme-aware styling`}),`
`,(0,y.jsx)(n.li,{children:`Forwarded refs for integration with forms`}),`
`]}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`default`,children:`Default`}),`
`,(0,y.jsx)(i,{of:c}),`
`,(0,y.jsx)(n.p,{children:`The default input behaves exactly like a native HTML input while adopting Atoria's design tokens.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`label`,children:`Label`}),`
`,(0,y.jsx)(i,{of:m}),`
`,(0,y.jsxs)(n.p,{children:[`Labels are automatically associated with their corresponding input using `,(0,y.jsx)(n.code,{children:`htmlFor`}),` and React's `,(0,y.jsx)(n.code,{children:`useId()`}),`. This ensures screen readers correctly announce the relationship between the label and its field.`]}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`helper-text`,children:`Helper Text`}),`
`,(0,y.jsx)(i,{of:p}),`
`,(0,y.jsx)(n.p,{children:`Helper text provides additional guidance without interrupting the user's workflow.`}),`
`,(0,y.jsx)(n.p,{children:`Use helper text for:`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsx)(n.li,{children:`Formatting hints`}),`
`,(0,y.jsx)(n.li,{children:`Password requirements`}),`
`,(0,y.jsx)(n.li,{children:`Additional context`}),`
`,(0,y.jsx)(n.li,{children:`Expectations before submission`}),`
`]}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`error-state`,children:`Error State`}),`
`,(0,y.jsx)(i,{of:u}),`
`,(0,y.jsx)(n.p,{children:`When an error is supplied:`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsxs)(n.li,{children:[`the input receives `,(0,y.jsx)(n.code,{children:`aria-invalid`})]}),`
`,(0,y.jsxs)(n.li,{children:[`the error message is associated using `,(0,y.jsx)(n.code,{children:`aria-describedby`})]}),`
`,(0,y.jsx)(n.li,{children:`semantic error colors are applied`}),`
`,(0,y.jsx)(n.li,{children:`focus styles reinforce the validation state`}),`
`]}),`
`,(0,y.jsx)(n.p,{children:`The component separates visual styling from validation logic. Validation should come from your application, while the Input simply communicates the result.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`required`,children:`Required`}),`
`,(0,y.jsx)(i,{of:f}),`
`,(0,y.jsxs)(n.p,{children:[`Required fields display a visual indicator while preserving native browser validation through the `,(0,y.jsx)(n.code,{children:`required`}),` attribute.`]}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`disabled`,children:`Disabled`}),`
`,(0,y.jsx)(i,{of:l}),`
`,(0,y.jsx)(n.p,{children:`Disabled inputs maintain accessibility while clearly communicating that the field is unavailable.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`form-example`,children:`Form Example`}),`
`,(0,y.jsx)(i,{of:d}),`
`,(0,y.jsx)(n.p,{children:`This example demonstrates how multiple Input components work together inside a typical form.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`native-html-support`,children:`Native HTML Support`}),`
`,(0,y.jsx)(n.p,{children:`Input extends the native HTML input element.`}),`
`,(0,y.jsx)(n.p,{children:`That means all standard HTML attributes continue to work:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Input\r
  type="email"\r
  placeholder="you@example.com"\r
  autoComplete="email"\r
  disabled\r
  required\r
/>
`})}),`
`,(0,y.jsx)(n.p,{children:`This approach keeps the component lightweight while remaining familiar to React developers.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsx)(n.p,{children:`The Input component includes several accessibility improvements by default:`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsxs)(n.li,{children:[`Automatic ID generation using `,(0,y.jsx)(n.code,{children:`useId()`})]}),`
`,(0,y.jsxs)(n.li,{children:[`Label association with `,(0,y.jsx)(n.code,{children:`htmlFor`})]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`aria-invalid`}),` for validation errors`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`aria-describedby`}),` for helper and error text`]}),`
`,(0,y.jsx)(n.li,{children:`Forwarded refs for form libraries and focus management`}),`
`]}),`
`,(0,y.jsx)(n.p,{children:`These enhancements require little additional configuration while improving the experience for assistive technologies.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`design-philosophy`,children:`Design Philosophy`}),`
`,(0,y.jsx)(n.p,{children:`Atoria treats the Input as a lightweight wrapper around the native HTML element—not as a replacement.`}),`
`,(0,y.jsx)(n.p,{children:`Rather than introducing custom APIs for common HTML behavior, the component embraces native browser capabilities and adds only the functionality needed for a consistent design system.`}),`
`,(0,y.jsx)(n.p,{children:`This keeps the component predictable, accessible, and easy to integrate into any React application.`}),`
`,(0,y.jsx)(r,{})]})}function v(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,y.jsx)(n,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=o(),s(),n(),h()}))();export{v as default};