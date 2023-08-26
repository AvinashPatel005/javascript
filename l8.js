let person = {
  firstName: "Avinash",
  lastName: "Patel",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());