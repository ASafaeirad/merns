import { thickness } from './thickness';

test('it should return px unit if no args is present', () => {
  const t = thickness()(0, 2, 3, 4);
  expect(t).toEqual('0px 2px 3px 4px');
});

test('it should return four different thickness with 4 different unit', () => {
  const t = thickness('px', 'em', 'pt', '%')(0, 2, 3, 4);
  expect(t).toEqual('0px 2em 3pt 4%');
});

test('it should return different unit for top and bottom and same unit for left and right', () => {
  const t = thickness('px', '%', 'em')(0, 2, 3, 4);
  expect(t).toEqual('0px 2% 3em 4%');
});

test('it should return same unit for top and bottom and same unit for left and right', () => {
  const t = thickness('px', '%')(0, 2, 3, 4);
  expect(t).toEqual('0px 2% 3px 4%');
});

test('it should return same unit for all sides', () => {
  const t = thickness('px')(0, 2, 3, 4);
  expect(t).toEqual('0px 2px 3px 4px');
});

test('it should return 0 thickness if no args is present', () => {
  const t = thickness()();
  expect(t).toEqual('0px 0px 0px 0px');
});


test('it should return four different thickness if all 4 args peresent', () => {
  const t = thickness('px')(0, 2, 3, 4);
  expect(t).toEqual('0px 2px 3px 4px');
});

test('it should return different thickness for top and bottom and same for left and right if only 3 args peresent', () => {
  const t = thickness('px')(0, 2, 3);
  expect(t).toEqual('0px 2px 3px 2px');
});

test('it should return same thickness for top and bottom and same for left and right if only 2 args peresent', () => {
  const t = thickness('px')(0, 2);
  expect(t).toEqual('0px 2px 0px 2px');
});

test('it should return same thickness for all sides if only 0 args peresent', () => {
  const t = thickness('px')(0);
  expect(t).toEqual('0px 0px 0px 0px');
});
