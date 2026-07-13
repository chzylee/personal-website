# Hero event reel

The hero TV backdrop (`src/components/Hero.astro`, `.hero__tv`) plays a muted,
looping event reel when the visitor hits "Roll the event reel".

Drop the reel here as **both** of these filenames and it works with no code change
(the hero shows a "NO SIGNAL" test card until at least one of them plays):

- `event-reel.webm` (VP9/AV1, smaller — preferred by browsers that support it)
- `event-reel.mp4` (H.264 baseline/main — universal fallback)

Guidance:

- ~20-40s, 720p, **no audio track needed** (it plays muted; sound is never used).
- Keep each file small (target a few MB). Compress hard; it is a background.
- It loops, so try to make the first and last frames cut cleanly.

Quick encode (with ffmpeg), from a source `reel-source.mov`:

```sh
# MP4 (H.264, muted, ~720p)
ffmpeg -i reel-source.mov -an -vf "scale=-2:720" -c:v libx264 -profile:v main -crf 26 -movflags +faststart event-reel.mp4

# WebM (VP9, muted, ~720p)
ffmpeg -i reel-source.mov -an -vf "scale=-2:720" -c:v libvpx-vp9 -b:v 0 -crf 34 event-reel.webm
```
