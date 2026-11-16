import { RouterProvider} from "react-router-dom";
import Routes from "./routes/Routes";

import CartProvider from "./context/cart/CartProvider";
import FormProvider from "./context/form/FormProvider";
import ProductProvider from "./context/product/ProductProvider";


const App = () => {
  return (
     <ProductProvider>
    <CartProvider>
      <FormProvider>
        <RouterProvider router={Routes} />
      </FormProvider>
    </CartProvider>
    </ProductProvider>
  );
};

export default App;