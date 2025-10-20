//import { useSelector, useDispatch } from 'react-redux' 
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice";
const cakeView = () => {
  const numOfCakes = useAppSelector((state) => {
    return state.cake.numOfCakes;
  });
  const dispath = useAppDispatch();
  return (
    <div>
      <h2>Number of cakes : {numOfCakes}</h2>
      <button onClick={() => dispath(ordered())}>Order cake</button>
      <button onClick={() => dispath(restocked(2))}>Restock cake</button>
    </div>
  );
};

export default cakeView;
