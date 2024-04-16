import styles from "../styles/Dashboard.module.css";
import DashCurrentRequests from "../components/DashCurrentRequests.tsx";
import DashMakeARequest from "../components/DashMakeARequest.tsx";
import { useState } from "react";

function Dashboard() {
  const [expanded, setExpanded] = useState(false);

  const onExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={`${styles.pageContainer}`}>
        {expanded ? (
          <DashCurrentRequests
            expanded={expanded}
            onExpandClick={onExpandClick}
          />
        ) : (
          <>
            <DashCurrentRequests
              expanded={expanded}
              onExpandClick={onExpandClick}
            />
            <DashMakeARequest />
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;
