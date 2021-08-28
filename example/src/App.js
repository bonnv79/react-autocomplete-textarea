import React from 'react';
import ReactAutocompleteTextarea from 'react-autocomplete-textarea';
import 'react-autocomplete-textarea/dist/index.css';

const App = () => {
  const [value, setValue] = React.useState('');
  return (
    <center>
      <div style={{ padding: '0 20px', maxWidth: 720 }}>
        <h1>react-autocomplete-textarea demo</h1>
        <div style={{ width: 360 }}>
          <span>Usage Example</span>
          <ReactAutocompleteTextarea
            placeholder="try input @"
            trigger="@"
            offsetX={8}
            options={["apple", "apricot", "banana", "carrot"]}
            rows="4"
            value={value}
            onChange={setValue}
          />

          <span>Multiple Triggers and Options Example</span>
          <ReactAutocompleteTextarea
            placeholder="try input @ or @@"
            trigger={["@", "@@"]}
            options={{ "@": ["aa", "ab", "abc", "abcd"], "@@": ["az", "ar"] }}
          />
        </div>
      </div>
    </center>
  )
}

export default App
