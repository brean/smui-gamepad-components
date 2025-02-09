<script lang="ts">
  import type { VirtualButtonInput } from "svelte-gamepad-virtual-joystick";
  import { ButtonBase } from "svelte-gamepad-virtual-joystick";
  import { type Snippet } from "svelte";
  import Button from "@smui/button";
  import Ripple from "@smui/ripple";
  
  interface Props {
    children?: Snippet
    color?: 'primary' | 'secondary'
    cssclass?: string
    variant?: 'text' | 'raised' | 'unelevated' | 'outlined'
    disabled?: boolean
    onpressed?: (() => void),
    onhold?: (() => void),
    onrelease?: (() => void),
    pressed?: boolean,
    style?: string,
    input_mapping?: VirtualButtonInput
  }

  let {
    children = undefined,
    color = 'primary',
    cssclass = 'vbutton',
    variant = 'text',
    disabled = false,
    onpressed = undefined,  // only once when the pressed-state changes
    onhold = undefined,   // every event while the button is pressed
    onrelease = undefined,
    pressed = false,
    style = '',
    input_mapping = {
      name: '',
      gamepad: -1,
      gamepad_buttons: [0],
      keyboard_keys: ['e', ' ']
    }
  }: Props = $props();

  let ripple = $state(false);

  let btn: Button;
  
  function _reripple() {
    // if the button is focussed _onpressed will be executed
    // but the ripple-effect will not restart
    ripple = true;
  }

  function _onpressed() {
    ripple = true;
    btn.getElement().focus();
    // this click executes onpressed
    btn.getElement().click();
  }

  function _onrelease() {
    ripple = false;
    if (onrelease) {
      return onrelease();
    }
  }
</script>

<ButtonBase 
    {disabled}
    onpressed={_onpressed}
    onhold={onhold}
    onrelease={_onrelease}
    {input_mapping}
    bind:pressed
  >
    
  <Button bind:this={btn} 
    {variant}
    {style}
    class={cssclass}
    ripple={false}
    onclick={onpressed}
    onkeydowncapture={_reripple}
    use={[
      // overwrite original ripple with our own
      [
        Ripple,
        {
          active: ripple,
          unbounded: false,
          color,
        },
      ]
    ]}
    >
    {@render children?.()}
  </Button>
 </ButtonBase>
