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

  }
);
