import{i as e}from"./preload-helper-BdFrVu1K.js";import{i as t}from"./react-B35xfB42.js";import{c as n,i as r,n as i,s as a}from"./blocks-C8Bj4DlW.js";import{t as o}from"./jsx-runtime-f3rHp9ZU.js";import{t as s}from"./mdx-react-shim-Cs5xf-ce.js";import{Default as c,Empty as l,Shapes as u,Sizes as d,WithImage as f,WithInitials as p,n as m,t as h}from"./Avatar.stories--Sk3C81F.js";function g(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(n.h1,{id:`avatar`,children:`Avatar`}),`
`,(0,v.jsxs)(n.p,{children:[`The `,(0,v.jsx)(n.code,{children:`Avatar`}),` component represents a user or entity through an image, initials, or fallback state.`]}),`
`,(0,v.jsx)(n.p,{children:`Avatars provide a consistent visual identity pattern across applications while handling common scenarios:`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsx)(n.li,{children:`Profile images`}),`
`,(0,v.jsx)(n.li,{children:`Initial-based placeholders`}),`
`,(0,v.jsx)(n.li,{children:`Missing user information`}),`
`,(0,v.jsx)(n.li,{children:`Size variations`}),`
`,(0,v.jsx)(n.li,{children:`Shape variations`}),`
`]}),`
`,(0,v.jsx)(n.p,{children:`The component focuses on presentation only. User data, image sources, and fallback decisions should be managed by the consuming application.`}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,v.jsx)(n.p,{children:`Use Avatar when representing a person, account, or entity within an interface.`}),`
`,(0,v.jsx)(n.p,{children:`Common examples include:`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsx)(n.li,{children:`User profiles`}),`
`,(0,v.jsx)(n.li,{children:`Comment authors`}),`
`,(0,v.jsx)(n.li,{children:`Team members`}),`
`,(0,v.jsx)(n.li,{children:`Account menus`}),`
`,(0,v.jsx)(n.li,{children:`Activity feeds`}),`
`]}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`default-avatar`,children:`Default Avatar`}),`
`,(0,v.jsx)(n.p,{children:`The default Avatar displays initials generated from a provided name.`}),`
`,(0,v.jsx)(i,{of:c}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Avatar name="Lindsay Smith" />
`})}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`image-avatar`,children:`Image Avatar`}),`
`,(0,v.jsx)(n.p,{children:`When an image source is provided, Avatar displays the image instead of initials.`}),`
`,(0,v.jsx)(i,{of:f}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Avatar\r
  src="/profile-image.jpg"\r
  alt="Profile picture"\r
  name="Lindsay Smith"\r
/>
`})}),`
`,(0,v.jsx)(n.h3,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsx)(n.p,{children:`When using an image:`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[`Always provide meaningful `,(0,v.jsx)(n.code,{children:`alt`}),` text.`]}),`
`,(0,v.jsxs)(n.li,{children:[`If the image is decorative, provide an empty `,(0,v.jsx)(n.code,{children:`alt`}),` value.`]}),`
`,(0,v.jsxs)(n.li,{children:[`The `,(0,v.jsx)(n.code,{children:`name`}),` prop can be used as a fallback when `,(0,v.jsx)(n.code,{children:`alt`}),` is not provided.`]}),`
`]}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`initials`,children:`Initials`}),`
`,(0,v.jsx)(n.p,{children:`Avatar automatically generates initials when a name is provided without an image.`}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(n.p,{children:`Example:`}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Avatar name="Lindsay Smith" />
`})}),`
`,(0,v.jsx)(n.p,{children:`This displays:`}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-text`,children:`LS
`})}),`
`,(0,v.jsx)(n.p,{children:`Initial generation provides a simple fallback when profile images are unavailable.`}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,v.jsx)(n.p,{children:`Avatar supports three size options:`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsx)(n.li,{children:(0,v.jsx)(n.code,{children:`sm`})}),`
`,(0,v.jsx)(n.li,{children:(0,v.jsx)(n.code,{children:`md`})}),`
`,(0,v.jsx)(n.li,{children:(0,v.jsx)(n.code,{children:`lg`})}),`
`]}),`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Avatar name="Lindsay Smith" size="sm" />\r
\r
<Avatar name="Lindsay Smith" size="md" />\r
\r
<Avatar name="Lindsay Smith" size="lg" />
`})}),`
`,(0,v.jsx)(n.p,{children:`Use sizes consistently based on the surrounding interface.`}),`
`,(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`Size`}),(0,v.jsx)(`th`,{children:`Recommended usage`})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(n.code,{children:`sm`})}),(0,v.jsx)(`td`,{children:`Compact lists, tables, and metadata`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(n.code,{children:`md`})}),(0,v.jsx)(`td`,{children:`Default user representation`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(n.code,{children:`lg`})}),(0,v.jsx)(`td`,{children:`Profile sections or prominent user displays`})]})]})]}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`shapes`,children:`Shapes`}),`
`,(0,v.jsx)(n.p,{children:`Avatar supports multiple shape options.`}),`
`,(0,v.jsx)(i,{of:u}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Avatar\r
  name="Lindsay Smith"\r
  variant="circle"\r
/>\r
\r
<Avatar\r
  name="Lindsay Smith"\r
  variant="square"\r
/>
`})}),`
`,(0,v.jsx)(n.p,{children:`The circular variant is recommended for user profiles, while the square variant can be used for entities such as organizations or applications.`}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`empty-state`,children:`Empty State`}),`
`,(0,v.jsx)(n.p,{children:`When no image or name is provided, Avatar displays a fallback indicator.`}),`
`,(0,v.jsx)(i,{of:l}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Avatar />
`})}),`
`,(0,v.jsx)(n.p,{children:`Applications may replace this fallback behavior with a custom icon or placeholder when needed.`}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(r,{}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`accessibility-guidelines`,children:`Accessibility Guidelines`}),`
`,(0,v.jsx)(n.h3,{id:`images`,children:`Images`}),`
`,(0,v.jsx)(n.p,{children:`Provide meaningful alternative text when using profile images.`}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Avatar\r
  src="/profile.jpg"\r
  alt="Jane Doe"\r
/>
`})}),`
`,(0,v.jsx)(n.h3,{id:`initials-1`,children:`Initials`}),`
`,(0,v.jsx)(n.p,{children:`Initials should not be the only method of identifying a user. Consider providing additional context through nearby text or accessible labels.`}),`
`,(0,v.jsx)(n.h3,{id:`color-contrast`,children:`Color Contrast`}),`
`,(0,v.jsx)(n.p,{children:`Ensure Avatar background colors and text meet WCAG contrast requirements.`}),`
`,(0,v.jsx)(n.hr,{}),`
`,(0,v.jsx)(n.h2,{id:`design-notes`,children:`Design Notes`}),`
`,(0,v.jsx)(n.p,{children:`Avatar is intentionally lightweight and flexible.`}),`
`,(0,v.jsx)(n.p,{children:`It does not manage:`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsx)(n.li,{children:`User data fetching`}),`
`,(0,v.jsx)(n.li,{children:`Image loading states`}),`
`,(0,v.jsx)(n.li,{children:`Status indicators`}),`
`,(0,v.jsx)(n.li,{children:`Presence states`}),`
`,(0,v.jsx)(n.li,{children:`User permissions`}),`
`]}),`
`,(0,v.jsx)(n.p,{children:`These patterns should be composed alongside Avatar when needed.`})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=o(),s(),n(),m()}))();export{_ as default};