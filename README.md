# Mayank Somani — Software Engineering Portfolio

A responsive portfolio built with Next.js App Router, React, Tailwind CSS, and Motion. It presents software engineering ownership, selected professional contributions, deep frontend expertise, certification, and contact information. The positioning emphasizes architecture, performance, testing, and technical delivery, with backend experience scoped to the projects supported by the resume.

## Development

Use Node.js 20.9 or later and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Next.js (normally http://localhost:3000).

```sh
npm run lint
npm run build
npm start
```

Outfit and Ovo are served locally through `next/font/local` using the same Latin font assets as the previous site. The production build does not need to download fonts.

## Content and structure

The hero's GitHub hover card loads the public GitHub user API through `/api/social/github`, including the avatar, bio, location, repository count, and followers. GitHub requests are cached for an hour; LinkedIn requests and responses use no-store. Local profile details remain available if an API request fails. API failures return an upstream status and a safe explanation; Vercel logs record missing configuration, upstream HTTP errors, and timeouts without logging tokens or raw profile responses.

The LinkedIn card uses `/api/social/linkedin`. To enable it, authorize your own LinkedIn developer app with the Sign In with LinkedIn using OpenID Connect product and `openid profile` scopes, then set `LINKEDIN_ACCESS_TOKEN` in `.env.local` and restart the development server (or set it in the hosting environment). Keep this token server-side; do not use a `NEXT_PUBLIC_` variable. Replace the token when it expires. LinkedIn's userinfo endpoint provides the name and profile picture; the headline and description remain portfolio content. Without the token, the card uses the local profile. See [LinkedIn's documentation](https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/sign-in-with-linkedin-v2).

- `lib/portfolio.js`: profile links, navigation, employment, case studies, and expertise.
- `components/`: page sections and shared section/tag components.
- `app/page.js`: section order and theme preference handling.
- `app/layout.js`: fonts, metadata, and theme initialization.
- `app/globals.css`: shared styles and responsive/accessibility behavior.
- `public/Mayank_Somani_Resume.pdf`: downloadable latest resume.

Professional contributions are described from the resume without proprietary screenshots or code. The Claude Certified Architect – Foundations section includes the owner's Credly badge embed and public verification link. The embed loads from Credly after the page becomes interactive; the verification link remains available if the third-party script is blocked.

The contact form uses the existing Web3Forms endpoint and public access key. Email and LinkedIn are available as direct alternatives. Test form states with mocked requests; do not send live inquiries during automated checks.

Before publishing, run lint and the production build, check small mobile/tablet/desktop layouts in both themes, and verify navigation, keyboard access, resume download, and contact form states.
