

describe('Bubble Sort', function(){

  beforeAll(function () {
    spyOn(bubbleSort, 'swap').and.callThrough();

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('ran a certain number of times', function(){
    const arr = [2,1]
    bubbleSort(arr);
    expect(bubbleSort.swap.calls.count()).toEqual(1);
    })
  });
});
