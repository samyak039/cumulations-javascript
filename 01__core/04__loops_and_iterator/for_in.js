let samyak = {
  'first name': 'Samyak',
  'last name': 'Bardiya',
  'date of birth': new Date('1999-11-30'),
}

for (let key in samyak) {
  console.log('My ' + key + ' is ' + samyak[key]);
}
