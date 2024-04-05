---
layout: home
---

<style>
  body {
    background-color: #f5f5dc; /* light cream background */
  }
  .container {
    display: flex;
    flex-wrap: wrap; /* Allow the container to wrap */
    align-items: center;
  }
  .image-wrapper {
    flex: 0 0 auto;
    margin-right: 20px;
  }
  .image-wrapper img {
    max-width: 200px; /* Set maximum width for the image */
    height: auto; /* Maintain aspect ratio */
    border-radius: 50%;
  }
  .content {
    flex: 1 1 auto;
    max-width: calc(100% - 220px); /* Account for image width and margin */
  }
  @media (max-width: 768px) { /* Adjustments for smaller screens */
    .image-wrapper,
    .content {
      flex: 1 0 100%; /* Stack on small screens */
      max-width: 100%; /* Use full width */
      margin-right: 0; /* Remove margin */
    }
    .image-wrapper {
      margin-bottom: 20px; /* Add space below image */
    }
  }
</style>

<div class="container">
  <div class="image-wrapper">
    <img src="march24-selfie.png" alt="Its me!">
  </div>
  <div class="content">
    I'm Aengus Lynch, a PhD student at UCL under the supervision of Ricardo Silva, and a former MATS scholar under the mentorship of Stephen Casper.

    I work on AI safety themed research, focusing on interpretability and robustness of LLMs.

    Currently (April 2024), I'm working on improving LLM safety through <a href="https://docs.google.com/document/d/1jAs0wf6e_mMfhnrsvf3FM8mEf9rm9LErpdB4Y4u1PG0/edit#heading=h.ldj2zbnl5qfx">Latent Adversarial Training</a>, and understanding the <a href="https://docs.google.com/document/d/1-1PJIKnmSlpg1pCqtNGyhZoRr5iChv7mpElCUuffQ4s/edit#heading=h.pr2w8wkwietb">agency of LLMs using interpretability</a>.
  </div>
</div>

## Links
- [My CV](march_2024_cv.pdf)
- [Google Scholar Profile](https://scholar.google.com/citations?user=Pd2002AAAAAJ&hl=en)
- [Twitter Profile](https://twitter.com/aengus_lynch1)