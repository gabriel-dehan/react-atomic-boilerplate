# React / TypeScript / Vite Boilerplate

An opinionated boilerplate for building React applications using Atomic Design principles and BEM.

## Tech Stack

### Core
- Vite for bundling
- React
- TypeScript
- I18Next for i18n

### Routing, data and state Management
- Tanstack Router for routing
- Tanstack Query for data fetching
- Zustand for state management
- React Hook Form for form handling

### UI
- [Base UI](https://base-ui.com/react/overview/quick-start) for existing components
- [Radix UI Colors](https://www.radix-ui.com/colors/docs/overview/usage) for color palette and easy light / dark mode toggle

Comes with two fonts by default:
- [Alegreya Sans](https://fonts.google.com/specimen/Alegreya+Sans) for headings
- [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) for body text

## Styling

We use PostCSS to allow us to nest our CSS with BEM syntax.

Example:
```css
.m-button {
  &--primary {
    background-color: var(--color-primary);
  }
  &--secondary {
    background-color: var(--color-secondary);
  }
}
```

## Architecture structure
```
.
├── public
│
└── src
    ├── assets
    │   ├── locales
    │   │   ├── en
    │   │   └── fr
    │   └── styles
    │
    ├── components
    │   ├── atoms
    │   ├── layouts
    │   ├── molecules
    │   └── organisms
    │
    ├── hooks
    │
    ├── pages
    │
    ├── remote
    │   ├── errors
    │   ├── queries
    │   └── repositories
    │
    ├── routes
    ├── stores
    ├── types
    └── utils
```

## Aliases

A few aliases are defined to make our imports more readable and our life easier.

Example:
```ts
import { Button } from "@components/atoms/Button";
```

List of aliases:
- `@src`: src folder
- `@types`: types folder
- `@components`: components folder
- `@pages`: pages folder
- `@stores`: stores folder
- `@assets`: assets folder
- `@locales`: locales folder
- `@utils`: utils folder
- `@router`: router folder
- `@hooks`: hooks folder


## Linting and formatting

This boilerplate comes with a pre-configured ESLint and Prettier setup. As well as VSCode settings for auto-formatting on save, etc.

The ESLint rules can be pretty constraining but you can adjust them to your liking.

## Setup

Use the correct Node.js version:

```bash
nvm use
```

Install dependencies:

```bash
yarn
```

## Running the app

```bash
yarn dev
```

## Building the app

```bash
yarn build
```

## Deployment

This boilerplate isn't opinionated about where and how to deploy, but a simple option is often to deploy to GitHub Pages.

### GitHub Pages

If you want to deploy to github pages, you can will need to [setup a few things](https://github.com/rafgraph/spa-github-pages):

Add this script in `index.html`:
```html
<!-- GitHub Pages SPA routing handler -->
<script type="text/javascript">
  // Single-page apps for GitHub Pages
  // MIT License
  // https://github.com/rafgraph/spa-github-pages
  (function (l) {
    if (l.search[1] === "/") {
      var decoded = l.search
        .slice(1)
        .split("&")
        .map(function (s) {
          return s.replace(/~and~/g, "&");
        })
        .join("?");
      window.history.replaceState(
        null,
        null,
        l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  })(window.location);
</script>
```

Add the following script in `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```

Then you just need to build the app
```bash
yarn build
```

Commit, and then push to the `main` branch (or any branch you set up in the workflow):

```bash
git add .
git commit -m "Deploying to github pages"
git push origin main
```

You will also need to go to your repository settings and set the GitHub Pages source to GitHub Actions.

## Future improvements

[ ] Create components for all Base UI elements.


## License WTFPL

```
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.
```