<script>
	import { Router, Route, Link } from "svelte-routing";
	import Home from "./pages/Home.svelte";
	import RSVPCount from "./pages/RSVPCount.svelte";
	import RSVPName from "./pages/RSVPName.svelte";
	import RSVPDetails from "./pages/RSVPDetails.svelte";
	import RSVPEnd from "./pages/RSVPEnd.svelte";
	import Hotel from "./pages/Hotel.svelte";
	import Schedule from "./pages/Schedule.svelte";
	import Registry from "./pages/Registry.svelte";
	import Directions from "./pages/Directions.svelte";
	import StyledMenu from './StyledMenu.svelte';
	import StyledLink from './StyledLink.svelte';

	export let url = "";
</script>

<Router url="{url}">
	<div>
		<Route path="/rsvp" component="{RSVPCount}" />
		<Route path="/rsvp-name" component="{RSVPName}" />
		<Route path="/rsvp-details" component="{RSVPDetails}" />
		<Route path="/rsvp-success" component="{RSVPEnd}" />
		<Route path="/hotel" component="{Hotel}" />
		<Route path="/schedule" component="{Schedule}" />
		<Route path="/directions" component="{Directions}" />
		<Route path="/registry" component="{Registry}" />
		<Route path="/"><Home /></Route>
	</div>	
	<StyledMenu>
		<Link to="/hotel"><StyledLink>Accommodation</StyledLink></Link>
		<Link to="/schedule"><StyledLink>Schedule</StyledLink></Link>
		<Link to="/directions"><StyledLink>Directions</StyledLink></Link>
		<Link to="/registry"><StyledLink>Registry</StyledLink></Link>
		<Link to="/rsvp"><StyledLink>RSVP</StyledLink></Link>
	</StyledMenu>
</Router>

