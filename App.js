import { useState } from "react";
import "./styles.css";

const list = ["D", "B", "C", "A", "C", "B", "C"];
//           [1, 2, 3, 1]
export default function App() {
  const [topNums] = useState(() => {
    let final = list;
    let v = [];
    let numitr = [];
    final.sort();
    var count = 1;
    for (var i = 0; i < list.length; i++) {
      if (final[i + 1] === final[i]) {
        count++;
      } else if (final[i + 1] !== final[i]) {
        numitr.push(count);
        count = 1;
      }
    }
    numitr.sort(function (a, b) {
      return a - b;
    });
    let b = [numitr[numitr.length - 1], numitr[numitr.length - 2]];

    return b;
  });
  return (
    <div className="App">
      <h2>Here are the top two most frequent characters</h2>
      <li>{topNums[0]}</li>
      <li>{topNums[1]}</li>
    </div>
  );
}
