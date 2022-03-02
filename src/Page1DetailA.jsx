import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  //戻るボタン機能
  const history = useHistory();
  const onCLickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onCLickBack}>戻る</button>
    </div>
  );
};
