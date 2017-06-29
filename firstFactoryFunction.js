const Dog = () => {
  const sound = "Woof!";
  return {
    talk: () => console.log(sound)
  }
}

const buster = Dog();
buster.talk();
