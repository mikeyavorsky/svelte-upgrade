<script>
  import { Router, Route, Link } from "svelte-routing";
  import Logotype from "../Logotype.svelte";

  import TransparentBackground from "../TransparentBackground.svelte";
</script>

<main>
  <h1>Schedule</h1>
  <TransparentBackground>
    <div style="max-width: 56.25rem">
    <h2>Thursday August 19th – Wedding Day!</h2>
    <ul>
      <li><strong>3:30 PM</strong> Ceremony time</li>
      Ceremony is outdoors unless it rains or it’s too hot… keep all your fingers and toes crossed for perfect weather!
      <li><strong>4:00 PM</strong> Cocktail Hour</li>
      <li><strong>4:45 PM</strong> Introduction to the Reception</li>
      <li><strong>5:10 PM</strong> Toasts</li>
      <li><strong>5:15 PM</strong> Food</li>
      <li><strong>6:30 PM</strong> Dancing</li>
      <li><strong>9:00 PM</strong> Wrap Up</li> 
    </ul>
    <h2>Saturday August 21st</h2>
    <ul>
      <li><strong>1:00 PM – 4:00 PM</strong> Food, Fun, and Games at <a href="https://goo.gl/maps/X4gr1eJope89jULK6">King Oak Hill Park, Weymouth, MA</a></li>
    </ul>
    </div>
  </TransparentBackground>
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
    font-family: lust-script, serif;
    font-style: italic;
    font-size: 3rem;
    line-height: 3.6875rem;
    text-align: center;
    color: var(--red, #f5a75f);
  }
  
  h2 {
    font-family: lust-script-display, sans-serif;
  }
  
  ul, li {
    font-family: orpheuspro, serif;
    font-size: 1.2rem;
  }
</style>
