import axios from "axios";
import { link } from "./links.ts";



export function postNodesAxios(
  deleteAll: string,
  importedMapNode: string[],
) {
  return new Promise((resolve, reject) => {
    if (deleteAll == "true") {
      axios
        .post(
          "/api/nodes/",
          {
            deleteAll: true,
            nodes: importedMapNode,
          },
          {
            headers: {},
          },
        )
        .then(() => {
          resolve("Nodes Added");
          return;
        })
        .catch((error) => {
          reject(error);
          return;
        });
    } else {
      axios
        .post(
          "/api/nodes/",
          {
            deleteAll: false,
            nodes: importedMapNode,
          },
          {
            headers: {},
          },
        )
        .then(() => {
          resolve("Nodes Added");
          return;
        })
        .catch((error) => {
          reject(error);
          return;
        });
    }
  });
}

export function getNodesAxios() {
  return axios.get("/api/nodes");
}

export function postEdgesAxios(deleteAll: string, importedMapEdge: string[]) {
  return new Promise((resolve, reject) => {
    if (deleteAll == "true") {
      axios
        .post(
          "/api/edges/",
          {
            deleteAll: true,
            edges: importedMapEdge,
          },
          {
            headers: {},
          },
        )
        .then(() => {
          resolve("Edges Added");
          return;
        })
        .catch((error) => {
          reject(error);
          return;
        });
    } else {
      axios
        .post(
          "/api/edges",
          {
            deleteAll: false,
            edges: importedMapEdge,
          },
          {
            headers: {},
          },
        )
        .then(() => {
          resolve("Edges Added");
          return;
        })
        .catch((error) => {
          reject(error);
          return;
        });
    }
  });
}

export function getEdgesAxios() {
  return axios.get(link + "/api/edges/");
}
