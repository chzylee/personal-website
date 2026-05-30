import type { ShowcaseItem } from './types';

export const fgcWork: ShowcaseItem[] = [
  {
    label: 'Event graphic',
    title: '[ Event or series name ]',
    meta: '[ Game · venue · date ]',
    body: 'Placeholder — what was the event, and why did it need to exist? Lead with the human problem (who showed up, what was missing), then what you actually ran or made.',
    imageFile: 'fgc-event-1.png',
    imageAlt: '',
  },
  {
    label: 'Tournament',
    title: '[ Tournament name ]',
    meta: '[ Game · entrants · date ]',
    body: 'Placeholder — the specific tournament. What you handled (format, bracket, stream, graphics), and the concrete outcome (entrant count, a moment, a result).',
    imageFile: 'fgc-event-2.png',
    imageAlt: '',
  },
  {
    label: 'Graphics',
    title: '[ Graphics set or overlay ]',
    meta: '[ What it was for ]',
    body: 'Placeholder — a stream overlay, character art, or promo set you designed. What the scene used it for, and what it let an organizer pull off that they could not before.',
    imageFiles: ['fgc-graphics-1.png', 'fgc-graphics-2.png', 'fgc-graphics-3.png'],
    imageAlt: '',
  },
];
