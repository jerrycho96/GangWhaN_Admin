import * as React from 'react';
import {CommonActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function goPop(name, params) {
  navigationRef.current?.goBack();
}
export function resetRoot(name) {
  navigationRef.current?.resetRoot({
    index: 0,
    routes: [{name}],
  });
}
export function reset(name, params) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: 'Main'}, {name: name, params: {params}}],
    }),
  );
}
