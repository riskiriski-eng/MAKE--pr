# PortoCraft - Design System

**Purpose:** Single source of truth untuk visual & interaction design  
**Last Updated:** 2026-10-31  
**Audience:** Anggrea (lead), Cici (implementation), Faiz (usage), Fahri (consistency)

---

## 1. Color System

### Primary Palette
```
Navy Blue:        #1e3a8a (rgb: 30, 58, 138)   - Primary titles, CTAs, headers
Cyan Accent:      #0ea5e9 (rgb: 14, 165, 233)  - Highlights, hover, focus
Orange Accent:    #f97316 (rgb: 249, 115, 22)  - Alternative accent, warnings
Light Bg:         #f8fafc (rgb: 248, 250, 252) - Page background
```

### Text & Semantic Colors
```
Text Primary:     #0f172a (rgb: 15, 23, 42)    - Main body text
Text Muted:       #64748b (rgb: 100, 116, 139) - Secondary text, captions
Border:           #e2e8f0 (rgb: 226, 232, 240) - Dividers, borders
Success Green:    #22c55e (rgb: 34, 197, 94)   - Confirmations, positive
Warning Yellow:   #eab308 (rgb: 234, 179, 8)   - Cautions, info
Error Red:        #ef4444 (rgb: 239, 68, 68)   - Errors, destructive
```

### Neutral Scale
```
White:            #ffffff
Slate 50:         #f8fafc (near-white)
Slate 100:        #f1f5f9
Slate 200:        #e2e8f0
Slate 300:        #cbd5e1
Slate 400:        #94a3b8
Slate 500:        #64748b
Slate 600:        #475569
Slate 700:        #334155
Slate 800:        #1e293b
Slate 900:        #0f172a (near-black)
Black:            #000000
```

