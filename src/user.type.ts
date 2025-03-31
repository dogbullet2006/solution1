export interface IUser {
  id: number;
  email: string;
  phone: string;
  name: string;
  username: string;
  website: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  }
}