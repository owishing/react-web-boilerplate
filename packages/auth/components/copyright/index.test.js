import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Copyright } from '.';

function shallowRenderWithProps(props = {}) {
  return shallow(<Copyright {...props} />);
}

test('Render right Copyright when no year prop provided.', () => {
  const component = shallowRenderWithProps();
  expect(toJson(component)).toMatchSnapshot();
});

test('Render right Copyright when right year prop provided.', () => {
  const component = shallowRenderWithProps({ year: 2021 });
  expect(toJson(component)).toMatchSnapshot();
});
