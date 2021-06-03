import { Imgtext, Productimage } from "../styles";
const Electronic = (props) => {
  const product = props.product;
  return (
    <div>
      <Productimage>
        <img src={product.image} alt="mobile" />
      </Productimage>
      <Imgtext>{product.name}</Imgtext>
      <Imgtext>{product.price + " KD"}</Imgtext>
    </div>
  );
};
export default Electronic;
