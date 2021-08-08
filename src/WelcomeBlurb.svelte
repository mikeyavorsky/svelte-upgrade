<script>
  import { Link } from "svelte-routing";
  import StyledLink from "./StyledLink.svelte"
</script>

<p>
  We’re all vaccinated! Please check out the <Link to="/schedule"><span>schedule</span></Link> for our Friday & Saturday
  events. Looking forward to seeing you!
</p>

<style>
p {
  font-family: "orpheuspro", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 3.125rem;
  line-height: 121.3%;
  /* or 61px */
  
  /* Red */
  color: var(--red, #eb796e);
}  

span {
  font-family: orpheuspro;
  text-align: center;
  text-decoration-line: underline;

  /* Red */
  color: var(--red, #eb796e);
}
</style>
