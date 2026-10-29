import { readingTime, readingTimeLabel } from './readingTime';

const words = n => Array(n).fill('word').join(' ');

it('is at least one minute', () => {
  expect(readingTime('')).toBe(1);
  expect(readingTime(undefined)).toBe(1);
  expect(readingTime('hello')).toBe(1);
});

it('rounds up at 200 words a minute', () => {
  expect(readingTime(words(200))).toBe(1);
  expect(readingTime(words(201))).toBe(2);
  expect(readingTime(words(1000))).toBe(5);
});

it('skips code blocks and link targets', () => {
  const md = `${words(200)}\n\`\`\`js\n${words(500)}\n\`\`\`\n[a link](https://example.com/a/very/long/path)`;
  expect(readingTime(md)).toBe(2);
});

it('labels singular and plural', () => {
  expect(readingTimeLabel('hi')).toBe('1 min read');
  expect(readingTimeLabel(words(450))).toBe('3 min read');
});
