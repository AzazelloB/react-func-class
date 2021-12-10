import { useState, useEffect, Children } from "react";

import "./style.css";

function Tabs({ children }) {
  const [tabs, setTabs] = useState([]);
  const [selected, setSelected] = useState({
    title: "",
    children: []
  });

  useEffect(() => {
    if (Children.count(children) === 0) {
      return;
    }

    let tabs = [];

    if (Children.count(children) === 1) {
      tabs = [
        {
          title: children.props.title,
          children: children.props.children
        }
      ];
    } else {
      tabs = Children.map(children, (tab) => ({
        title: tab.props.title,
        children: tab.props.children
      }));
    }

    setTabs(tabs);
    setSelected(tabs[0]);
  }, [children]);

  return (
    <div className="tabs">
      <div className="panel">
        {tabs.map((tab) => (
          <span
            key={tab.title}
            className={selected.title === tab.title ? "tab selected" : "tab"}
            onClick={() => setSelected(tab)}
          >
            {tab.title}
          </span>
        ))}
      </div>

      {selected.children}
    </div>
  );
}

export default Tabs;
