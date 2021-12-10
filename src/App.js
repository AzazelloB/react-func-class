import "./styles.css";

import { Tabs, Tab } from "./components/Tabs";
import ClassBased from "./components/ClassBased";
import Functional from "./components/Functional";

export default function App() {
  return (
    <div className="App">
      <Tabs>
        <Tab title="ClassBased">
          <ClassBased />
        </Tab>

        <Tab title="Functional">
          <Functional />
        </Tab>
      </Tabs>
    </div>
  );
}
