import{i as e}from"./preload-helper-BdFrVu1K.js";import{i as t}from"./react-Tw-SnIr7.js";import{c as n,n as r,s as i}from"./blocks-B2FR8XNW.js";import{t as a}from"./jsx-runtime-f3rHp9ZU.js";import{t as o}from"./mdx-react-shim-C3oMyBDw.js";import{Default as s,IconButton as c,LongContent as l,Positions as u,n as d,t as f}from"./Tooltip.stories-D02OQNys.js";function p(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:f}),`
`,(0,h.jsx)(n.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.code,{children:`Tooltip`}),` component provides contextual information when users hover over or focus on an element.`]}),`
`,(0,h.jsx)(n.p,{children:`Tooltips are designed to provide additional context without interrupting the user's workflow.`}),`
`,(0,h.jsx)(n.p,{children:`Common use cases include:`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsx)(n.li,{children:`Explaining unfamiliar actions`}),`
`,(0,h.jsx)(n.li,{children:`Providing additional information for icon-only buttons`}),`
`,(0,h.jsx)(n.li,{children:`Clarifying interface elements`}),`
`,(0,h.jsx)(n.li,{children:`Displaying short pieces of helpful information`}),`
`]}),`
`,(0,h.jsx)(n.p,{children:`Tooltips should not contain critical information or interactive content. If users need to interact with the content, consider using a Popover or Dialog component instead.`}),`
`,(0,h.jsx)(n.hr,{}),`
`,(0,h.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsxs)(n.p,{children:[`Wrap a trigger element with the `,(0,h.jsx)(n.code,{children:`Tooltip`}),` component and provide the content that should be displayed.`]}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`<Tooltip content="Save changes">\r
  <button>\r
    Save\r
  </button>\r
</Tooltip>
`})}),`
`,(0,h.jsx)(n.p,{children:`The tooltip appears when the trigger element receives hover or keyboard focus.`}),`
`,(0,h.jsx)(n.hr,{}),`
`,(0,h.jsx)(n.h2,{id:`default`,children:`Default`}),`
`,(0,h.jsx)(n.p,{children:`The default Tooltip appears above the trigger element.`}),`
`,(0,h.jsx)(r,{of:s}),`
`,(0,h.jsx)(n.hr,{}),`
`,(0,h.jsx)(n.h2,{id:`positions`,children:`Positions`}),`
`,(0,h.jsx)(n.p,{children:`The Tooltip supports four placement options:`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.code,{children:`top`})}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.code,{children:`bottom`})}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.code,{children:`left`})}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.code,{children:`right`})}),`
`]}),`
`,(0,h.jsxs)(n.p,{children:[`Use the `,(0,h.jsx)(n.code,{children:`side`}),` prop to control the tooltip placement relative to the trigger.`]}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`<Tooltip\r
  content="Additional information"\r
  side="right"\r
>\r
  <button>\r
    Hover me\r
  </button>\r
</Tooltip>
`})}),`
`,(0,h.jsx)(r,{of:u}),`
`,(0,h.jsx)(n.hr,{}),`
`,(0,h.jsx)(n.h2,{id:`long-content`,children:`Long Content`}),`
`,(0,h.jsx)(n.p,{children:`Tooltips should generally contain short descriptions.`}),`
`,(0,h.jsx)(n.p,{children:`Longer content can be used when additional context is needed, but avoid placing large amounts of information inside a tooltip.`}),`
`,(0,h.jsx)(r,{of:l}),`
`,(0,h.jsx)(n.hr,{}),`
`,(0,h.jsx)(n.h2,{id:`icon-buttons`,children:`Icon Buttons`}),`
`,(0,h.jsx)(n.p,{children:`Tooltips are commonly used with icon-only buttons to provide additional visual context.`}),`
`,(0,h.jsx)(n.p,{children:`Icon buttons should always include an accessible label.`}),`
`,(0,h.jsxs)(n.p,{children:[`The tooltip helps sighted users understand the action, while `,(0,h.jsx)(n.code,{children:`aria-label`}),` provides the accessible name for assistive technology.`]}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`<button aria-label="Delete item">\r
  <DeleteIcon />\r
</button>
`})}),`
`,(0,h.jsx)(r,{of:c}),`
`,(0,h.jsx)(n.hr,{}),`
`,(0,h.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsx)(n.p,{children:`The Tooltip component supports accessibility through:`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`aria-describedby`}),` linking the trigger and tooltip content`]}),`
`,(0,h.jsx)(n.li,{children:`Hover interactions`}),`
`,(0,h.jsx)(n.li,{children:`Keyboard focus interactions`}),`
`,(0,h.jsx)(n.li,{children:`Non-interactive tooltip content`}),`
`]}),`
`,(0,h.jsx)(n.h3,{id:`guidelines`,children:`Guidelines`}),`
`,(0,h.jsx)(n.p,{children:`Use tooltips when:`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsx)(n.li,{children:`Additional context is helpful but not required`}),`
`,(0,h.jsx)(n.li,{children:`The information is short and descriptive`}),`
`,(0,h.jsx)(n.li,{children:`The trigger's purpose may not be immediately obvious`}),`
`]}),`
`,(0,h.jsx)(n.p,{children:`Avoid tooltips when:`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsx)(n.li,{children:`The information is required to complete a task`}),`
`,(0,h.jsx)(n.li,{children:`The content requires user interaction`}),`
`,(0,h.jsx)(n.li,{children:`A longer explanation is needed`}),`
`]}),`
`,(0,h.jsx)(n.hr,{}),`
`,(0,h.jsx)(n.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,h.jsx)(n.h3,{id:`good-example`,children:`Good Example`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`<Tooltip content="Copy link">\r
  <button>\r
    Copy\r
  </button>\r
</Tooltip>
`})}),`
`,(0,h.jsx)(n.hr,{}),`
`,(0,h.jsx)(n.h3,{id:`icon-button-example`,children:`Icon Button Example`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`<Tooltip content="Settings">\r
  <button aria-label="Settings">\r
    ⚙\r
  </button>\r
</Tooltip>
`})}),`
`,(0,h.jsx)(n.hr,{}),`
`,(0,h.jsx)(n.h3,{id:`avoid`,children:`Avoid`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`<Tooltip content="Are you sure you want to permanently delete this item?">\r
  <button>\r
    Delete\r
  </button>\r
</Tooltip>
`})}),`
`,(0,h.jsx)(n.p,{children:`Confirmation actions should use a Dialog component instead.`}),`
`,(0,h.jsx)(n.hr,{}),`
`,(0,h.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,h.jsx)(n.h3,{id:`tooltip-props`,children:`Tooltip Props`}),`
`,(0,h.jsxs)(`table`,{children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{children:`Prop`}),(0,h.jsx)(`th`,{children:`Type`}),(0,h.jsx)(`th`,{children:`Default`}),(0,h.jsx)(`th`,{children:`Description`})]})}),(0,h.jsxs)(`tbody`,{children:[(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:`content`})}),(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:`ReactNode`})}),(0,h.jsx)(`td`,{children:`—`}),(0,h.jsx)(`td`,{children:`Content displayed inside the tooltip`})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:`children`})}),(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:`ReactElement`})}),(0,h.jsx)(`td`,{children:`—`}),(0,h.jsx)(`td`,{children:`Element that triggers the tooltip`})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:`side`})}),(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:`"top" | "bottom" | "left" | "right"`})}),(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:`"top"`})}),(0,h.jsx)(`td`,{children:`Controls tooltip placement`})]})]})]}),`
`,(0,h.jsx)(n.hr,{}),`
`,(0,h.jsx)(n.h2,{id:`design-notes`,children:`Design Notes`}),`
`,(0,h.jsx)(n.p,{children:`The Tooltip component follows Atoria's design system principles:`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsx)(n.li,{children:`Consistent spacing and radius tokens`}),`
`,(0,h.jsx)(n.li,{children:`Shared surface styling`}),`
`,(0,h.jsx)(n.li,{children:`Accessible interaction patterns`}),`
`,(0,h.jsx)(n.li,{children:`Reusable component composition`}),`
`]}),`
`,(0,h.jsx)(n.p,{children:`Future improvements may include:`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsx)(n.li,{children:`Advanced positioning and collision detection`}),`
`,(0,h.jsx)(n.li,{children:`Automatic placement adjustments`}),`
`,(0,h.jsx)(n.li,{children:`Configurable show and hide delays`}),`
`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=a(),o(),n(),d()}))();export{m as default};