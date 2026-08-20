// Build-time content for the hero CRT "TV". This module evaluates once per
// build; every fetch has a hardcoded fallback so a network hiccup can never
// fail the build or leave the screen blank.

const SUBSTACK_URL = 'https://endotlee.substack.com';

/** Unlisted playlist of the polished Melty Blood event-series footage. */
export const PLAYLIST_ID = 'PL3NbUEgkeU7xgFTN68z5oYis_fiX0dlv5';

/** Newest video in the playlist as of the last manual check (fallback). */
const FALLBACK_VIDEO_ID = 'uwQUYrFEcvs';

async function fetchText(url: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    return res.ok ? await res.text() : null;
  } catch {
    return null;
  }
}

const pick = (re: RegExp, s: string | null): string | null =>
  s?.match(re)?.[1] ?? null;

// Latest Substack post: title, link, and cover image from the public RSS feed.
const feed = await fetchText(`${SUBSTACK_URL}/feed`);
const item = pick(/<item>([\s\S]*?)<\/item>/, feed);

export const substackLatest = {
  title: pick(/<title><!\[CDATA\[([\s\S]*?)\]\]>/, item) ?? 'In Your Corner',
  url: pick(/<link>(https?:[^<]+)<\/link>/, item) ?? SUBSTACK_URL,
  /** Post cover image; null renders the slide without a still. */
  image: pick(/<enclosure url="([^"]+)"/, item),
};

// Newest video in the event-series playlist. The playlist is unlisted, so it
// has no RSS feed; scrape the first videoId off the playlist page (playlist
// order puts the newest first) and fall back if the markup ever changes.
const playlistPage = await fetchText(
  `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`
);

export const playlistLatest = {
  videoId: pick(/"videoId":"([\w-]{6,})"/, playlistPage) ?? FALLBACK_VIDEO_ID,
};
