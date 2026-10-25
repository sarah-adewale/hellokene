import { MEDIUM_URL } from './links';

// Kene's articles, on Substack (moved from Medium, which made readers sign
// up). Shown in the stacked card under the cover image. Add an entry per
// article; the stack cycles through them with the prev/next arrows and the
// decorative layers behind the card stay put regardless of how many there are.
//
// `image` is optional - the thumbnail is simply omitted when it's missing.
// `url` falls back to the Medium profile when empty.
export const ARTICLES = [
  {
    title: 'Driving Ms. Data: Lessons for the Road',
    readTime: '5 min read',
    url: 'https://kenenna.substack.com/p/driving-ms-data-lessons-for-the-road',
    image: '/images/medium-article-1.jpeg',
  },
  {
    title: 'Simplifying Batch Exports in Figma',
    readTime: '3 min read',
    url: 'https://kenenna.substack.com/p/simplifying-batch-exports-in-figma',
    // cropped from the article's first screenshot
    image: '/images/medium-article-2.webp',
  },
];

export const articleUrl = (article) => article.url || MEDIUM_URL;
