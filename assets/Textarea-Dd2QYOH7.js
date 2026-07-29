import{i as e}from"./preload-helper-BdFrVu1K.js";import{i as t}from"./react-Tw-SnIr7.js";import{c as n,i as r,n as i,s as a}from"./blocks-B2FR8XNW.js";import{t as o}from"./jsx-runtime-f3rHp9ZU.js";import{t as s}from"./mdx-react-shim-C3oMyBDw.js";import{Default as c,Disabled as l,Error as u,LongContent as d,Resize as f,WithHelperText as p,WithLabel as m,n as h,t as g}from"./Textarea.stories-CnY-P-BN.js";function _(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{of:g}),`
`,(0,y.jsx)(n.h1,{id:`textarea`,children:`Textarea`}),`
`,(0,y.jsxs)(n.p,{children:[`The `,(0,y.jsx)(n.code,{children:`Textarea`}),` component allows users to enter and edit multi-line text.`]}),`
`,(0,y.jsx)(n.p,{children:`It is designed for longer responses, descriptions, notes, and other content where a single-line input is not appropriate.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`when-to-use-textarea`,children:`When to use Textarea`}),`
`,(0,y.jsx)(n.p,{children:`Use Textarea when users need to provide:`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsx)(n.li,{children:`Descriptions`}),`
`,(0,y.jsx)(n.li,{children:`Notes`}),`
`,(0,y.jsx)(n.li,{children:`Comments`}),`
`,(0,y.jsx)(n.li,{children:`Feedback`}),`
`,(0,y.jsx)(n.li,{children:`Longer responses`}),`
`]}),`
`,(0,y.jsx)(n.p,{children:`Example:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Textarea\r
  label="Description"\r
  placeholder="Describe your request..."\r
/>
`})}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,y.jsx)(n.p,{children:`A Textarea consists of:`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsx)(n.li,{children:`Label (optional)`}),`
`,(0,y.jsx)(n.li,{children:`Textarea input area`}),`
`,(0,y.jsx)(n.li,{children:`Helper text or validation message (optional)`}),`
`]}),`
`,(0,y.jsx)(i,{of:p}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`default`,children:`Default`}),`
`,(0,y.jsx)(i,{of:c}),`
`,(0,y.jsx)(n.p,{children:`The default Textarea provides a clean multi-line input area without additional messaging.`}),`
`,(0,y.jsx)(n.p,{children:`Use placeholder text to provide guidance about the expected input.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`labels`,children:`Labels`}),`
`,(0,y.jsx)(i,{of:m}),`
`,(0,y.jsx)(n.p,{children:`Labels provide context about what information the user should enter.`}),`
`,(0,y.jsx)(n.p,{children:`Labels should be used instead of relying only on placeholder text.`}),`
`,(0,y.jsx)(n.p,{children:`Good:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Textarea label="Description" />
`})}),`
`,(0,y.jsx)(n.p,{children:`Avoid:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Textarea placeholder="Description" />
`})}),`
`,(0,y.jsx)(n.p,{children:`Placeholder text disappears after typing and should not replace labels.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`helper-text`,children:`Helper Text`}),`
`,(0,y.jsx)(i,{of:p}),`
`,(0,y.jsx)(n.p,{children:`Helper text provides additional guidance before the user interacts with the field.`}),`
`,(0,y.jsx)(n.p,{children:`Use helper text for:`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsx)(n.li,{children:`Formatting instructions`}),`
`,(0,y.jsx)(n.li,{children:`Input requirements`}),`
`,(0,y.jsx)(n.li,{children:`Additional context`}),`
`]}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`error-states`,children:`Error States`}),`
`,(0,y.jsx)(i,{of:u}),`
`,(0,y.jsx)(n.p,{children:`Error messages communicate that the user's input needs attention.`}),`
`,(0,y.jsx)(n.p,{children:`Textarea communicates errors through:`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsx)(n.li,{children:`Visual error styling`}),`
`,(0,y.jsx)(n.li,{children:(0,y.jsx)(n.code,{children:`aria-invalid`})}),`
`,(0,y.jsx)(n.li,{children:`Accessible error messaging`}),`
`]}),`
`,(0,y.jsx)(n.p,{children:`Example:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Textarea\r
  label="Description"\r
  error="Please enter more information"\r
/>
`})}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`disabled-state`,children:`Disabled State`}),`
`,(0,y.jsx)(i,{of:l}),`
`,(0,y.jsx)(n.p,{children:`Disabled Textareas indicate that the field is currently unavailable.`}),`
`,(0,y.jsx)(n.p,{children:`Disabled fields should be used carefully because users cannot interact with or modify the content.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`resizing`,children:`Resizing`}),`
`,(0,y.jsx)(i,{of:f}),`
`,(0,y.jsx)(n.p,{children:`Textarea supports vertical resizing to allow users to expand the input area when needed.`}),`
`,(0,y.jsx)(n.p,{children:`The component uses:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-css`,children:`resize-y;
`})}),`
`,(0,y.jsx)(n.p,{children:`This allows users to increase the height while maintaining layout consistency.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`long-content`,children:`Long Content`}),`
`,(0,y.jsx)(i,{of:d}),`
`,(0,y.jsx)(n.p,{children:`Textarea is designed to comfortably display multi-line content.`}),`
`,(0,y.jsxs)(n.p,{children:[`Use the `,(0,y.jsx)(n.code,{children:`rows`}),` attribute to define the initial visible height:`]}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Textarea rows={6} />
`})}),`
`,(0,y.jsx)(n.p,{children:`The user can continue entering content beyond the initial size.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsx)(n.p,{children:`Textarea includes built-in accessibility support.`}),`
`,(0,y.jsx)(n.h3,{id:`label-association`,children:`Label Association`}),`
`,(0,y.jsx)(n.p,{children:`Labels are connected to the textarea using matching IDs:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-html`,children:`<label for="textarea-id">
`})}),`
`,(0,y.jsx)(n.p,{children:`and:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-html`,children:`<textarea id="textarea-id">
`})}),`
`,(0,y.jsx)(n.p,{children:`This allows assistive technologies to correctly identify the field.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h3,{id:`validation`,children:`Validation`}),`
`,(0,y.jsx)(n.p,{children:`When an error is present, Textarea communicates the invalid state:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-html`,children:`aria-invalid="true"
`})}),`
`,(0,y.jsx)(n.p,{children:`Error messages should clearly explain what needs to be corrected.`}),`
`,(0,y.jsx)(n.p,{children:`Example:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Textarea\r
  label="Description"\r
  error="Description must be longer than 20 characters"\r
/>
`})}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h3,{id:`required-fields`,children:`Required Fields`}),`
`,(0,y.jsx)(n.p,{children:`Required fields communicate their requirement visually and programmatically:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-html`,children:`aria-required="true"
`})}),`
`,(0,y.jsx)(n.p,{children:`Example:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Textarea\r
  label="Description"\r
  required\r
/>
`})}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`native-html-support`,children:`Native HTML Support`}),`
`,(0,y.jsx)(n.p,{children:`Textarea extends native HTML textarea attributes.`}),`
`,(0,y.jsx)(n.p,{children:`Examples:`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Textarea\r
  rows={5}\r
/>
`})}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Textarea\r
  disabled\r
/>
`})}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Textarea\r
  required\r
