import FileInput from "./FileInput";

export default {
  title: "Atoms/FileInput",
  Component: FileInput,
};

const Template = (args) => <FileInput {...args}></FileInput>;

export const InputFile = Template.bind({});

InputFile.args = {
  text: "Enter Your File",
  type: "file",
};
