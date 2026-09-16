# NORDHAUS Design System

A design system for **NORDHAUS** — a Scandinavian modular-home architecture and construction
studio. NORDHAUS designs and builds refined prefabricated houses: natural materials, considered
proportions, energy efficiency, and a deliberate relationship with the landscape a house sits in.

The brand should read as an **architecture studio**, not a prefab vendor and never as a SaaS
product. Editorial, calm, premium, spatial. Photography carries the emotion; typography carries
the hierarchy; whitespace is a material, not a leftover.

---

## Sources this system was built from

| Source | What it gave us |
| --- | --- |
| `uploads/Снимок экрана 2026-09-11 121949.png` | Art-direction reference — hero with oversized wordmark behind full-bleed architecture photography, floating overlay nav, numbered feature annotations (1.1, 1.2) over a large image |
| `uploads/Снимок экрана 2026-09-11 122419.png` | Art-direction reference — CTA block with statement headline, asymmetric project grid with reference numbers and `Country \| Type \| Year` metadata, testimonial pairing |
| `uploads/Снимок экрана 2026-09-11 122438.png` | Art-direction reference — FAQ accordion with arrow affordances, staggered project grid, dark footer with the oversized wordmark bleeding off the baseline |
| Written brand brief (in-chat) | Colour values, typography direction, layout system, component inventory, interaction rules, voice guidance |

The references show a **different company** (a competitor-style layout study). They were used for
compositional principles only — image dominance, editorial hierarchy, numbered metadata, the
oversized-wordmark motif, grid asymmetry. No layout, copy or mark was reproduced.

**No codebase, Figma file, logo file, font binary or photograph was supplied.** Everything marked
"substitution" below is flagged for the user to replace.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Global entry point — imports every token file. Consumers link this one file. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `layout.css`, `borders.css`, `motion.css`, `base.css` |
| `components/core/` | `Button`, `ArrowLink`, `Wordmark`, `Eyebrow`, `Figure`, `Icon` |
| `components/navigation/` | `SiteHeader`, `SiteFooter` |
| `components/editorial/` | `SectionIntro`, `ImageTextModule` |
| `components/projects/` | `ProjectCard`, `ProjectMeta`, `SpecTable` |
| `components/content/` | `FeatureList`, `Testimonial`, `Accordion`, `ContactCTA` |
| `ui_kits/website/` | Four-screen clickable recreation of the marketing site (`README.md` inside) |
| `guidelines/` | 19 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `assets/` | Empty by design — see *Assets & logo* below |
| `SKILL.md` | Agent-Skills wrapper so this system can be used from Claude Code |

Every component ships `<Name>.jsx`, `<Name>.d.ts` and `<Name>.prompt.md`; each directory has one
`@dsCard`-tagged HTML card.

### Intentional additions

* **`Icon`** — the brief named no icon system, but arrows, the accordion toggle and contact
  affordances all need glyphs. `Icon` wraps a small inlined Lucide set so screens never hand-roll
  one-off SVG. See *Iconography*.

---

## Content fundamentals

**The voice is an architect writing, not a marketer selling.** Specific, calm, measurable, and
willing to state a limit. It assumes an intelligent reader who is making an expensive, slow decision.

**Person.** "We" for the studio, "you" for the client, used sparingly. Never "I". Never the
collective "we" that means the industry. NORDHAUS refers to itself by name in the third person only
in legal and metadata contexts ("© 2026 Nordhaus AS").

**Casing.** Sentence case everywhere — headlines, buttons, nav, form labels. Uppercase appears only
in the mono eyebrow/metadata face and the wordmark. No Title Case Headlines. No ALL-CAPS sentences.

**Numbers are the argument.** Where a claim can be a number, it is: "eleven weeks in the factory,
nine days on site", "164 m²", "−35 °C to +30 °C", "twelve houses a year". Spell numbers out in
prose, use figures in metadata and specs. Metric units, non-breaking space before the unit.

**Punctuation.** Em dashes sparingly; the system prefers a full stop. Middot `·` separates metadata
runs. No exclamation marks. No ellipses in UI copy.

**Emoji: never.** Not in copy, not in UI, not in the journal. This is a hard rule.

**Sentence shape.** Short declaratives, occasionally one long sentence that earns its length by
carrying a spatial description. Headlines run 4–10 words and break across 2–3 lines.

