interface Participant {
  firstName: string;
  lastName: string;
  favoriteColor: string;
  age: number;
  attending: boolean;
}

const participant: Participant = {
  firstName: "John",
  lastName: "Doe",
  favoriteColor: "red",
  age: 25,
  attending: true,
};

console.log(participant);
