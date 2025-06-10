<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { Joystick, GamepadManager, KeyboardManager, type ButtonInput } from 'svelte-gamepad-virtual-joystick';

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

  let activeBar = $state('First');

  let position: [x: number, y: number] = $state([0, 0]);
  let presses = $state(0);
  let firstButtonMapping: ButtonInput = $state({
    gamepad: -1,
    gamepad_buttons: [0],
    keyboard_keys: ['e'],
    name: 'my button'
  });
  let toggleDrawerInput: ButtonInput = $state({
    gamepad: -1,
    gamepad_buttons: [9],
    keyboard_keys: ['q'],
    name: 'toggle drawer'
  });
  let cancelMapping: ButtonInput = $state({
    gamepad: -1,
    gamepad_buttons: [1],
    keyboard_keys: ['q'],
    name: 'cancel'
  });

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

</script>

<div class="drawer-container">
  <Drawer variant="dismissible" bind:open>
    <Header>
      <Title>Gamepad Drawer</Title>
      <Subtitle><span style="font-size: 10pt">Press x on gamepad / q on keyboard to select an item.</span></Subtitle>
    </Header>
    <Content>
      <List bind:selectedIndex={selectionIndex} onpressed={() => {
        active = options[selectionIndex];
      }}>
        {#each options as item, i}
        <Item
          onSMUIAction={() => {
            selectionIndex = i;
            console.log(selectionIndex);
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

Press button "{firstButtonMapping.gamepad_buttons[0]}" on {controller_index(firstButtonMapping)}, 
'{firstButtonMapping.keyboard_keys[0]}' on your keyboard or 
just click/touch to press this button:<br />

<Button
  input_mapping={firstButtonMapping}
  variant="raised"
  cssclass="my_button"
  onpressed={()=>{
    presses++;
    return false;
  }}
><br />
    You pressed {presses} times.<br />
</Button><br />

Press button "{toggleDrawerInput.gamepad_buttons[0]}" on {controller_index(toggleDrawerInput)}, 
'{toggleDrawerInput.keyboard_keys[0]}' on your keyboard or 
just click/touch to toggle the drawer.<br />

<i>(Button 9 is OPTIONS on the DS4-controller)</i><br />
<Button
  input_mapping={toggleDrawerInput}
  variant="raised"
  onpressed={()=>{
    open = !open;
    return true;
  }}
>
    Toggle drawer<br />
</Button>
<br />
Use the right thumbstick to control this virtual joystick, the keys i j k l or the mouse/touch:<br />
<Joystick
    input_mapping={{
      name: 'my_joystick',
      gamepad: -1,
      axes_x: 2,
      axes_y: 3,
      key_x_pos: 'l',
      key_x_neg: 'j',
      key_y_pos: 'k',
      key_y_neg: 'i',
      deadzoneX: 0.07,
      deadzoneY: 0.07,
      invert_x: false,
      invert_y: false
    }}
    style="background-color: rgba(0, 0, 0, 0);"
    bind:position
/>
<div style="position: relative; left: 210px; top: -200px">
X: {position[0]}<br />
Y: {position[1]}
</div>

</div>

    </main>
  </AppContent>
</div>

<GamepadManager></GamepadManager>
<KeyboardManager></KeyboardManager>


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
      <Button input_mapping={cancelMapping} variant="outlined">
        <Label>quit</Label>
      </Button>
    </Actions>
</Dialog>