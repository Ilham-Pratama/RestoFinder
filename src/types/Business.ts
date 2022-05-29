export interface BusinessList {
  total: number;
  businesses: Business[];
}

export interface Business {
  id: string;
  rating: number;
  price: string;
  phone: string;
  alias: string;
  is_closed: boolean;
  location: Location;
  categories: BusinessCategory[];
  review_count: number;
  display_phone: string;
  name: string;
  url: string;
  image_url: string;
  photos: string[];
  hours: Hour[];
}

export interface Location {
  city: string;
  country: string;
  address1: string;
  address2: string;
  address3: string;
  state: string;
  zip_code: string;
  display_address: string[];
}

export interface BusinessCategory {
  alias: string;
  title: string;
}

export interface Hour {
  open: HourOpen[];
  hours_type: string;
  is_open_now: boolean;
}

export interface HourOpen {
  is_overnight: boolean;
  start: string;
  end: string;
  day: number;
}
