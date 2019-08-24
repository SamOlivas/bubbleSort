describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    let arr = [1,3,4,5,4,3,6,7,8,3,9];
    expect(split(arr).length).toEqual(2);
  });
});
