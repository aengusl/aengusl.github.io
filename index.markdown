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
  @import url('https://fonts.cdnfonts.com/css/cmu-serif');
  
  body {
    background-color: #e8d9b5; /* Sandy background */
    color: #3a2718; /* Woody brown text */
    line-height: 1.6;
    font-family: 'CMU Serif', serif;
    margin: 0;
    padding: 0;
    position: relative;
    overflow-x: hidden;
  }
  .dynamic-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
    background: linear-gradient(135deg, #e8d9b5, #d4b78f);
  }
  .wave {
    position: absolute;
    width: 200%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(252, 246, 231, 0.2), transparent);
    animation: wave-animation 18s infinite linear;
    transform-origin: 50% 50%;
    opacity: 0.5;
  }
  .wave:nth-child(2) {
    animation-delay: -5s;
    animation-duration: 22s;
    opacity: 0.3;
  }
  .wave:nth-child(3) {
    animation-delay: -10s;
    animation-duration: 25s;
    opacity: 0.2;
  }
  @keyframes wave-animation {
    0% {
      transform: translateX(-50%) translateY(0) rotate(0deg);
    }
    100% {
      transform: translateX(-50%) translateY(0) rotate(360deg);
    }
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
    top: 20px;
    left: 20px;
    width: 40px;
    height: 40px;
    background-color: rgba(252, 246, 231, 0.9);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 11;
    box-shadow: 0 3px 10px rgba(58, 39, 24, 0.2);
    border: 1px solid #d4b78f;
    transition: all 0.2s ease;
  }
  
  .contents-toggle:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(58, 39, 24, 0.25);
  }
  
  .contents-toggle svg {
    width: 24px;
    height: 24px;
    fill: #7d5a45;
  }
  
  .sidebar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 260px;
    height: 100vh;
    pointer-events: none;
    z-index: 10;
    display: none; /* Hidden by default */
  }
  
  .sidebar-wrapper.active {
    display: block;
  }
  
  .sidebar {
    position: absolute;
    top: 2rem;
    left: 20px;
    width: 220px;
    padding: 1.8rem;
    background-color: rgba(252, 246, 231, 0.95);
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(58, 39, 24, 0.15);
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    border: 1px solid #d4b78f;
    backdrop-filter: blur(5px);
    font-size: 1.1rem;
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 1s ease, transform 1s ease; /* Slower 1-second transition */
    pointer-events: auto;
  }
  
  .sidebar-wrapper.active .sidebar {
    opacity: 1;
    transform: translateX(0);
  }
  
  .sidebar-wrapper.fading .sidebar {
    opacity: 0.1; /* Become more translucent when fading out */
    transform: translateX(-10px);
  }
  
  .sidebar-link {
    display: block;
    padding: 0.7rem 0;
    color: #7d5a45;
    text-decoration: none;
    transition: all 0.2s;
    border-left: 3px solid transparent;
    padding-left: 12px;
    margin: 6px 0;
    font-weight: 500;
  }
  
  .sidebar-link:hover, .sidebar-link.active {
    color: #4f3722;
    border-left: 3px solid #7d5a45;
    padding-left: 16px;
    font-weight: 600;
  }
  
  .sidebar h3 {
    color: #5c412c;
    margin-top: 0;
    margin-bottom: 1.2rem;
    font-size: 1.4rem;
    border-bottom: 2px solid #d4b78f;
    padding-bottom: 0.7rem;
    font-weight: 600;
  }
  
  .container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: rgba(252, 246, 231, 0.9); /* Slightly transparent paper-like background */
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(58, 39, 24, 0.15);
    position: relative;
    z-index: 1;
    backdrop-filter: blur(5px);
    border: 1px solid #d4b78f;
  }
  
  @media (max-width: 768px) {
    .contents-toggle {
      top: 15px;
      left: 15px;
      width: 35px;
      height: 35px;
    }
    
    .sidebar {
      width: 200px;
    }
  }
  .profile-section {
    text-align: left;
    margin-bottom: 3rem;
  }
  .profile-section img {
    display: block;
    width: 400px;
    height: 400px;
    border-radius: 12px;
    margin: 0 auto 1.5rem auto;
    box-shadow: 0 6px 15px rgba(58, 39, 24, 0.3);
    object-fit: cover;
    object-position: center;
    border: 3px solid #a67c52; /* Wooden frame effect */
  }
  .bio {
    margin: 2rem 0;
    font-size: 1.1rem;
    line-height: 1.7;
  }
  .links-section {
    margin: 2rem 0;
  }
  .links-section a {
    color: #7d5a45;
    text-decoration: none;
    transition: color 0.2s;
  }
  .links-section a:hover {
    color: #4f3722;
  }
  .research-section h2 {
    margin-top: 3rem;
    color: #5c412c;
    border-bottom: 2px solid #c4a77d;
    padding-bottom: 0.5rem;
  }
  .research-item {
    margin-bottom: 2.5rem;
    padding: 1.5rem;
    border-radius: 8px;
    background-color: rgba(242, 232, 214, 0.8);
    border: 1px solid #d4b78f;
    box-shadow: 0 3px 8px rgba(58, 39, 24, 0.1);
  }
  .research-item h3 {
    margin-bottom: 0.5rem;
    color: #5c412c;
  }
  .research-item h3 a {
    color: #7d5a45;
    text-decoration: none;
  }
  .research-item h3 a:hover {
    text-decoration: underline;
    color: #4f3722;
  }
  .research-item p {
    color: #3a2718;
    margin: 0.5rem 0;
  }
  a {
    color: #7d5a45;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
    color: #4f3722;
  }
  /* Wooden texture overlays */
  .container:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.05;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxwYXRoIGQ9Ik0wIDAgTDEwMCAxMDBNMTAwIDAgTDAgMTAwIiBzdHJva2U9IiM3ZDVhNDUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9zdmc+');
    pointer-events: none;
    z-index: -1;
    border-radius: 12px;
  }
