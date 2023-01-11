import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { AddButton } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'PollIt/AddButton',
  component: AddButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    addAnswer: () => 0,
    label: 'Add Answers',
  },
} as ComponentMeta<typeof AddButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AddButton> = (args) => <AddButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  addAnswer: () => console.log('hahfafa'),
  label: 'Add Answer',
}


// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
