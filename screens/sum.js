import * as React from 'react';
import { TextInput } from 'react-native';

const Example = () => {
  const [text1, setText1] = React.useState('');
  const [text2, setText2] = React.useState('');
  const [text3, setText3] = React.useState('');

  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const ref3 = React.useRef();

  return (
    <>
      <TextInput
        ref={ref1}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => {
          setText1(text);
          if (text.length === 4) {
            ref2.current.focus();
          }
        }}
        value={text1}
      />
      <TextInput
        ref={ref2}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => {
          setText2(text);
          if (text.length === 4) {
            ref3.current.focus();
          }
        }}
        value={text2}
      />
      <TextInput
        ref={ref3}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => {
          setText3(text);
          if (text.length === 4) {
            ref3.current.blur();
          }
        }}
        value={text3}
      />
    </>
  );
};
