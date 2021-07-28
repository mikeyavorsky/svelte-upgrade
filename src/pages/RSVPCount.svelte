<script>
import { Router, Route, Link } from "svelte-routing";
import TransparentBackground from '../TransparentBackground.svelte';
import StyledLink from "../StyledLink.svelte"
import { count, current } from '../stores.js';

function advanceStep() {
  current += 1;
}
</script>

<main>
  <TransparentBackground>
    <form>
        <fieldset>
          {#if current === 0 || current === "final"}
          <legend>How many people are you RSVPing for?</legend>
          <div class="flex row">
            <p>
              <input type="radio" id="count-1" name="count" bind:group={$count} value={1}
             checked>
              <label for="count-1">1</label>
            </p>
            <p>
              <input type="radio" id="count-2" name="count" bind:group={$count} value={2}
               checked>
              <label for="count-2">2</label>
            </p>
            <p>
              <input type="radio" id="count-3+" name="count" bind:group={$count} value={3}
               checked>
              <label for="count-3+">3+</label>
            </p>
          </div>
          {/if}
          {#each [...Array(5).keys(count)] as rsvp}
            <legend>{$count} What's the name of your {#if rsvp === 0}first RSVP?{:else}RSVP #{$count}?{/if}</legend>
            <p>
              <label for="fullname">First and last name:</label>
              <input required id="fullname" name="fullname" type="text" bind:value={$rsvps[current].fullname} />
            </p>
          {/each}
        </fieldset>
        <StyledLink on:click="{advanceStep}">Next</StyledLink>
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
