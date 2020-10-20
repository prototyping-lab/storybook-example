import HelloWorld from "./HelloWorld.vue";

export default {
    title: 'Hello World',
    component: HelloWorld,
    args: {
        msg: 'Hello World',
        color: 'red'
    },
    argTypes: {
        msg: { control: 'text' },
        color: { control: 'color' },
    }
};

// We create a “template” of how args map to rendering
export const Template = (args, { argTypes }) => ({
    components: { HelloWorld },
    props: [ 'msg', 'color' ],
    template: '<HelloWorld :msg="msg" :color="color" />'
});

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  msg: 'My World',
  color: 'magenta'
};

export const Secondary = Template.bind({});
Secondary.args = {
  msg: 'Your World',
  color: 'cyan'
};
