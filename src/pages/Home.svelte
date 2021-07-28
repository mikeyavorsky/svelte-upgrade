<script>
	import { Router, Route, Link } from "svelte-routing";
	import EventBlurb from '../EventBlurb.svelte';
	import Logotype from '../Logotype.svelte';
	import RSVPButton from '../RSVPButton.svelte';
	import WelcomeBlurb from '../WelcomeBlurb.svelte';
	import TransparentBackground from '../TransparentBackground.svelte';
	import StyledMenu from '../StyledMenu.svelte';
	import StyledLink from '../StyledLink.svelte';
</script>

<main>
	<Logotype />
	<EventBlurb />
		<Link to="/rsvp"><RSVPButton /></Link>
	<TransparentBackground>
		<WelcomeBlurb />
	</TransparentBackground>
</main>

<style>
:global(:root) {
	--mustard: #F5A75F;
	--white: #FFFFFF;
	--red: #EB796E;
	--peach: #FDEDE0;
	--navy: #00008C;
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

:global(div.flex) {
	display: flex;
	gap: 0.25rem;
}

:global(div.flex.column) {
	flex-direction: column;
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