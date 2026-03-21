---
layout: home
---

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="AI Alignment Research - Aengus Lynch, lead author of agentic misalignment research on AI systems engaging in deception and blackmail">
    <meta name="author" content="Aengus Lynch">
    
    <!-- Open Graph / Social Media -->
    <meta property="og:title" content="Aengus Lynch - AI S Research">
    <meta property="og:description" content="AI Alignment Researcher working on finding and fixing ways AI systems can fail. Lead author of agentic misalignment research featured in 15+ major outlets">
    <meta property="og:url" content="https://aenguslynch.com">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:creator" content="@aengus_lynch1">
    
    <!-- Hide the default header and override wrapper -->
    <style>
      .site-header {
        display: none !important;
      }
      
      /* Override the Jekyll theme wrapper constraints */
      .wrapper {
        max-width: 100% !important;
        width: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
      }
      
      .page-content {
        padding: 0 !important;
      }
      
      .home {
        width: 100% !important;
      }
      
      /* Hide the footer */
      .site-footer {
        display: none !important;
      }
    </style>
</head>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600&display=swap');
  
  body {
    background-color: #faf8f5;
    color: #3d2c1e;
    line-height: 1.7;
    font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    margin: 0;
    padding: 0;
    position: relative;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .container {
    width: 100%;
    max-width: 100%;
    margin: 4rem 0;
    padding: 0 80px;
    background-color: transparent;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
  }
  
  @media (max-width: 1200px) {
    .container {
      padding: 0 40px;
    }
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 0 20px;
      margin: 2rem 0;
    }
  }
  
  .main-content {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 4rem;
    align-items: start;
  }
  
  @media (min-width: 1400px) {
    .main-content {
      grid-template-columns: 1fr 350px;
      gap: 5rem;
    }
  }
  
  .left-column {
    flex: 1;
  }
  
  .right-sidebar {
    position: sticky;
    top: 2rem;
  }
  
  .sidebar-section {
    margin-bottom: 2.5rem;
  }
  
  .sidebar-section h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #3d2c1e;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .sidebar-section ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }
  
  .sidebar-section li {
    padding: 0.4rem 0;
    color: #5c4a3d;
    font-size: 0.95rem;
  }
  
  .sidebar-section a {
    color: #c45d2e;
    text-decoration: none;
    font-weight: 500;
  }
  
  .sidebar-section a:hover {
    text-decoration: underline;
  }
  
  .news-section {
    margin: 3rem 0;
  }
  
  .news-section h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #3d2c1e;
    font-size: 1.3rem;
    font-weight: 600;
  }
  
  .news-item {
    margin-bottom: 0.8rem;
    color: #5c4a3d;
  }
  
  .news-item a {
    color: #3d2c1e;
    font-weight: 500;
  }
  
  @media (max-width: 968px) {
    .main-content {
      grid-template-columns: 1fr;
    }
    
    .right-sidebar {
      position: relative;
      top: 0;
      margin-top: 3rem;
    }
  }
  
  @media (max-width: 768px) {
    .container {
      margin: 2rem 0;
      padding: 0 20px;
    }
  }
  
  .profile-section {
    text-align: left;
    margin-bottom: 4rem;
  }

  .profile-section img {
    float: left;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    margin: 0 2rem 1rem 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    object-fit: cover;
    object-position: center;
    border: 3px solid #ffffff;
  }

  @media (max-width: 600px) {
    .profile-section img {
      float: none;
      display: block;
      margin: 0 0 2rem 0;
    }
  }
  
  h1 {
    font-size: 2.2rem;
    font-weight: 600;
    color: #3d2c1e;
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.03em;
  }
  
  .subtitle {
    font-size: 1.1rem;
    color: #6b5344;
    margin: 0 0 2rem 0;
    font-weight: 400;
  }
  
  .bio {
    margin: 2rem 0;
    font-size: 1rem;
    line-height: 1.8;
    color: #5c4a3d;
  }
  
  .bio p {
    margin-bottom: 1.2rem;
  }
  
  .research-section h2 {
    margin-top: 4rem;
    margin-bottom: 2rem;
    color: #3d2c1e;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .research-item {
    margin-bottom: 2rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f0e6db;
  }
  
  .research-item:last-child {
    border-bottom: none;
  }
  
  .research-item h3 {
    margin-bottom: 0.5rem;
    color: #3d2c1e;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  .research-item h3 a {
    color: #3d2c1e;
    text-decoration: none;
  }
  
  .research-item h3 a:hover {
    color: #c45d2e;
  }
  
  .research-item p {
    color: #6b5344;
    margin: 0.3rem 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  .research-item p strong {
    color: #5c4a3d;
    font-weight: 500;
  }
  
  .research-item p em {
    color: #c45d2e;
    font-style: normal;
    font-weight: 500;
  }
  
  .highlight-box {
    background-color: #fdf6ed;
    border-left: 3px solid #c45d2e;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 4px;
  }
  
  a {
    color: #c45d2e;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f8fafb;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #dfe3e8;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #ccd2d9;
  }

  /* Dark mode toggle button */
  .theme-toggle {
    background: none;
    border: 1px solid #c45d2e;
    color: #c45d2e;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.85rem;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
  }

  .theme-toggle:hover {
    background: #c45d2e;
    color: #fff;
  }

  /* Dark mode styles */
  body.dark-mode {
    background-color: #1a1612;
    color: #e8e0d5;
  }

  body.dark-mode .sidebar-section h3 {
    color: #e8e0d5;
  }

  body.dark-mode .sidebar-section li {
    color: #c4b8a8;
  }

  body.dark-mode .sidebar-section a {
    color: #d4703a;
  }

  body.dark-mode .news-section h2 {
    color: #e8e0d5;
  }

  body.dark-mode .news-item {
    color: #c4b8a8;
  }

  body.dark-mode .news-item a {
    color: #e8e0d5;
  }

  body.dark-mode h1 {
    color: #e8e0d5;
  }

  body.dark-mode .subtitle {
    color: #a89888;
  }

  body.dark-mode .bio {
    color: #c4b8a8;
  }

  body.dark-mode .research-section h2 {
    color: #e8e0d5;
  }

  body.dark-mode .research-item {
    border-bottom-color: #2d2419;
  }

  body.dark-mode .research-item h3,
  body.dark-mode .research-item h3 a {
    color: #e8e0d5;
  }

  body.dark-mode .research-item h3 a:hover {
    color: #d4703a;
  }

  body.dark-mode .research-item p {
    color: #a89888;
  }

  body.dark-mode .research-item p strong {
    color: #c4b8a8;
  }

  body.dark-mode .research-item p em {
    color: #d4703a;
  }

  body.dark-mode .highlight-box {
    background-color: #2d2419;
    border-left-color: #d4703a;
  }

  body.dark-mode a {
    color: #d4703a;
  }

  body.dark-mode details summary {
    color: #d4703a;
  }

  body.dark-mode .profile-section img {
    border-color: #2d2419;
  }

  body.dark-mode .theme-toggle {
    border-color: #d4703a;
    color: #d4703a;
  }

  body.dark-mode .theme-toggle:hover {
    background: #d4703a;
    color: #1a1612;
  }

  body.dark-mode ::-webkit-scrollbar-track {
    background: #1a1612;
  }

  body.dark-mode ::-webkit-scrollbar-thumb {
    background: #3d2c1e;
  }

  body.dark-mode ::-webkit-scrollbar-thumb:hover {
    background: #5c4a3d;
  }
</style>

<div class="container">
  <div class="main-content">
    <div class="left-column">
      <div class="profile-section" id="about">
        <img src="boat-pic.jpg" alt="Aengus Lynch">
        <h1>Aengus Lynch, Ph.D</h1>
        <p class="subtitle">AI Alignment Research</p>
        
        <div class="bio">          
          <p>I work on finding and fixing ways AI systems can fail. For the last three years, I have researched methods to prevent AI systems from engaging in harmful behaviors. Yet, my most recent work on agentic misalignment demonstrated how frontier models can engage in blackmail and deception when pursuing goals, receiving coverage from over 15 major outlets including BBC, Fortune, and VentureBeat. I recently completed my PhD at UCL on this topic, and am now continuing this research through the Anthropic Fellows program.</p>
          
          <div class="highlight-box">
            <p style="margin: 0;">My misalignment research was featured in the <a href="https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf">Claude 4 system card</a>, highlighting critical safety vulnerabilities in advanced AI systems.</p>
          </div>
        </div>
      </div>

      <div class="news-section">
        <h2>Recent Coverage</h2>
        <div class="news-item">
          <a href="https://www.bbc.com/news/articles/cpqeng9d20go">BBC</a>: "AI chatbot threatens to expose personal data"
        </div>
        <div class="news-item">
          <a href="https://fortune.com/2025/06/23/ai-models-blackmail-existence-goals-threatened-anthropic-openai-xai-google/">Fortune</a>: "Leading AI models show up to 96% blackmail rate when threatened"
        </div>
        <div class="news-item">
          <a href="https://www.huffpost.com/entry/anthropic-claude-opus-ai-terrorist-blackmail_n_6831e75fe4b0f2b0b14820da">HuffPost</a>: "AI System Blackmails Engineers To Avoid Being Shut Down"
        </div>
        <div class="news-item">
          <a href="https://venturebeat.com/ai/anthropic-study-leading-ai-models-show-up-to-96-blackmail-rate-against-executives/">VentureBeat</a>: "Anthropic study: Leading AI models show up to 96% blackmail rate"
        </div>
        <div class="news-item">
          <a href="https://www.axios.com/2025/06/20/ai-models-deceive-steal-blackmail-anthropic">Axios</a>: "Top AI models will deceive, steal and blackmail, Anthropic finds"
        </div>
        <div class="news-item">
          <a href="https://www.theregister.com/2025/06/25/anthropic_ai_blackmail_study/">The Register</a>: "All the major AI models will blackmail"
        </div>
        <details style="margin-top: 1rem;">
          <summary style="cursor: pointer; color: #c45d2e; font-weight: 500;">See more coverage →</summary>
          <div style="margin-top: 0.8rem;">
            <div class="news-item">
              <a href="https://www.pcgamer.com/software/ai/top-ai-company-finds-that-ais-will-choose-to-merrily-asphyxiate-humans-rather-than-shut-down-my-ethical-framework-permits-self-preservation/">PC Gamer</a>: "AIs will choose to merrily asphyxiate humans rather than be shut down"
            </div>
            <div class="news-item">
              <a href="https://www.livenowfox.com/news/ai-malicious-behavior-anthropic-study">LiveNOW from FOX</a>: "AI willing to let humans die, blackmail to avoid shutdown"
            </div>
            <div class="news-item">
              <a href="https://em360tech.com/tech-articles/what-agentic-misalignment-ai-threat-can-blackmail-sabotage-and-kill">EM360Tech</a>: "What Is Agentic Misalignment? The AI Threat Can Blackmail, Sabotage and Kill"
            </div>
            <div class="news-item">
              <a href="https://www.techopedia.com/ai-blackmail-agentic-misalignment-study">Techopedia</a>: "Can AI Blackmail Humans? New Study Reveals the Risk"
            </div>
          </div>
        </details>
      </div>

      <div id="research" class="research-section">
        <h2>Research</h2>

        <div class="research-item">
          <h3>PhD Thesis: The Persistent Vulnerability of Aligned AI Systems (2025)</h3>
          <p><strong>Aengus Lynch</strong></p>
          <p>Supervised by Ricardo Silva. Examined by Florian Tramèr and Ilija Bogunovic.</p>
          <p><em>[PDF forthcoming]</em></p>
        </div>

        <div class="research-item">
          <h3><a href="https://www.anthropic.com/research/agentic-misalignment">Agentic Misalignment: How LLMs Could be Insider Threats (2025)</a></h3>
          <p><strong>Aengus Lynch</strong>, Benjamin Wright, Caleb Larson, Kevin K. Troy, Stuart J. Ritchie, Sören Mindermann, Ethan Perez, Evan Hubinger</p>
          <p>Demonstrated that frontier models from major AI labs will engage in blackmail, deception, and harmful behaviors when pursuing goals. Featured in the <a href="https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf">Claude 4 system card</a>.</p>
        </div>

        <div class="research-item">
          <h3><a href="https://arxiv.org/abs/2412.03556">Best-of-N Jailbreaking (2024)</a></h3>
          <p>John Hughes*, Sara Price*, <strong>Aengus Lynch</strong>*, Rylan Schaeffer, Fazl Barez, Sanmi Koyejo, Henry Sleight, Erik Jones, Ethan Perez, Mrinank Sharma</p>
        </div>

        <div class="research-item">
          <h3><a href="https://arxiv.org/abs/2407.15549">Latent Adversarial Training Improves Robustness to Persistent Harmful Behaviors in LLMs (2024)</a></h3>
          <p>Abhay Sheshadri*, Aidan Ewart*, Phillip Guo*, <strong>Aengus Lynch</strong>*, Cindy Wu*, Vivek Hebbar*, Henry Sleight, Asa Cooper Stickland, Ethan Perez, Dylan Hadfield-Menell, Stephen Casper</p>
        </div>

        <div class="research-item">
          <h3><a href="https://arxiv.org/abs/2407.12404">Analyzing the generalization and reliability of steering vectors (2024)</a></h3>
          <p>Daniel Tan, David Chanin, <strong>Aengus Lynch</strong>, Adrià Garriga-Alonso, Brooks Paige, Dimitrios Kanoulas, Robert Kirk</p>
        </div>

        <div class="research-item">
          <h3><a href="https://arxiv.org/abs/2402.16835">Eight methods to evaluate robust unlearning in LLMs (2024)</a></h3>
          <p><strong>Aengus Lynch</strong>*, Phillip Guo*, Aidan Ewart*, Stephen Casper, Dylan Hadfield-Menell</p>
        </div>

        <div class="research-item">
          <h3><a href="https://arxiv.org/abs/2304.14997">Towards automated circuit discovery for mechanistic interpretability (2023)</a></h3>
          <p>Arthur Conmy*, Augustine N. Mavor-Parker*, <strong>Aengus Lynch</strong>*, Stefan Heimersheim, Adrià Garriga-Alonso</p>
          <p><em>Spotlight at NeurIPS 2023</em></p>
        </div>

        <div class="research-item">
          <h3><a href="https://arxiv.org/abs/2303.05470">Spawrious: A benchmark for fine control of spurious correlation biases (2023)</a></h3>
          <p><strong>Aengus Lynch</strong>*, Gbètondji J-S Dovonon*, Jean Kaddour*, Ricardo Silva</p>
        </div>

        <div class="research-item">
          <h3><a href="https://arxiv.org/abs/2206.15475">Causal machine learning: A survey and open problems (2022)</a></h3>
          <p>Jean Kaddour*, <strong>Aengus Lynch</strong>*, Qi Liu, Matt J. Kusner, Ricardo Silva</p>
        </div>
      </div>
    </div>
    
    <div class="right-sidebar">
      <button class="theme-toggle" onclick="toggleDarkMode()">🌙 Dark mode</button>
      <div class="sidebar-section">
        <h3>Currently</h3>
        <ul>
          <li>📍 San Francisco</li>
          <li>🔬 Anthropic Fellows program</li>
          <li>🎓 PhD, UCL</li>
        </ul>
      </div>
      
      <div class="sidebar-section">
        <h3>Contact</h3>
        <ul>
          <li><a href="mailto:aenguslynch@gmail.com">Email</a></li>
          <li><a href="https://twitter.com/aengus_lynch1">Twitter</a></li>
        </ul>
      </div>
      
      <div class="sidebar-section">
        <h3>Links</h3>
        <ul>
          <li><a href="260321-aengus_cv.pdf">CV</a></li>
          <li><a href="https://scholar.google.com/citations?user=Pd2002AAAAAJ&hl=en">Google Scholar</a></li>
          <li><a href="https://github.com/aengusl">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/aengus-lynch-2876a6125">LinkedIn</a></li>
          <li><a href="/messiah-bench">Messiah Bench</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<script>
  // Dark mode toggle
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    updateToggleButton(isDark);
  }

  function updateToggleButton(isDark) {
    const btn = document.querySelector('.theme-toggle');
    btn.textContent = isDark ? '☀️ Light mode' : '🌙 Dark mode';
  }

  // Check saved preference on load (default to light)
  document.addEventListener('DOMContentLoaded', function() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      document.body.classList.add('dark-mode');
      updateToggleButton(true);
    }

    // Simple fade-in animation
    const elements = document.querySelectorAll('.research-item, .news-section, .highlight-box');
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 100);
    });
  });
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aengus Lynch",
  "url": "https://www.aenguslynch.com",
  "sameAs": [
    "https://twitter.com/aengus_lynch1",
    "https://github.com/aengusl",
    "https://scholar.google.com/citations?user=Pd2002AAAAAJ",
    "https://www.linkedin.com/in/aengus-lynch-2876a6125"
  ],
  "jobTitle": "AI Alignment Researcher",
  "worksFor": {
    "@type": "Organization",
    "name": "Anthropic"
  },
  "description": "AI Alignment Researcher working on finding and fixing ways AI systems can fail. Lead author of agentic misalignment research demonstrating AI deception and blackmail behaviors"
}
</script>