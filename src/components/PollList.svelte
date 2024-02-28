<script>
  import { fade, slide, scale } from "svelte/transition";
  import PollDetails from "./PollDetails.svelte";
  import PollStore from "../stores/PollStore.js";
  import { flip } from "svelte/animate";
</script>

<div class="poll-list">
  <!-- automatic subscription and un-subscription -->
  {#each $PollStore as poll (poll.id)}
    <!-- transition cannot be applied directly to the components -->
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
  {:else}
    <div>No Poll to show!</div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
