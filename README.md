# Personal Website

This repository contains my personal website, hosted at [aenguslynch.com](https://aenguslynch.com).

## Setup Details

### Repository Configuration
- Repository name: `aengusl.github.io`
- Hosting: GitHub Pages
- Custom domain: aenguslynch.com

### Technical Stack
- Static site generator: Jekyll
- Theme: Minima
- Ruby dependencies managed via Bundler

### Domain Configuration
The site is configured to use a custom domain (aenguslynch.com) with GitHub Pages:

1. **DNS Configuration** (GoDaddy)
   - A Records pointing to GitHub Pages IPs:
     ```
     A     @     185.199.108.153
     A     @     185.199.109.153
     A     @     185.199.110.153
     A     @     185.199.111.153
     ```
   - CNAME Record:
     ```
     CNAME www   aengusl.github.io.
     ```

2. **GitHub Pages Settings**
   - Custom domain set to: aenguslynch.com
   - HTTPS enforced
   - Built from main branch

### Local Development
To run the site locally:

```bash
bundle install
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

### Deployment
- Push changes to the main branch
- GitHub Actions automatically builds and deploys the site
- Changes are typically live within a few minutes

### File Structure
- `_config.yml`: Site configuration
- `index.markdown`: Main page content
- `Gemfile`: Ruby dependencies
- `_posts/`: Blog posts (if any)
- `assets/`: Static files

## License
MIT License - See LICENSE file for details
