interface IAddress {
  street: string
  city: string
  country: string
}

export interface IUserInformation {
  username: string
  email: string
  age: number
  address: IAddress
}
