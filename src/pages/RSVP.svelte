<script>
  import { Router, Route, Link } from "svelte-routing";
  import EventBlurb from "../EventBlurb.svelte";
  import Logotype from "../Logotype.svelte";
  import RSVPButton from "../RSVPButton.svelte";
  import WelcomeBlurb from "../WelcomeBlurb.svelte";
  import TransparentBackground from "../TransparentBackground.svelte";
  import StyledMenu from "../StyledMenu.svelte";
  import StyledLink from "../StyledLink.svelte";

  export let name;
</script>

<main>
  <Logotype />
  <EventBlurb />
  <TransparentBackground>
    <WelcomeBlurb />
  </TransparentBackground>
  <StyledMenu>
    <StyledLink>Accommodation</StyledLink>
    <StyledLink>Schedule</StyledLink>
    <StyledLink>Directions</StyledLink>
    <StyledLink>Registry</StyledLink>
    <StyledLink>RSVP</StyledLink>
  </StyledMenu>
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
