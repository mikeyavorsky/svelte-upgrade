<nav>
  <slot></slot>
</nav>

<style>
  nav {
    background-color: var(--peach, #FFFFFF);
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  :global(nav > *) {
    margin: 0.5rem;
  }
</style>
