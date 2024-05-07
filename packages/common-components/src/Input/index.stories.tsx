import { Story, Meta } from '@storybook/react';

import Input, { InputProps } from '.';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

export const Basic: Story<InputProps> = args => <Input {...args} />;
Basic.args = {
  type: 'text',
};
