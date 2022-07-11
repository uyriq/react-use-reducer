import React from "react";
import styles from "./app.module.css";
import { Title } from "../../ui/title/title";
import { Cart } from "../cart";
import { TotalPrice } from "../common/total-price";
import { TotalPriceContext, DiscountContext } from "../../services/appContext";

function App() {
  const totalBillState = React.useState(0);
  const discountState = React.useState(null);

  return (
    <div className={styles.app}>
      <TotalPriceContext.Provider value={totalBillState}>
        <DiscountContext.Provider value={discountState}>
          <Title text={"Корзина"} />
          <Cart />
          <TotalPrice />
        </DiscountContext.Provider>
      </TotalPriceContext.Provider>
    </div>
  );
}

export default App;
