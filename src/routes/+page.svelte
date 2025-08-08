<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { Label as ButtonLabel, Icon } from '@smui/button';
  import { 
    type ButtonInput, 
    type PrevNextInput, 
    GamepadButtons, 
    InputManager, 
    Icon as GamepadIcon, 
    VirtualButton, 
    Joystick, 
    component_state, 
    focusPreviousElement} from 'svelte-gamepad-virtual-joystick';

  import Drawer, {
    AppContent,
    Content,
    Header,
    Title,
    Subtitle,
  } from '@smui/drawer';
  import List from '$lib/components/List.svelte'
  import { Item, Text } from '@smui/list';
  import Snackbar, { Label as SnackbarLabel } from  '@smui/snackbar';
  import Dialog, { Actions } from '@smui/dialog';
  import TabBar from '$lib/components/TabBar.svelte';
  import Tab, { Label as TabLabel } from '@smui/tab';
  import Paper, { Content as PaperContent } from '@smui/paper';
  import { onMount } from 'svelte';
  import Slider from '$lib/components/Slider.svelte';
  import Fab from '$lib/components/Fab.svelte';
    import IconButton from '$lib/components/IconButton.svelte';

  let activeBar = $state('First');

  let position: [x: number, y: number] = $state([0, 0]);
  let presses = $state(0);
  const hintMapping = {
    name: 'Hint',
    gamepad: -1,
    buttons: [GamepadButtons.VIEW],
    keys: ['h']
  }
  let firstButtonMapping: ButtonInput = $state({
    gamepad: -1,
    buttons: [GamepadButtons.UP],
    keys: ['x'],
    name: 'my button'
  });
  let toggleDrawerInput: ButtonInput = $state({
    gamepad: -1,
    buttons: [GamepadButtons.OPTIONS],
    keys: ['q'],
    name: 'toggle drawer'
  });
  let cancelMapping: ButtonInput = $state({
    gamepad: -1,
    buttons: [GamepadButtons.RIGHT],
    keys: ['q'],
    name: 'cancel'
  });
  let drawerMapping: PrevNextInput = $state({
    name: 'List',
    gamepad: -1,
    axes: [1],
    sensitivity: 0.05,
    buttons: [GamepadButtons.DOWN],
    buttons_prev: [GamepadButtons.DPAD_UP],
    buttons_next: [GamepadButtons.DPAD_DOWN],
    keys_prev: ['w'],
    keys_next: ['s'],
    keys: [' ', 'r']  // activate
  })
  let joystickMapping = {
    name: 'my_joystick',
    gamepad: -1,
    axes_x: 2,
    axes_y: 3,
    key_x_pos: ['l'],
    key_x_neg: ['j'],
    key_y_pos: ['k'],
    key_y_neg: ['i'],
    button_x_pos: [GamepadButtons.DPAD_RIGHT], 
    button_x_neg: [GamepadButtons.DPAD_LEFT],
    button_y_pos: [GamepadButtons.DPAD_DOWN], 
    button_y_neg: [GamepadButtons.DPAD_UP],
    deadzoneX: 0.07,
    deadzoneY: 0.07,
    invert_x: false,
    invert_y: false
  }

  function controller_index(mapping: ButtonInput): string {
    return mapping.gamepad === -1 ? 
      'any connected controller' :
      `The controller with id "${mapping.gamepad}"`;
  }

  let open = $state(false);
  
  const options = [
    'Main',
    'Second',
    'Third',
    'Settings',
    'Fifth',
  ]

  let selectionIndex = $state(0);
  let active = $state(options[0]);
  let settingsDialog: any = $state(false);
  let navList: List;
  let hintInfo: Snackbar;

  onMount(() => {
    hintInfo.open();
  });
</script>

<VirtualButton
  context={['default']}
  onpressed={() => {
    // show all hints
    component_state.showHints = !component_state.showHints;
  }}
  inputMapping={hintMapping}
></VirtualButton>

