# yogamos

Yoga delivery to the world.

Look at [Nuxt docs](https://nuxt.com/docs/getting-started/introduction) and [Nuxt UI docs](https://ui.nuxt.com) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Peacock - Quick Usage Guide

Peacock is a VS Code extension that allows you to color-code your workspace, making it easier to distinguish between multiple projects.

### Installation

1. Open VS Code.
2. Go to the Extensions Marketplace (`Ctrl+Shift+X` or `Cmd+Shift+X` on macOS).
3. Search for **Peacock** by John Papa.
4. Click **Install**.

### Basic Usage

1. Open a project in VS Code.
2. Open the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
3. Type **Peacock** and select one of the following commands:
   - **Peacock: Change to a favorite color**
   - **Peacock: Enter a color**
   - **Peacock: Choose a random color**
4. Your workspace color will change immediately.

### Custom Colors

You can define your own colors in the `.vscode/settings.json` file:

````json
"peacock.favoriteColors": [
  { "name": "My Custom Blue", "value": "#1E90FF" },
  { "name": "Soft Green", "value": "#2E8B57" }
]

## Code Formatting with Prettier

We use [Prettier](https://prettier.io/) to maintain consistent code formatting.

### Installation

Ensure you have Prettier installed:

```sh
npm install --save-dev --save-exact prettier
````

## Nuxt Studio integration

Add `@nuxthq/studio` dependency to your package.json:

```bash
# npm
npm install --save-dev @nuxthq/studio

# pnpm
pnpm add -D @nuxthq/studio

# yarn
yarn add -D @nuxthq/studio

# bun
bun add -d @nuxthq/studio
```

Add this module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  ...
  modules: [
    ...
    '@nuxthq/studio'
  ]
})
```

Read more on [Nuxt Studio docs](https://nuxt.studio/docs/get-started/setup).

## Renovate integration

Install [Renovate GitHub app](https://github.com/apps/renovate/installations/select_target) on your repository and you are good to go.
