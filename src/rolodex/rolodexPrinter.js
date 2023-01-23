import people from './people.json' assert { type: "json" };

// people.forEach((person) => {
//   const names = person.name.split(' ');
//   const firstName = names[0];
//   const lastName = names[1];
//   const { email } = person;
//   const { phone } = person;

//   console.log(`First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\nPhone number: ${phone}\n`);
// });

// Refactored code in ES6 syntax
people.forEach((person) => {
  // Check for title like Mrs.
  const [namePart1, namePart2] = person.name?.split('. ');
  const [firstName, lastName] = namePart2 ? namePart2?.split(' ') : namePart1?.split(' ');
  const { email, phone } = person;

  console.debug(`****${person.name}****`);
  console.log(`First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\nPhone number: ${phone}\n`);
});
