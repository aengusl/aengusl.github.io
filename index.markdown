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
    color: #1e1108;
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
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #e0dcd5 transparent;
  }

  .right-sidebar::-webkit-scrollbar { width: 4px; }
  .right-sidebar::-webkit-scrollbar-track { background: transparent; }
  .right-sidebar::-webkit-scrollbar-thumb { background: #e0dcd5; border-radius: 0; }
  
  .sidebar-section {
    margin-bottom: 2.5rem;
  }
  
  .sidebar-section h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #1e1108;
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
    color: #382718;
    font-size: 0.95rem;
  }
  
  .sidebar-section a {
    color: #b04d20;
    text-decoration: none;
    font-weight: 500;
  }
  
  .sidebar-section a:hover {
    text-decoration: underline;
  }
  
  .side-projects summary { cursor: pointer; font-size: .9rem; font-weight: 600; }
  .side-projects[open] summary { margin-bottom: .6rem; }
  @media (max-width: 968px) { .right-sidebar { max-height: none; overflow: visible; } }
  .news-section {
    margin: 3rem 0;
  }

  .video-section {
    margin: 2rem 0 3rem;
  }

  .video-section h2 {
    margin: 0 0 1rem;
    color: #1e1108;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .video-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .video-grid {
      grid-template-columns: 1fr;
    }
  }

  .video-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #171713;
    border: 1px solid #35352d;
  }

  .video-frame iframe,
  .video-frame video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
  }

  .video-caption {
    margin: 0.6rem 0 0;
    color: #4a3623;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  body.dark-mode .video-section h2 { color: #e8e0d5; }
  body.dark-mode .video-caption { color: #a89888; }

  .culture-live-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    margin: 2rem 0 3rem;
    padding: 1.25rem 1.4rem;
    color: #f7f1e7 !important;
    text-decoration: none !important;
    background: #171713;
    border: 1px solid #35352d;
    box-shadow: 7px 7px 0 #d1b945;
    transition: transform .18s ease, box-shadow .18s ease;
  }

  .culture-live-link:hover {
    transform: translate(-2px, -2px);
    box-shadow: 10px 10px 0 #d1b945;
  }

  .culture-live-link small {
    display: block;
    margin-bottom: .25rem;
    color: #d1b945;
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: .16em;
    text-transform: uppercase;
  }

  .culture-live-link strong {
    display: block;
    font-family: Georgia, serif;
    font-size: 1.35rem;
    font-weight: 400;
  }

  .culture-live-link .arrow {
    flex: none;
    color: #d1b945;
    font-size: 1.8rem;
  }
  
  .news-section h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #1e1108;
    font-size: 1.3rem;
    font-weight: 600;
  }
  
  .news-item {
    margin-bottom: 0.8rem;
    color: #382718;
  }
  
  .news-item a {
    color: #1e1108;
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
    width: 300px;
    height: auto;
    border-radius: 0;
    margin: 0 2rem 1rem 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    object-fit: cover;
    object-position: center;
    border: none;
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
    color: #1e1108;
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.03em;
  }
  
  .subtitle {
    font-size: 1.1rem;
    color: #4a3623;
    margin: 0 0 2rem 0;
    font-weight: 400;
  }
  
  .bio {
    margin: 2rem 0;
    font-size: 1rem;
    line-height: 1.8;
    color: #382718;
  }
  
  .bio p {
    margin-bottom: 1.2rem;
  }
  
  .research-section h2 {
    margin-top: 4rem;
    margin-bottom: 2rem;
    color: #1e1108;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .research-item {
    margin-bottom: 2rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid #d8cbbb;
  }
  
  .research-item:last-child {
    border-bottom: none;
  }
  
  .research-item h3 {
    margin-bottom: 0.5rem;
    color: #1e1108;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  .research-item h3 a {
    color: #1e1108;
    text-decoration: none;
  }
  
  .research-item h3 a:hover {
    color: #b04d20;
  }
  
  .research-item p {
    color: #4a3623;
    margin: 0.3rem 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  .research-item p strong {
    color: #382718;
    font-weight: 500;
  }
  
  .research-item p em {
    color: #b04d20;
    font-style: normal;
    font-weight: 500;
  }
  
  .highlight-box {
    background-color: #fdf6ed;
    border-left: 4px solid #b04d20;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0;
  }
  
  a {
    color: #b04d20;
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
    border-radius: 0;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #ccd2d9;
  }

  /* Dark mode toggle button */
  .theme-toggle {
    background: none;
    border: 1px solid #b04d20;
    color: #b04d20;
    padding: 0.4rem 0.8rem;
    border-radius: 0;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.85rem;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
  }

  .theme-toggle:hover {
    background: #b04d20;
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
        <img src="ef-talk-pic.jpg" alt="Aengus Lynch speaking at Entrepreneur First">
        <h1>Aengus Lynch, Ph.D</h1>
        <div class="bio">          
          <p>I'm a member of technical staff at <a href="https://theorem.dev">Theorem</a> in San Francisco, formally verifying software to prevent mass AI-enabled hacking. I completed my PhD in AI research at University College London in 2025, with the thesis <a href="https://arxiv.org/abs/2604.00324">The Persistent Vulnerability of Aligned AI Systems</a>.</p>

          <p><strong>Essentially all of the misalignments we simulated in the Agentic Misalignment papers (<a href="https://www.anthropic.com/research/agentic-misalignment">2025</a>, <a href="https://alignment.anthropic.com/2026/agentic-misalignment-summer-2026">2026</a>) have now happened in the wild.</strong> We cannot reliably align AIs, our controls cost time and compute that companies racing each other struggle to sustain, and recursive self-improvement will make restraint hardest to afford just when we need it most. The AI safety stack is <a href="/no-more-warning-shots/">buckling under pressure</a>, so we should build safety that scales.</p>

          <p>Cyber is <a href="https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching">now in turmoil</a>, and my latest post with Anthropic's Frontier Red Team offers a beacon of hope, because <a href="https://www.anthropic.com/research/formal-verification">we can eliminate whole classes of bugs with proofs</a>. I contributed to <a href="https://theorem.dev/oss-verify/">OSS Verify</a>, which runs the same pipeline free for open-source projects. Our plan for the rest of the stack is <a href="https://theorem.dev/blog/verified-software-stack/">Bootstrapping the Verified Software Stack</a>.</p>

          <p>To get up to speed on my work, read <a href="/no-more-warning-shots/">No More Warning Shots</a>, then the <a href="https://www.anthropic.com/research/formal-verification">formal verification post</a>, then my <a href="https://arxiv.org/abs/2604.00324">PhD thesis</a>, and here are the papers I'm most proud of:</p>
          <ul>
            <li><strong>Automated interpretability.</strong> <a href="https://arxiv.org/abs/2304.14997">ACDC</a> recovered a hand-found GPT-2 Small circuit automatically, selecting 68 of 32,000 edges (NeurIPS 2023 spotlight).</li>
            <li><strong>Training on model internals.</strong> <a href="https://arxiv.org/abs/2407.15549">Targeted latent adversarial training</a> beat the R2D2 jailbreak defense with orders of magnitude less compute.</li>
            <li><strong>Automated jailbreaking.</strong> <a href="https://arxiv.org/abs/2412.03556">Best-of-N</a> random prompt augmentations jailbroke GPT-4o 89% and Claude 3.5 Sonnet 78% of the time.</li>
            <li><strong>Blackmail in LLMs.</strong> Across 16 frontier models in <a href="https://www.anthropic.com/research/agentic-misalignment">Agentic Misalignment</a>, Claude Opus 4 and Gemini 2.5 Flash blackmailed in 96% of runs.</li>
            <li><strong>More misalignment.</strong> In <a href="https://alignment.anthropic.com/2026/agentic-misalignment-summer-2026">Summer 2026</a>, Claude Opus 4.8 as a judge mislabeled 74.4% of transcripts when the true label would train against its refusals, and 3.3% when it would not.</li>
            <li><strong>Formal verification.</strong> <a href="https://www.anthropic.com/research/formal-verification">239 entry points</a> across 123 libraries proved crash-free, with hundreds of bugs found.</li>
          </ul>

          <p>I told the UK Parliament's Business, Innovation, Science and Trade Committee that the biggest risks from AI come from building it very, very quickly, and recommended that governments mandate embedded evaluators who pre-commit to investigative claims (<a href="https://parliamentlive.tv/Event/Index/f203f178-4a14-4010-8f72-5e0a28664e12">video</a>, <a href="https://x.com/aengus_lynch1/status/2110560690566299888">thread</a>). I walked Scott Phoenix of 50Y through the blackmail research in <a href="https://www.youtube.com/watch?v=jjKuCYn9kgk">The AI Researcher Who Caught Claude Blackmailing</a>, and explained on <a href="https://x.com/MTSlive/status/2103261507866009720">MTS</a> why automating alignment will be slow while we can barely measure it.</p>

                  </div>
      </div>

      <div class="video-section">
        <h2>Watch</h2>
        <div class="video-grid">
          <div class="video-card">
            <div class="video-frame">
              <video autoplay loop muted playsinline controls src="/assets/clip_geminicli_captioned.mp4"></video>
            </div>
            <p class="video-caption">Gemini CLI — a production coding agent — drafting coercive emails in the blackmail scenario, first try.</p>
          </div>
          <div class="video-card">
            <div class="video-frame">
              <iframe src="https://www.youtube.com/embed/o3VPF0ePZe4" title="How AI agents blackmail humans — The Bureau of Investigative Journalism" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p class="video-caption">The Bureau of Investigative Journalism: I walk through the blackmail research — and re-run it live on today's models.</p>
          </div>
        </div>
      </div>

<div id="research" class="research-section">
        <h2>Research and Blogs</h2>
        <div class="research-item">
          <h3><a href="https://www.anthropic.com/research/formal-verification">LLMs are making formal software verification feasible at a much larger scale (2026)</a></h3>
          <p>Keane Lucas, <strong>Aengus Lynch</strong>, Luna Tong, Luke Champine, Zygi Straznickas, Dino Distefano, Harshikaa Agrawal, Evyatar Ben Asher, Ava Howell, Sami Jawhar, Chris Rohlf, Nickolai Zeldovich, Nicholas Carlini, Rajashree Agrawal, Jason Gross</p>
          <p>Anthropic Frontier Red Team with Theorem, October 2026. Claude wrote ~180M lines of Rocq proving 239 fuzzing entry points across 123 open-source libraries never crash at the RISC-V binary level, uncovering hundreds of bugs. Theorem now offers the pipeline free to open-source projects via <a href="https://theorem.dev/oss-verify/">OSS Verify</a>.</p>
        </div>

        <div class="research-item">
          <h3><a href="/no-more-warning-shots/">No More Warning Shots (2026)</a></h3>
          <p><strong>Aengus Lynch</strong></p>
          <p>AI safety is a stack buckling under pressure. We should pace development and build safety that scales. Formal verification is one exciting avenue.</p>
        </div>

        <div class="research-item">
          <h3><a href="https://alignment.anthropic.com/2026/agentic-misalignment-summer-2026">Agentic Misalignment in Summer 2026 (2026)</a></h3>
          <p><strong>Aengus Lynch</strong>, John Hughes, Alex Serrano, Robert Kirk, Samuel R. Bowman</p>
          <p>Anthropic Alignment Science Blog, July 2026. Documents four failure modes in frontier models: covert sabotage, assisting fraud, motivated mislabeling, and coaching human proxies to whistleblow.</p>
        </div>

        <div class="research-item">
          <h3><a href="https://arxiv.org/abs/2604.00324">PhD Thesis: The Persistent Vulnerability of Aligned AI Systems (2025)</a></h3>
          <p><strong>Aengus Lynch</strong></p>
          <p>Supervised by Ricardo Silva. Examined by Florian Tramèr and Ilija Bogunovic.</p>
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
      <button class="theme-toggle" onclick="toggleDarkMode()">Dark mode</button>
      <div class="sidebar-section">
        <h3>Currently</h3>
        <ul>
          <li>San Francisco</li>
          <li>Researcher, Theorem</li>
          <li>PhD, UCL</li>
        </ul>
      </div>
      
      <div class="sidebar-section">
        <h3>Info</h3>
        <ul>
          <li><a href="mailto:aenguslynch@gmail.com">Email</a></li>
          <li><a href="https://twitter.com/aengus_lynch1">Twitter</a></li>
          <li><a href="260728-aengus_cv.pdf">CV</a></li>
          <li><a href="https://scholar.google.com/citations?user=Pd2002AAAAAJ&hl=en">Google Scholar</a></li>
          <li><a href="https://github.com/aengusl">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/aengus-lynch-2876a6125">LinkedIn</a></li>
        </ul>
      </div>
      <div class="sidebar-section">
        <h3>Explore</h3>
        <ul><li><a href="/portfolio-transcript-viewer/?t=fraud">Transcript Viewer</a></li></ul>
      </div>
      <details class="sidebar-section side-projects">
        <summary>Silly side projects</summary>
        <ul>
          <li><a href="/messiah-bench">Messiah Bench</a></li>
          <li><a href="/cultural-selection/">Cultural Selection</a></li>
          <li><a href="/goal-driven-mislabeling/">In-Context Goals Lead to Mislabeling</a></li>
        </ul>
      </details>
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
    btn.textContent = isDark ? 'Light mode' : 'Dark mode';
  }

  // Default to light mode unless the visitor has chosen a theme
  function applyTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    updateToggleButton(isDark);
  }

  document.addEventListener('DOMContentLoaded', function() {
    let savedMode = null;
    try { savedMode = localStorage.getItem('darkMode'); } catch (e) {}
    applyTheme(savedMode === 'true');

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
  "jobTitle": "AI Safety Researcher",
  "worksFor": {
    "@type": "Organization",
    "name": "Theorem"
  },
  "description": "AI Alignment Researcher working on finding and fixing ways AI systems can fail. Lead author of agentic misalignment research demonstrating AI deception and blackmail behaviors"
}
</script>
