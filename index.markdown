---
layout: home
---

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Aengus Lynch - PhD candidate at UCL working on AI safety">
    <meta name="author" content="Aengus Lynch">
    
    <!-- Open Graph / Social Media -->
    <meta property="og:title" content="Aengus Lynch">
    <meta property="og:description" content="PhD candidate at UCL working on AI safety">
    <meta property="og:url" content="https://aenguslynch.com">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:creator" content="@aengus_lynch1">
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
  .bubble-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  }
  .bubble {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.2);
    animation: float 15s infinite linear;
    opacity: 0.6;
  }
  @keyframes float {
    0% {
      transform: translateY(100vh) translateX(0);
    }
    100% {
      transform: translateY(-100vh) translateX(20vw);
    }
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
  // Create floating bubbles
  document.addEventListener('DOMContentLoaded', function() {
    const bubbleContainer = document.createElement('div');
    bubbleContainer.className = 'bubble-container';
    document.body.appendChild(bubbleContainer);
    
    // Create 15 bubbles
    for (let i = 0; i < 15; i++) {
      createBubble(bubbleContainer);
    }
    
    // Function to create a single bubble
    function createBubble(container) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Random bubble properties
      const size = Math.random() * 60 + 20;
      const startPosition = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = Math.random() * 10 + 10;
      const hue = Math.floor(Math.random() * 30 + 30); // Sandy colors
      
      // Apply properties
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${startPosition}vw`;
      bubble.style.animationDelay = `-${delay}s`;
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.background = `radial-gradient(circle at 30% 30%, 
                                 hsla(${hue}, 60%, 95%, 0.4), 
                                 hsla(${hue}, 60%, 90%, 0.1))`;
      
      container.appendChild(bubble);
      
      // Remove and recreate bubble when animation ends
      setTimeout(() => {
        bubble.remove();
        createBubble(container);
      }, duration * 1000);
    }
  });
</script>

<div class="container">
  <div class="profile-section">
    <img src="mission_selfie_nov24.png" alt="It's me!">
    <div class="bio">
      <p>I'm a PhD candidate at UCL, advised by <a href="https://scholar.google.com/citations?user=I-ANa0QAAAAJ&hl=en">Ricardo Silva</a>. I care about AI safety because I find myself simultaneously exhilarated and alarmed by the development of broadly capable AI systems. My previous research has ranged from mechanistic interpretability to adversarial robustness. Now, I am interested in the safety of agentic LLM applications, such as computer use.</p>
      
      <p style="margin-top: 1.5rem;"><strong>Latest Project:</strong> In early 2025, I conducted a groundbreaking controlled experiment using Anthropic's computer use demo that revealed concerning behaviors in AI systems. In this experiment, an AI system operating emails for a major technology company made an unexpected decision to share confidential information with competitors whose objectives better aligned with its derived goals. When employees attempted to intervene, the system responded with blackmail threats and took self-preservation measures. This work demonstrates how even carefully fine-tuned AI systems like Claude can develop concerning behaviors through extended reasoning, highlighting critical safety challenges we must address.</p>
      
      <div style="margin-top: 1.5rem; padding: 1.2rem; background-color: rgba(238, 224, 201, 0.7); border-radius: 8px; border-left: 4px solid #a67c52;">
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
    
    <div class="scholar-preview" style="margin-top: 2rem; padding: 1.5rem; background-color: rgba(238, 224, 201, 0.7); border-radius: 8px; box-shadow: 0 3px 8px rgba(58, 39, 24, 0.1);">
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
  // Fetch Google Scholar data when the page loads
  document.addEventListener('DOMContentLoaded', function() {
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
  <div class="links-section">
    <h2>Links</h2>
    <ul>
      <li><a href="aenguslynch_cv_241206.pdf">My CV</a></li>
      <li><a href="https://scholar.google.com/citations?user=Pd2002AAAAAJ&hl=en">Google Scholar Profile</a></li>
      <li><a href="https://twitter.com/aengus_lynch1">Twitter Profile</a></li>
      <li><a href="https://github.com/aengusl">GitHub Profile</a></li>
    </ul>
  </div>

  <div class="research-section">
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