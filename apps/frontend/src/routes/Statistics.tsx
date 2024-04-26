import styles from "../styles/Statistics.module.css";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import RequestsByUser from "../components/Graphs/RequestsByUser.tsx";
import RequestByPriorityStatus from "../components/Graphs/RequestsByPriorityStatus.tsx";
import PieCharts from "../components/Graphs/PieCharts.tsx";

export default function Statistics() {
  return (
    <>
      <div className={`${styles.pageContainer}`}>
        <div className={`${styles.statisticsBox}`}>
          <div className={`${styles.header}`}>
            <h1 className={`${styles.pageTitle}`}>Statistics</h1>
            <Button
              variant={"contained"}
              sx={{
                backgroundColor: "#012d5a",
                color: "white",
              }}
              startIcon={<DownloadIcon />}
            >
              Export
            </Button>
          </div>
          <div className={`${styles.graphsContainer}`}>
            <div className={`${styles.barCharts}`}>
              <RequestsByUser />
              <RequestByPriorityStatus />
            </div>
            <div className={`${styles.pieCharts}`}>
              <PieCharts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
