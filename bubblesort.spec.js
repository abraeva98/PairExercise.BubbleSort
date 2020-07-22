describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles a single item', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
      });

      it('handles a multiple item', function(){
        expect( bubbleSort([1,5,4,2,3]) ).toEqual( [1,2,3,4,5] );
      });

<<<<<<< HEAD
        beforeAll(function () {
          spyOn(window, 'swap').and.callThrough();
        });
        it('sorting n items is less than n^2 swaps', function () {
          bubbleSort([1,5,4,2,3]);
          expect(swap.calls.count()).toEqual(25);
        });
=======
   
>>>>>>> 9628e16c40dd7c30c2fd3b2a3cecf86c3d77246b
  });
 

//25


// beforeAll(function () {
//   spyOn(bubbleSort, []).and.callThrough(); // replace existing `tootsiepop['lick']` method
// });
// it('getting to the center of tootsiepop involves exactly three licks', function () {
//   tootsiepop.getToCenter();
//   expect(tootsiepop.lick.calls.count()).toEqual(3);
// });