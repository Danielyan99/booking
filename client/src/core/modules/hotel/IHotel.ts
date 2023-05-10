export interface IHotel {
  name: string;
  region: string;
  star: number;
  cancellationPolicy: Array<string>;
  facilities: Array<string>;
  meals: Array<string>;
  funThings: Array<string>;
  images: Array<{ thumbUrl: string }>;
  rooms: Array<any>;
}