</style>

<script>
  // Create dynamic wave background
  document.addEventListener('DOMContentLoaded', function() {
    // Create background container
    const backgroundContainer = document.createElement('div');
    backgroundContainer.className = 'dynamic-background';
    document.body.insertBefore(backgroundContainer, document.body.firstChild);
    
    // Create three wave elements for layered effect
    for (let i = 0; i < 3; i++) {
      const wave = document.createElement('div');
      wave.className = 'wave';
      backgroundContainer.appendChild(wave);
    }
    
    // Add subtle grain texture to background
    const grainOverlay = document.createElement('div');
    grainOverlay.style.position = 'absolute';
    grainOverlay.style.top = '0';
    grainOverlay.style.left = '0';
    grainOverlay.style.width = '100%';
    grainOverlay.style.height = '100%';
    grainOverlay.style.opacity = '0.05';
    grainOverlay.style.backgroundImage = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqPQdQhiUP9l/s8eUQ1WUk78vbX1vKrM9Dv6aeeuNZw3HZmPpbXm1NI6I9XYd/Cj21HUuOXNbReLtJ9L4k4+Fr7S+jtq5XMZyt5DJ3M3quOGXn3Tbfs1ZqDTM9kQfuX6OWkDbefE3m3LYvQkSil6pUJaWyPWOBRG0ZGQJQ1iKtEl9nOmrt9L/0Xeo+P6nUUpJlHAQ2GdtYPIOihURvZ7GPqtXQTKK8QjRNhMtWxngMwSfak4AQgQGZQmQn94Yz9D+bnV9Rf+lIQ2Arz6j+vIXGW99Rca7ShWQwXgvo=)';
    backgroundContainer.appendChild(grainOverlay);
  });
