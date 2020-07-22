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

        beforeAll(function () {
          spyOn(window, 'swap').and.callThrough();
        });
        it('sorting n items is less than n^2 swaps', function () {
          bubbleSort([1,5,4,2,3]);
          expect(swap.calls.count()).toEqual(25);
        });
  });
 

