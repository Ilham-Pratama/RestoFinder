import { User } from './User';

export interface BusinessReview {
  reviews: Review[];
  total: number;
}

export interface Review {
  id: string;
  rating: number;
  text: string;
  user: User;
  time_created: string;
  url: string;
}
