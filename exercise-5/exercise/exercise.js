const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";
console.log(person1);
console.log(person2);


//Spiegazione:
//Sia person1 che person2 si riferiscono allo stesso oggetto in memoria quindi qualsiasi modifica apportata all'oggetto attraverso una delle due variabili influenzerà l'oggetto a cui entrambe le variabili si riferiscono. In questo caso, quando modifichiamo la proprietà firstName di person2 in "Simon", cambia anche la proprietà firstName dell'oggetto sottostante, a cui fanno riferimento sia person1 che person2.
