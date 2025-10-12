import { PersistencyProtocol } from '../interface/PersistencyProtocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Order safe successfully');
  }
}