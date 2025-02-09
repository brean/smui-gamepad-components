<script lang="ts">
  import type { VirtualListInput } from "svelte-gamepad-virtual-joystick";
  import { type Snippet } from "svelte";
  import List from "@smui/list";
  import Ripple from "@smui/ripple";
  // List
  // focusItemAtIndex

  interface Props {
    children?: Snippet
    twoLine?: boolean
    onpressed?: (item: string, index: number) => void
    oncancel?: () => void
    disabled?: boolean
    wrap?: boolean  // prev of first is last, next of last is first.
    style?: string
    cssclass?: string
    hovering?: number
    selected?: number
    input_mapping?: VirtualListInput
  }

  let {
    children = undefined,
    twoLine = false,
    onpressed = (item: string, index: number) => {},
    oncancel = () => {},
    disabled = false,
    wrap = true,
    style = '',
    cssclass = 'vlist',
    selected = 0,
    hovering = 0,
    input_mapping = {
      name: 'Virtual List',
      gamepad: -1,
      gamepad_axes: [1],
      gamepad_axes_sens: 0.05, // sensitivity - at what value do we react to the axes movement?
      gamepad_buttons: [0],
      gamepad_cancel_buttons: [9],
      gamepad_prev_buttons: [12],  // up
      gamepad_next_buttons: [13],  // down
      keyboard_prev_keys: ['ArrowUp', 'w'],
      keyboard_next_keys: ['ArrowDown', 's'],
      keyboard_keys: ['e'],
      keyboard_cancel_keys: ['Escape', 'q']
    }
  }: Props = $props();
</script>

<List {twoLine}>
  {@render children?.()}
</List>