import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import { Counter } from "./components/state/Counter";
import Status from "./components/Status";

const App = () => {
  const personName = {
    first: "Bruce",
    last: "Lee",
  };

  const nameList = [
    {
      first: "Bruce1",
      last: "Lee1",
    },
    {
      first: "Bruce2",
      last: "Lee2",
    },
    {
      first: "Bruce3",
      last: "Lee3",
    },
  ];

  return (
    <div className="App">
      <MutableRef />
      <DomRef />

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <Container styles={{ border: "1px solid black", padding: "1rem" }} />

      <Input value="" handleChange={(event) => console.log(event)} />

      <Button
        handleClick={(event, id) => {
          console.log("Button CLiked", event, id);
        }}
      />

      <Status status="error" />

      <Heading>Placeholder text</Heading>

      <Oscar>
        <Heading>component to children props!</Heading>
      </Oscar>

      <Greet name="Adrian" messageCount={22} isLoggedIn={false} />

      <Person name={personName} />

      <PersonList names={nameList} />

      <Counter />
    </div>
  );
};

export default App;
