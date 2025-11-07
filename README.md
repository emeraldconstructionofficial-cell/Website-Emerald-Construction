# 🏗️ Elite Constructions - Luxury Premium Website

A sophisticated, luxury construction company website inspired by premium design aesthetics like Hera Constructions. Features elegant animations, smooth transitions, and a professional full-page layout perfect for high-end construction businesses.

## ✨ Features

### 🎨 Visual Design
- **Dark Theme**: Deep black (#000000) background with subtle animated grid lines
- **Light Theme Toggle**: Switch between dark and light modes with smooth transitions
- **Premium Typography**: Bebas Neue and Poppins fonts for bold, architectural feel
- **Color Palette**:
  - Background: #000000 (Dark) / #F5F5F5 (Light)
  - Text: #FFFFFF (Dark) / #000000 (Light)
  - Accent Gold: #D4AF37
  - Accent Yellow: #F5B301

### 🌀 Advanced Animations
- **GSAP-Powered**: Smooth, professional animations using GreenSock Animation Platform
- **Scroll-Triggered Effects**: Elements animate on scroll with easing
- **Custom Cursor**: Circular cursor with smooth follow and hover effects
- **Parallax Motion**: Mouse-movement parallax on images
- **Masked Letter Effects**: E, T, and D letter masks revealing architectural images
- **Auto-Sliding Banner**: 5-second auto-advance with smooth transitions

### 🎯 Interactive Elements
- **3 Hero Slides**:
  1. "BUILDERS OF EXCELLENCE" - E mask
  2. "MAKE TRUE YOUR DREAM" - T mask
  3. "WE VALUE YOUR DREAM" - D mask
- **Navigation Controls**:
  - Left/Right arrow buttons
  - Bottom indicators with progress animation
  - Keyboard navigation (←/→ arrows)
  - Auto-pause on hover
- **Custom Cursor**: Expands on hover over interactive elements
- **Smooth Transitions**: Cubic-bezier easing for premium feel

### 🧱 Background Effects
- **Animated Grid**: Subtle moving grid pattern (60px spacing)
- **Noise Texture**: SVG noise overlay for depth
- **Glow Effects**: Radial gradient glow on image hover

### 🖱️ Premium Interactions
- **Cursor Animation**: Smooth delay follow with GSAP
- **Theme Toggle**: Moon/Sun icon with rotation animation
- **WhatsApp Float**: Pulse animation with scale effect
- **Hover States**: All interactive elements have smooth transitions
- **Click Feedback**: Scale animations on button clicks

### 📱 Responsive Design
- **Desktop**: Full parallax and custom cursor
- **Tablet**: Adjusted grid layout, no navigation arrows
- **Mobile**: Hamburger menu, simplified animations, touch-friendly

## 🚀 Technologies

- **HTML5**: Semantic markup
- **CSS3**: Advanced animations, clip-path masks, grid layouts
- **JavaScript ES6+**: Modern syntax and features
- **GSAP 3.12**: Industry-standard animation library
- **ScrollTrigger**: GSAP plugin for scroll-based animations
- **Google Fonts**: Poppins & Bebas Neue

## 📦 File Structure

```
constructions_site/
├── index.html          # Main HTML structure
├── styles.css          # All styles and animations
├── script.js           # GSAP animations and interactions
└── README.md           # Documentation
```

## 🎮 Usage

### Opening the Project
1. Simply open `index.html` in a modern browser
2. Or use a local server for best performance:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve
   ```

### Keyboard Controls
- **←** Previous slide
- **→** Next slide
- **Mouse Move**: Parallax effect on images

### Customization

#### Change Slide Content
Edit the `.hero-slide` sections in `index.html`:
```html
<div class="hero-slide active" data-slide="1">
    <div class="hero-content">
        <h2 class="hero-title">
            <span class="title-line">YOUR TEXT</span>
            <span class="title-line">HERE</span>
        </h2>
    </div>
</div>
```

#### Update Images
Replace image URLs in each slide:
```html
<img src="YOUR_IMAGE_URL" alt="Description" class="hero-image">
```

#### Adjust Colors
Modify CSS variables in `styles.css`:
```css
:root {
    --primary-bg: #000000;
    --accent-gold: #D4AF37;
    --accent-yellow: #F5B301;
}
```

#### Change Auto-Slide Speed
In `script.js`, modify the interval:
```javascript
autoSlideInterval = setInterval(nextSlide, 5000); // 5000ms = 5 seconds
```

#### Customize Letter Masks
Edit clip-path polygons in `styles.css`:
```css
.e-mask {
    clip-path: polygon(/* your coordinates */);
}
```

## 🎨 Letter Mask Templates

### E Mask
Creates a block letter "E" shape

### T Mask
Creates a block letter "T" shape

### D Mask
Creates a block letter "D" shape with rounded right side

## 🔧 Advanced Features

### Performance Optimizations
- Hardware-accelerated animations (`will-change: transform`)
- Lazy-loading images with IntersectionObserver
- Compressed WebP image support
- Reduced motion support for accessibility
- Mobile-optimized animations

### Accessibility
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus states for all buttons
- Semantic HTML structure
- Alt text on all images

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 Additional Notes

### WhatsApp Integration
Update the phone number in `index.html`:
```html
<a href="https://wa.me/YOUR_PHONE_NUMBER" class="whatsapp-float">
```

### Adding More Slides
1. Copy a `.hero-slide` div in HTML
2. Update `data-slide` attribute
3. Add corresponding indicator in `.slide-indicators`
4. Update JavaScript array length checks

### Theme Toggle Persistence
Add this to `script.js` to save theme preference:
```javascript
localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
// On load:
const savedTheme = localStorage.getItem('theme');
```

## 🎯 Performance Tips

1. **Use WebP Images**: Convert images to WebP format for better compression
2. **Optimize Image Sizes**: Serve different sizes for different devices
3. **Preload Critical Assets**: Add `<link rel="preload">` for fonts
4. **Minimize JavaScript**: Remove console.logs in production
5. **Enable Caching**: Set appropriate cache headers

## 🐛 Troubleshooting

### Cursor Not Showing
- Check if device supports mouse events
- Verify `.custom-cursor` element exists
- Custom cursor is hidden on mobile by default

### Animations Not Smooth
- Ensure GSAP CDN is loading properly
- Check browser console for errors
- Verify `will-change` properties aren't overused

### Images Not Loading
- Check image URLs are accessible
- Verify CORS settings if loading from external sources
- Use HTTPS URLs for production

## 📄 License

Free to use for personal and commercial projects.

## 🙏 Credits

- **Design Inspiration**: Hera Constructions
- **Animations**: GSAP (GreenSock)
- **Fonts**: Google Fonts
- **Images**: Unsplash (replace with your own)

## 📞 Support

For questions or issues, please refer to the inline code comments or GSAP documentation.

---

**Built with ❤️ for premium construction websites**
