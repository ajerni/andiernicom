## Andierni

Portfolio of my projects, live on [andierni.com](https://andierni.com).

Built with Next.js 15, Tailwind CSS and shadcn/ui.

### Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

### Adding a project

Projects are data-driven — add an entry to `src/lib/projects.ts` and drop the
preview image into `public/screenshots/`. Games live in `src/app/games/page.tsx`
and minisites in `src/app/minisites/page.tsx`.

Tools used:
- https://v0.dev/ to generate the Frontend code
- https://tinypng.com/ to compress images
