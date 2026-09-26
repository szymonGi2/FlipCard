# Programming Flip Cards

A simple flashcard app for practicing programming basics, built with React, TypeScript, Vite, and Tailwind CSS.

Click a card to reveal its answer. Click again to return to the question. Each card flips independently with a 3D animation. You can also focus a card with Tab and flip it with Enter or Space.

## Getting started

Install Node.js and npm, then run these commands in the project folder:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Check TypeScript and build the app into `dist/`. |
| `npm run preview` | Preview the production build after running the build command. |
| `npm run lint` | Check the code with ESLint. |

## Adding questions

Add an object to the `flipCards` array in `src/App.tsx`. Each card needs a unique `id`, a `question`, and an `answer`:

```tsx
{
  id: "id-9",
  question: "What does the useState hook do in React?",
  answer: "It adds state to a component and provides a function to update it."
}
```

## Main files

- `src/App.tsx` — questions and card layout.
- `src/components/Card.tsx` — card content and flip interaction.
- `src/card.ts` — the flashcard TypeScript interface.
- `src/index.css` — Tailwind CSS import.
