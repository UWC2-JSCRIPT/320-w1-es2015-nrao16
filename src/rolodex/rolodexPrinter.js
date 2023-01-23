import people from './people.json';

// Refactored code in ES6 syntax
people.forEach((person) => {
  // Check for title like Mrs.
  const [namePart1, namePart2] = person.name.split('. ');
  const [firstName, lastName] = namePart2 ? namePart2.split(' ') : namePart1.split(' ');
  const { email, phone } = person;

  console.debug(`****${person.name}****`);
  console.log(`First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\nPhone number: ${phone}\n`);
});
