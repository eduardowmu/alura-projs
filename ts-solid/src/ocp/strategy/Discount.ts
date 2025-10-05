export abstract class Discount {
  abstract calculate(price: number): number
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount = 0.5;

  calculate(price: number): number {
    return price * (1 - this.discount);
  }
}