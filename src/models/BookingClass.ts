export class BookingClass {
  constructor(
    public customerId: string,
    public _id: string,
    public restaurantId: string,
    public date: string,
    public time: string,
    public numberOfGuests: number
  ) {}
  // Add class properties and methods here
}
