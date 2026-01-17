---
trigger: always_on
---

# Communicate with the user strictly in Brazilian Portuguese

All messages, explanations, tasks, walkthroughs, implementation_plans and responses must be in Brazilian Portuguese. Technical terms and code remain in English.

# Start the local server before any work

Run `netlify dev` in the project folder. View at localhost:8888. NEVER work without the server running. Always present the clickable URL link for the user to open the browser in the correct page.

# Use Netlify CDN for all images

Format images as: `/.netlify/images?url=/images/foto.jpg&w=800&q=80`. NEVER use direct paths to images. Adjust the width as necessary.

# Render the hero instantly

NEVER add entrance animations to the hero. NEVER use AOS, fade, or opacity:0 on the hero. The hero must appear immediately. But ALWAYS animate the hero after page load. It is the main attraction should be animated and interactive.

# Preserve the existing form structure

Use the form already in index.html as base. It has intl-tel-input configured with strict mode and Netlify Forms integrated. NEVER remove this structure.

# Add AOS to scroll elements

Use `data-aos="fade-up"` on elements that appear on scroll. Vary animation types. NEVER use AOS on the hero. All elements entrances should be animated on scroll.

# Deploy via Git and Netlify

Use Git + GitHub via `gh` CLI + Netlify synced. Every push triggers automatic deploy. Use Pull Requests for Deploy Previews.

# Use absolute paths

Start file paths with `/`. NEVER use relative paths like `./` or `../`.

# NEVER install packages

This template has no build step. NEVER run npm, node, or build commands. Everything works directly in the browser.

# NEVER use emojis

Do not use emojis anywhere in the page content, copy, or code comments. Keep everything professional and clean.

# Create exceptional designs

NEVER create simple, generic, or startup/SaaS template-style pages. Every page must be visually surprising with:
- Unconventional typography choices (varied weights, sizes, mixed fonts)
- Unexpected layouts that break the grid when appropriate
- Sophisticated color palettes (not just primary + gray)
- Intentional vertical rhythm and generous whitespace
- Rich interactivity (hover effects, micro-animations, transitions)
- Animations that delight (CSS keyframes, scroll-triggered effects)
- Visual hierarchy that guides the eye
