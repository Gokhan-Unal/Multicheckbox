/*
Acceptance Criteria:

• The `MultiCheckbox` component should be made into a generic, reusable component.
• Clicking and dragging on a checkbox should toggle all checkboxes, until the left mouse button is released.
• The user shouldn't have to hover over the checkbox specifically. The label should also trigger this effect.
• When mousing over checkboxes, they should all be toggled in the same direction (either all toggled on, or all toggled off).
• The checkboxes should work normally for keyboard users. Focusing and hitting the "Space" key should toggle the checkbox.
  • Don't worry about mobile / touchscreen inputs. In practice, this is something we'd want to solve for, but the playground doesn't make it easy to test touch events.
*/

import React from 'react';

import MultiCheckbox from './MultiCheckbox';

const DAYS = [
  { label: 'Monday', value: 'monday' },
  { label: 'Tuesday', value: 'tuesday' },
  { label: 'Wednesday', value: 'wednesday' },
  { label: 'Thursday', value: 'thursday' },
  { label: 'Friday', value: 'friday' },
  { label: 'Saturday', value: 'saturday' },
  { label: 'Sunday', value: 'sunday' },
];

function App() {
  return (
    <>
      <h1>Foodorama Order Form</h1>
      <p>
        Sign up to receive daily meal delivery service.
      </p>
      <form>
        <h2>
          Select days:
        </h2>
        <MultiCheckbox options={DAYS} />
        
        <button>
          Confirm Order
        </button>
      </form>
      <footer>
        Copyright Foodorama. All Rights Reserved.
      </footer>
    </>
  )
}

export default App;