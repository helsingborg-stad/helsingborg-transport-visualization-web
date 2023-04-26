import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Enter email',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Enter email',
    error: 'Ooops, wrong input',
  },
};
