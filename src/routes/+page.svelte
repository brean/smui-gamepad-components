<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { Label } from '@smui/button';
  import { VirtualJoystick, GamepadManager, KeyboardManager } from 'svelte-gamepad-virtual-joystick'
  let position: [x: number, y: number] = [0, 0];
  let presses = 0;
</script>

<VirtualJoystick
    style="background-color: rgba(0, 0, 0, 0);"
    bind:position
/>

<Button
  variant="raised"
  cssclass="my_button"
  onpressed={()=>{presses++}}
>
    You pressed {presses} times
</Button>

<GamepadManager></GamepadManager>
<KeyboardManager></KeyboardManager>


<style>
  :global {
    button.my_button {
      min-width: 150px !important;
      min-height: 150px;
    } 
  }
</style>