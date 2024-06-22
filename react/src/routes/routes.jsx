
import { Options } from "../components/Options";


export const routes = [
  
  {
    path: "/options",
    element: <Options />,
    //head: <Header />,
  },
  {
    path: "*",
    element: <div>no route</div>,
  },
];
