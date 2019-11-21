import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {

  const pipe = new DurationPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms 28 into "28min"', () => {
    expect(pipe.transform(28)).toBe('28min');
  });

  it('transforms 88 into "1h 28min"', () => {
    expect(pipe.transform(88)).toBe('1h 28min');
  });
});
