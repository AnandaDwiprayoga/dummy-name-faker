import names from "./data/names.json";

const random = () => {
  const randomIndex = Math.floor(Math.random() * Math.floor(names.length));
  return names[randomIndex];
};

export default random;
