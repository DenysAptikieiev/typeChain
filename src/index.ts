interface ISayHello {
  name: string,
  age: number,
  gender: string
}

const obj = {name: 'Denys', age: 30, gender: "MAN"}

const sayHello = ({name, age, gender}: ISayHello): string => 
`My name ${name}, I'm ${age} and I'm ${gender}!`;

console.log(sayHello(obj));

export {}