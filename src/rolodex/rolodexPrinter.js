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
  const [firstName, lastName] = person.name?.split(' ');
  const { email, phone } = person;

  console.log(`****${firstName[0]}****`);
  console.log(`First name: ${firstName}
Last name: ${lastName}
Email: ${email}
Phone number: ${phone}`);

});
