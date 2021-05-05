import { Route } from "react-router";
import NewsPage from "./NewsPage";

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
