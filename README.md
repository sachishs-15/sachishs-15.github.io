# Personal Profile Website

A modern, responsive profile website built with HTML, CSS, and JavaScript to showcase your experience, projects, and publications.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: 
  - Smooth scrolling navigation
  - Project filtering system
  - Contact form with validation
  - Mobile-friendly hamburger menu
- **Sections**:
  - Hero section with introduction
  - About section with skills
  - Experience timeline
  - Projects showcase with filtering
  - Publications list
  - Contact form and social links

## Getting Started

### Prerequisites
- A modern web browser
- A text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone or download** this repository to your local machine
2. **Open the project folder** in your preferred text editor
3. **Open `index.html`** in your web browser to view the website

### Local Development

For the best development experience, you can use a local server:

#### Option 1: Using Python (if installed)
```bash
# Navigate to the project directory
cd "Personal Website"

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option 2: Using Node.js (if installed)
```bash
# Install a simple server globally
npm install -g http-server

# Navigate to the project directory
cd "Personal Website"

# Start the server
http-server
```

#### Option 3: Using VS Code Live Server Extension
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

Then open your browser and go to `http://localhost:8000` (or the port shown in your terminal).

## Customization

### Personal Information

1. **Update the name**: Replace "Sachish" throughout the files with your name
2. **Update contact information** in the contact section:
   - Email address
   - Phone number
   - Location
   - Social media links

### Content Updates

#### Experience Section
Edit the experience timeline in `index.html`:
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <h4>Company Name</h4>
        <span class="timeline-date">Start Date - End Date</span>
        <p>Job description...</p>
        <ul>
            <li>Key achievement 1</li>
            <li>Key achievement 2</li>
        </ul>
    </div>
</div>
```

#### Projects Section
Add your projects in the projects grid:
```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <i class="fas fa-globe"></i>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
        </div>
    </div>
</div>
```

#### Publications Section
Add your publications:
```html
<div class="publication-item">
    <div class="publication-year">2024</div>
    <div class="publication-content">
        <h3>Publication Title</h3>
        <p class="publication-authors">Your Name, Co-author</p>
        <p class="publication-venue">Journal/Conference Name</p>
        <p class="publication-abstract">Abstract text...</p>
        <div class="publication-links">
            <a href="#" class="publication-link"><i class="fas fa-file-pdf"></i> PDF</a>
        </div>
    </div>
</div>
```

### Styling Customization

#### Colors
The main color scheme can be changed in `styles.css`:
- Primary blue: `#2563eb`
- Accent yellow: `#fbbf24`
- Text colors: `#1f2937`, `#4b5563`, `#6b7280`

#### Fonts
Change the font family in the CSS:
```css
body {
    font-family: 'Your-Font', sans-serif;
}
```

### Adding Images

1. Create an `images` folder in your project directory
2. Add your profile picture and project images
3. Update the image sources in the HTML

## File Structure

```
Personal Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload your files
3. Go to repository Settings > Pages
4. Select source branch and folder
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Your site will be deployed automatically
3. You can connect a custom domain

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## Features in Detail

### Responsive Navigation
- Fixed header with smooth background transition
- Mobile hamburger menu
- Active section highlighting

### Animations
- Fade-in animations on scroll
- Hover effects on interactive elements
- Smooth transitions throughout

### Project Filtering
- Filter projects by category (Web, Mobile, Research)
- Smooth animations when switching filters

### Contact Form
- Client-side validation
- Simulated form submission
- Responsive design

## Customization Tips

1. **Keep it updated**: Regularly update your experience, projects, and publications
2. **Use high-quality images**: Optimize images for web use
3. **Test on mobile**: Always test your changes on mobile devices
4. **Performance**: Keep file sizes small for faster loading
5. **SEO**: Add meta tags and descriptions for better search engine visibility

## Support

If you need help customizing your website:
1. Check the HTML comments for guidance
2. Use browser developer tools to inspect elements
3. Refer to the CSS classes for styling
4. Test changes in a local environment first

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding!** 🚀