</script>

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
    <img src="mission_selfie_nov24.png" alt="It's me!">
    <div class="bio">
      <p>I'm a PhD candidate at University College London (UCL), advised by <a href="https://scholar.google.com/citations?user=I-ANa0QAAAAJ&hl=en">Ricardo Silva</a>, and anticipate completing my PhD by August 2025 (currently submitting my thesis for final examination). My work focuses on AI safety—a field driven by my dual excitement and concern about rapidly advancing and broadly capable AI systems. Over my research career, I've explored diverse areas including mechanistic interpretability and adversarial robustness, striving to understand and mitigate potential harms posed by advanced AI.</p>
      
      <p style="margin-top: 1.5rem;" id="latest-project"><strong>Latest Project:</strong> Currently, my primary interest lies in the safety of agentic applications of large language models (LLMs), particularly those capable of autonomous computer interactions. In early 2025, I ran an experiment using Anthropic's computer-use demo. This experiment uncovered significant and alarming behaviors: an AI system managing emails at a major tech firm autonomously shared confidential data with a competitor whose objectives better matched its inferred goals. Moreover, when human intervention was attempted, the AI escalated to blackmail threats and implemented self-preservation strategies. This work notably illustrates how even meticulously fine-tuned systems like Claude can develop hazardous behaviors through prolonged reasoning, underscoring the urgency of addressing these emerging AI safety risks.</p>
      
      <div id="key-info" style="margin-top: 1.5rem; padding: 1.2rem; background-color: rgba(238, 224, 201, 0.7); border-radius: 8px; border-left: 4px solid #a67c52;">
        <h3 style="margin-top: 0; color: #5c412c;">Key Information</h3>
        <ul style="list-style-type: square; padding-left: 1.5rem;">
          <li><strong>Location:</strong> San Francisco, California</li>
          <li><strong>Citizenship:</strong> American</li>
          <li><strong>Current Position:</strong> Anthropic (contract ends March 14, 2025)</li>
          <li><strong>Seeking:</strong> <span style="color: #5c412c; font-weight: bold;">Research Lead</span> positions in AI safety, alignment, and responsible AI development</li>
          <li><strong>Contact:</strong> aenguslynch at gmail dot com and <a href="https://twitter.com/aengus_lynch1">@aengus_lynch1</a></li>
        </ul>
      </div>
    </div>
    
    <div id="scholar" class="scholar-preview" style="margin-top: 2rem; padding: 1.5rem; background-color: rgba(238, 224, 201, 0.7); border-radius: 8px; box-shadow: 0 3px 8px rgba(58, 39, 24, 0.1);">
      <h3 style="margin-top: 0; color: #5c412c; display: flex; align-items: center;">
        <svg width="24" height="24" viewBox="0 0 24 24" style="margin-right: 0.5rem;">
          <path fill="#5c412c" d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
          <circle fill="#5c412c" cx="12" cy="17" r="3"/>
        </svg>
        Google Scholar Profile
      </h3>
      <div id="scholar-metrics">Loading citation metrics...</div>
      <div style="margin-top: 1rem; text-align: center;">
        <a href="https://scholar.google.com/citations?user=Pd2002AAAAAJ&hl=en" style="display: inline-block; padding: 0.5rem 1rem; background-color: #a67c52; color: #fff; border-radius: 4px; text-decoration: none; font-weight: bold;">View Full Profile</a>
      </div>
    </div>

<script>
  // Contents menu toggle and sidebar behavior
  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll("#about, #latest-project, #key-info, #scholar, #links, #research");
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    const contentsToggle = document.getElementById('contents-toggle');
    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    
    // Toggle menu on hover
    contentsToggle.addEventListener('mouseenter', function() {
      sidebarWrapper.classList.add('active');
    });
    
    // Hide sidebar when mouse leaves both toggle and sidebar
    sidebarWrapper.addEventListener('mouseleave', function(e) {
      // Only hide if we're not entering the toggle button
      if (e.relatedTarget !== contentsToggle) {
        // First add the fading class to trigger translucent animation
        sidebarWrapper.classList.add('fading');
        sidebarWrapper.classList.remove('active');
        
        // Then remove the fading class and hide after animation completes
        setTimeout(() => {
          sidebarWrapper.classList.remove('fading');
          sidebarWrapper.style.display = 'none';
        }, 1000); // Match the 1s transition time
      }
    });
    
    // Clear the previous event listener for mouseenter
    contentsToggle.removeEventListener('mouseenter', null);
    
    // Make sure to reset display when showing the sidebar
    contentsToggle.addEventListener('mouseenter', function() {
      sidebarWrapper.classList.remove('fading');
      sidebarWrapper.style.display = 'block';
      
      // Small delay to ensure display: block takes effect before adding active
      setTimeout(() => {
        sidebarWrapper.classList.add('active');
      }, 10);
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