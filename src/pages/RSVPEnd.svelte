<script>
  import { Router, Route, Link } from "svelte-routing";
  import TransparentBackground from "../TransparentBackground.svelte";
</script>

<main>
  <TransparentBackground>
    <p>Success! Any more people? <Link to="/rsvp">Add more RSVPs here.</Link></p>
  </TransparentBackground>
</main>

<style>
  :global(:root) {
    --mustard: #f5a75f;
    --white: #ffffff;
    --red: #eb796e;
    --peach: #fdede0;
    --navy: #00008c;
  }

  :global(*) {
    box-sizing: border-box;
    font-family: "Orpheus Pro", serif;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    background: url("profile-full-top-01-copy+copy.jpg");
  }

  main {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
