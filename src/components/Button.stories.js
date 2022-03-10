import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { type: "primary", children: "Primary" };

export const Secondary = Template.bind({});
Secondary.args = { type: "secondary", children: "Secondary" };