<div class="drawer-container">
  <Drawer variant="dismissible" bind:open>
    <Header>
      <Title>Gamepad Drawer</Title>
      <Subtitle><span style="font-size: 10pt">
        Press <GamepadIcon 
          type='generic'
          input={drawerMapping.buttons[0]} />
        on gamepad or<br />
        <GamepadIcon 
          type='keyboard_mouse'
          input={drawerMapping.keys[0]} />
        on keyboard to select.</span></Subtitle>
    </Header>
    <Content>
      <List 
        inputMapping={drawerMapping}
        bind:selectedIndex={selectionIndex}
        onpressed={() => {
          active = options[selectionIndex];
          if (options[selectionIndex] === 'Settings') {
            settingsDialog = true;
            activeBar = 'First';
          }
          return false;
        }}
        bind:this={navList}
      >
        {#each options as item, i}
        <Item
          onSMUIAction={() => {
            selectionIndex = i;
            if (options[selectionIndex] === 'Settings') {
              settingsDialog = true;
              activeBar = 'First';
            }
          }}
          selected={selectionIndex === i}
        >
          <Text>
            {item}
          </Text>
        </Item>
        {/each}
      </List>
    </Content>
  </Drawer>

  <AppContent class="app-content">
    <main class="main-content">

<div class="mdc-typography--body1">

<IconButton
  inputMapping={toggleDrawerInput}
  onpressed={() => {
    open = !open;
    if (open) {
      navList.focus();
    }
    return false;
  }}
>
  <Icon class="material-icons">menu</Icon>
</IconButton> &nbsp;

Press <GamepadIcon type='ps4'
            input={toggleDrawerInput.buttons[0]} />
on {controller_index(toggleDrawerInput)},
<GamepadIcon type='keyboard_mouse'
      input={toggleDrawerInput.keys[0]} /> or
just click/touch this button to toggle the drawer.<br />

<br />

Use 
{#if [0, 1].includes(joystickMapping.axes_x) && [0, 1].includes(joystickMapping.axes_y) }
<GamepadIcon 
    type='generic'
    input={'axis_left'}
    ></GamepadIcon>
{:else if [2, 3].includes(joystickMapping.axes_x) && [2, 3].includes(joystickMapping.axes_y) }
<GamepadIcon 
    type='generic'
    input={'axis_right'}></GamepadIcon>
{/if}
or the buttons
<GamepadIcon type='generic' input={joystickMapping.button_x_neg[0]} />
<GamepadIcon type='generic' input={joystickMapping.button_x_pos[0]} />
<GamepadIcon type='generic' input={joystickMapping.button_y_neg[0]} />
<GamepadIcon type='generic' input={joystickMapping.button_y_pos[0]} />
and the keys 
<GamepadIcon type='keyboard_mouse' input={joystickMapping.key_x_neg[0]} />
<GamepadIcon type='keyboard_mouse' input={joystickMapping.key_y_neg[0]} />
<GamepadIcon type='keyboard_mouse' input={joystickMapping.key_x_pos[0]} />
<GamepadIcon type='keyboard_mouse' input={joystickMapping.key_y_pos[0]} /> or the mouse/touch:<br />
<Joystick
    inputMapping={joystickMapping}
    style="background-color: rgba(0, 0, 0, 0);"
    bind:position
/>
<div style="position: relative; left: 210px; top: -200px; max-width: 300px;">
X: {position[0]}<br />
Y: {position[1]}
</div>

Press
<GamepadIcon 
  type='generic'
  input={firstButtonMapping.buttons[0]} />
on {controller_index(firstButtonMapping)},
<GamepadIcon
  type='keyboard_mouse'
  input={firstButtonMapping.keys[0]} /> or
just click/touch to press this button:<br />

<Button
  inputMapping={firstButtonMapping}
  variant="raised"
  cssclass="my_button"
  onpressed={()=>{
    presses++;
    return false;
  }}
><br />
    You pressed {presses} time{presses !== 1 ? 's' : ''}.<br />
</Button><br />

<div style:width="300px">
<Slider step={10} value={60}>
</Slider>
</div>
<div style:width="300px">
<Slider step={10} value={60} onpressed={() => {focusPreviousElement();}}>
</Slider>
</div>
<br />

</div>

    </main>
  </AppContent>
</div>

<InputManager />


<style lang="scss">
  @use '@material/typography/mdc-typography';
  :global {
    button.my_button {
      min-width: 150px !important;
    } 
  }
</style>

<Dialog bind:open={settingsDialog}>
  <Content id="simple-content">
    <div style="min-height: 120px">
      <TabBar tabs={['First', 'Second', 'Third']} bind:active={activeBar}>
        {#snippet tab(tab: any)}
          <Tab {tab}>
            <TabLabel>{tab}</TabLabel>
          </Tab>
        {/snippet}
      </TabBar>
    
      {#if activeBar === 'First'}
        <Paper role="tabpanel" variant="unelevated">
          <PaperContent>Welcome to First! Press <Icon type='generic' input={GamepadButtons.BUMPER_RIGHT}></Icon> to go to Second.</PaperContent>
        </Paper>
      {:else if activeBar === 'Second'}
        <Paper role="tabpanel" variant="unelevated">
          <PaperContent>Welcome to second!</PaperContent>
        </Paper>
      {:else if activeBar === 'Third'}
        <Paper role="tabpanel" variant="unelevated">
          <PaperContent>Welcome to third!</PaperContent>
        </Paper>
      {/if}
    </div>
  </Content>
    <Actions>
      <Button inputMapping={cancelMapping} variant="outlined">
        <ButtonLabel>quit</ButtonLabel>
      </Button>
    </Actions>
</Dialog>

<Snackbar bind:this={hintInfo}>
  <SnackbarLabel>
    <GamepadIcon 
      type="keyboard_mouse" 
      input={hintMapping.keys[0]}></GamepadIcon>
    or 
    <GamepadIcon
      type="ps4"
      input={hintMapping.buttons[0]}></GamepadIcon>
    toggle help.
  </SnackbarLabel>
</Snackbar>