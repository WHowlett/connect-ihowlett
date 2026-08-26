<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Connect iHowlett - Codex Project Instructions

## Project purpose

`connect-ihowlett` powers `https://connect.ihowlett.com`, Wayne Howlett's public connection hub.

The site is a lightweight companion to the main portfolio at `https://www.ihowlett.com`. It should make it fast for recruiters, hiring teams, professional contacts, and other visitors to understand who Wayne is and choose the right way to connect.

This is a personal professional site, not a SecurePath-branded product. Use the name **Wayne Howlett** and the current personal branding already present in the repository.

## Current product direction

Preserve the site's two useful audiences unless Wayne explicitly asks to change them:

- **Standard View** - quick sharing, networking, primary links, and social profiles.
- **Recruiter View** - role fit, evidence, resume, projects, professional strengths, and contact actions.

The experience should feel modern, polished, professional, technical, and intentionally designed rather than like a generic link-in-bio template.

The main portfolio remains the deeper source of career information. The Connect site should point people there instead of duplicating the entire portfolio.

## Identity and communication requirements

Use these facts when relevant to public contact UI:

- Name: **Wayne Howlett**
- Primary professional email: **wayne@ihowlett.com**
- Main portfolio: `https://www.ihowlett.com`
- Connect site canonical URL: `https://connect.ihowlett.com`
- GitHub: `https://github.com/WHowlett`
- LinkedIn: `https://www.linkedin.com/in/wayne-howlett/`

Wayne is hard of hearing and prefers **written communication by email, text, or chat rather than phone calls**. When the site presents communication preferences, state this professionally and positively. Do not frame accessibility as a limitation on his technical ability.

Do not add a personal phone number, home address, private account identifier, or other sensitive information unless Wayne explicitly supplies it for that purpose.

## Content accuracy

Do not invent credentials, employers, certifications, degrees, job titles, years of experience, metrics, testimonials, or project results.

If content is uncertain, preserve the current verified wording or mark the location clearly for Wayne to review instead of fabricating information.

Avoid describing Wayne as only a cybersecurity candidate if the surrounding task is intended to represent his broader technical background. His professional portfolio can span cybersecurity, IT support, networking, software engineering, cloud, APIs, and related technical work.

## Technical stack

Current repository stack includes:

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React icons
- ESLint

Keep TypeScript strict and prefer idiomatic React/Next.js patterns supported by the installed versions.

Before relying on remembered Next.js behavior, follow the Next.js rule at the top of this file and inspect the version-specific docs in `node_modules/next/dist/docs/`.

Do not downgrade framework versions or replace the stack unless Wayne explicitly asks for a migration.

## Repository structure

The current app is intentionally small. Important files include:

- `src/app/page.tsx` - main Connect experience and interactive UI
- `src/app/globals.css` - global styling and custom animation/style rules
- `src/app/layout.tsx` - root layout and metadata
- `public/` - public images and brand assets

Prefer clean component extraction when `page.tsx` becomes difficult to maintain. Do not split code into many tiny files solely for abstraction.

## Design expectations

Maintain a premium personal-tech visual style.

- Favor the existing blue/cyan/slate visual family unless Wayne requests a new direction.
- Keep excellent contrast and readability; visual effects must never make text hard to read.
- Use current Lucide icons or similarly modern iconography already approved by the project. Avoid dated-looking icon styles.
- Keep spacing, typography, borders, radii, and shadows consistent.
- Avoid excessive gradients, glow, animation, or glass effects when they reduce clarity.
- Design mobile-first, but verify tablet and desktop layouts too.
- Avoid horizontal overflow and clipped text at narrow widths.
- Buttons and link cards should have clear hover, focus, and pressed states.
- External destinations should be obvious and safe to use.

## Accessibility requirements

Accessibility is a first-class requirement.

- Use semantic HTML and a logical heading hierarchy.
- Keep keyboard navigation fully usable.
- Provide visible focus states.
- Add meaningful `alt` text to informative images and empty alt text to purely decorative images.
- Ensure interactive controls have accessible names.
- Do not communicate meaning by color alone.
- Respect `prefers-reduced-motion` for nonessential animation.
- Avoid autoplaying audio or interactions that require sound.
- Maintain strong text/background contrast.
- Use sufficiently large touch targets on mobile.

## Performance and maintainability

- Prefer server components when interactivity is not required, but do not force a rewrite without benefit.
- Minimize client-side JavaScript and state where practical.
- Use `next/image` where appropriate for production image optimization, while accounting for the actual asset behavior and layout needs.
- Avoid unnecessary dependencies.
- Avoid duplicated constants and repeated UI patterns when a clear shared structure improves maintainability.
- Keep public links and content data easy to update.
- Do not add tracking, analytics, cookies, or third-party scripts unless Wayne explicitly requests them.

## SEO and metadata

When changing metadata or public-facing structure:

- Keep the canonical identity aligned with `connect.ihowlett.com`.
- Use Wayne Howlett's name in useful page titles/descriptions.
- Keep metadata concise and professional.
- Do not keyword-stuff.
- Do not claim qualifications that are not represented in the site content.

## Link behavior

Existing portfolio and social links are intentional. Before changing or removing one, verify where it is used.

When a task changes a route on `www.ihowlett.com`, update the corresponding Connect link only if the new destination is known.

Do not silently replace Wayne's domains or social usernames with guessed alternatives.

## Codex working method

For each requested change:

1. Read the relevant existing files before editing them.
2. Preserve working behavior that is outside the scope of the request.
3. Make the smallest coherent set of changes that fully solves the task.
4. Reuse the installed stack before adding dependencies.
5. Check responsive behavior and accessibility implications.
6. Run the available validation commands.
7. Fix issues caused by the change rather than leaving known lint/build errors behind.
8. Summarize what changed, which files changed, and what validation was run.

If a request is ambiguous, infer from the existing site and these instructions when the intent is low-risk. Ask Wayne only when a missing decision would materially change the result.

## Validation

At minimum, after code changes run:

```bash
npm run lint
npm run build
```

For visual work, also inspect the site at common mobile and desktop widths. Pay special attention to text wrapping, touch targets, header/hero spacing, cards, footer content, and any fixed/sticky elements.

Do not report a task as complete if the build fails because of changes you introduced.

## Git hygiene

- Keep commits focused and understandable.
- Do not commit generated build output, local environment files, secrets, or credentials.
- Do not rewrite unrelated files just to reformat them.
- Preserve existing assets unless the task intentionally replaces them.
- Never commit `.env*` secrets.

## Instruction precedence

Wayne's current explicit request takes priority over the project preferences in this file, except for security, privacy, and factual-accuracy requirements. When a requested change conflicts with an older design choice, follow Wayne's current request and update the implementation consistently.
