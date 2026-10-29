const WORDS_PER_MINUTE = 200;

// Minutes needed to read a markdown text, rounded up, at least 1.
// Code blocks, link targets and markdown symbols do not count as words.
export function readingTime(markdown) {
  if (!markdown) return 1;
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/[#>*_`~\-[\]]/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function readingTimeLabel(markdown) {
  const minutes = readingTime(markdown);
  return minutes === 1 ? '1 min read' : `${minutes} min read`;
}
