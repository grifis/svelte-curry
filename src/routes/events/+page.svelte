<!-- src/routes/+page.svelte -->
<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { events } = data;
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div class="row flex-center flex">
	<div class="col-6 form-widget">
		<h1>イベント一覧</h1>
        <a href="/events/create">イベント作成はこちら</a>
		<ul>
			{#each events as event}
				<li>id: {event.id}</li>
				<li>name: {event.name}</li>
				<li>description: {event.description}</li>
			{/each}
		</ul>
	</div>
</div>
