// import axios from "axios";
// import React, { useState } from "react";

// const App = () => {
//   const [data, setData] = useState(null);

//   // const onClick = () => {
//   //   axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
//   //     setData(response.data);
//   //   });
//   // };

//   const onClick = async () => {
//     try {
//       const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=05a1ae07151043e5acb1d0a8eaffc544");
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
//     </div>
//   );
// };

// export default App;

import React from "react";
import NewsList from "./components/NewsList";

const App = () => {
  return (
    <div>
      <NewsList />
    </div>
  );
};

export default App;
