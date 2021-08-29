import React from 'react';

import ReactAutocompleteTextarea from '../components/index';

export default {
  title: 'Textarea/Reactautocompletetextarea',
  component: ReactAutocompleteTextarea,
  argTypes: {

  },
};

const Template = (args) => (
  <div style={{ width: 360 }}>
    <ReactAutocompleteTextarea {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "try input @",
  trigger: "@",
  offsetX: 8,
  options: ["apple", "apricot", "banana", "carrot"],
  rows: "4"
};

export const Multipletriggers = Template.bind({});
Multipletriggers.args = {
  placeholder: "try input @ or @@",
  trigger: ["@", "@@"],
  options: { "@": ["aa", "ab", "abc", "abcd"], "@@": ["az", "ar"] },
  rows: "4"
};
