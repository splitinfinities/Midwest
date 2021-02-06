import { Validate } from './validate';

describe('midwest-validate', () => {
  it('builds', () => {
    expect(new Validate()).toBeTruthy();
  });
});
