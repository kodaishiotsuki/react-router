import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/page2/111">URL Parameter</Link>
      <br />
      <Link to="/page2/111?name=hoge">Query Parameter</Link>
    </div>
  );
};
