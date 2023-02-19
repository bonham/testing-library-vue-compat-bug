import { it } from 'vitest';
import App from '../App.vue';
import { render } from '@testing-library/vue';

it('Test rendering of child component', () => {
  const { getByText } = render(App);
  getByText('Inner');
});
