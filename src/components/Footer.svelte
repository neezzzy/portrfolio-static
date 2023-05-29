<script lang="ts">
  import SocialIcon from './SocialIcon.svelte';
  export let date: number;
</script>

<footer class="footer-section pt-5 mt-5 bg-gray-800 text-white" id="footer">
  <div class="container flex flex-col items-center">
    <h3 class="text-center text-2xl">You can also find me here</h3>
    <div class="flex flex-row justify-center mt-4">
      <!-- github -->
      <SocialIcon icon="icons/github.svg" href="https://github.com/neezzzy" />
      <SocialIcon icon="icons/email.svg" href="mailto:yottabitesapps@gmail.com" />
      <SocialIcon icon="icons/linkedin.svg" href="https://www.linkedin.com/in/nizamovruslan/" />
    </div>
    <!-- Copyright -->
    <div class="text-center text-2xl p-3">Made by Russell Nizamov © {date}</div>
  </div>
</footer>

<style>
  footer {
    justify-content: center;
    display: flex;
    align-items: center;
    bottom: 0;
    width: 100%;
  }

  .footer-section {
    background-color: #242424;
  }
</style>
