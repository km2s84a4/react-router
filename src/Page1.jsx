import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();

  const onClickNext = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to={{ pathname: "/page1/detailB", state: arr }}>DetailB</Link>
      <br />
      <button onClick={onClickNext}>DetaliA</button>
    </div>
  );
};
