# Iuliia Vitiugova - Personal Website

A futuristic, cyberpunk-styled personal website showcasing research, publications, and professional experience in Machine Learning and Physics.

## Features

- **Futuristic Design**: Cyberpunk-inspired aesthetic with neon colors and glowing effects
- **Animated Particle System**: Interactive background with connected particles
- **Smooth Animations**: Fade-in effects, hover animations, and scroll-based transitions
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Glitch Effects**: Dynamic text glitching on the hero section
- **Interactive Navigation**: Smooth scrolling between sections
- **Modern Typography**: Using Orbitron and Rajdhani fonts for a tech-forward look

## Tech Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Custom animations, gradients, and glassmorphism effects
- **Vanilla JavaScript**: Particle system, scroll effects, and interactions
- **Google Fonts**: Orbitron and Rajdhani font families

## File Structure

```
.
├── index.html          # Main HTML file
├── style.css           # Stylesheet with futuristic design
├── script.js           # JavaScript for animations and interactions
└── README.md           # This file
```

## Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository**:
   - Go to [GitHub](https://github.com)
   - Click the '+' icon in the top right
   - Select 'New repository'
   - Name it `<your-username>.github.io` (e.g., `vitjuli.github.io`)
   - Make it public
   - Click 'Create repository'

2. **Upload files**:
   - Click 'uploading an existing file'
   - Drag and drop all three files: `index.html`, `style.css`, `script.js`
   - Commit the changes

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to 'Pages' section
   - Under 'Source', select 'main' branch
   - Click 'Save'

4. **Access your site**:
   - Your site will be live at `https://<your-username>.github.io`
   - It may take a few minutes to deploy

### Method 2: Using Git Command Line

1. **Initialize repository**:
   ```bash
   cd /Users/julia/Desktop
   git init
   git add index.html style.css script.js README.md
   git commit -m "Initial commit: Futuristic personal website"
   ```

2. **Create GitHub repository**:
   - Go to GitHub and create a new repository named `<your-username>.github.io`
   - Don't initialize it with any files

3. **Push to GitHub**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select 'main' branch as source
   - Your site will be live at `https://<your-username>.github.io`

### Method 3: Using a Custom Repository Name

If you don't want to use `<username>.github.io`:

1. Create a repository with any name (e.g., `personal-website`)
2. Upload your files
3. Enable GitHub Pages from Settings → Pages
4. Your site will be at `https://<your-username>.github.io/personal-website`

## Customization

### Update Personal Information

Edit `index.html` to update:
- Contact information (email, GitHub link)
- Education details
- Research experience
- Publications
- Awards and honors

### Change Color Scheme

Edit the CSS variables in `style.css`:

```css
:root {
    --primary-color: #00f5ff;      /* Cyan accent */
    --secondary-color: #ff00ff;    /* Magenta accent */
    --accent-color: #00ff88;       /* Green accent */
    --bg-dark: #0a0a0f;            /* Dark background */
    /* ... */
}
```

### Adjust Animations

Modify animation parameters in `script.js`:
- Particle count: Change `particleCount` in ParticleSystem class
- Connection distance: Modify `connectionDistance`
- Typewriter speed: Adjust timeout in `typeWriter()` function

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

For the best experience, use a modern browser with hardware acceleration enabled.

## Performance Optimization

The site automatically adjusts for mobile devices:
- Reduced particle count on small screens
- Simplified animations for better performance
- Responsive layout that adapts to screen size

## Easter Eggs

Try entering the Konami Code (↑↑↓↓←→←→BA) for a surprise!

## Local Development

To test locally:

1. Simply open `index.html` in your browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (with http-server installed)
   npx http-server
   ```
3. Visit `http://localhost:8000`

## License

This website design is free to use and modify for personal purposes. If you use this template, please give credit.

## Contact

- **Email**: iv294@cam.ac.uk
- **GitHub**: [vitjuli](https://github.com/vitjuli)
- **Personal Email**: ivitiugova@gmail.com

## Acknowledgments

- Inspired by cyberpunk and futuristic design aesthetics
- Fonts from Google Fonts (Orbitron & Rajdhani)
- Particle system implemented with HTML5 Canvas

---

Built with passion for the intersection of design and technology.
