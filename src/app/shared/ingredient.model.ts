// export class Ingredient {
//   public name: string
//   public amount: number
//
//   constructor(name: string, amount: number) {
//     this.name = name
//     this.amount = amount
//   }
// }

// The same result, but less coding

export class Ingredient {
  constructor(public name: string, public amount: number) {}
}

// It's not Angular feature, it's TypeScript feature
