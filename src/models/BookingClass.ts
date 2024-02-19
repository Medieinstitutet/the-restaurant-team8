export class BookingClass {
  constructor(
    public customerId: string,
    public _id: string,
    public restaurantId: string,
    public date: string,
    public time: string,
    public numberOfGuests: number,
    public customer: {
      _id: string,
      name: string,
      lastname: string,
      phone: string,
      email:string,
    }
  ) {}
  // Add class properties and methods here
}
