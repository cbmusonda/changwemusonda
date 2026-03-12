# Personal Portfolio Website

A modern, responsive personal portfolio website inspired by professional design standards.

## 🎨 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant scroll animations and transitions
- **Clean Layout**: Professional and easy-to-navigate structure
- **Customizable**: Easy to update with your own information

## 📁 File Structure

```
MyWebsite/
├── index.html       # Main HTML file
├── styles.css       # All styling and design
├── script.js        # Interactive JavaScript features
└── README.md        # This file
```

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser by double-clicking it.

### Option 2: Use a Local Server
For the best experience, use a local development server:

```bash
# If you have Python 3 installed:
python3 -m http.server 8000

# If you have Node.js installed:
npx serve

# Then visit: http://localhost:8000
```

## ✏️ Customization Guide

### 1. Personal Information

**Update the following in `index.html`:**

- **Line 7**: Change page title from "Your Name - Portfolio"
- **Line 17**: Replace "Your Name" in the logo/navigation
- **Line 38**: Update main hero title with your name
- **Lines 42-44**: Add your favorite inspirational quote
- **Lines 56-69**: Write your personal story (replace placeholder paragraphs)
- **Lines 73 & 82**: Add your LinkedIn profile URL
- **Lines 80 & 91**: Add your GitHub profile URL
- **Lines 104-124**: Add your portfolio projects
- **Lines 142-146**: Add your education details
- **Lines 151-160**: Add your work experience
- **Lines 166-172**: List your technical skills
- **Line 189**: Add your email address
- **Lines 203, 205-206**: Update footer links and copyright

### 2. Colors & Styling

**Edit `styles.css` (lines 10-16) to change the color scheme:**

```css
--primary-color: #2c3e50;      /* Main dark color */
--secondary-color: #3498db;    /* Accent/link color */
--accent-color: #e74c3c;       /* Highlight color */
```

**Popular color scheme alternatives:**
- **Modern Blue**: `#1a73e8` (primary), `#34a853` (secondary)
- **Professional**: `#1e3a5f` (primary), `#ff6b35` (secondary)
- **Minimalist**: `#2d2d2d` (primary), `#00d4ff` (secondary)

### 3. Hero Background Gradient

**Change the hero section gradient in `styles.css` (line 163):**

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Try these alternatives:**
- **Ocean**: `linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)`
- **Sunset**: `linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 90%)`
- **Forest**: `linear-gradient(135deg, #0F2027 0%, #2C5364 100%)`

### 4. Fonts

The website uses the 'Inter' font from Google Fonts. To change it:

1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your preferred font
3. Replace the font link in `index.html` (lines 9-11)
4. Update `--font-main` in `styles.css` (line 19)

### 5. Add Your Resume

1. Save your resume PDF in the project folder
2. Update the link in `index.html` (line 136):
   ```html
   <a href="resume.pdf" class="btn-primary" download>Download Resume (PDF)</a>
   ```

### 6. Add Portfolio Projects

Replace the placeholder projects in `index.html` (lines 104-124) with your actual projects:

```html
<div class="portfolio-item">
    <div class="portfolio-item-content">
        <h3>Your Project Name</h3>
        <p>Description of what you built, technologies used, and impact.</p>
        <a href="https://github.com/yourname/project" class="btn-link">View Project →</a>
    </div>
</div>
```

## 📱 Sections Overview

1. **Header/Navigation**: Fixed navigation bar with smooth scroll links
2. **Hero Section**: Eye-catching introduction with your name and a quote
3. **My Story**: Your background, education, and journey
4. **Portfolio**: Showcase of your projects
5. **Resume**: Downloadable resume and quick summary
6. **Contact**: Easy ways to get in touch
7. **Footer**: Copyright and social links

## 🎯 Tips for Great Content

### Writing Your Story
- Start with your background and what drives you
- Mention key educational milestones
- Highlight significant projects or achievements
- End with your philosophy or goals

### Portfolio Projects
- Focus on 3-6 of your best projects
- Include specific technologies and your role
- Mention measurable outcomes when possible
- Link to live demos or GitHub repos

### Professional Photo (Optional)
To add a profile photo to your hero section, add this HTML after line 38 in `index.html`:

```html
<img src="your-photo.jpg" alt="Your Name" style="width: 200px; height: 200px; border-radius: 50%; margin-bottom: 2rem;">
```

## 🌐 Deployment

### GitHub Pages (Auto deploy on push to `main`)

This project now includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

Your website URL for your resume is:

`https://cbmusonda.github.io/changwemusonda/`

After each push to `main`, GitHub will automatically redeploy the latest version.

One-time GitHub setting:

1. In your repository, go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

### Deploy to GitHub Pages (Free)
1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Other Free Hosting Options
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free with GitHub account

## 🔧 Browser Support

This website works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## 📞 Need Help?

If you run into any issues:
1. Check that all files are in the same folder
2. Make sure you're viewing through a web browser
3. Check the browser console (F12) for any errors

## 📝 License

Feel free to use this template for your personal website. No attribution required!

---

**Good luck with your portfolio! 🚀**
