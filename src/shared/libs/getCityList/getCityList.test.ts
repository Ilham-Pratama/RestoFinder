import getCityList from 'shared/libs/getCityList';

describe('getCityList', () => {
  it("gets city list with term 'houston'", () => {
    const res = getCityList('houston');
    expect(res.length).toBe(1);
    expect(res.includes('Houston, Texas')).toBeTruthy();
  });

  it('gets city list with no term', () => {
    const res = getCityList('', 20);
    expect(res.length).toBe(20);
  });

  it('gets city list with custom limit', () => {
    const limit = 10;
    const res = getCityList('', limit);
    expect(res.length).toBe(limit);
  });
});
