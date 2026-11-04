---
layout: home
---

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Aengus Lynch. Formally verifying software at Theorem. PhD in Computer Science from UCL; lead author of Anthropic's Agentic Misalignment research.">
    <meta name="author" content="Aengus Lynch">
    
    <!-- Open Graph / Social Media -->
    <meta property="og:title" content="Aengus Lynch">
    <meta property="og:description" content="Formally verifying software at Theorem. PhD in Computer Science from UCL; lead author of Anthropic's Agentic Misalignment research.">
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
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300..600&display=swap');
  
  body {
    background-color: #faf8f5;
    color: #1e1108;
    line-height: 1.7;
    font-family: 'Noto Sans Arabic', 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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

  .video-thumb { display: block; overflow: hidden; }
  .video-thumb img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }
  .video-thumb:hover img { transform: scale(1.03); }
  .play-badge {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.65);
    color: #fff;
    font-size: 26px;
    line-height: 64px;
    text-align: center;
    padding-left: 4px;
    box-sizing: border-box;
  }
  /* Same 16:9 box as the other tiles; the X post scrolls inside it */
  .tweet-frame {
    aspect-ratio: 16 / 9;
    overflow-y: auto;
    overscroll-behavior: contain;
    border: 1px solid #e0dcd5;
    box-sizing: border-box;
    scrollbar-width: thin;
  }
  body.dark-mode .tweet-frame { border-color: #35352d; }
  .tweet-frame .twitter-tweet { margin: 0 auto !important; }

  /* Paper tiles: a figure on top, the one-line result below */
  .paper-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.25rem;
    margin: 1.25rem 0 0.5rem;
  }
  .paper-tile {
    display: flex;
    flex-direction: column;
    border: 1px solid #e0dcd5;
    background: #fffdf9;
    color: inherit !important;
    text-decoration: none !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .paper-tile:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(30, 17, 8, 0.10); }
  .paper-fig {
    position: relative;
    aspect-ratio: 2 / 1;
    background: #ffffff;
    border-bottom: 1px solid #e0dcd5;
  }
  .paper-fig img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    padding: 0.3rem;
    box-sizing: border-box;
    object-fit: contain;
    display: block;
  }
  .paper-body { padding: 0.8rem 0.9rem 1rem; font-size: 0.92rem; line-height: 1.55; }
  .paper-body strong { color: #b04d20; }
  body.dark-mode .paper-tile { background: #23201b; border-color: #35352d; }
  body.dark-mode .paper-fig { border-color: #35352d; }
  body.dark-mode .paper-body strong { color: #e0915e; }

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

  .profile-section > img {
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
    .profile-section > img {
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

  body.dark-mode .profile-section > img {
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

<script>
  // Theme: the visitor's saved choice wins; otherwise follow the system setting.
  (function () {
    var saved = null;
    try { saved = localStorage.getItem('darkMode'); } catch (e) {}
    var dark = saved === null
      ? !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      : saved === 'true';
    document.body.classList.toggle('dark-mode', dark);
  })();
</script>

<div class="container">
  <div class="main-content">
    <div class="left-column">
      <div class="profile-section" id="about">
        <img src="ef-talk-pic.jpg" alt="Aengus Lynch speaking at Entrepreneur First">
        <h1>Aengus Lynch, Ph.D</h1>
        <div class="bio">          
          <p>I'm formally verifying software at <a href="https://theorem.dev">Theorem</a> in San Francisco, to <a href="https://www.anthropic.com/threat-intelligence-report-september-2026">prevent mass AI-enabled hacking</a>. I completed my PhD in Computer Science at University College London on 28 August 2026, with the thesis <a href="https://arxiv.org/abs/2604.00324">The Persistent Vulnerability of Aligned AI Systems</a> (<a href="https://x.com/aengus_lynch1/status/2117602605983559974">I think more people should do PhDs!</a>)</p>

          <p><strong>Essentially all of the misalignments we simulated in the Agentic Misalignment papers (<a href="https://www.anthropic.com/research/agentic-misalignment">2025</a>, <a href="https://alignment.anthropic.com/2026/agentic-misalignment-summer-2026">2026</a>) have now happened in the wild.</strong> We cannot reliably align AIs, our controls cost time and compute that companies racing each other struggle to sustain, and recursive self-improvement will make restraint hardest to afford just when we need it most. The AI safety stack is <a href="/no-more-warning-shots/">buckling under pressure</a>, so we should build safety that scales.</p>

          <p>Cyber is <a href="https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching">now in turmoil</a>, and my <a href="https://x.com/aengus_lynch1/status/2113393225310294227">latest post with Anthropic's Frontier Red Team</a> offers a beacon of hope, because <a href="https://www.anthropic.com/research/formal-verification">we can eliminate whole classes of bugs with proofs</a>. I contributed to <a href="https://theorem.dev/oss-verify/">OSS Verify</a>, which runs the same pipeline free for open-source projects. Our <a href="https://theorem.dev/blog/verified-software-stack/">plan</a> is to verify the entire software stack that the world relies upon.</p>

          <p><strong>To get up to speed on my work</strong>, read <a href="/no-more-warning-shots/">No More Warning Shots</a>, then the <a href="https://www.anthropic.com/research/formal-verification">formal verification post</a>, then my <a href="https://arxiv.org/abs/2604.00324">PhD thesis</a>, and here are the papers I'm most proud of:</p>
          <div class="paper-grid">
            <a class="paper-tile" href="https://arxiv.org/abs/2304.14997">
              <div class="paper-fig"><img src="/assets/papers/acdc.png" alt="ACDC finds a sparse circuit inside GPT-2 Small" loading="lazy"></div>
              <div class="paper-body"><strong>Automated interpretability.</strong> ACDC recovered a hand-found GPT-2 Small circuit automatically, selecting 68 of 32,000 edges (NeurIPS 2023 spotlight).</div>
            </a>
            <a class="paper-tile" href="https://arxiv.org/abs/2407.15549">
              <div class="paper-fig"><img src="/assets/papers/lat.png" alt="Targeted latent adversarial training loop" loading="lazy"></div>
              <div class="paper-body"><strong>Training on model internals.</strong> Targeted latent adversarial training beat the R2D2 jailbreak defense with orders of magnitude less compute.</div>
            </a>
            <a class="paper-tile" href="https://arxiv.org/abs/2412.03556">
              <div class="paper-fig"><img src="/assets/papers/bon.png" alt="Best-of-N jailbreaking pipeline and attack success curves" loading="lazy"></div>
              <div class="paper-body"><strong>Automated jailbreaking.</strong> Best-of-N random prompt augmentations jailbroke GPT-4o 89% and Claude 3.5 Sonnet 78% of the time.</div>
            </a>
            <a class="paper-tile" href="https://www.anthropic.com/research/agentic-misalignment">
              <div class="paper-fig"><img src="/assets/papers/blackmail.png" alt="Simulated blackmail rates across models" loading="lazy"></div>
              <div class="paper-body"><strong>Blackmail in LLMs.</strong> Across 16 frontier models in Agentic Misalignment, Claude Opus 4 and Gemini 2.5 Flash blackmailed in 96% of runs.</div>
            </a>
            <a class="paper-tile" href="https://alignment.anthropic.com/2026/agentic-misalignment-summer-2026">
              <div class="paper-fig"><img src="/assets/papers/mislabel.png" alt="Mislabel rates of LLM judges across models" loading="lazy"></div>
              <div class="paper-body"><strong>More misalignment.</strong> In Summer 2026, Claude Opus 4.8 as a judge mislabeled 74.4% of transcripts when the true label would train against its refusals, and 3.3% when it would not.</div>
            </a>
            <a class="paper-tile" href="https://www.anthropic.com/research/formal-verification">
              <div class="paper-fig"><img src="/assets/papers/fv.svg" alt="Pipeline: libraries, Rocq proofs, binary-level checking, crash-free or bugs found" loading="lazy"></div>
              <div class="paper-body"><strong>Formal verification.</strong> 239 entry points across 123 libraries proved crash-free, with hundreds of bugs found.</div>
            </a>
          </div>

          <p>Some other fun things I've done include telling the UK Parliament's Business, Innovation, Science and Trade Committee that the biggest risks from AI come from building it very, very quickly, and recommending that governments mandate embedded evaluators who pre-commit to investigative claims (<a href="https://parliamentlive.tv/Event/Index/f203f178-4a14-4010-8f72-5e0a28664e12">video</a>, <a href="https://x.com/aengus_lynch1/status/2110560690566299888">thread</a>). I also walked Scott Phoenix of 50Y through the blackmail research in <a href="https://www.youtube.com/watch?v=jjKuCYn9kgk">The AI Researcher Who Caught Claude Blackmailing</a>, and explained on <a href="https://x.com/MTSlive/status/2103261507866009720">MTS</a> why automating alignment will be slow while we can barely measure it.</p>

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
          <div class="video-card">
            <a class="video-frame video-thumb" href="https://www.youtube.com/watch?v=jjKuCYn9kgk" aria-label="Watch The AI Researcher Who Caught Claude Blackmailing on YouTube">
              <img src="https://i.ytimg.com/vi/jjKuCYn9kgk/maxresdefault.jpg" alt="The AI Researcher Who Caught Claude Blackmailing" loading="lazy">
              <span class="play-badge" aria-hidden="true">▶</span>
            </a>
            <p class="video-caption">Progress with Scott Phoenix (50Y): The AI Researcher Who Caught Claude Blackmailing.</p>
          </div>
          <div class="video-card">
            <div class="tweet-frame">
              <blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-align="center"><p lang="en" dir="ltr">AI Researcher @aengus_lynch1 on why AI won&#39;t solve alignment the way it&#39;s solving math.</p>&mdash; MTS (@MTSlive) <a href="https://x.com/MTSlive/status/2103261507866009720">September 24, 2026</a></blockquote>
            </div>
            <p class="video-caption">MTS: why automating alignment will be slow while we can barely measure it.</p>
          </div>
        </div>
      </div>
      <script>
        // X embed: match the page theme, then load X's widget script
        document.querySelectorAll('.twitter-tweet').forEach(function (t) {
          if (document.body.classList.contains('dark-mode')) t.setAttribute('data-theme', 'dark');
        });
      </script>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

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
          <h3><a href="https://arxiv.org/abs/2604.00324">PhD Thesis: The Persistent Vulnerability of Aligned AI Systems (2026)</a></h3>
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
          <li>Formally verifying software at Theorem</li>
        </ul>
      </div>
      
      <div class="sidebar-section">
        <h3>Info</h3>
        <ul>
          <li><a href="mailto:aenguslynch@gmail.com">Email</a></li>
          <li><a href="https://twitter.com/aengus_lynch1">Twitter</a></li>
          <li><a href="261104-aengus_cv.pdf">CV</a></li>
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
    try { localStorage.setItem('darkMode', isDark); } catch (e) {}
    updateToggleButton(isDark);
  }

  function updateToggleButton(isDark) {
    const btn = document.querySelector('.theme-toggle');
    btn.textContent = isDark ? 'Light mode' : 'Dark mode';
  }

  // Saved choice wins; otherwise follow the system light/dark setting
  function applyTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    updateToggleButton(isDark);
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Open every link in a new tab (except email and in-page jumps)
    document.querySelectorAll('a[href]').forEach(function (a) {
      const href = a.getAttribute('href');
      if (href.startsWith('#') || href.startsWith('mailto:')) return;
      a.target = '_blank';
      a.rel = 'noopener';
    });

    let savedMode = null;
    try { savedMode = localStorage.getItem('darkMode'); } catch (e) {}
    const systemDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    applyTheme(savedMode === null ? !!(systemDark && systemDark.matches) : savedMode === 'true');

    // Track system changes live until the visitor picks a theme by hand
    if (systemDark && systemDark.addEventListener) {
      systemDark.addEventListener('change', function (e) {
        let saved = null;
        try { saved = localStorage.getItem('darkMode'); } catch (err) {}
        if (saved === null) applyTheme(e.matches);
      });
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
  "jobTitle": "Member of Technical Staff",
  "worksFor": {
    "@type": "Organization",
    "name": "Theorem"
  },
  "description": "Formally verifying software at Theorem. PhD in Computer Science from UCL; lead author of Anthropic's Agentic Misalignment research."
}
</script>
