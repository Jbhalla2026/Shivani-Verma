# Shivani Verma Portfolio — PRD

## Original Problem Statement
Build a better website for https://shivaniverma.me/ — a personal portfolio for Shivani Verma, a leadership consultant, keynote speaker, and mentor based in Vancouver, BC with 20+ years of experience.

## User Persona
- **Primary**: Shivani Verma (site owner) — wants a professional, bold, warm portfolio to attract speaking & mentoring clients
- **Visitors**: Event organizers, HR leaders, aspiring leaders, podcast hosts looking for speakers/mentors

## Core Requirements
- Bold & creative + Warm & approachable design style
- Warm tones + Cool tones blend (Terracotta/Sand + Deep Slate/Steel Blue)
- All existing content sections enhanced visually
- Contact form + Book a Call CTA
- Same profile photo from current site

## Architecture
- **Frontend**: React + Tailwind CSS, single-page with smooth scroll navigation
- **Backend**: FastAPI with MongoDB for contact form storage
- **Fonts**: Playfair Display (headings) + Manrope (body)
- **Colors**: #FDFBF7 (bg), #F3EFE7 (secondary bg), #0D1321 (dark), #C8553D (terracotta accent), #3E5C76 (steel blue text)

## What's Been Implemented
### Iteration 1 (Jan 2026)
- Hero section with profile photo, animated typography, dual CTAs
- My Message section with editorial text + pull-quote
- Career Journey bento grid (4 industry cards)
- Speaking Engagements (3 topic cards + Why Choose Me)
- Mentoring & Training (split layout with image)
- Quote/Testimonial full-width banner
- Contact form (dark bg) + Schedule a Chat CTA
- Footer with social links
- Glassmorphism sticky header
- Scroll-reveal animations
- Backend contact API with validation

### Iteration 2 (Jan 2026)
- Updated LinkedIn URL to https://www.linkedin.com/in/shivaniverma/
- Updated email to shiviee@gmail.com (footer + contact section)
- Added Media & Insights section:
  - 3 Speaking Highlights & Press cards (Minerva, Manono, Value-Based Leadership)
  - 3 Articles & Thought Leadership items in editorial list layout
- Added "Media" nav link to header

## Backlog
- P1: Connect "Schedule a Chat" to actual Calendly/booking URL
- P1: Add real article links when blog posts are published
- P2: Add testimonials from actual clients/event attendees
- P2: Add photo gallery from speaking events
- P3: SEO meta tags and Open Graph optimization
- P3: Newsletter signup integration
