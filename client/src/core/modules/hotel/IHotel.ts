export interface IHotel {
  name: string;
  region: string;
  star: number;
  cancellationPolicy: Array<string>;
  facilities: Array<string>;
  meals: Array<string>;
  funThings: Array<string>;
  _id: string;
  images: Array<{ thumbUrl: string; name: string; size: number; type: string; }>;
  rooms: Array<any>;
}
