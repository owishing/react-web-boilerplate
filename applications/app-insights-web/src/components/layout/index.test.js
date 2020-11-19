import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Layout } from '.';

jest.mock('react-redux', () => ({
  useSelector: () => jest.fn(),
}));

function shallowRenderWithProps(props = {}) {
  return shallow(<Layout {...props} />);
}

test('Render right Layout.', () => {
  const component = shallowRenderWithProps();
  expect(toJson(component)).toMatchSnapshot();
});
