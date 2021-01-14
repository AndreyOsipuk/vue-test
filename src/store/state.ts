import { State } from "@/types";

export const state: State = {
  realty: [
    {
      name: "house1",
      type: "house",
      address: "address 1",
      price: 5000,
      mortgag: true,
      owner: 'user1',
    },
    {
      name: "flat1",
      type: "flat",
      address: "address 12",
      price: 2000,
      mortgag: false,
      owner: 'user3',
      rent: {
        tenants: ['user2'],
        date_at: '2020-10-10',
        date_to: '2020-11-10',
        price: 1000,
      },
    },
    {
      name: "house1",
      type: "house",
      address: "address 3",
      price: 5000,
      mortgag: true
    },
  ],
  users: [
    {
      name: "user1",
      address: "address 12",
    },
    {
      name: 'user2',
      address: '',
    },
    {
      name: "user3",
      address: "address 3",
    },
  ]
};
