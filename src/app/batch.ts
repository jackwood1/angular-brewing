export class Batch {

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public category: string,
    public brewDate: string,
    public kitVendor: string,
    public kitProductCode: string
  ) {  }
}