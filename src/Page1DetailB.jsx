import { useLocation } from "react-router-dom";

export const Page1DetailB = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <h1>Page1DetailBページです</h1>
    </div>
  );
};