/>
`})}),`
`,(0,y.jsx)(n.p,{children:`This allows the component to remain flexible while providing consistent styling and accessibility.`}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,y.jsx)(n.h3,{id:`labels-1`,children:`Labels`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Textarea\r
  label="Description"\r
/>
`})}),`
`,(0,y.jsx)(n.h3,{id:`helper-text-1`,children:`Helper Text`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Textarea\r
  label="Description"\r
  helperText="Provide additional context"\r
/>
`})}),`
`,(0,y.jsx)(n.h3,{id:`error-message`,children:`Error Message`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Textarea\r
  label="Description"\r
  error="Please enter a valid description"\r
/>
`})}),`
`,(0,y.jsx)(n.h3,{id:`sizing`,children:`Sizing`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Textarea\r
  rows={6}\r
/>
`})}),`
`,(0,y.jsx)(n.hr,{}),`
`,(0,y.jsx)(n.h2,{id:`design-philosophy`,children:`Design Philosophy`}),`
`,(0,y.jsx)(n.p,{children:`Textarea should make collecting longer-form input predictable and accessible.`}),`
`,(0,y.jsx)(n.p,{children:`The component intentionally avoids unnecessary variants.`}),`
`,(0,y.jsx)(n.p,{children:`Instead, it builds on:`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsx)(n.li,{children:`Native HTML behavior`}),`
`,(0,y.jsx)(n.li,{children:`Consistent form patterns`}),`
`,(0,y.jsx)(n.li,{children:`Semantic design tokens`}),`
`,(0,y.jsx)(n.li,{children:`Accessible defaults`}),`
`]}),`
`,(0,y.jsx)(r,{})]})}function v(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,y.jsx)(n,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=o(),s(),n(),h()}))();export{v as default};