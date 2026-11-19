---
name: Negocios con Diana
colors:
  surface: '#021521'
  surface-dim: '#021521'
  surface-bright: '#293b48'
  surface-container-lowest: '#00101b'
  surface-container-low: '#0a1d29'
  surface-container: '#0f212e'
  surface-container-high: '#1a2c38'
  surface-container-highest: '#253744'
  on-surface: '#d2e5f6'
  on-surface-variant: '#c4c7cc'
  inverse-surface: '#d2e5f6'
  inverse-on-surface: '#20323f'
  outline: '#8d9196'
  outline-variant: '#43474b'
  surface-tint: '#b8c8d9'
  primary: '#b8c8d9'
  on-primary: '#22323f'
  primary-container: '#11212d'
  on-primary-container: '#798998'
  inverse-primary: '#50606e'
  secondary: '#c3c7c6'
  on-secondary: '#2d3131'
  secondary-container: '#434847'
  on-secondary-container: '#b2b6b5'
  tertiary: '#b6c9db'
  on-tertiary: '#203240'
  tertiary-container: '#0e212e'
  on-tertiary-container: '#778999'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d4e4f5'
  primary-fixed-dim: '#b8c8d9'
  on-primary-fixed: '#0d1d29'
  on-primary-fixed-variant: '#394956'
  secondary-fixed: '#dfe3e2'
  secondary-fixed-dim: '#c3c7c6'
  on-secondary-fixed: '#181c1c'
  on-secondary-fixed-variant: '#434847'
  tertiary-fixed: '#d2e5f7'
  tertiary-fixed-dim: '#b6c9db'
  on-tertiary-fixed: '#0a1d2a'
  on-tertiary-fixed-variant: '#374957'
  background: '#021521'
  on-background: '#d2e5f6'
  surface-variant: '#253744'
typography:
  display:
    fontFamily: Bodoni Moda
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Bodoni Moda
    fontSize: 38px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 30px
    fontWeight: '500'
    lineHeight: 36px
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Bodoni Moda
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Manrope
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system embodies an executive, editorial luxury ethos tailored for high-level business mentorship. It communicates deliberate focus, analytical discipline, and serene authority. 

The aesthetic is built on high-contrast editorial refinement combined with strict architectural sobriety: deep slate foundations, whisper-thin structural dividers, dramatic high-contrast serif headlines, and immaculate typographic rhythm. It dispenses with loud gradients and ornamental skeuomorphism, relying instead on deliberate negative space, restrained tonal surfaces, and decisive typography to inspire quiet confidence and executive clarity.

## Colors

The palette operates under a strict, monochromatic-adjacent hierarchy designed specifically for deep dark mode immersion:

- **Canvas Background (`#06141B`)**: The deepest abyssal tone, used for primary canvas rendering and core background environments.
- **Surface Alternate / Structural Elements (`#11212D`)**: Applied to header navigation bars, alternating section bands, and footer anchors to establish macro structural rhythm.
- **Card & Container Surfaces (`#253745`)**: Elevates interactive panels, feature cards, and contained groups from the underlying canvas.
- **Hairline Borders & Dividers (`#4A5C6A`)**: Used at 1px thickness for structural containment, card borders, and separating lines without generating visual clutter.
- **Secondary Text & Captions (`#9BA8AB`)**: Subdued slate-mist providing effortless legibility for body copy, meta tags, and supportive descriptions while managing visual hierarchy.
- **High-Contrast Accents & Primary Typography (`#CCD0CF`)**: Pale platinum used for prominent editorial headlines, high-priority icons, and high-impact call-to-action button fills.

## Typography

The typographical pairing unites high-fashion editorial rigor with Scandinavian rationalism:

- **Headlines (`Bodoni Moda`)**: Commands attention with extreme vertical contrast and sharp serifs. Reserved for key impact moments: page headers, module titles, and pulling quotes. Always set in `#CCD0CF` with restrained line spacing to preserve architectural density.
- **Body & Controls (`Manrope`)**: Provides geometric precision and modern clarity. The open counters ensure high legibility against dark slate surfaces.
- **Labels & Microcopy**: Rendered in uppercase with subtle positive letter spacing (`0.04em` to `0.08em`) to instill an executive, audited presence across metrics, badges, and button labels.

