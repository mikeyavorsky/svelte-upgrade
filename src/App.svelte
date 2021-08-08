<script>
	import { Router, Route, Link } from "svelte-routing";
	import Home from "./pages/Home.svelte";
	import Hotel from "./pages/Hotel.svelte";
	import Schedule from "./pages/Schedule.svelte";
	import FullSchedule from "./pages/FullSchedule.svelte";
	import Registry from "./pages/Registry.svelte";
	import Directions from "./pages/Directions.svelte";
	import StyledMenu from './StyledMenu.svelte';
	import StyledLink from './StyledLink.svelte';

	export let url = "";
</script>
<head>
	<link rel="stylesheet" href="https://use.typekit.net/jkl7ins.css">
</head>
<Router url="{url}">
	<div>
		<Route path="/hotel" component="{Hotel}" />
		<Route path="/schedule" component="{Schedule}" />
		<Route path="/fullschedule" component="{FullSchedule}" />
		<Route path="/directions" component="{Directions}" />
		<Route path="/registry" component="{Registry}" />
		<Route path="/"><Home /></Route>
	</div>	
	<div class="right">
		<StyledMenu>
			<a href="https://www.marriott.com/events/start.mi?id=1596217463157&key=GRP"><StyledLink>Accommodation</StyledLink></a>
			<Link to="/schedule"><StyledLink>Schedule</StyledLink></Link>
			<Link to="/directions"><StyledLink>Directions</StyledLink></Link>
			<a href="https://www.crateandbarrel.com/gift-registry/allyson-shifley-and-mike-yavorsky/r6230715 "><StyledLink>Registry</StyledLink></a>
			<Link to="/"><StyledLink>Home</StyledLink></Link>
		</StyledMenu>
	</div>
</Router>

<style>
@media screen and (min-width: 800px) {
	div.right {
		width: calc(40%);
		max-width: 37.5rem;
		margin-left: calc(60% - 8rem);
		margin-right: 4rem;
		margin-top: 4rem;
		margin-bottom: 4rem;
	}
}
</style>

