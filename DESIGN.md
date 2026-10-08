# DESIGN DIRECTION

## Identity
Yusuf Rochman Hakim (AimZ24). Software developer building web platforms, point-of-sale systems, and industrial enterprise workflows.

## Personality
Professional Neo-Brutalism. Structural, high contrast, physical, disciplined. Built with thick 2px-3px solid ink borders, hard drop shadows with zero blur, tactile button press micro-interactions (`active:translate-x-1 active:translate-y-1 active:shadow-none`), stark grid dividers, and high-impact typographic hierarchy. Balances brutalist industrial weight with clean engineering polish.

## Dials
Dial: ENERGY 3 / RHYTHM 3 / MOTION 2

- **ENERGY 3**: Unapologetic solid borders, hard drop shadows (`shadow-[4px_4px_0px_0px_#000]`), high-visibility technical badges, stark contrast canvas.
- **RHYTHM 3**: Asymmetric structural cards: large engineering dossier hero, live web platform anchor card, cashier receipt / transaction ledger card for Three-Kasir, and customs document manifest card for Export DMS.
- **MOTION 2**: Physical tactile button press mechanics (depressing into the shadow on active/click), snappy modal pop-in, zero floaty generic animations.

## Palette
- Light Mode:
  - Canvas: `#fbf8f2` (industrial cream paper)
  - Surface Card: `#ffffff`
  - Ink / Border: `#09090b` (solid deep black)
  - Hard Shadow: `#09090b` (4px/6px solid offset)
  - Accent Primary: `#b45309` (industrial amber, 4.74:1 PASS)
  - Accent Badge: `#fde047` (technical yellow, 15.09:1 PASS with black text)
  - Accent Status: `#047857` (operational emerald, 5.17:1 PASS)
- Dark Mode:
  - Canvas: `#09090b` (deep carbon)
  - Surface Card: `#121316` (slate carbon)
  - Ink / Border: `#f4f4f5` (solid chalk)
  - Hard Shadow: `#f4f4f5` (solid offset chalk)
  - Accent Primary: `#f59e0b` (bright amber, 8.65:1 PASS)
  - Accent Badge: `#fef08a`
  - Accent Status: `#10b981` (bright emerald, 7.84:1 PASS)

## Typography
- Display / Headings: `Geist Sans` (font-black, stark brutalist weight) + `Instrument Serif` (intentional editorial contrast accent)
- Interface / Body: `Geist Sans` (clean readability)
- Code / Data / Meta: `Geist Mono` (technical precision)

## Rules & Constraints
- No em dashes in copy.
- No fake numbers or statistics.
- No fabricated testimonials.
- Complete interactive states (empty, loading, success, error).
- Zero blur shadows (only solid offset hard shadows).
- Zero horizontal overflow across mobile, tablet, and desktop viewports.
