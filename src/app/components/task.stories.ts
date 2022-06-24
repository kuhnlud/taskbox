import { Meta, Story } from "@storybook/angular";

import { action } from "@storybook/addon-actions";

import { TaskComponent } from "./task.component";

import { Task } from "../models/task.model";

export default{
    component: TaskComponent,
    title: 'Task',
    excludeStories: /.*Data$/,
} as Meta

export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchivedTask: action('onArchivedTask')
};

const Template: Story = args => ({
    props: {
        ...args,
        onPinTask: actionsData.onPinTask,
        onArchivedTask: actionsData.onArchivedTask
    }
})

export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX'
    } as Task
}

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args['task'],
        state: 'TASK_ARCHIVED'
    }
}

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
      ...Default.args['task'],
      state: 'TASK_PINNED',
    },
};

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args['task'],
    title: longTitleString,
  },
};

  