## Layout & Spacing

The layout operates on a disciplined 12-column grid anchored by structured alternating vertical bands.

- **Desktop (1024px+)**: Max content width of 1280px, flanked by minimum 2rem (`margin`) canvas gutters. Sections alternate deliberately between `#06141B` and `#11212D` to visually delineate themes without requiring heavy separators.
- **Tablet (768px - 1023px)**: 8-column layout with 1.5rem margins and gutters. Cards collapse into two-column pairings.
- **Mobile (< 768px)**: 4-column layout with 1rem margins and 1rem gutters. Editorial displays step down via defined mobile typography tokens to guarantee breathing room.
- **Vertical Cadence**: Generous section spacing (`space-3xl`) isolates mentorship philosophies, testimonials, and program tracks, granting each concept dedicated contemplative focus.

## Elevation & Depth

This system avoids heavy, diffused drop shadows. Instead, depth and layering are achieved through strictly managed tonal luminosity and razor-thin borders:

- **Ground Level (Base)**: `#06141B` sets the infinite foundation.
- **Section Banding**: Flat transitions into `#11212D` delineate headers, navigation docks, and alternating bands.
- **Raised Tonal Planes (Cards & Panels)**: Surfaces set to `#253745` bound by a razor-thin 1px border of `#4A5C6A`.
- **Hover & Interaction States**: Interactive surfaces transition the border to `#9BA8AB` and subtly shift the background layer rather than floating via Y-axis translation or casting artificial shadows.

## Shapes

The geometric architecture balances tailored corporate discipline with approachable luxury:

- **Standard Containers & Cards**: Defined at standard medium curvature (`roundedness: 2`, rendering at `0.5rem` / `8px` or up to `1rem` on larger cards) to preserve sharp architectural alignment while gently softening structural edges.
- **Interactive Action Drivers**: Action buttons and interactive indicator chips utilize full pill contours (`9999px`) to create an immediate ergonomic contrast against rectangular modular content blocks.
- **Structural Outlines**: Hairlines remain consistently 1px wide, executed in `#4A5C6A`.

## Components

### Buttons
- **Primary Action**: Pill-shaped (`rounded-full`), solid background `#CCD0CF`, filled with dark ink text `#06141B` set in `Manrope` semibold. On hover, background shifts toward pure white with subtle optical glow.
- **Secondary Action**: Pill-shaped (`rounded-full`), transparent background, 1px perimeter border in `#9BA8AB`, text `#CCD0CF`. On hover, border and text brighten to `#CCD0CF` with an interior surface tint of `#253745`.

### Cards & Blocks
- Built with a `#253745` foundation, bounded by a crisp 1px border in `#4A5C6A`.
- Padding set using `space-lg` (desktop `2rem`, mobile `1.5rem`).
- Titles within cards use `headline-sm` in `Bodoni Moda` (`#CCD0CF`), paired with body copy in `#9BA8AB`.

### Input Fields
- Background container styled in `#11212D` with a 1px border of `#4A5C6A`.
- Height: 48px, rounded corners corresponding to base radius (0.5rem).
- Text in `#CCD0CF`, placeholder rendered in `#4A5C6A`.
- Focus state: Border transitions to `#CCD0CF` with an interior glow-line; zero offset shadows.

### Chips & Badges
- Pill-shaped miniature indicators.
- Inactive / Category: Background `#11212D`, border 1px `#4A5C6A`, text `#9BA8AB` in `label-sm`.
- Active / Highlight: Background `#253745`, border 1px `#CCD0CF`, text `#CCD0CF` in `label-sm`.

### Lists & Dividers
- Horizontal divider rules: 1px continuous hairline in `#4A5C6A`.
- Executive metric lists: Numbered elements using `Bodoni Moda` numeral callouts in `#CCD0CF`, followed by descriptive body copy in `#9BA8AB` separated by subtle 1px border-bottom dividers.

### Checkboxes & Radios
- Square (checkbox) or circle (radio) with 1px border `#4A5C6A` and background `#11212D`.
- Selected state fills with `#CCD0CF` and applies a `#06141B` centered check or dot glyph.