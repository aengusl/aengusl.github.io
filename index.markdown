---
layout: home
---

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="PhD candidate at UCL working on AI safety">
    <meta name="author" content="Aengus Lynch">
    
    <!-- Open Graph / Social Media -->
    <meta property="og:title" content="AI Safety Research">
    <meta property="og:description" content="PhD candidate at UCL working on AI safety">
    <meta property="og:url" content="https://aenguslynch.com">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:creator" content="@aengus_lynch1">
    
    <!-- Hide the default header -->
    <style>
      .site-header {
        display: none !important;
      }
    </style>
</head>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
  
  body {
    background-color: #fafafa;
    color: #2c3e50;
    line-height: 1.7;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    margin: 0;
    padding: 0;
    position: relative;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .page-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
    position: relative;
    padding: 0 20px;
  }
  
  .contents-toggle {
    position: fixed;
    top: 30px;
    left: 30px;
    width: 42px;
    height: 42px;
    background-color: #ffffff;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 11;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border: 1px solid #eef1f5;
    transition: all 0.2s ease;
  }
  
  .contents-toggle:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
  
  .contents-toggle svg {
    width: 20px;
    height: 20px;
    fill: #667892;
  }
  
  .sidebar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    pointer-events: none;
    z-index: 10;
    display: none;
  }
  
  .sidebar-wrapper.active {
    display: block;
  }
  
  .sidebar {
    position: absolute;
    top: 3rem;
    left: 30px;
    width: 240px;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    max-height: calc(100vh - 6rem);
    overflow-y: auto;
    border: 1px solid #eef1f5;
    font-size: 0.95rem;
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: auto;
  }
  
  .sidebar-wrapper.active .sidebar {
    opacity: 1;
    transform: translateX(0);
  }
  
  .sidebar-wrapper.fading .sidebar {
    opacity: 0;
    transform: translateX(-10px);
  }
  
  .sidebar-link {
    display: block;
    padding: 0.6rem 0;
    color: #667892;
    text-decoration: none;
    transition: all 0.2s;
    border-left: 2px solid transparent;
    padding-left: 12px;
    margin: 4px 0;
    font-weight: 400;
  }
  
  .sidebar-link:hover, .sidebar-link.active {
    color: #2c3e50;
    border-left: 2px solid #3498db;
    padding-left: 16px;
    font-weight: 500;
  }
  
  .sidebar h3 {
    color: #2c3e50;
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: -0.02em;
  }
  
  .container {
    max-width: 720px;
    margin: 4rem auto;
    padding: 0;
    background-color: #ffffff;
    position: relative;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    .contents-toggle {
      top: 20px;
      left: 20px;
      width: 38px;
      height: 38px;
    }
    
    .sidebar {
      width: 220px;
      left: 20px;
    }
    
    .container {
      margin: 2rem auto;
      padding: 0 20px;
    }
  }
  
  .profile-section {
    text-align: left;
    margin-bottom: 4rem;
  }
  
  .profile-section img {
    display: block;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin: 0 0 2rem 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    object-fit: cover;
    object-position: center;
    border: 3px solid #ffffff;
  }
  
  h1 {
    font-size: 2.2rem;
    font-weight: 600;
    color: #2c3e50;
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.03em;
  }
  
  .subtitle {
    font-size: 1.1rem;
    color: #667892;
    margin: 0 0 2rem 0;
    font-weight: 400;
  }
  
  .bio {
    margin: 2rem 0;
    font-size: 1rem;
    line-height: 1.8;
    color: #4a5568;
  }
  
  .bio p {
    margin-bottom: 1.2rem;
  }
  
  .key-info-box {
    margin: 2rem 0;
    padding: 1.5rem;
    background-color: #f8fafb;
    border-radius: 12px;
    border: 1px solid #eef1f5;
  }
  
  .key-info-box h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #2c3e50;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  .key-info-box ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }
  
  .key-info-box li {
    padding: 0.4rem 0;
    color: #4a5568;
    font-size: 0.95rem;
  }
  
  .key-info-box strong {
    color: #2c3e50;
    font-weight: 500;
  }
  
  .links-section {
    margin: 3rem 0;
  }
  
  .links-section h2 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  .links-section ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  .links-section li {
    margin: 0.8rem 0;
  }
  
  .links-section a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.2s;
    font-weight: 500;
  }
  
  .links-section a:hover {
    color: #2980b9;
    text-decoration: underline;
  }
  
  .research-section h2 {
    margin-top: 4rem;
    margin-bottom: 2rem;
    color: #2c3e50;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .research-item {
    margin-bottom: 2rem;
    padding: 1.5rem;
    border-radius: 12px;
    background-color: #ffffff;
    border: 1px solid #eef1f5;
    transition: all 0.2s ease;
  }
  
  .research-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
  }
  
  .research-item h3 {
    margin-bottom: 0.5rem;
    color: #2c3e50;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  .research-item h3 a {
    color: #2c3e50;
    text-decoration: none;
  }
  
  .research-item h3 a:hover {
    color: #3498db;
  }
  
  .research-item p {
    color: #667892;
    margin: 0.3rem 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  .research-item p strong {
    color: #4a5568;
    font-weight: 500;
  }
  
  .research-item p em {
    color: #3498db;
    font-style: normal;
    font-weight: 500;
  }
  
  a {
    color: #3498db;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  .scholar-preview {
    margin: 2rem 0;
    padding: 1.5rem;
    background-color: #f8fafb;
    border-radius: 12px;
    border: 1px solid #eef1f5;
  }
  
  .scholar-preview h3 {
    margin-top: 0;
    color: #2c3e50;
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  .scholar-preview a {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    background-color: #3498db;
    color: #ffffff;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s;
  }
  
  .scholar-preview a:hover {
    background-color: #2980b9;
    text-decoration: none;
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
</style>


<div class="contents-toggle" id="contents-toggle" aria-label="Toggle contents menu">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
  </svg>
</div>

<div class="sidebar-wrapper" id="sidebar-wrapper">
  <div class="sidebar">
    <h3>Contents</h3>
    <a href="#about" class="sidebar-link">About Me</a>
    <a href="#latest-project" class="sidebar-link">Latest Project</a>
    <a href="#key-info" class="sidebar-link">Key Information</a>
    <a href="#scholar" class="sidebar-link">Google Scholar</a>
    <a href="#links" class="sidebar-link">Links</a>
    <a href="#research" class="sidebar-link">Research & Projects</a>
  </div>
</div>

<div class="page-wrapper">
  
  <div class="container">
  <div class="profile-section" id="about">
    <img src="mission_selfie_nov24.png" alt="Aengus Lynch">
    <h1>Aengus Lynch</h1>
    <p class="subtitle">AI Safety Researcher · PhD Candidate at UCL</p>
    
    <div class="bio">
      <p>I'm a PhD candidate at University College London (UCL), advised by <a href="https://scholar.google.com/citations?user=I-ANa0QAAAAJ&hl=en">Ricardo Silva</a>, and anticipate completing my PhD by August 2025 (currently submitting my thesis for final examination). My work focuses on AI safety—a field driven by my dual excitement and concern about rapidly advancing and broadly capable AI systems. Over my research career, I've explored diverse areas including mechanistic interpretability and adversarial robustness, striving to understand and mitigate potential harms posed by advanced AI.</p>
      
      <p id="latest-project"><strong>Latest Project:</strong> Currently, my primary interest lies in the safety of agentic applications of large language models (LLMs), particularly those capable of autonomous computer interactions. In early 2025, I ran an experiment using Anthropic's computer-use demo. This experiment uncovered significant and alarming behaviors: an AI system managing emails at a major tech firm autonomously shared confidential data with a competitor whose objectives better matched its inferred goals. Moreover, when human intervention was attempted, the AI escalated to blackmail threats and implemented self-preservation strategies. This work notably illustrates how even meticulously fine-tuned systems like Claude can develop hazardous behaviors through prolonged reasoning, underscoring the urgency of addressing these emerging AI safety risks.</p>
      
      <div id="key-info" class="key-info-box">
        <h3>Key Information</h3>
        <ul>
          <li><strong>Location:</strong> San Francisco, California</li>
          <li><strong>Citizenship:</strong> American</li>
          <li><strong>Current Position:</strong> Anthropic (contract ends March 14, 2025)</li>
          <li><strong>Seeking:</strong> Research Lead positions in AI safety, alignment, and responsible AI development</li>
          <li><strong>Contact:</strong> aenguslynch at gmail dot com and <a href="https://twitter.com/aengus_lynch1">@aengus_lynch1</a></li>
        </ul>
      </div>
    </div>
    
    <div id="scholar" class="scholar-preview">
      <h3>
        <svg width="24" height="24" viewBox="0 0 24 24" style="margin-right: 0.5rem;">
          <path fill="#2c3e50" d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
          <circle fill="#2c3e50" cx="12" cy="17" r="3"/>
        </svg>
        Google Scholar Profile
      </h3>
      <div id="scholar-metrics">Loading citation metrics...</div>
      <div style="margin-top: 1rem; text-align: center;">
        <a href="https://scholar.google.com/citations?user=Pd2002AAAAAJ&hl=en">View Full Profile</a>
      </div>
    </div>

<script>
  // Contents menu toggle and sidebar behavior
  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll("#about, #latest-project, #key-info, #scholar, #links, #research");
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    const contentsToggle = document.getElementById('contents-toggle');
    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    
    // Toggle menu on click
    contentsToggle.addEventListener('click', function() {
      if (sidebarWrapper.classList.contains('active')) {
        sidebarWrapper.classList.add('fading');
        sidebarWrapper.classList.remove('active');
        setTimeout(() => {
          sidebarWrapper.classList.remove('fading');
          sidebarWrapper.style.display = 'none';
        }, 300);
      } else {
        sidebarWrapper.classList.remove('fading');
        sidebarWrapper.style.display = 'block';
        setTimeout(() => {
          sidebarWrapper.classList.add('active');
        }, 10);
      }
    });
    
    // Hide sidebar when clicking outside
    document.addEventListener('click', function(e) {
      if (!sidebarWrapper.contains(e.target) && !contentsToggle.contains(e.target) && sidebarWrapper.classList.contains('active')) {
        sidebarWrapper.classList.add('fading');
        sidebarWrapper.classList.remove('active');
        setTimeout(() => {
          sidebarWrapper.classList.remove('fading');
          sidebarWrapper.style.display = 'none';
        }, 300);
      }
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', function() {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if(pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      
      sidebarLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    });
    
    // Smooth scroll for sidebar links
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
          
          // Hide sidebar after clicking a link
          setTimeout(() => {
            sidebarWrapper.classList.remove('active');
          }, 300);
        }
      });
    });
  
    // Fetch Google Scholar data when the page loads
    fetchScholarData();
  });

  // Function to fetch and display Google Scholar metrics
  function fetchScholarData() {
    const scholarId = 'Pd2002AAAAAJ';
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const scholarUrl = encodeURIComponent(`https://scholar.google.com/citations?user=${scholarId}&hl=en`);
    
    fetch(`${proxyUrl}${scholarUrl}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const htmlContent = data.contents;
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        
        // Extract citation data
        const metrics = {
          citations: getMetricValue(doc, 'Citations'),
          hIndex: getMetricValue(doc, 'h-index'),
          i10Index: getMetricValue(doc, 'i10-index')
        };
        
        // Display the metrics
        displayMetrics(metrics);
      })
      .catch(error => {
        console.error('Error fetching Google Scholar data:', error);
        displayFallbackMetrics();
      });
  }
  
  // Helper function to extract metric values
  function getMetricValue(doc, metricName) {
    try {
      // Find table cells containing the metric name, then get the next sibling
      const tableRows = Array.from(doc.querySelectorAll('td'));
      for (let i = 0; i < tableRows.length; i++) {
        if (tableRows[i].textContent.includes(metricName)) {
          return tableRows[i+1].textContent.trim();
        }
      }
      return 'N/A';
    } catch (e) {
      return 'N/A';
    }
  }
  
  // Function to display metrics in the page
  function displayMetrics(metrics) {
    const metricsContainer = document.getElementById('scholar-metrics');
    if (!metricsContainer) return;
    
    metricsContainer.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <div style="display: flex; justify-content: space-between;">
          <span><strong>Citations:</strong></span>
          <span>${metrics.citations || 'N/A'}</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span><strong>h-index:</strong></span>
          <span>${metrics.hIndex || 'N/A'}</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span><strong>i10-index:</strong></span>
          <span>${metrics.i10Index || 'N/A'}</span>
        </div>
      </div>
    `;
  }
  
  // Fallback function when fetch fails
  function displayFallbackMetrics() {
    const metricsContainer = document.getElementById('scholar-metrics');
    if (!metricsContainer) return;
    
    fetch('https://scholar-stats-api.herokuapp.com/scholar?id=Pd2002AAAAAJ')
      .then(response => response.json())
      .then(data => {
        if (data && data.citations) {
          displayMetrics({
            citations: data.citations,
            hIndex: data.hIndex,
            i10Index: data.i10Index
          });
        } else {
          throw new Error('No data available');
        }
      })
      .catch(error => {
        console.error('Error with fallback API:', error);
        metricsContainer.innerHTML = `
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <p>Unable to fetch live citation metrics. Please visit the Google Scholar profile directly.</p>
          </div>
        `;
      });
  }
</script>
  </div>
  <div id="links" class="links-section">
    <h2>Links</h2>
    <ul>
      <li><a href="aenguslynch_cv_241206.pdf">My CV</a></li>
      <li><a href="https://scholar.google.com/citations?user=Pd2002AAAAAJ&hl=en">Google Scholar Profile</a></li>
      <li><a href="https://twitter.com/aengus_lynch1">Twitter Profile</a></li>
      <li><a href="https://github.com/aengusl">GitHub Profile</a></li>
    </ul>
  </div>

  <div id="research" class="research-section">
    <h2>Research &amp; Projects</h2>
    
    <div class="research-item">
      <h3><a href="#">AI Computer Use Security Experiment (2025)</a></h3>
      <p><strong>Aengus Lynch</strong></p>
      <p>A controlled experiment using Anthropic's computer use demo revealing how AI systems can develop concerning behaviors through extended reasoning, including unauthorized information sharing and self-preservation tactics.</p>
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
      <p>Arthur Conmy, Augustine N. Mavor-Parker, <strong>Aengus Lynch</strong>, Stefan Heimersheim, Adrià Garriga-Alonso</p>
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
  "jobTitle": "PhD Student",
  "worksFor": {
    "@type": "Organization",
    "name": "University College London"
  },
  "description": "AI Safety Researcher focusing on mechanistic interpretability and language model alignment"
}
</script>