# Design Brief

## Direction

Kalaimathi R's Tech-Designer Portfolio — A premium, recruiter-focused showcase of product design expertise and technical capabilities through glassmorphic interfaces and animated bento grids.

## Tone

Bold modern with electric accents — confident, tech-forward minimalism that commands attention without sacrificing clarity or professionalism.

## Differentiation

Glassmorphism cards with animated gradient text and scroll-triggered stagger animations create an immediately recognizable premium tech portfolio that demonstrates both design and development prowess.

## Color Palette

| Token              | OKLCH             | Role                      |
| ------------------ | ----------------- | ------------------------- |
| background         | 0.12 0.008 270    | Deep charcoal canvas      |
| foreground         | 0.95 0.01 270    | White text                |
| primary            | 0.68 0.22 270    | Electric blue CTA         |
| secondary          | 0.58 0.24 300    | Vivid purple accent       |
| accent             | 0.72 0.2 190     | Cyan highlights           |
| card               | 0.16 0.01 270    | Frosted surface           |
| border             | 0.24 0.012 270   | Subtle dividers           |

## Typography

- Display: Space Grotesk — futuristic, geometric, tech-optimized headings
- Body: General Sans — clean, modern, highly legible paragraphs and UI labels
- Mono: JetBrains Mono — code snippets and technical details
- Scale: hero `text-6xl md:text-7xl font-bold`, h2 `text-3xl md:text-5xl`, labels `text-xs uppercase tracking-widest`, body `text-base`

## Elevation & Depth

Glassmorphism hierarchy: frosted glass cards (rgba 0.05) with subtle 10px blur and 1px semi-transparent borders create floating surfaces; elevated shadows (0 8px 24px) add depth without harshness; glow accents (0 0 20px rgba blue 0.2) highlight interactive elements.

## Structural Zones

| Zone    | Background              | Border                    | Notes                          |
| ------- | ----------------------- | ------------------------- | ------------------------------ |
| Header  | primary/gradient blend  | accent glow effect        | Hero name with gradient text   |
| Content | background solid        | card borders semi-opaque  | Alternating glass card rows    |
| Footer  | card/muted blend        | border subtle             | Contact links, minimal styling |

## Spacing & Rhythm

Spacious density with 32px section gaps; cards use 20-24px internal padding; micro-spacing 8px for text groups; loose rhythm emphasizes premium feel and recruiter readability.

## Component Patterns

- Buttons: primary (electric blue) with opacity hover, rounded-lg, 12px padding, glass-card on secondary
- Cards: glass-card class, rounded-lg, border semi-transparent, shadow-elevated hover, scale-in entrance
- Badges: secondary color background, smaller radius, text-xs weight-500, inline spacing 4px

## Motion

- Entrance: fade-in + slide-up (20px offset) 0.6s ease-out, staggered children 100ms delay
- Hover: scale(1.02) + shadow-elevated 0.3s ease-out, primary text lightens 5% L
- Decorative: gradient text pulse subtle, animated grid lines subtle fade loop

## Constraints

- No raw hex or RGB colors; OKLCH only
- Gradient text limited to hero and accent headings; avoid overuse
- Glass blur max 10px to maintain text legibility
- Animations max 0.6s entrance; 0.3s interaction

## Signature Detail

Animated gradient text on the hero name (electric blue to purple) combined with glassmorphic cards on deep charcoal creates a premium tech-designer aesthetic uniquely positioned between product elegance and technical credibility.
