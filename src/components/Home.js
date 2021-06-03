import { Textstyle, Shopimage } from "../styles";

const Home = () => {
  return (
    <div>
      <div>
        <Textstyle>
          <h1>electronic store</h1>
          <p middle-text>
            this the best electronic store that you can find the newest product
            in a appropriate price
          </p>
        </Textstyle>
        <Shopimage
          src="https://www.midvalley.com.my/img/tenant/Flash%20Gadget%20Mobile-425Jun2020155009.jpg"
          alt="electronic store"
        />
      </div>
    </div>
  );
};
export default Home;
