const formatDuration = require('./HumanReadableDurationFormat');

const testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(formatDuration(input)).toEqual(result);
  });
};

describe(`Human readable duration format Test`, () => {
  testing(1, '1 second');
  testing(62, '1 minute and 2 seconds');
  testing(120, '2 minutes');
  testing(3662, '1 hour, 1 minute and 2 seconds');
  testing(0, 'now');
});
