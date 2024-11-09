function getUserContact(user) {
  if (user.contact && user.contact.phone) {
    return user.contact.phone;
  } else {
    return "Phone number not available";
  }
}

const userWithPhone = {
  name: "Alice",
  contact: { phone: "123-456-7890" },
};

const userWithoutPhone = { name: "Bob" };

console.log(getUserContact(userWithPhone));
console.log(getUserContact(userWithoutPhone));
