<script>
	import { Login } from 'sveltegram';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Login
	username="CapyTesterBot"
	requestAccess
	size="large"
	onauth={(data) => {
		console.log('User ID:', data.id);
	}}
/>
