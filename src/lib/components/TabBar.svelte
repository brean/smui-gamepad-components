<script lang="ts" generics="TabKey extends Object | string | number">
  import TabBar from "@smui/tab-bar";
  import { onMount, type Snippet } from "svelte";
  import { GamepadButtons, PrevNextInputComponent, registerComponent, unregisterComponent, type PrevNextInput } from "svelte-gamepad-virtual-joystick";

  interface Props {
    tab: Snippet<[TabKey]>,
    onpressed?: () => boolean
    onhold?: () => void
    onrelease?: () => void
    disabled?: boolean
    tabs?: TabKey[];
    active?: TabKey | undefined;
    wrapFocus?: boolean  // prev of first is last, next of last is first.
    focussed?: number
    selectedIndex?: number
    inputMapping?: PrevNextInput
    context?: string[]
    requiresFocus?: boolean
    consumePress?: boolean
  };
  let {
    tab,
    tabs,
    active = $bindable(),
    onpressed = undefined,
    onhold = undefined,
    onrelease = undefined,
    disabled = false,
    wrapFocus = true,
    selectedIndex = $bindable(0),
    focussed = $bindable(0),
    inputMapping = {
      name: 'Tabbar',
      gamepad: -1,
      axes: [],
      sensitivity: 0.07, // sensitivity - at what value do we react to the axes movement?
      buttons: [GamepadButtons.DOWN],
      buttons_prev: [GamepadButtons.BUMPER_LEFT],
      buttons_next: [GamepadButtons.BUMPER_RIGHT],
      keys_prev: ['y'],
      keys_next: ['x'],
      keys: ['enter', 'r']  // activate
    },
    context=['default'],
    requiresFocus=false,
    consumePress=false
  }: Props = $props();

  let tabbarInputComponent: PrevNextInputComponent;
  let tabbar: TabBar<TabKey>;

  let _changeFocus = (direction: -1 | 1) => {
    if (!active || !tabs) return
    let next = tabs.indexOf(active) + direction
    if (wrapFocus && next < 0) {
      active = tabs[tabs.length - 1];
      return
    }
    if (wrapFocus && next >= tabs.length) {
      active = tabs[0];
      return
    }
    if (next >= 0 && next < tabs.length) {
      active = tabs[next];
    }
  } 

  onMount(() => {
    tabbarInputComponent = new PrevNextInputComponent(
      inputMapping, _changeFocus,
      tabbar.getElement(), requiresFocus, 
      onpressed, onhold, onrelease, consumePress);
    registerComponent(context, tabbarInputComponent);
    return () => {
      unregisterComponent(context, tabbarInputComponent);
    }
  });
</script>

<TabBar tabs={tabs} bind:active {tab} bind:this={tabbar}>
</TabBar>