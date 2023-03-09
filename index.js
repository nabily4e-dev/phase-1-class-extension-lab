// Your code here
// Polygon class
class Polygon {
	constructor(sides) {
		// sides is an array of integers
		this.sides = sides // store the sides as a property
	}

	get countSides() {
		// getter method for counting sides
		return this.sides.length // return the length of the sides array
	}

	get perimeter() {
		// getter method for calculating perimeter
		return this.sides.reduce((sum, side) => sum + side, 0) // return the sum of all sides using reduce method
	}
}

// Triangle class inherits from Polygon
class Triangle extends Polygon {
	get isValid() {
		// getter method for checking validity of triangle
		if (this.countSides === 3) {
			// check if there are exactly three sides
			let [a, b, c] = this.sides // assign each side to a variable using destructuring assignment
			return a + b > c && a + c > b && b + c > a // check if any two sides are greater than the third side using logical operators
		}
		return false // otherwise return false
	}
}

// Square class inherits from Polygon
class Square extends Polygon {
	get isValid() {
		// getter method for checking validity of square
		if (this.countSides === 4) {
			// check if there are exactly four sides
			let [a, b, c, d] = this.sides // assign each side to a variable using destructuring assignment
			return a === b && a === c && a === d // check if all sides are equal using logical operators
		}
		return false // otherwise return false
	}

	get area() {
		// getter method for calculating area of square
		if (this.isValid) {
			// check if square is valid before calculating area
			return this.sides[0] ** 2 // return any side squared as area using exponentiation operator
		}
		return undefined // otherwise return undefined
	}
}
