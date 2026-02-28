# Image Sources for ViralOrbit Landing Page

## Required Images

### Hero Section
**File:** `frontend/assets/images/hero.png`
- **Type:** Social media analytics dashboard mockup
- **Style:** Modern, clean UI with purple/blue accent colors
- **Dimensions:** 1200x800px (recommended)
- **Sources:**
  - [Unsplash - Dashboard Mockups](https://unsplash.com/s/photos/dashboard-mockup)
  - [Pexels - Analytics Dashboard](https://www.pexels.com/search/analytics%20dashboard/)
  - [Rawpixel - Dashboard Analytics](https://www.rawpixel.com/search/dashboards%20analytics)
  - Create your own using Figma/Canva with charts and graphs

### User Avatars (Testimonials)
**Files:** 
- `frontend/assets/images/user1.png`
- `frontend/assets/images/user2.png`
- `frontend/assets/images/user3.png`

- **Type:** Professional headshots or avatar illustrations
- **Style:** Circular, diverse, friendly
- **Dimensions:** 200x200px (will be displayed at 50x50px)
- **Sources:**
  - [UI Faces](https://uifaces.co/) - Free avatar collection
  - [This Person Does Not Exist](https://thispersondoesnotexist.com/) - AI-generated faces
  - [Unsplash - Portrait](https://unsplash.com/s/photos/portrait)
  - [Avatar Placeholder](https://i.pravatar.cc/200) - Random avatars

### Social Media Icons
**Files in:** `frontend/assets/icons/`

#### Platform Icons (32x32px)
- `instagram.png` - Instagram logo
- `tiktok.png` - TikTok logo
- `youtube.png` - YouTube logo
- `twitter.png` - Twitter/X logo

**Sources:**
- [Simple Icons](https://simpleicons.org/) - SVG brand icons
- [Icons8](https://icons8.com/icons/set/social-media) - Free social media icons
- [Flaticon](https://www.flaticon.com/packs/social-media-logos) - Social media icon packs
- Official brand resources (ensure proper usage rights)

#### Feature Icons (48x48px)
- `analytics.png` - Chart/graph icon
- `automation.png` - Gear/robot icon
- `targeting.png` - Target/bullseye icon
- `content.png` - Calendar/document icon
- `engagement.png` - Heart/like icon
- `reporting.png` - Report/document icon

**Sources:**
- [Heroicons](https://heroicons.com/) - Free MIT-licensed icons
- [Feather Icons](https://feathericons.com/) - Simple, beautiful icons
- [Phosphor Icons](https://phosphoricons.com/) - Flexible icon family
- [Iconoir](https://iconoir.com/) - Open-source icon library

## Quick Setup with Placeholder Services

### Option 1: Use Placeholder Image Services (Temporary)

Replace image paths in `index.html` with these URLs:

```html
<!-- Hero Dashboard -->
<img src="https://placehold.co/1200x800/EEF2FF/4F46E5?text=Dashboard+Preview" alt="Hero Dashboard">

<!-- User Avatars -->
<img src="https://i.pravatar.cc/200?img=1" alt="User 1">
<img src="https://i.pravatar.cc/200?img=2" alt="User 2">
<img src="https://i.pravatar.cc/200?img=3" alt="User 3">

<!-- Icons -->
<img src="https://placehold.co/48x48/4F46E5/FFFFFF?text=📊" alt="Analytics">
<img src="https://placehold.co/48x48/7C3AED/FFFFFF?text=⚙️" alt="Automation">
```

### Option 2: Create Custom Images

#### Dashboard Mockup (Recommended)
1. Use Figma or Canva
2. Create a dashboard with:
   - Bar charts showing growth
   - Line graphs with upward trends
   - Stat cards (followers, engagement, etc.)
   - Purple/blue color scheme (#4F46E5, #7C3AED)
   - Light background (#F8FAFC)
3. Export as PNG at 2x resolution (2400x1600px)

#### Icon Set
1. Download from [Heroicons](https://heroicons.com/)
2. Choose outline style
3. Export as SVG or PNG
4. Color: #4F46E5 (purple)
5. Size: 48x48px

## Free Stock Photo Sites

- **Unsplash** - https://unsplash.com/ (Free, high-quality)
- **Pexels** - https://www.pexels.com/ (Free, no attribution)
- **Pixabay** - https://pixabay.com/ (Free, public domain)
- **Rawpixel** - https://www.rawpixel.com/ (Free & premium)

## Icon Resources

- **Heroicons** - https://heroicons.com/ (MIT License)
- **Feather Icons** - https://feathericons.com/ (MIT License)
- **Phosphor Icons** - https://phosphoricons.com/ (MIT License)
- **Iconoir** - https://iconoir.com/ (MIT License)
- **Simple Icons** - https://simpleicons.org/ (CC0 License)

## Design Tools

- **Figma** - https://figma.com (Free tier available)
- **Canva** - https://canva.com (Free tier available)
- **Photopea** - https://photopea.com (Free, browser-based)

## Color Palette Reference

Use these colors when creating/editing images:

- **Primary Purple:** #4F46E5
- **Secondary Purple:** #7C3AED
- **Light Purple:** #EEF2FF
- **Pink:** #EC4899
- **Orange:** #F97316
- **Background:** #F8FAFC
- **Text Dark:** #0F172A
- **Text Muted:** #64748B

## Quick Start Script

Run this to create placeholder images using ImageMagick (if installed):

```bash
# Create placeholder hero image
convert -size 1200x800 xc:#EEF2FF -pointsize 72 -fill #4F46E5 -gravity center -annotate +0+0 "Dashboard" frontend/assets/images/hero.png

# Create user avatars
convert -size 200x200 xc:#4F46E5 -fill white -pointsize 100 -gravity center -annotate +0+0 "S" frontend/assets/images/user1.png
convert -size 200x200 xc:#7C3AED -fill white -pointsize 100 -gravity center -annotate +0+0 "M" frontend/assets/images/user2.png
convert -size 200x200 xc:#EC4899 -fill white -pointsize 100 -gravity center -annotate +0+0 "E" frontend/assets/images/user3.png
```

## Attribution

When using images from free sources, always:
1. Check the license requirements
2. Provide attribution if required
3. Don't use for trademark/logo purposes without permission
4. Respect usage restrictions

## Notes

- All images should be optimized for web (compressed)
- Use PNG for transparency, JPG for photos
- Consider using WebP format for better compression
- Provide 2x versions for retina displays
- Add alt text for accessibility
