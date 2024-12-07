---
layout: home
---

<style>
  @import url('https://fonts.cdnfonts.com/css/cmu-serif');
  
  body {
    background-color: #000000;
    color: #f5f5f5;
    line-height: 1.6;
    font-family: 'CMU Serif', serif;
  }
  .container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1.5rem;
  }
  .profile-section {
    text-align: left;
    margin-bottom: 3rem;
  }
  .profile-section img {
    display: block;
    width: 400px;
    height: 400px;
    border-radius: 8px;
    margin: 0 auto 1.5rem auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    object-fit: cover;
    object-position: center;
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
    color: #f5f5f5;
    text-decoration: none;
    transition: color 0.2s;
  }
  .links-section a:hover {
    color: #a0aec0;
  }
  .research-section h2 {
    margin-top: 3rem;
    color: #f5f5f5;
    border-bottom: 2px solid #333333;
    padding-bottom: 0.5rem;
  }
  .research-item {
    margin-bottom: 2.5rem;
    padding: 1rem;
    border-radius: 8px;
    background-color: #111111;
  }
  .research-item h3 {
    margin-bottom: 0.5rem;
  }
  .research-item h3 a {
    color: #a0aec0;
    text-decoration: none;
  }
  .research-item h3 a:hover {
    text-decoration: underline;
  }
  .research-item p {
    color: #f5f5f5;
    margin: 0.5rem 0;
  }
  a {
    color: #a0aec0;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>

<div class="container">
  <div class="profile-section">
    <img src="mission_selfie_nov24.png" alt="It's me!">
    <div class="bio">
      <p>I'm a PhD candidate at UCL, advised by <a href="https://scholar.google.com/citations?user=I-ANa0QAAAAJ&hl=en">Ricardo Silva</a>. I care about AI safety and find myself simultaneously exhilarated and alarmed by the development of broadly capable AI systems. My previous research has ranged from mechanistic interpretability to adversarial robustness. Now, I am interested in the safety of agentic LLM applications, such as computer use.</p>
      
      <p style="margin-top: 1.5rem;">Reach me at aenguslynch at gmail dot com and <a href="https://twitter.com/aengus_lynch1">@aengus_lynch1</a>.</p>
    </div>
  </div>

  <div class="links-section">
    <h2>Links</h2>
    <ul>
      <li><a href="march_2024_cv.pdf">My CV</a></li>
      <li><a href="https://scholar.google.com/citations?user=Pd2002AAAAAJ&hl=en">Google Scholar Profile</a></li>
      <li><a href="https://twitter.com/aengus_lynch1">Twitter Profile</a></li>
    </ul>
  </div>

  <div class="research-section">
    <h2>Research</h2>

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