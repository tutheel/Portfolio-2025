# Personal Portfolio - Home Page

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

## Build for Production

To build the project for production:

```bash
npm run build
```

This will create a static export in the `out/` directory.

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### GitHub Pages Setup

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"

2. **Push to Main Branch**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - Your site will be available at: `https://[your-username].github.io/home-page/`

### Manual Deployment

If you want to deploy manually:

```bash
npm run build
npm run export
```

The static files will be generated in the `out/` directory.

## Project Structure

- `src/pages/` - Next.js pages
- `src/components/` - React components
- `src/styles/` - CSS and styling files
- `src/data/` - Data files and content

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- GSAP (for animations)
- Locomotive Scroll
- React Icons

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
