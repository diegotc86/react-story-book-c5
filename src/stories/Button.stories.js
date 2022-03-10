import Button from "../components/Button";

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

export const Small = Template.bind({});
Small.args = { type: "primary", size: "sm", children: "Small" };

export const Large = Template.bind({});
Large.args = { type: "primary", size: "lg", children: "Large" };
