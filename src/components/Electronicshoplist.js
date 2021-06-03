import products from "../products";
import { Productslist } from "../styles";
import Electronic from "./Electronic";

const Electronicshoplist = () => {
  let arrayOfElectronics = products.map((product) => (
    <Electronic key={product.id} product={product} />
  ));

  return <Productslist>{arrayOfElectronics}</Productslist>;
};

export default Electronicshoplist;
