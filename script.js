// Configuration
const POSTS_DIR = 'posts/';
const POSTS_INDEX = 'posts/index.json';

// Initialize the blog when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadBlogPosts();
});

// Load and display blog posts
async function loadBlogPosts() {
    const postsContainer = document.getElementById('blog-posts');
    postsContainer.innerHTML = '<div class="loading">Loading posts...</div>';

    try {
        // Load the posts index
        const response = await fetch(POSTS_INDEX);
        if (!response.ok) {
            throw new Error('Could not load posts index');
        }
        
        const postsIndex = await response.json();
        
        // Sort posts by date (newest first)
        postsIndex.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Clear loading message
        postsContainer.innerHTML = '';
        
        // Load and display each post
        for (const postInfo of postsIndex) {
            await loadAndDisplayPost(postInfo, postsContainer);
        }
        
        if (postsIndex.length === 0) {
            postsContainer.innerHTML = '<div class="loading">No posts found. Create your first post!</div>';
        }
        
    } catch (error) {
        console.error('Error loading posts:', error);
        postsContainer.innerHTML = `
            <div class="error">
                <strong>Error loading posts:</strong> ${error.message}
                <br><br>
                Make sure you have created a <code>posts/index.json</code> file with your post information.
            </div>
        `;
    }
}

// Load and display a single post
async function loadAndDisplayPost(postInfo, container) {
    try {
        const response = await fetch(POSTS_DIR + postInfo.file);
        if (!response.ok) {
            throw new Error(`Could not load post: ${postInfo.file}`);
        }
        
        const markdownContent = await response.text();
        const htmlContent = marked.parse(markdownContent);
        
        // Create post element
        const postElement = document.createElement('article');
        postElement.className = 'blog-post';
        
        // Add post metadata
        const metaElement = document.createElement('div');
        metaElement.className = 'post-meta';
        metaElement.innerHTML = `
            <strong>${postInfo.title}</strong> • 
            <time datetime="${postInfo.date}">${formatDate(postInfo.date)}</time>
            ${postInfo.tags ? ' • Tags: ' + postInfo.tags.join(', ') : ''}
        `;
        
        // Add post content
        const contentElement = document.createElement('div');
        contentElement.innerHTML = htmlContent;
        
        postElement.appendChild(metaElement);
        postElement.appendChild(contentElement);
        container.appendChild(postElement);
        
    } catch (error) {
        console.error('Error loading post:', postInfo.file, error);
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.innerHTML = `<strong>Error loading post:</strong> ${postInfo.file} - ${error.message}`;
        container.appendChild(errorElement);
    }
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