Examples that are on-voice:

> A house should be finished before it reaches the site.
> Cross-laminated spruce, cut to the millimetre in Trondheim.
> Fixed price, agreed in full before production begins. No provisional sums.
> Seventeen people in a hall in Trondheim.
> The grid itself is fixed — that is what keeps the price fixed.

Off-voice, and specifically banned:

> ~~Your dream home starts here.~~ ~~Building the future of living.~~
> ~~Revolutionary modular living.~~ ~~Discover endless possibilities.~~
> ~~Transform your lifestyle today!~~

**Buttons** are verb-first and concrete: "Book a consultation", "Download the drawing set",
"Load the next twelve". Never "Learn more", "Get started", "Submit".

**FAQ answers** open with the answer, then the qualification. Never "Great question!".

**Project naming.** Every project carries a four-digit production reference and a plain descriptive
name: `0890 Mountain Retreat`. Metadata order is always place → area → year.

---

## Visual foundations

### Colour

A warm neutral system with one muted accent. The full ramp lives in `tokens/colors.css`.

* **Ivory `#F5F4F0`** is the page. Everything else is a deviation from it.
* **Warm gray `#E9E8E3`** is the sunken/media ground — image placeholders, inset panels.
* **Near-black `#111111`** is text; **ink `#111211`** is the dark section ground.
* **Muted gray `#6F706D`** is all secondary prose.
* **Hairline `#D7D6D0`** does the work that shadows do elsewhere.
* **Olive `#777C68`** is the only accent. It appears in dashes, stars, small icons and selection —
  never as a large field, never as a button fill, never in a gradient.
* **Material tints** (timber, stone, glass) exist for diagrams and chips only.

Dark sections are not a theme toggle; they are a compositional device. Add `class="nh-dark"` to any
container and every semantic token inverts inside it. A page uses one or two dark sections at most.

**No gradients** except `--scrim-gradient`, the bottom-up scrim used when type sits on a photograph.
No colour outside this palette. No semantic red/green/amber — the brand has no alert states.

### Typography

**Manrope** (core grotesk) carries display through body. **IBM Plex Mono** carries metadata,
indices, units and eyebrows. Only three weights ship in practice: 400 for prose, 500 for display and
UI, 600 for the wordmark at large sizes.

The scale is contrasty on purpose: `148 / 88 / 64 / 46` display steps against a `15px` body. Display
type is tightly tracked (−0.035em, −0.045em at hero) and set at 0.88–1.02 leading, so headlines read
as built objects. Body is 15px at 1.62 leading, secondary gray, capped near 52ch.

Nothing is italic. Nothing is letterspaced positive except the mono face (+0.08em, +0.14em uppercase).
Never bold a body sentence for emphasis — restructure it instead.

### Layout

1440px max width, 12 columns, 24px column gap, 32px page gutter. Sections are separated by
80 / 128 / 192px. Asymmetry is produced by *column starts*, not by floating elements: a 7-column
image beside a 4-column text block starting at column 9, the next row starting at column 2.
Grids never repeat the same ratio twice in a row.

Nothing is fixed or sticky except the specification column on a project page. No parallax.

### Imagery

Photography is the emotional load of the brand: real architectural photography of Nordic timber-and-
glass houses in mountain, forest, lake and coastal settings. Overcast daylight and warm interior
light; cool-neutral grade with warm interior pools; no heavy filters, no grain, no tinting, no AI
renders. Human-scale details and occasional quiet lifestyle moments — never posed stock.

Six ratios: 16:9 hero, 3:2 editorial (default), 4:3 landscape, 4:5 portrait, 3:4 tall, 21:9 panorama.
Full-bleed at hero and section breaks; 8px radius inside grids; 0 radius when bleeding to the
viewport edge. Images always pair with a caption line and a mono metadata run.

**No photography was supplied.** `Figure` renders a labelled warm-gray placeholder in its place.

### Cards, borders, radii, shadows

There are effectively **no cards**. A "card" in this system is an image, a hairline, and two lines of
text — no container, no fill, no shadow. Radii are 2 / 4 / 8 / 14px; buttons are 4px; media 8px.
The pill radius is reserved for one element only: the circular arrow badge on the primary CTA.

Two shadows exist (`--shadow-float`, `--shadow-overlay`) and are for genuinely floating UI. The
default elevation is none. No inner shadows. No glassmorphism, no backdrop blur anywhere. The only
transparency in the system is the image scrim and the 18%-ivory hairline under the overlay header.

