import{i as e}from"./preload-helper-BdFrVu1K.js";import{i as t}from"./react-Tw-SnIr7.js";import{c as n,i as r,n as i,s as a}from"./blocks-B2FR8XNW.js";import{t as o}from"./jsx-runtime-f3rHp9ZU.js";import{t as s}from"./mdx-react-shim-C3oMyBDw.js";import{Default as c,Layout as l,Vertical as u,WithLabel as d,n as f,t as p}from"./Divider.stories-DZgJAd4_.js";function m(e){let n={code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(n.h1,{id:`divider`,children:`Divider`}),`
`,(0,g.jsxs)(n.p,{children:[`The `,(0,g.jsx)(n.code,{children:`Divider`}),` component provides a visual separator between sections, content groups, or interface elements.`]}),`
`,(0,g.jsx)(n.p,{children:`Dividers help create visual hierarchy while maintaining consistency through the design system.`}),`
`,(0,g.jsx)(n.p,{children:`The component supports:`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:`Horizontal separators`}),`
`,(0,g.jsx)(n.li,{children:`Vertical separators`}),`
`,(0,g.jsx)(n.li,{children:`Optional labels`}),`
`,(0,g.jsx)(n.li,{children:`Theme-based border colors`}),`
`]}),`
`,(0,g.jsx)(n.hr,{}),`
`,(0,g.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(n.p,{children:`Use Divider to separate related content or create visual grouping within an interface.`}),`
`,(0,g.jsx)(n.p,{children:`Common examples include:`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:`Separating sections within a card`}),`
`,(0,g.jsx)(n.li,{children:`Dividing navigation items`}),`
`,(0,g.jsx)(n.li,{children:`Separating actions in menus`}),`
`,(0,g.jsx)(n.li,{children:`Creating visual breaks between content areas`}),`
`]}),`
`,(0,g.jsx)(n.hr,{}),`
`,(0,g.jsx)(n.h2,{id:`default-divider`,children:`Default Divider`}),`
`,(0,g.jsx)(n.p,{children:`The default Divider renders as a horizontal line using the design system border color.`}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-tsx`,children:`<Divider />
`})}),`
`,(0,g.jsx)(n.hr,{}),`
`,(0,g.jsx)(n.h2,{id:`divider-with-label`,children:`Divider With Label`}),`
`,(0,g.jsx)(n.p,{children:`A label can be added when additional context is needed between two sections.`}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-tsx`,children:`<Divider label="OR" />
`})}),`
`,(0,g.jsx)(n.p,{children:`This pattern is commonly used for separating alternative actions or content paths.`}),`
`,(0,g.jsx)(n.hr,{}),`
`,(0,g.jsx)(n.h2,{id:`vertical-divider`,children:`Vertical Divider`}),`
`,(0,g.jsx)(n.p,{children:`Divider supports a vertical orientation for separating items placed next to each other.`}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-tsx`,children:`<Divider orientation="vertical" />
`})}),`
`,(0,g.jsx)(n.p,{children:`Vertical dividers require a parent container with a defined height.`}),`
`,(0,g.jsx)(n.p,{children:`Example:`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-tsx`,children:`<div className="h-32">\r
  <Divider orientation="vertical" />\r
</div>
`})}),`
`,(0,g.jsx)(n.hr,{}),`
`,(0,g.jsx)(n.h2,{id:`layout-example`,children:`Layout Example`}),`
`,(0,g.jsx)(n.p,{children:`Vertical dividers are commonly used inside horizontal layouts to separate related actions or navigation items.`}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-tsx`,children:`<div className="flex h-10 items-center gap-4">\r
  <span>Profile</span>\r
\r
  <Divider orientation="vertical" />\r
\r
  <span>Settings</span>\r
</div>
`})}),`
`,(0,g.jsx)(n.hr,{}),`
`,(0,g.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(n.hr,{}),`
`,(0,g.jsx)(n.h2,{id:`accessibility-guidelines`,children:`Accessibility Guidelines`}),`
`,(0,g.jsx)(n.p,{children:`Divider is a visual-only component and should not interrupt the accessibility tree when used purely for presentation.`}),`
`,(0,g.jsx)(n.p,{children:`When the Divider is only decorative:`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:`Avoid adding unnecessary labels or descriptions.`}),`
`,(0,g.jsx)(n.li,{children:`Allow assistive technologies to ignore the element.`}),`
`]}),`
`,(0,g.jsx)(n.p,{children:`If a divider communicates meaningful structure between sections, consider whether semantic HTML elements such as headings, sections, or landmarks would better describe the relationship.`}),`
`,(0,g.jsx)(n.hr,{}),`
`,(0,g.jsx)(n.h2,{id:`design-notes`,children:`Design Notes`}),`
`,(0,g.jsx)(n.p,{children:`Divider intentionally provides a minimal API.`}),`
`,(0,g.jsx)(n.p,{children:`It does not control:`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:`Content spacing`}),`
`,(0,g.jsx)(n.li,{children:`Layout positioning`}),`
`,(0,g.jsx)(n.li,{children:`Section structure`}),`
`,(0,g.jsx)(n.li,{children:`Container widths`}),`
`]}),`
`,(0,g.jsx)(n.p,{children:`Spacing and layout decisions should remain controlled by the consuming component.`}),`
`,(0,g.jsx)(n.p,{children:`Divider uses semantic design tokens to ensure consistency across themes:`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:`Border color`}),`
`,(0,g.jsx)(n.li,{children:`Typography colors`}),`
`,(0,g.jsx)(n.li,{children:`Spacing utilities`}),`
`]}),`
`,(0,g.jsx)(n.p,{children:`This allows the component to automatically adapt if the design system theme changes.`})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=o(),s(),n(),f()}))();export{h as default};