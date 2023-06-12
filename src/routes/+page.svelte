<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export let data;

	onMount(() => {
		data.supabase.auth.onAuthStateChange((event, session) => {
			console.log(event, session);
			if (event === 'SIGNED_IN') {
				console.log('inif');
				// Redirect user to home page after sign in
				// goto('/account');
				window.location.href = '/account';
				// throw redirect(308, `/account`);
			}
		});
	});
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div class="row flex-center flex">
	<div class="col-6 form-widget">
		<Auth
			supabaseClient={data.supabase}
			view="sign_in"
			providers={['github', 'google']}
			redirectTo={`${data.url}/auth/callback`}
			showLinks={false}
			appearance={{ theme: ThemeSupa, style: { input: 'color: #fff' } }}
			additionalData={{ app: 'supabase-auth-ui' }}
		/>
	</div>
</div>
