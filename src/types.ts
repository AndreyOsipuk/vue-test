export interface State {
  realty: Realty[];
  users: User[];
}

export interface Header {
  text: string;
  value: string;
  align?: string;
  sortable?: boolean;
  filterable?: boolean;
}

export interface Realty {
  name: string;
  type: string;
  address: string;
  price: number;
  mortgag: boolean;
  owner?: User['name'];
  rent?: Rent;
}

export interface User {
  name: string;
  address: string;
}

export interface Rent {
  tenants: User['name'][];
  date_at: string;
  date_to: string;
  price: number;
}
