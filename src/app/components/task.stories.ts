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


  