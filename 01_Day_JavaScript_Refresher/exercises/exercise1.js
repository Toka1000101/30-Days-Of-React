const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
	'posgres'
]
//3 find length of array
console.log(countries.length);

//4 get first, middle and last
console.log("first: " + countries[0])
console.log("middle: " + countries[Math.floor(countries.length/2)])
console.log("last: " + countries[countries.length - 1])

//11

let countries_uppercase = countries.map(x => x.toUpperCase())
console.log(countries_uppercase)
//12
let strCountries = countries.slice(0, -1).join(", ") + " and " +countries[countries.length - 1] +" are countries"
console.log(strCountries)
//13
let exists = countries.includes("Kenyaa")
console.log(exists)
//14
let more_than_two_a = countries.filter(x => x.match(/a/g).length >= 2)
console.log(more_than_two_a)

//15
let sorted_countries = countries.sort()
console.log("SORTED: " + sorted_countries)
//16
let reversed = countries.reverse()
console.log("REVERSED: " + reversed)
//17
let slice_first_three = countries.slice(3)
console.log(slice_first_three)
//18 
let slice_last_three = countries.slice(0,-3)
console.log(slice_last_three)

//19
let middle = Math.floor(webTechs.length/2)
let isEven = webTechs.length % 2 == 0
let copy = [...webTechs]
let remove_middle = isEven ? copy.slice(0, middle-1).concat(copy.slice(middle+1)) : copy.slice(0, middle).concat(copy.slice(middle+1))
console.log(remove_middle)








