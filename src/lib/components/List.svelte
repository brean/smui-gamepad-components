<script lang="ts">
  import { ListBase, type ListInput } from "svelte-gamepad-virtual-joystick";
  import { setContext, type Snippet } from "svelte";
  import List, { type SMUIListItemAccessor } from "@smui/list";

  interface Props {
    children?: Snippet
    twoLine?: boolean
    onpressed?: () => void
    disabled?: boolean
    wrapFocus?: boolean  // prev of first is last, next of last is first.
    style?: string
    cssclass?: string
    focussed?: number
    selectedIndex?: number
    input_mapping?: ListInput
  }

  let {
    children = undefined,
    twoLine = false,
    onpressed = () => {},
    disabled = false,
    wrapFocus = true,
    style = '',
    cssclass = 'vlist',
    selectedIndex = $bindable(0),
    focussed = $bindable(0),
    input_mapping = {
      name: 'List',
      gamepad: -1,
      gamepad_axes: [1],
      gamepad_axes_sens: 0.05, // sensitivity - at what value do we react to the axes movement?
      gamepad_buttons: [0],
      gamepad_prev_buttons: [12],  // up
      gamepad_next_buttons: [13],  // down
      // we do NOT use ArrowUp/ArrowDown as those are already implemented by
      // SMUI itself
      keyboard_prev_keys: ['w'],
      keyboard_next_keys: ['s'],
      keyboard_keys: ['e']
    }
  }: Props = $props();

  let lst:List;

  const getListChildren = () => {
    // FIXME: filter out all non-SMUI-Elements
    return lst.getElement().children
  }

  const changeFocus = (direction: 1 | -1) => {
    const focussed = lst.getFocusedItemIndex();
    let next = focussed+direction;
    if (wrapFocus && next < 0) {
      lst.focusItemAtIndex(getListChildren().length-1);
      return
    }
    lst.focusItemAtIndex(next);
    if (wrapFocus && focussed === lst.getFocusedItemIndex()) {
      lst.focusItemAtIndex(0);
    }
  }

  const _onpressed = () => {
    selectedIndex = lst.getFocusedItemIndex();
    if (onpressed) {
      onpressed();
    }
  }
</script>

<ListBase
  {changeFocus}
  onpressed={_onpressed}
  {disabled}
  {input_mapping}
></ListBase>
<List 
    {twoLine}
    {style}
    {wrapFocus}
    {selectedIndex}
    class={cssclass}
    singleSelection
    bind:this={lst}
  >
  {@render children?.()}
</List>