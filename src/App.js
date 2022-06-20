import logo from "./logo.svg";
import "./App.css";

import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "차준환",
    birthday: "011021",
    gender: "남자",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "공유",
    birthday: "790710",
    gender: "남자",
  },
];
function App() {
  return (
    <div>
      {customers.map((customer) => (
        <Customer
          id={customer.id}
          image={customer.image}
          name={customer.name}
          birthday={customer.birthday}
          gender={customer.gender}
        />
      ))}
    </div>
  );
}

export default App;
