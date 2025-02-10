# Svelte Material UI Gamepad components 
Using [Svelte Material UI](https://sveltematerialui.com/) components with [svelte-gamepad-virtual-joystick](https://github.com/brean/svelte-gamepad-virtual-joystick)

## Application
Use Material UI with joystick controls to control robots or build prototype games.

## Installation and usage
This library can be installed using npm:
```
npm i -D smui-gamepad-components
```

To use it in your project you can simply switch the SMUI-components with the ones in this repository, Button and List should be straight-forward replacement for your svelte-material-ui components as they are just wrapper around it, son instead of
```typescript
import Button from "@smui/button";
```
you can just change 
```typescript
import Button from "smui-gamepad-components/Button";
```

This shows the normal button but now you can also activate it by pressing 'e' on your keyboard or "X" on a connected gamepad.

You can provide a different input_mapping to the Button component to change the keyboard/gamepapad configuration.

Don't forget to also add the `GamepadManager` and `KeyboardManager`.

## Example
A usage example with multiple components can be seen in routs/+page.svelte,

To view this example run
```
npm run smui
npm run dev
```

## Supported Components
Inputs
 - Button
 - List (next/prev, select)

## Missing
Global state which element is selected so we can switch to the next element, 
maybe on the R1/L1 buttons or the D-pad

A special Button to show all gamepad/keyboard bindings in the current screen (?)

Components
 - Accordion (up/down, open)
 - FAB (same as Button)
 - IconButton (same as Button)
 - Card (PrimaryAction as Button)
 - Data Table (up/down, next page, select)
 - Inputs
   - Autocomplete (up/down, select)
   - Checkbox (similar to Button)
   - Chips (next/prev, select)
   - Radio Button (next/prev)
   - Segmented Button (next/prev, select)
   - Select Menu (up/down and select)
   - Slider (change value up/down or map axis)
   - Switch (same as checkbox)
   - Snackbar (dismiss on button press)
 - Tabs (next/prev, select)
 - Tooltip (show/hide)
 
 

 

