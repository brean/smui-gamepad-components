<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { Joystick, InputManager, type ButtonInput, GamepadButtons, Icon, type ListInput } from 'svelte-gamepad-virtual-joystick';

  import Drawer, {
    AppContent,
    Content,
    Header,
    Title,
    Subtitle,
  } from '@smui/drawer';
  import List from '$lib/components/List.svelte'
  import { Item, Text } from '@smui/list';
  import Dialog, { Actions } from '@smui/dialog';
  import { Label } from '@smui/button';
  import TabBar from '@smui/tab-bar';
  import Tab from '@smui/tab';
  import Paper, { Content as PaperContent } from '@smui/paper';
  import { tick } from 'svelte';

  let activeBar = $state('First');

  let position: [x: number, y: number] = $state([0, 0]);
  let presses = $state(0);
  let firstButtonMapping: ButtonInput = $state({
    gamepad: -1,
    buttons: [GamepadButtons.UP],
    keys: ['x'],
    name: 'my button'
  });
  let toggleDrawerInput: ButtonInput = $state({
    gamepad: -1,
    buttons: [GamepadButtons.VIEW],
    keys: ['q'],
    name: 'toggle drawer'
  });
  let cancelMapping: ButtonInput = $state({
    gamepad: -1,
    buttons: [GamepadButtons.RIGHT],
    keys: ['q'],
    name: 'cancel'
  });
  let drawerMapping: ListInput = $state({
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
  let settingsDialog = $state(false)
  let navList: List;
</script>

<div class="drawer-container">
  <Drawer variant="dismissible" bind:open>
    <Header>
      <Title>Gamepad Drawer</Title>
      <Subtitle><span style="font-size: 10pt">
        Press <Icon 
          type='generic'
          input={drawerMapping.buttons[0]} />
        on gamepad or<br />
        <Icon 
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

Use 
{#if [0, 1].includes(joystickMapping.axes_x) && [0, 1].includes(joystickMapping.axes_y) }
<Icon 
    type='generic'
    input={'axis_left'}
    ></Icon>
{:else if [2, 3].includes(joystickMapping.axes_x) && [2, 3].includes(joystickMapping.axes_y) }
<Icon 
    type='generic'
    input={'axis_right'}></Icon>
{/if}
or the buttons
<Icon type='generic' input={joystickMapping.button_x_neg[0]} />
<Icon type='generic' input={joystickMapping.button_x_pos[0]} />
<Icon type='generic' input={joystickMapping.button_y_neg[0]} />
<Icon type='generic' input={joystickMapping.button_y_pos[0]} />
and the keys 
<Icon type='keyboard_mouse' input={joystickMapping.key_x_neg[0]} />
<Icon type='keyboard_mouse' input={joystickMapping.key_y_neg[0]} />
<Icon type='keyboard_mouse' input={joystickMapping.key_x_pos[0]} />
<Icon type='keyboard_mouse' input={joystickMapping.key_y_pos[0]} /> or the mouse/touch:<br />
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
<Icon 
  type='generic'
  input={firstButtonMapping.buttons[0]} />
on {controller_index(firstButtonMapping)},
<Icon
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

Press <Icon type='ps4'
            input={toggleDrawerInput.buttons[0]} />
on {controller_index(toggleDrawerInput)},
<Icon type='keyboard_mouse'
      input={toggleDrawerInput.keys[0]} /> or
just click/touch this button to toggle the drawer.<br />

<br />
<Button
  inputMapping={toggleDrawerInput}
  variant="raised"
  onpressed={() => {
    open = !open;
    if (open) {
      navList.focus();
    }
    return false;
  }}
>
    Toggle drawer<br />
</Button>
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
    <TabBar tabs={['First', 'Second', 'Third']} bind:active={activeBar}>
    {#snippet tab(tab)}
      <!-- Note: the `tab` property is required! -->
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    {/snippet}
  </TabBar>
  </Content>
    {#if active === 'First'}
        <Paper role="tabpanel" variant="unelevated">
          <PaperContent>Welcome to First! Press R1 to go to Second.</PaperContent>
        </Paper>
    {:else if active === 'Second'}
        <Paper role="tabpanel" variant="unelevated">
          <PaperContent>Welcome to second!</PaperContent>
        </Paper>
        {:else if active === 'Third'}
        <Paper role="tabpanel" variant="unelevated">
          <PaperContent>Welcome to third!</PaperContent>
        </Paper>
    {/if}
    <Actions>
      <Button inputMapping={cancelMapping} variant="outlined">
        <Label>quit</Label>
      </Button>
    </Actions>
</Dialog>