<script>
  import { Router, Route, Link } from "svelte-routing";
  import TransparentBackground from '../TransparentBackground.svelte';
  import StyledLink from "../StyledLink.svelte"
  import { count, current, rsvps } from '../stores.js';
  </script>
  
  <main>
    <TransparentBackground>
      <form>
        <fieldset>
          <legend>{$count} What's the name of your {#if $current === 0}first RSVP?{:else}RSVP #{$count}?{/if}</legend>
          <p>
            <label for="fullname">First and last name:</label>
            <input required id="fullname" name="fullname" type="text" bind:value={$rsvps[current].fullname} />
          </p>
        </fieldset>
        <Link to="/rsvp-name"><StyledLink>Next</StyledLink></Link>
      </form>
    </TransparentBackground>
  </main>
  
  <style>
  main {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-right: 1rem;
  }
  </style>
  