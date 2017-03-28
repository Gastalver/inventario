/**
 * Created by Miguel on 28/03/2017.
 */

export class Product {
  constructor(
  public sku:string,
  public name:string,
  public imageurl: string,
  public department: string[],
  public price: number
){}
}
