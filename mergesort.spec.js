
describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    let arr = [1,3,4,5,4,3,6,7,8,3,9];
    expect(split(arr).length).toEqual(2);
  });
});
describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    let arr1 = [3,4];
    let arr2 = [8,9];
    expect(merge(arr1,arr2)).toEqual([3,4,8,9]);
  });
});
