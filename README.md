# Atoria UI

A modern React component library focused on reusable UI patterns, accessible interactions, and scalable design system foundations.

Atoria UI was created as a personal exploration into building and documenting reusable components using modern frontend practices. The goal of this project was to create a small but thoughtful component library while exploring component architecture, design tokens, accessibility, and Storybook-driven development.

![Atoria UI Preview](../atoria-ui/src/assets/atoria-preview.png)

## Live Demo

View Landing Page:
[Atoria Marketing Page](atoria-ui.vercel.app)

View the Storybook documentation:
[Atoria UI Storybook](https://lindseygunderson.github.io/atoria-ui/)

## Features

* Reusable React components with TypeScript
* Component documentation powered by Storybook
* Semantic design tokens for consistent styling
* Accessible interaction patterns
* Responsive and composable UI primitives
* Animated component states and transitions

## Components

Current components include:

### Foundations

* Button
* Badge
* Input
* Spinner
* Icon

### Feedback

* Alert
* Progress
* Toast

### Interactive Components

* Tooltip
* Dialog

## Tech Stack

* React
* TypeScript
* Tailwind CSS
* Storybook
* Vite
* Class Variance Authority (CVA)

## Design System Approach

Atoria UI uses semantic tokens to keep component styling consistent and maintainable.

Instead of components relying on hardcoded values, they consume reusable design decisions such as:

* Colors
* Typography
* Spacing
* Feedback states
* Component variants

This allows components to share a consistent visual language while remaining flexible.

## Storybook

Storybook is used as the development environment and documentation source for each component.

Each component includes:

* Usage examples
* Available variants
* Interactive controls
* Documentation
* Accessibility considerations

## Accessibility

Accessibility was considered throughout development, including:

* Semantic HTML elements
* Keyboard interactions
* ARIA attributes where appropriate
* Focus and dismissal behaviors
* Screen reader considerations

## Getting Started

Clone the repository:

```bash
git clone https://github.com/LindseyGunderson/atoria-ui.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run Storybook:

```bash
npm run storybook
```

## Project Goals

This project was created to explore:

* Building reusable frontend components
* Creating scalable UI patterns
* Understanding design system architecture
* Improving React and TypeScript skills
* Documenting components through Storybook

## Future Improvements

Potential future enhancements:

* Additional components
* Expanded theme support
* More advanced component interactions
* Improved visual documentation
* Additional accessibility testing

## License

This project is for educational and portfolio purposes.
