<script lang="ts">
	import Header from "./Header.svelte"

	import { ModeWatcher } from "mode-watcher"
	import "../../app.css"

	const { children } = $props()
</script>

<ModeWatcher />
<div class="grid h-dvh grid-rows-[auto_1fr] gap-2">
	<Header />
	<main>
		{@render children()}
	</main>
</div>
