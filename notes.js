// Waktu masuk ke Order Form
[
  {
    id: 6,
    name: "Test",
    phone: "3434534534",
    email: "test@test.com",
    password: "$2a$10$emSJSUucuw2eBC5NFlRXguWZORmQggsGsv1zYtmfNI8ONJ8yF4qzG",
    address: "Jl. Test 2 No.16",
    createdAt: "2019-08-29T08:06:17.293Z",
    updatedAt: "2019-08-29T08:06:17.293Z"
  },
  [
    {
      id: 1,
      name: "Plain 1L",
      price: 40000,
      stock: 20,
      createdAt: "2019-08-27T20:57:21.284Z",
      updatedAt: "2019-08-27T20:57:21.284Z"
    },
    {
      id: 2,
      name: "Chocolate 1L",
      price: 45000,
      stock: 15,
      createdAt: "2019-08-27T20:57:21.284Z",
      updatedAt: "2019-08-27T20:57:21.284Z"
    },
    {
      id: 3,
      name: "Strawberry 1L",
      price: 45000,
      stock: 15,
      createdAt: "2019-08-27T20:57:21.284Z",
      updatedAt: "2019-08-27T20:57:21.284Z"
    }
  ]
]

// Setelah Create Order
[
  {
    id: 6,
    name: "Test",
    phone: "3434534534",
    email: "test@test.com",
    password: "$2a$10$emSJSUucuw2eBC5NFlRXguWZORmQggsGsv1zYtmfNI8ONJ8yF4qzG",
    address: "Jl. Test 2 No.16",
    createdAt: "2019-08-29T08:06:17.293Z",
    updatedAt: "2019-08-29T08:06:17.293Z"
  },
  [
    {
      id: 8,
      OrderId: 6,
      ProductId: 1,
      quantity: 1,
      price: null,
      createdAt: "2019-08-29T21:06:58.934Z",
      updatedAt: "2019-08-29T21:06:58.934Z",
      Product: {
        id: 1,
        name: "Plain 1L",
        price: 40000,
        stock: 20,
        createdAt: "2019-08-27T20:57:21.284Z",
        updatedAt: "2019-08-27T20:57:21.284Z"
      }
    },
    {
      id: 9,
      OrderId: 6,
      ProductId: 2,
      quantity: 1,
      price: null,
      createdAt: "2019-08-29T21:06:58.934Z",
      updatedAt: "2019-08-29T21:06:58.934Z",
      Product: {
        id: 2,
        name: "Chocolate 1L",
        price: 45000,
        stock: 15,
        createdAt: "2019-08-27T20:57:21.284Z",
        updatedAt: "2019-08-27T20:57:21.284Z"
      }
    },
    {
      id: 10,
      OrderId: 6,
      ProductId: 3,
      quantity: 1,
      price: null,
      createdAt: "2019-08-29T21:06:58.934Z",
      updatedAt: "2019-08-29T21:06:58.934Z",
      Product: {
        id: 3,
        name: "Strawberry 1L",
        price: 45000,
        stock: 15,
        createdAt: "2019-08-27T20:57:21.284Z",
        updatedAt: "2019-08-27T20:57:21.284Z"
      }
    }
  ]
]