### Motion

Slow, even, and never playful. `--ease-out-soft` (0.16, 1, 0.3, 1) for anything spatial;
`--ease-standard` for colour and opacity. Durations: 200ms UI, 320ms lines and panels, 760ms image
scale, 900ms scroll reveal.

* **Image hover:** scale to 1.035 over 760ms. Never more.
* **Arrow hover:** travels 4px along its own diagonal.
* **Link hover:** the underline goes from 28% to 100% opacity; it does not wipe in.
* **Nav hover:** opacity to 1; active item carries a 1px underline.
* **Accordion:** `grid-template-rows: 0fr → 1fr` over 320ms, arrow rotates 90°.
* **Reveal:** 18px up + fade, 900ms, once.
* **Press:** colour shift only — nothing scales down, nothing bounces, nothing springs.
* `prefers-reduced-motion` disables all of it.

### Hover & press summary

| Element | Hover | Press |
| --- | --- | --- |
| Solid button | ink → `--nh-gray-800` | same, no scale |
| Quiet button | border hairline → near-black | same |
| Ghost button | transparent → `--surface-sunken` | same |
| Arrow link | underline 28% → 100%, arrow +4px | — |
| Image / project card | scale 1.035, top rule → `--border-strong` | — |
| Nav item | opacity 0.72 → 1 | — |

---

## Iconography

**No icon set, icon font, sprite or SVG asset was supplied with the brief.**

**Substitution (flagged):** the system uses **Lucide** (ISC licence) at **stroke 1.5**, with the
needed paths inlined into `components/core/Icon.jsx` so components carry no CDN dependency. Lucide's
geometric, even-weight line style is the closest match to the restrained architectural direction. If
NORDHAUS has its own glyph set, replace the `PATHS` map in `Icon.jsx` — no other file changes.

Rules:

* Icons are **functional only** — arrows, accordion toggles, contact affordances, spec markers, the
  rating star. They never decorate a heading, never sit inside a coloured circle, never appear in a
  feature grid as a decorative badge.
* The **arrow is the brand's one interaction glyph**: `arrow-up-right` for detail/outbound,
  `arrow-right` for sequence, `arrow-down` for in-page.
* Default size 16px beside 15px text; 13–14px inside small buttons; 18–20px only in a `FeatureList`
  with `icons`.
* Icons inherit `currentColor`. Olive is allowed for the material/energy glyphs in a feature list.
* **Emoji are never used.** Unicode is used for exactly two marks: the middot `·` in metadata runs
  and the em dash `—` in list bullets.
* Available names: `arrow-up-right`, `arrow-right`, `arrow-left`, `arrow-down`, `chevron-down`,
  `chevron-right`, `plus`, `minus`, `x`, `menu`, `mail`, `phone`, `map-pin`, `leaf`, `ruler`,
  `thermometer`, `star`.

## Assets & logo

`assets/` is intentionally empty.

**No logo file was supplied**, so none was invented. The NORDHAUS mark **is the wordmark set in
Manrope** — full caps, −0.02em at UI sizes, −0.04em and semibold above 40px. The `Wordmark`
component is the single source of that treatment. Never draw, generate or approximate a symbol mark
for this brand.

**No photography was supplied.** Every `Figure` without a `src` renders a labelled placeholder
naming the shot that belongs there. Supplying real architectural photography is the single largest
improvement available to this system.

**Fonts are loaded from the Google Fonts CDN** (`tokens/fonts.css`) rather than vendored as binaries
— no font files were provided. Manrope is a substitution chosen from the brief's stated preference
list; if NORDHAUS licenses a commercial grotesk (e.g. a Neue Haas / Söhne / Diatype class face),
drop the woff2 files in `assets/fonts/` and swap the import for local `@font-face` rules.

## Adherence rules for anyone building with this system

1. Photography first. A NORDHAUS page that is mostly text is wrong.
2. One solid button per view. One `withArrow` badge per view.
3. No repeated identical rows — vary ratio, span and column start.
4. Never introduce a colour, radius or shadow that is not in `tokens/`.
5. Sentence case, metric units, numbers over adjectives.
6. Hairlines separate; shadows do not.
7. Whitespace is the premium signal. When in doubt, remove an element and add 32px.
