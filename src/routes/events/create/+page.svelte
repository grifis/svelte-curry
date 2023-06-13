<!-- src/routes/+page.svelte -->
<script lang="ts">
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div class="row flex-center flex">
	<div class="col-6 form-widget">
		<h1>イベント作成ページ</h1>
		<form action="?/create" method="post">
			<label for="name">イベント名</label>
			<input type="text" name="name" id="name" required />
			<label for="description">イベント説明</label>
			<input type="text" name="description" id="description" required />
			<button type="submit">作成</button>
		</form>
	</div>
</div>
