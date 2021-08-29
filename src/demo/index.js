import React from 'react';
import ReactAutocompleteTextarea from '../components';
import './index.css';

function Demo() {
  const [value, setValue] = React.useState('');

  return (
    <div className="App">
      <header className="App-header">
        <p>
          react-autocomplete-textarea demo
        </p>

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
      </header>
    </div>
  );
}

export default Demo;
