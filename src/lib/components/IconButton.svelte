<!-- Floating Action Button -->
<script lang="ts">
  import { 
    type ButtonInput,
    ButtonInputComponent,
    GamepadButtons,
    registerComponent, unregisterComponent,
    Hint
  } from "svelte-gamepad-virtual-joystick";

  import { onMount, type Snippet } from "svelte";
  import IconButton from "@smui/icon-button";
  import Ripple from "@smui/ripple";
  
  interface Props {
    extended?: boolean
    children?: Snippet
    disabled?: boolean
    onpressed?: () => void,
    onhold?: () => void,
    onrelease?: () => void,
    onpointerout?: () => void,
    style?: string,
    cssclass?: string
    color?: 'primary' | 'secondary'
    cssclassWrapper?: string,
    inputMapping?: ButtonInput
    context?: string[]
    requiresFocus?: boolean
  }

  let {
    extended = false,
    children = undefined,
    disabled = false,
    onpressed = undefined,  // only once when the pressed-state changes
    onhold = undefined,   // every event while the button is pressed
    onrelease = undefined,
    onpointerout = undefined,

    color = 'primary',
    cssclass = 'vbutton',
    style = '',
    inputMapping = {
      name: '',
      gamepad: -1,
      buttons: [GamepadButtons.DOWN],
      keys: ['e', ' ']
    },
    cssclassWrapper = 'button-wrapper',
    context = ['default'],
    // button is one of the few elements that can be activated globally by
    // default while other UI-components like Slider, List or Joystick
    // need to be focussed.
    requiresFocus=false
  }: Props = $props();

  let ripple = $state(false);

  let iconBtn: IconButton;
  let iconBtnInputElement: ButtonInputComponent;
  
  function _reripple() {
    // if the button is focussed _onpressed will be executed
    // but the ripple-effect will not restart
    ripple = true;
  }

  class SMUIButtonInputElement extends ButtonInputComponent {
    onpressed(): boolean {
      ripple = true;
      if (!iconBtn) return false;
      iconBtn.getElement().focus();
      // this click executes onpressed
      iconBtn.getElement().click();
      return false;
    }

    onrelease(): void {
      ripple = false;
      super.onrelease();
    }
  }

  onMount(() => {
    iconBtnInputElement = new SMUIButtonInputElement(
      inputMapping, iconBtn.getElement(), requiresFocus,
      onpressed, onhold, onrelease);
    registerComponent(context, iconBtnInputElement);
    return () => {
      if (!iconBtnInputElement) { return };
      unregisterComponent(context, iconBtnInputElement);
    }
  });
</script>

<div class={cssclassWrapper}>
<IconButton bind:this={iconBtn}
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
        unbounded: true,
        color,
      },
    ]
  ]}
  >
  {@render children?.()}

</IconButton>
  <Hint
    {context}
    keys={inputMapping.keys}
    buttons={inputMapping.buttons}
    style={'left: 50%;'}
    />

</div>

<style>
  .button-wrapper {
    position: relative;
    display: inline-block; /* Or 'block', depending on your layout */
  }

  .button-text {
    position: relative;
    z-index: 2;
  }

  .hint-container {
    top: 100%;
    left: 50%;
  }

  .hint {
    top: 20px;
  }
</style>