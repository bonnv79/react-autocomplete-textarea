import React from 'react';

import ReactAutocompleteTextarea from '../components/index';

export default {
  title: 'Textarea/Reactautocompletetextarea',
  component: ReactAutocompleteTextarea,
  argTypes: {

  },
};

const Template = (args) => {
  const [value, onChange] = React.useState('');
  return (
    <ReactAutocompleteTextarea {...args} value={value} onChange={onChange} />
  )
};

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "Try input @",
  trigger: "@",
  options: ["apple", "apricot", "banana", "carrot"],
  rows: 5,
  cols: 50,
  fullscreen: false,
};

export const Multipletriggers = Template.bind({});
Multipletriggers.args = {
  placeholder: "Try input @ or @@",
  trigger: ["@", "@@"],
  options: { "@": ["aa", "ab", "abc", "abcd"], "@@": ["az", "ar"] },
  rows: 5,
  cols: 50,
  fullscreen: false
};
