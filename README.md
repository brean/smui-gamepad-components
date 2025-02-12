# Svelte Material UI Gamepad components 
Using [Svelte Material UI](https://sveltematerialui.com/) components with [svelte-gamepad-virtual-joystick](https://github.com/brean/svelte-gamepad-virtual-joystick)

## Application
Use Material UI with joystick controls to control robots or build prototype games.

## Installation and usage
This library can be installed using npm:
```
npm i -D smui-gamepad-components
```

To use it in your project, you can simply switch most of the SMUI-components with the ones in this repository, Button should be a straight forward replacement for your svelte-material-ui components as its are just wrapper around it.
Instead of the default `@smui/button`-import:
```typescript
import Button from "@smui/button";
```
you can just use the default smui-gamepad-components/Button like this:
```typescript
import { Button } from "smui-gamepad-components/Button";
```

This shows the normal button but now you can also activate it by pressing 'e' on your keyboard or the first button on a connected gamepad ("X" on the Playstation 4 Dual Shock-controller).
If you want to change that behavior just provide an `input_mapping` (take a look at the example application).

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
