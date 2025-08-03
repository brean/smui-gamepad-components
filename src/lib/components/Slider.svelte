<script lang="ts">
  import { onMount, type Snippet } from "svelte";

  import { 
    GamepadButtons,
    Hint,
    type SliderInput,
    SliderInputComponent,
    focusNextElement,
    registerComponent, 
    unregisterComponent
  } from "svelte-gamepad-virtual-joystick";

  import Slider from "@smui/slider";

  interface Props {
    onpressed?: () => void,
    style?: string
    value?: number
    min?: number
    max?: number
    step?: number
    disabled?: boolean
    inputMapping?: SliderInput
    context?: string[]
    requiresFocus?: boolean
  }
  let {
    value = $bindable(50),
    onpressed = () => {focusNextElement();},
    style = '',
    min = 0,
    max = 100,
    step = 10,
    disabled = false,
    inputMapping = {
      name: 'Slider',
      gamepad: -1,
      sensitivity: 0.05,
      axes: 0,
      buttons: [GamepadButtons.DOWN], // activate/focus next component
      buttons_neg: [GamepadButtons.DPAD_LEFT],
      buttons_pos: [GamepadButtons.DPAD_RIGHT],
      keys_pos: ['d'],
      keys_neg: ['a'],
      keys: ['e', 'enter'],  // activate/focus next component
      invert: false
    },
    context=['default'],
    requiresFocus = true
  }: Props = $props();

  let slider: Slider;

  onMount(() => {
    const slid = new SliderInputComponent(
      inputMapping,
      (_value: number) => { value = _value; },
      () => {return value;},
      min, max, step,
      slider.getElement(), requiresFocus,  onpressed);
    registerComponent(context, slid);
    return () => {
      unregisterComponent(context, slid);
    }
  })
</script>

<Slider
  bind:value={value as any}
  min={min as any}
  max={max as any}
  step={step as any}
  style={style as any}
  disabled={disabled as any}
  bind:this={slider}>
</Slider>

<div class="vslider">
  <Hint
    text="" {context}
    keys={inputMapping.keys_neg}
    buttons={inputMapping.buttons_neg}
    style={"position: absolute; top: 0px; left: 20px;"}
    />
  <div style="position: absolute; left: 100%;">
    <Hint
      text="" {context}
      keys={inputMapping.keys_pos}
      buttons={inputMapping.buttons_pos}
      style={"position: relative; top: 0px; right: 110px;"}
      />
  </div>
</div>

<style>
  .vslider {
    position: relative;
    width: 100%;
    margin-left: 40px;
    margin-right: 40px;
  }
</style>