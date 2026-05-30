/**
 * One row in a showcase page — an event, series, graphic, or piece of work
 * displayed as an alternating image/text block by `FeatureSections.astro`.
 *
 * Images live in `src/assets/event-graphics/`. Reference by filename; rows
 * with no matching file render a labelled placeholder so the layout holds
 * while the graphic is pending.
 */
export interface ShowcaseItem {
  /** Mono eyebrow label, e.g. "Monthly series", "Event graphic". */
  label: string;
  title: string;
  /** Optional detail line under the title — game, date, cadence, venue. */
  meta?: string;
  /** Body copy. Lead with the human problem, then the proof. */
  body: string;
  /** Optional second body paragraph. */
  bodyExtra?: string;
  /**
   * One or more filenames inside `src/assets/event-graphics/`.
   * Two or more → carousel with arrows + auto-advance.
   */
  imageFiles?: string[];
  /** Single-image shorthand — equivalent to `imageFiles: [imageFile]`. */
  imageFile?: string;
  /** Alt text for the graphic(s). */
  imageAlt?: string;
  /** Visible photo credit rendered below the image. */
  photoCredit?: { label: string; url: string };
  /** Optional outbound link — bracket, results, VOD, etc. */
  link?: { label: string; url: string };
}
