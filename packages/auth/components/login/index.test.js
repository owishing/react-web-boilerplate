import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Login } from '.';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

function shallowRenderWithProps(props = {}) {
  return shallow(<Login {...props} />);
}

test('Render right Login.', () => {
  const component = shallowRenderWithProps();
  expect(toJson(component)).toMatchSnapshot();
});
