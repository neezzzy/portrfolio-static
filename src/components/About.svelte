<script>
  import Carousel from './Carousel.svelte';
  let icons = [
    'icons/css.svg',
    'icons/java.svg',
    'icons/js.svg',
    'icons/mongodb.svg',
    'icons/mysql-logo.svg',
    'icons/node-js.svg',
    'icons/php-logo.svg',
    'icons/python.svg',
    'icons/react.svg',
    'icons/svelte.svg',
    'icons/typescript.svg',
    'icons/react-native.svg'
  ];
</script>

<section id="about" class="panel p-5">
  <hr class="border-t border-gray-300 my-4" />
  <div class="about-wrapper">
    <h2 class="text-5xl font-bold leading-5 text-uppercase letter-spacing-minus-1 tracking-tighter">About me</h2>
    <div class="about-text text-2xl mt-4">
      <p class='leading-6'>
        Since I discovered programming six years ago, I have loved creating websites, making computer games, and coding solutions to solve real-world problems. I never thought that I might want to pursue it as a career in the future.
      </p>
      <p class='leading-6'>
        I graduated with a Master's Degree in Education. I've completed the Advanced Software Development certificate program.
      </p>
      <p class='leading-6'>
        In the past few years, I have learned and used React, JavaScript, Python, and Bootstrap to build the front-end. I also learned how to use Node, PHP, and Flask to implement the back-end.
      </p>
      <p class='leading-6'>
        I have over 50 different certificates of completion from <a aria-label="Visit LinkedIn Learning website" target="_blank" href="https://www.linkedin.com/learning/"><b>LinkedIn Learning</b></a>, <a aria-label="Visit Udemy" href="https://www.udemy.com/"><b>Udemy</b></a>, and <a target="_blank" aria-label="Visit Coursera" href="https://www.coursera.org/"><b>Coursera</b></a>, and I continually add new knowledge about new tech.
      </p>
      <p class='leading-6'>My current tech stack is below.</p>
    </div>
    <hr class="border-t border-gray-300 my-4" />
    <Carousel autoplay={2000}>
      {#each icons as icon, index (index)}
      <div class="stack-icon">
        <img src={icon} alt={`Icon ${index}`} />
      </div>
      {/each}
    </Carousel>
  </div>
</section>


<style>
  .about-wrapper {
    position: relative;
    align-items: flex-start;
    margin-inline: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    gap: 2rem;
    width: 100%;
    max-width: 60rem;
  }

  .about-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    text-align: left;
  }

  .stack-icon {
    width: 100%;
  }

  .stack-icon img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  p {
    font-family: 'Ubuntu', sans-serif;
    line-height: 1.5;
    font-weight: 500;
  }

  b {
    color: #7369f7;
  }
</style>


