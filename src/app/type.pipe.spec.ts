import { Card, CATALOG } from './card';
import { TypePipe } from './type.pipe';

describe(
  'TypePipe test suite',
  () => {

    it(
      'create an instance',
      () => {
        const pipe = new TypePipe();
        expect(pipe).toBeTruthy();
      }
    );

    it( 
      'has to filter CATALOG elements', 
      () => {
        const pipe = new TypePipe();
        const results = pipe.transform( CATALOG, "common" );
        expect(results.length).toEqual(2);
      }
    );

  }
);