### Usage Rules
- **Navy (#1e3a8a):** Page titles, section headers, CTA buttons, active states
- **Cyan (#0ea5e9):** Hover states, focus rings, loading indicators, progress bars
- **Orange (#f97316):** Alternate CTA, alerts requiring attention, badges
- **Light Bg (#f8fafc):** Page/card backgrounds (neutral, professional)
- **Text Primary:** Body copy, form labels, all readable text
- **Text Muted:** Helper text, timestamps, secondary info
- **Success/Warning/Error:** Only for status messages (form validation, alerts)

### Contrast Requirements
- All text: WCAG AA minimum (4.5:1 for small text, 3:1 for large)
- Navy on white: ✅ Pass (contrast 8.5:1)
- Navy on light bg: ✅ Pass (contrast 6.8:1)
- Cyan on white: ⚠️ Marginal (contrast 3:1) - use only for highlights, not body text
- Navy text on cyan bg: ❌ Fail (contrast 2.4:1) - never use this combination

---

## 2. Typography

### Font Stack
```css
/* Heading Font */
font-family: 'Inter', 'Helvetica Neue', Arial, system-ui, sans-serif;

/* Body Font */
font-family: 'Open Sans', 'Segoe UI', system-ui, sans-serif;

/* Monospace (for code, if needed) */
font-family: 'JetBrains Mono', 'Courier New', monospace;
```

### Type Scale

| Use Case | Size | Weight | Line Height | Letter Spacing |
|----------|------|--------|-------------|----------------|
| **Page Title** | 54pt | Bold (700) | 1.2 | -0.02em |
| **Section Header** | 28pt | Semi-bold (600) | 1.3 | -0.01em |
| **Subtitle** | 24pt | Semi-bold (600) | 1.3 | 0 |
| **Heading 3** | 20pt | Semi-bold (600) | 1.4 | 0 |
| **Body Large** | 18pt | Regular (400) | 1.5 | 0 |
| **Body Normal** | 16pt | Regular (400) | 1.6 | 0 |
| **Body Small** | 14pt | Regular (400) | 1.6 | 0.03em |
| **Caption** | 12pt | Regular (400) | 1.5 | 0.04em |
| **Code / Mono** | 14pt | Regular (400) | 1.5 | 0 |

### Weight Usage
```
Bold (700):        Page titles, important headings
Semi-bold (600):   Section headers, strong emphasis, buttons
Regular (400):     Body text, form fields, normal content
```

### Line Height Guidelines
- Headings: 1.2–1.3 (tighter)
- Body: 1.5–1.6 (spacious for readability)
- Lists: 1.6 (breathing room between items)

---

## 3. Spacing & Layout System

### Grid Unit: 8px
All spacing is a multiple of 8px for consistency.

### Common Spacing Values
```
4px    = 0.5 × unit    (minimal, use rare)
8px    = 1 × unit      (tight spacing)
12px   = 1.5 × unit    (small gap)
16px   = 2 × unit      (default gap, margin)
24px   = 3 × unit      (medium spacing)
32px   = 4 × unit      (large spacing)
48px   = 6 × unit      (section separator)
64px   = 8 × unit      (major section break)
```

### Margin & Padding
```
Buttons:           12px vertical, 16px horizontal
Cards:             24px padding (internal)
Sections:          48px vertical gap
Form Fields:       24px gap between inputs
Lists:             16px gap between items
Navigation:        16px horizontal, 12px vertical
```

### Layout Structure
```
Page:
  Header (fixed or sticky): 64px height
  Main Content:
    Side Margin (left/right): 24px (mobile), 40px (desktop)
    Max Width: 1200px (desktop)
  Footer: 64px height (varies)

Card:
  Padding: 24px / 32px
  Border Radius: 8px
  Shadow: Light shadow (2px blur)
  Gap between multiple cards: 16px
```

### Responsive Breakpoints
```
Mobile:     320px - 640px   (full width, single column)
Tablet:     640px - 1024px  (2 columns max)
Desktop:    1024px - 1440px (full design)
Wide:       1440px+         (max-width constraints)
```

### Layout Patterns
```
2-Column (CV Builder):
  Left (Form):   45% width, scrollable
  Right (Preview): 55% width, sticky
  Gap: 32px
  Total max width: 1400px

Grid (Template Gallery):
  3 columns (desktop)
  2 columns (tablet)
  1 column (mobile)
  Gap: 24px
  Card aspect ratio: ~4:5 (vertical)

Stacked (Single Column):
  Max width: 800px
  Centered on page
  Margin: auto
```

---

## 4. Component System

### Button
```
Variants:
  Primary (Navy bg, white text) - main CTAs
  Secondary (outline Navy, Navy text) - less important actions
  Danger (Red bg, white text) - destructive actions
  Ghost (no bg, Navy text) - tertiary actions

States:
  Default:  Navy bg + white text
  Hover:    Navy darker + cyan underline (subtle)
  Focus:    Cyan outline (3px, 2px offset)
  Active:   Navy darker + shadow
  Disabled: Gray bg + muted text, no interaction

Sizing:
  Small:     12px text, 8px v-padding, 12px h-padding
  Default:   16px text, 12px v-padding, 16px h-padding
  Large:     18px text, 16px v-padding, 24px h-padding

Border Radius: 8px
Font Weight: Semi-bold (600)
```

### Input / Form Field
```
Variants:
  Text input
  Email input
  Textarea
  Select dropdown
  Checkbox
  Radio
  Toggle

States:
  Default:    White bg, light gray border (1px)
  Focus:      White bg, cyan border (2px), no outline
  Error:      White bg, red border (2px)
  Disabled:   Light gray bg, muted text, no interaction
  Filled:     Blue text (showing value)

Sizing:
  Height: 40px (default), 48px (large)
  Padding: 12px horizontal, 8px vertical
  Border Radius: 8px
  Font Size: 16px
  Font Weight: Regular (400)

Focus Ring:
  Cyan outline: 3px solid, 2px offset
  Apply on focus, remove on blur
```

### Card
```
Layout:
  Padding: 24px / 32px (inside)
  Border Radius: 8px
  Border: 1px light gray (#e2e8f0)
  Shadow: Light (0 1px 3px rgba(0,0,0,0.1))

Hover (interactive):
  Shadow increases to Medium
  Slight scale up (1.02x)
  Transition: 200ms ease

Background:
  White (#ffffff) on light theme
  Slight gray (#f8fafc) for alternate cards
  Never use primary colors as bg
```

### Modal / Dialog
```
Layout:
  Max width: 500px (default), 700px (large)
  Padding: 32px
  Border Radius: 12px
  Box Shadow: Large (0 10px 25px rgba(0,0,0,0.15))

Overlay:
  Background: rgba(0, 0, 0, 0.5) (semi-transparent black)
  Blur: Optional (backdrop-filter: blur(4px))
  Click outside closes: Yes (optional)

Content:
  Title: 24pt, semi-bold, Navy
  Body text: 16pt, regular, Text Primary
  Buttons: Primary + Secondary (bottom right)
  Close button: X icon (top right, subtle)

Animation:
  Fade in + slight scale: 200ms ease-out
  Fade out + slight scale: 150ms ease-in
```

### Tabs
```
Layout:
  Tabs row: Horizontal, left-aligned
  Gap between tabs: 0 (no gap, butted together)
  Border-bottom on entire row: 1px light gray

Tab States:
  Inactive: Gray text, no underline
  Active: Navy text, cyan underline (3px, full width)
  Hover: Navy text, gray bg (light)

Typography:
  Text: 14pt / 16pt, semi-bold
  Padding: 12px horizontal, 16px vertical
  Transition: Color 200ms, underline 200ms

Indicator:
  Cyan bottom border (3px, full tab width)
  Animated to new tab on click
```

### Navigation (Header)
```
Layout:
  Fixed or sticky position
  Height: 64px
  Background: White with light shadow (bottom)
  Padding: 0 40px (horizontal)
  Display: Flex (space-between)

Logo:
  Size: 32px square or 120px wide
  Margin right: auto
  Font: Navy, semi-bold, 20pt

Menu Items:
  Spacing: 32px horizontal gap
  Font: 16pt, regular, Text Primary
  Hover: Navy text + cyan underline
  Active: Navy text + cyan underline (persistent)

Mobile (< 640px):
  Hamburger menu icon (3 lines)
  Menu items hidden (open on click)
  Dropdown menu overlay
```

### Loading State
```
Spinner:
  Size: 24px (small), 40px (large)
  Color: Cyan (#0ea5e9)
  Animation: Rotate 360° in 1s (infinite)
  Background: Optional light gray ring (transparent center)

Loading Text:
  Text: "Loading...", "Saving...", etc
  Margin left of spinner: 12px
  Font: 14pt, regular, Text Muted
```

### Toast / Notification
```
Layout:
  Position: Bottom right (or top)
  Margin: 16px from edge
  Width: 320px max
  Padding: 16px
  Border Radius: 8px
  Box Shadow: Medium

Variants:
  Success: Green bg (#22c55e), white text
  Error: Red bg (#ef4444), white text
  Warning: Orange bg (#f97316), white text
  Info: Cyan bg (#0ea5e9), white text

Animation:
  Slide in from right: 200ms ease-out
  Auto-dismiss after 4s (optional)
  Fade out: 200ms ease-in

Close:
  X button (top right), optional
  Click to dismiss
```

---

## 5. Interaction & Motion

### Transition Timing
```
Quick:     150ms (hover effects, color changes)
Normal:    200ms (expand/collapse, modal fade)
Slow:      300ms (page transitions, large animations)

Easing:
  Default:   ease-in-out
  Entrance:  ease-out
  Exit:      ease-in
```

### Focus States
```
All interactive elements must have visible focus ring:
  Outline: 3px solid cyan (#0ea5e9)
  Offset: 2px from element
  Border Radius: Match element radius
  Animation: No animation (instant)
  Remove on blur: Yes
```

### Hover States
```
Buttons:      Darken bg slightly, add subtle shadow
Links:        Underline + color change (Navy → Cyan)
Cards:        Lift shadow, slight scale (1.02x)
Inputs:       Border color → Cyan, bg light gray
Icons:        Color → Cyan, scale 1.1x (optional)

Duration: 150ms ease-out
Mobile: No hover (use active/pressed instead)
```

### Responsive Behavior
```
Mobile (< 640px):
  Font sizes: -2pt (body), -4pt (titles)
  Padding: -8px (cards, buttons)
  Margins: -8px (sections)
  Max width: 100% (full screen)
  Columns: 1 column max

Tablet (640px - 1024px):
  Font sizes: Normal
  Padding: Normal
  Columns: 2 columns max

Desktop (1024px+):
  Full design applied
```

---

## 6. Dark Mode (Future)

### Dark Palette (TBD)
```
Background Dark:   #0f172a (very dark)
Card Dark:         #1e293b (slightly lighter)
Text Light:        #f8fafc (near-white)
Text Muted Light:  #cbd5e1 (light gray)
Primary (Navy):    Keep same (#1e3a8a) - still works on dark
Accent (Cyan):     Keep same (#0ea5e9) - higher contrast on dark
```

**Status:** Design dark mode in v1.1+  
**Note:** All components must support light mode first

---

## 7. Accessibility (WCAG AA)

### Color Contrast
- All text: Minimum 4.5:1 (large text 3:1)
- Text on bg: Test with contrast checker
- Links: Underline + color (not color alone)
- Disabled: Visual indicator (not color alone)

### Typography
- Minimum 14pt for body (12pt minimum for captions)
- Line height: 1.5+ for body text
- Letter spacing: 0.04em+ for headings

### Interactive Elements
- Minimum 44px × 44px hit target (mobile)
- 24px minimum for desktop
- Keyboard navigation required
- Tab order logical (top to bottom, left to right)
- Focus ring visible on all interactive elements

### Forms
- Labels associated with inputs (`<label for="">`)
- Error messages linked to inputs (`aria-describedby`)
- Required fields marked (`required` attribute + visual indicator)
- Validation feedback immediate (on blur)

### Images
- All images have alt text (or aria-label)
- Decorative images: `aria-hidden="true"` or empty alt
- Infographics: Detailed description nearby

### Testing
- Manual keyboard navigation (Tab, Shift+Tab, Enter, Escape)
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Contrast checker: WebAIM, Stark plugin
- Lighthouse accessibility audit

---

## 8. Design Do's & Don'ts

### ✅ Do
- Use Navy for titles & primary elements
- Stack spacing in 8px multiples
- Keep cards simple with light shadows
- Use Cyan for interactive states (hover, focus)
- Maintain consistent padding & margins
- Test all components at multiple sizes
- Use full-width sections on mobile
- Provide clear focus rings (keyboard users)

### ❌ Don't
- Mix multiple accent colors (stick to Navy + Cyan + Orange)
- Use small fonts (< 14pt for body)
- Layer too many shadows (max 1-2 per element)
- Forget about mobile (design mobile-first)
- Use color alone to convey status
- Add animations just for decoration
- Over-decorate (keep it minimal & professional)
- Forget accessibility (it's a requirement, not nice-to-have)

---

## 9. Component Checklist (for Cici)

- [ ] Button (all variants + states)
- [ ] Input (all types + states)
- [ ] Card (default + hover)
- [ ] Modal (with overlay + animations)
- [ ] Tabs (with active indicator)
- [ ] Navigation header (desktop + mobile)
- [ ] Loading spinner
- [ ] Toast notifications
- [ ] Form group (label + input + error)
- [ ] Dropdown / Select
- [ ] Checkbox / Radio
- [ ] Toggle switch
- [ ] Badge / Tag
- [ ] Breadcrumb
- [ ] Pagination
- [ ] Avatar
- [ ] Empty state
- [ ] Error state

---

## 10. Implementation Guide (for Cici)

### Tailwind Setup
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      navy: '#1e3a8a',
      cyan: '#0ea5e9',
      orange: '#f97316',
      // ... rest of palette
    },
    spacing: {
      // Use 8px grid
    },
    fontSize: {
      // Use type scale above
    },
  },
}
```

### CSS Variables (Alternative)
```css
:root {
  --color-navy: #1e3a8a;
  --color-cyan: #0ea5e9;
  --spacing-unit: 8px;
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Open Sans', sans-serif;
}

body {
  font-family: var(--font-body);
  color: var(--color-text-primary);
  background: var(--color-bg-light);
}
```

### Component Example (Button)
```jsx
// Button.jsx
export function Button({ 
  variant = 'primary', 
  size = 'default', 
  children,
  ...props 
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200';
  const variants = {
    primary: 'bg-navy text-white hover:bg-blue-900',
    secondary: 'border-2 border-navy text-navy hover:bg-slate-50',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };
  const sizes = {
    small: 'text-sm px-3 py-2',
    default: 'text-base px-4 py-3',
    large: 'text-lg px-6 py-4',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

---

## 11. Brand Voice (Optional, for AI Copy)

- **Tone:** Professional, clear, helpful (not corporate-jargon)
- **Language:** Simple, direct (avoid "leverage", "synergize")
- **Perspective:** Second person ("You" not "Users")
- **Energy:** Supportive, not pushy

Example:
- ✅ "Generate professional experience descriptions in seconds"
- ❌ "Leverage AI-driven synergistic copywriting systems"

---

## References

- Figma Design System: [Link - TBD]
- Component Storybook: [Link - TBD]
- Brand Guidelines: [Link - TBD]
- WCAG 2.1 AA Standard: https://www.w3.org/WAI/WCAG21/quickref/
- Tailwind CSS Docs: https://tailwindcss.com/docs

---

**Last Review:** 2026-10-31  
**Next Review:** Weekly (Mondays)  
**Owner:** Anggrea (with Cici feedback loop)
