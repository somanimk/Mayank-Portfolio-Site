# Mayank Somani — Portfolio

My personal website, with a bit about me, the work I've done, and ways to get in touch. You'll also find my experience, certifications, and resume here.

Built with Next.js, React, and Tailwind CSS, with Motion for animations. Includes light and dark themes and layouts for mobile and desktop.

## Run locally

You'll need Node.js 20.9 or later and npm.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000) in your browser, or use the URL shown in the terminal.

Other commands:

```sh
npm run lint   # Check the code
npm run build  # Create a production build
npm start      # Run the production build
```

## Updating the site

- `lib/portfolio.js` — profile details, links, experience, and projects.
- `components/` — page sections and shared components.
- `app/page.js` — page layout and section order.
- `app/globals.css` — shared styles.
- `public/Mayank_Somani_Resume.pdf` — downloadable resume.

The GitHub card pulls in public profile details. The LinkedIn card uses the details saved in the site unless a server-side `LINKEDIN_ACCESS_TOKEN` is set in `.env.local`. That token needs the `openid profile` scopes; keep it private and replace it when it expires.

The contact form uses Web3Forms. If you're adapting this site for yourself, update the form's access key along with the profile details, links, and resume.
