<nav>
  <slot></slot>
</nav>

<style>
  nav {
    background-color: var(--peach, #FFFFFF);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  :global(nav > *) {
    margin: 0.5rem;
  }
  
  @media screen and (min-width: 800px) {
    nav {
      margin: 4rem;
    }
  }
</style>
