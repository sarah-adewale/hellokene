import { MEDIUM_URL } from './links';

// Articles shown in the stacked card under the cover image. Add an entry per
// article; the stack cycles through them with the prev/next arrows and the
// decorative layers behind the card stay put regardless of how many there are.
//
// `image` is optional - the thumbnail is simply omitted when it's missing.
// `url` falls back to the Medium profile when empty.
export const MEDIUM_ARTICLES = [
  {
    title: 'Driving Ms. Data: Lessons for the Road',
    readTime: '5 min read',
    url: 'https://medium.com/@_Kenenna/driving-ms-data-lessons-for-the-road-7ac6d2bf3a4f',
    image: '/images/medium-article-1.jpeg',
  },
  {
    title: 'Simplifying Batch Exports in Figma',
    readTime: '3 min read',
    url: 'https://medium.com/@_Kenenna/from-project-zip-to-purposeful-zip-simplifying-batch-exports-in-figma-56e5cf20394f',
    // cropped from the article's first screenshot
    image: '/images/medium-article-2.webp',
  },
];

export const articleUrl = (article) => article.url || MEDIUM_URL;
