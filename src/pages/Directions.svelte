<script>
  import { Router, Route, Link } from "svelte-routing";
  import Logotype from "../Logotype.svelte";

  import TransparentBackground from "../TransparentBackground.svelte";
</script>

<main>
  <h1>Directions</h1>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.1198624540157!2d-70.91650603424827!3d42.062050111860884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e49a2cd21e5207%3A0x4ce2d376c7bb228b!2sThe%20Villa%20at%20Ridder%20Country%20Club!5e0!3m2!1sen!2sus!4v1628440410455!5m2!1sen!2sus" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: var(--mustard, #FE936F);
    font-family: lust-script, serif;
    font-weight: bold;
    line-height: 121.3%;
    text-align: center;
    font-size: 4em;
    margin: 0;
  }
</style>
