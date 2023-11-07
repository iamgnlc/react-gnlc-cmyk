import { logo } from '../../utils';

describe('logo', () => {
  test('should rendere in console', () => {
    const infoSpy = jest.spyOn(global.console, 'info');

    logo();

    expect(infoSpy).toHaveBeenCalled();
    expect(infoSpy).toHaveBeenCalledTimes(1);

    infoSpy.mockRestore();
  });
});
