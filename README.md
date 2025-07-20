# Tech Thoughts

A simple, markdown-based tech knowledge sharing platform by Harry Park. Powered by GitHub Pages - write posts in Markdown, commit to GitHub, and they're automatically published!

## 🚀 Features

- **Markdown-based** - Write posts in simple Markdown format
- **GitHub Pages hosting** - Free, reliable hosting
- **Responsive design** - Looks great on desktop and mobile
- **Tag support** - Organize posts with tags
- **Automatic sorting** - Posts are sorted by date (newest first)
- **No build process** - Pure HTML, CSS, and JavaScript

## 📝 How to Add New Posts

1. **Create a new markdown file** in the `posts/` directory
   - Use the naming convention: `YYYY-MM-DD-post-title.md`
   - Example: `2025-01-21-my-new-post.md`

2. **Write your post** in Markdown format
   ```markdown
   # Your Post Title
   
   Your content here...
   ```

3. **Update the posts index** by adding an entry to `posts/index.json`:
   ```json
   {
     "title": "Your Post Title",
     "file": "2025-01-21-my-new-post.md",
     "date": "2025-01-21",
     "tags": ["tag1", "tag2"]
   }
   ```

4. **Commit and push** to GitHub - your post will be live!

## 📁 Project Structure

```
├── index.html          # Main page
├── styles.css          # Styling
├── script.js           # JavaScript functionality
├── posts/              # Blog posts directory
│   ├── index.json      # Posts index file
│   └── *.md           # Individual markdown posts
└── README.md          # This file
```

## 🎨 Customization

### Changing the Site Title
Edit the `<title>` and `<h1>` tags in `index.html`.

### Modifying Styles
Edit `styles.css` to customize colors, fonts, and layout.

### Adding Features
Modify `script.js` to add new functionality like search, categories, or pagination.

## 🔧 Local Development

To test locally, you can use any local web server. For example:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📋 Post Format Example

```markdown
# My Awesome Post

This is the introduction to my post.

## Section Header

Some content with **bold** and *italic* text.

- List item 1
- List item 2

> This is a blockquote

```code
Some code here
```

[Link to somewhere](https://example.com)
```

## 🏷️ Tags

Tags are optional but help organize your content. Add them to the `posts/index.json` file:

```json
"tags": ["web-development", "javascript", "tutorial"]
```

## 📱 Mobile Friendly

The design is fully responsive and works great on mobile devices.

## 🚀 Deployment

This site is designed to work with GitHub Pages out of the box. Just:

1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `https://yourusername.github.io/repository-name`

## 📄 License

This project is open source. Feel free to use it as a template for your own microblog!

---

Happy blogging! ✨
