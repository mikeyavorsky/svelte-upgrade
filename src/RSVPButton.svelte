<script>
function handleClick() {
  window.alert('clicked');
}
</script>

<button on:click={handleClick}>RSVP</button>

<style>
  button {
    background: #eb796e;
    border-radius: 8px;
    border: 1px solid transparent;
    filter: drop-shadow(1px 4px 4px #963f36);
    font-family: Merriweather;
    font-style: normal;
    font-weight: 900;
    color: var(--white, #FFFFFF);
  }
</style>
