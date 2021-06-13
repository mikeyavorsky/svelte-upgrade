<script>
	import { Router, Route, Link } from "svelte-routing";
	import Home from "./pages/Home.svelte";
	import RSVP from "./pages/RSVP.svelte";
	
	export let url = "";
</script>

<Router url="{url}">
	<nav>
		<Link to="/">Home</Link>
		<Link to="/rsvp">RSVP</Link>
	</nav>
	<div>
		<Route path="/rsvp" component="{RSVP}" />
		<Route path="/"><Home /></Route>
	</div>
</Router>

