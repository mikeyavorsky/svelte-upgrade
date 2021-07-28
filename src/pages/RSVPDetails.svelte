<script>
  import { Router, Route, Link } from "svelte-routing";
  import Logotype from "../Logotype.svelte";
  import TransparentBackground from "../TransparentBackground.svelte";
</script>

<main>
  <TransparentBackground>
    <form>
        <fieldset>
          <legend>Will [you] be joining us?</legend>
          <div class="flex row">
            <p>
              <input type="radio" id="attending-yes" name="Attending" value="attending-yes"
               checked>
              <label for="attending-yes">Yes</label>
            </p>
            <p>
              <input type="radio" id="attending-no" name="Attending" value="attending-no"
               checked>
              <label for="attending-no">No</label>
            </p>
          </div>
        </fieldset>
        <fieldset>
          <legend>Do you have any dietary restrictions?</legend>
          <input type="text" />
        </fieldset>
        <fieldset>
          <legend>What's your meal preference?</legend>
          <p>
            <input type="radio" id="meal-beef" name="meal" value="meal-beef"
             checked>
            <label for="meal-beef">Beef</label>
          </p>
          <p>
            <input type="radio" id="meal-chicken" name="meal" value="meal-chicken"
             checked>
            <label for="meal-chicken">Chicken</label>
          </p>
        </fieldset>
        <fieldset>
          <legend>Will you be hanging out with us on Saturday?</legend>
          <p>
            <input type="radio" id="saturday-yes" name="Saturday" value="saturday-yes"
             checked>
            <label for="saturday-yes">Yes</label>
          </p>
          <p>
            <input type="radio" id="saturday-no" name="Saturday" value="saturday-no"
             checked>
            <label for="saturday-no">No</label>
          </p>
        </fieldset>
        <button id="next">Next</button>
        <button type="submit">Submit</button>
    </form>
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
