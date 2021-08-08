<script>
  import { Router, Route, Link } from "svelte-routing";
  import Logotype from "../Logotype.svelte";

  import TransparentBackground from "../TransparentBackground.svelte";
</script>

<main>
  <h1>Schedule</h1>
  <TransparentBackground>
    <h2>Wednesday August 18th – The Day Before</h2>
    <ul>
      <li><strong>1:00 PM</strong> Nail appts at <a href="https://goo.gl/maps/Ta215zJWQAvcdCcW7">M Nail Salon at 478 South Ave, Whitman, MA 02382</a></li>
      <li><strong>3:00 PM</strong> “Rehearsal” at <a href="https://g.page/TheVillaatRidderCountryClub?share">the Villa</a></li>
      <li><strong>4:00 PM</strong> Check in to hotel after 4 PM</li>
      <li><strong>5:30 PM</strong> Dinner - Mike and I are making a reservation, <a href="https://docs.google.com/document/d/102yaZuJu6irHN1PolDk3AqP7YrelSQlNCDqGHERVou8/edit?usp=sharing">RSVP here</a>!</li>
    </ul>
    <h2>Thursday August 19th – Wedding Day!</h2>
    <ul>
      <li><strong>9:00 AM</strong> Hair and Makeup Begins at Quincy Marriott</li>
      <p>We will provide some breakfast.</p>
      <p>Notes: Make up is $50 and hairdos are $65-85 depending on what you have done (cheaper if just a blow out). Please bring cash!<br /><br />
      ** Please bring a foundation that you use/matches your skin just in case!</p>
      <li><strong>10:00 AM</strong> Breakfast at Rozafa’s in Quincy</li>
      <p>Everyone not getting hair and make up is invited, <a href="https://docs.google.com/document/d/102yaZuJu6irHN1PolDk3AqP7YrelSQlNCDqGHERVou8/edit?usp=sharing">add your name here</a>!</p>
      <li><strong>1:30 PM</strong> Allyson, Bridal Party, and Allyson’s parents leave Quincy Marriott</li>
      <li><strong>1:45 PM</strong> Mike, Groom’s Party, and Mike’s parents leave Quincy Marriott</li>
      <li><strong>2:00 PM</strong> Photographer and Florist arrive at the Villa</li>
      <p>Getting ready shots of the bridal party & first look</p>
      <p>Going to try to fit in as many wedding party shots as possible before the ceremony</p>
      <li><strong>3:30 PM</strong> Ceremony</li>
      <p>Ceremony is outdoors unless it rains or it’s too hot… keep all your fingers and toes crossed for perfect weather!</p>
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
