import { MEDIUM_URL } from './links';

// Articles shown in the stacked card under the cover image. Add an entry per
// article; the stack cycles through them with the prev/next arrows and the
// decorative layers behind the card stay put regardless of how many there are.
//
// `image` is optional - the thumbnail is simply omitted when it's missing.
// `url` falls back to the Medium profile when empty.
export const MEDIUM_ARTICLES = [
  {
    title: 'Simplifying Batch Exports in Figma',
    readTime: '3 min read',
    url: '',
    image: '',
  },

  // TODO: placeholders for testing the carousel - replace with real articles.
  // Each points at the Medium profile with a distinct fragment so the links
  // are distinguishable but still open somewhere real.
  {
    title: 'Designing onboarding that survives regulation',
    readTime: '6 min read',
    url: 'https://medium.com/@_Kenenna#placeholder-2',
    image: '',
  },
  {
    title: 'What I learned shipping a design system solo',
    readTime: '4 min read',
    url: 'https://medium.com/@_Kenenna#placeholder-3',
    image: '',
  },
  {
    title: 'Bringing AI to the work instead of the other way round',
    readTime: '8 min read',
    url: 'https://medium.com/@_Kenenna#placeholder-4',
    image: '',
  },
];

export const articleUrl = (article) => article.url || MEDIUM_URL;
