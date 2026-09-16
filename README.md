# Divyansh Rana | Portfolio

Personal portfolio of **Divyansh Rana**, who builds retrieval and agent systems
and measures whether they work.

The page is laid out as an evaluation report: a hero trace panel showing the
KubePilot pipeline, a table of measured runs (including one regression), then
the projects those numbers came from.

Every figure on the site is a published run from the repository it belongs to.
Tools are only listed where they appear in a public repo.

## Tech stack

React · TypeScript · Vite · GSAP (ScrollSmoother, ScrollTrigger)

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Where the content lives

| Content | File |
| --- | --- |
| Projects, metrics and stacks | `src/data/projects.ts` |
| Hero headline and trace panel | `src/components/Landing.tsx` |
| Bio | `src/components/About.tsx` |
| Measured results table | `src/components/Evidence.tsx` |
| Tools and capabilities | `src/components/Practice.tsx` |
| Education | `src/components/Career.tsx` |
| Contact and social links | `src/components/Contact.tsx` |
| Design tokens (colour, type, spacing) | `src/index.css` |
| Page title, meta and social preview | `index.html` and `public/og.png` |

## Credits

Originally scaffolded from the portfolio template created by
**Moncy Yohannan**. The design, layout, copy and most components have since
been rewritten, but the template's credit is retained as its terms ask.

## License

Licensed under the Personal Portfolio License (PPL) v1.0.
