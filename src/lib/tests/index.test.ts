import { selectStyle, buildStyle } from '../index';

it('selectStyle', () => {
    expect(selectStyle(true, {}, {})).toEqual({})
});

it('buildStyle', () => {
  expect(buildStyle(true, '', '', '')).toEqual({'':''})
});
