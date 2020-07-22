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
  });

