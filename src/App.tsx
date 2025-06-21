import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
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
      <Status status="error" />

      <Heading>Placeholder text</Heading>

      <Oscar>
        <Heading>component to children props!</Heading>
      </Oscar>

      <Greet name="Adrian" messageCount={22} isLoggedIn={false} />

      <Person name={personName} />

      <PersonList names={nameList} />
    </div>
  );
};

export default App;
