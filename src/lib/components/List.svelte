<script lang="ts">
  import { 
    GamepadButtons,
    type PrevNextInput,
    PrevNextInputComponent,
    registerComponent, unregisterComponent,
    component_state,
    Hint
  } from "svelte-gamepad-virtual-joystick";
  import { onMount, tick, type Snippet } from "svelte";
  import List from "@smui/list";

  let wrapper:HTMLElement;

  interface Props {
    children?: Snippet
    twoLine?: boolean
    onpressed?: () => boolean
    onhold?: () => void
    onrelease?: () => void
    disabled?: boolean
    wrapFocus?: boolean  // prev of first is last, next of last is first.
    style?: string
    cssclass?: string
    focussed?: number
    selectedIndex?: number
    inputMapping?: PrevNextInput
    context?: string[]
    requiresFocus?: boolean
    consumePress?: boolean
  }

  let {
    children = undefined,
    twoLine = false,
    onpressed = undefined,
    onhold = undefined,
    onrelease = undefined,
    disabled = false,
    wrapFocus = true,
    style = '',
    cssclass = 'vlist',
    selectedIndex = $bindable(0),
    focussed = $bindable(0),
    inputMapping = {
      name: 'List',
      gamepad: -1,
      axes: [1],
      sensitivity: 0.05, // sensitivity - at what value do we react to the axes movement?
      buttons: [GamepadButtons.DOWN],
      buttons_prev: [GamepadButtons.DPAD_UP],
      buttons_next: [GamepadButtons.DPAD_DOWN],
      keys_prev: ['w'],
      keys_next: ['s'],
      keys: ['enter', 'r']  // activate
    },
    context=['default'],
    requiresFocus=true,
    consumePress=false
  }: Props = $props();

  let lst:List;

  export function focus() {
    tick().then(() => {
      if (!lst) return;
      lst.getElement().focus();
    });
  }

  const getListChildren = (list: List) => {
    // FIXME: filter out all non-SMUI-Elements
    return list.getElement().children
  }

  const _changeFocus = (direction: 1 | -1) => {
    if (!lst) return;
    const focussed = lst.getFocusedItemIndex() || 0;
    let next = focussed+direction;
    if (wrapFocus && next < 0) {
      lst.focusItemAtIndex(getListChildren(lst).length-1);
      return
    }
    lst.focusItemAtIndex(next);
    if (wrapFocus && focussed === lst.getFocusedItemIndex()) {
      lst.focusItemAtIndex(0);
    }
  }

  const _onpressed = () => {
    if (lst) {
      selectedIndex = lst.getFocusedItemIndex() || 0;
    }
    if (onpressed) {
      onpressed();
    }
    return true;
  }
  let lstInputComponent: PrevNextInputComponent;
  onMount(() => {
    lstInputComponent = new PrevNextInputComponent(
      inputMapping, _changeFocus,
      lst.getElement(), requiresFocus, 
      _onpressed, onhold, onrelease, consumePress);
    registerComponent(context, lstInputComponent);
    return () => {
      unregisterComponent(context, lstInputComponent);
    }
  })
</script>

<div 
  bind:this={wrapper}
  class="gamepad-list-wrapper"
  onfocusin={() => {
    component_state.activeComponents.push(lstInputComponent);
  }}
  onfocusout={() => {
    if (component_state.activeComponents.includes(lstInputComponent)) {
      component_state.activeComponents.splice(
        component_state.activeComponents.indexOf(lstInputComponent), 1)
    }
  }}
>

<Hint
  text="↑" {context}
  keys={inputMapping.keys_prev}
  buttons={inputMapping.buttons_prev}
  style={'left: 50%;'}
  />

<Hint 
  {context}
  keys={inputMapping.keys}
  buttons={inputMapping.buttons}
  style={'left: 50%; top: 25%'}
  />

<List 
  tabindex={0}
  role="listbox" 
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

<Hint 
  text="↓" {context}
  keys={inputMapping.keys_next}
  buttons={inputMapping.buttons_next}
  style={'left: 50%;'}
  />
</div>