import { ToFahrenheitPipe } from './to-fahrenheit.pipe';

describe('ToFahrenheitPipe', () => {
  it('create an instance', () => {
    const pipe = new ToFahrenheitPipe();
    expect(pipe).toBeTruthy();
  });
});
