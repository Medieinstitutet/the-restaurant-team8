import { CustomerClass } from "./CustomerClass";

export class TableClass {
  constructor(
    public restaurantId = "65ca1266c11c3c8be672e7c9",
    public date: string,
    public time: string,
    public numberOfGuests: number,
    public customer: CustomerClass
  ) {}
}
