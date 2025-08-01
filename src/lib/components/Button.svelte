<script lang="ts">
  import { fade } from "svelte/transition";
  import { 
    type ButtonInput,
    ButtonInputComponent,
    Icon, GamepadButtons,
    registerComponent, unregisterComponent
  } from "svelte-gamepad-virtual-joystick";

  import { onMount, type Snippet } from "svelte";
  import Button from "@smui/button";
  import Ripple from "@smui/ripple";
  
  interface Props {
    children?: Snippet
    disabled?: boolean
    onpressed?: (() => boolean),
    onhold?: (() => void),
    onrelease?: (() => void),
    onpointerout?: (() => void),
    style?: string,
    cssclass?: string
    color?: 'primary' | 'secondary'
    variant?: 'text' | 'raised' | 'unelevated' | 'outlined'
    inputMapping?: ButtonInput
    context?: string[]
    requiresFocus?: boolean
  }

  let {
    children = undefined,
    disabled = false,
    onpressed = undefined,  // only once when the pressed-state changes
    onhold = undefined,   // every event while the button is pressed
    onrelease = undefined,
    onpointerout = undefined,

    color = 'primary',
    cssclass = 'vbutton',
    variant = 'text',
    style = '',
    inputMapping = {
      name: '',
      gamepad: -1,
      buttons: [GamepadButtons.DOWN],
      keys: ['e', ' ']
    },
    context = ['default'],
    // button is one of the few elements that can be activated globally by
    // default while other UI-components like Slider, List or Joystick
    // need to be focussed.
    requiresFocus=false
  }: Props = $props();

  let ripple = $state(false);

  let btn: Button;
  let btnInputElement: ButtonInputComponent;
  
  function _reripple() {
    // if the button is focussed _onpressed will be executed
    // but the ripple-effect will not restart
    ripple = true;
  }

  class SMUIButtonInputElement extends ButtonInputComponent {
    onpressed(): boolean {
      const parentPressed = super.onpressed();
      ripple = true;
      if (!btn) return parentPressed;
      btn.getElement().focus();
      // this click executes onpressed
      btn.getElement().click();
      return parentPressed;
    }

    onrelease(): void {
      ripple = false;
      super.onrelease();
    }
  }

  onMount(() => {
    btnInputElement = new SMUIButtonInputElement(
      inputMapping, btn.getElement(), requiresFocus,
      onpressed, onhold, onrelease);
    registerComponent(context, btnInputElement);
    return () => {
      if (!btnInputElement) { return };
      unregisterComponent(context, btnInputElement);
    }
  });
</script>


<Button bind:this={btn} 
  {variant}
  {style}
  {disabled}
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
