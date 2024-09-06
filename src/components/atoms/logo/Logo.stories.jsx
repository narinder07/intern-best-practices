import Logo from "./Logo";

export default {
  title: "Atoms/Logo",
  component: Logo,
};

const Template = (args) => <Logo {...args}></Logo>;

export const WebLogo = Template.bind({});
WebLogo.args = {
  label: "ReactProject",
  href: "/",
  labelStyle: "logo-style",
};
