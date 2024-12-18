import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  server: {
    port: process.env.PORT || 5173, // Use the Render specified PORT or fallback to 5173
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        js: resolve(__dirname, "src/js"),
        json: resolve(__dirname, "src/json"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        productAll: resolve(
          __dirname,
          "src/product_pages/product-details.html",
        ),
        product1: resolve(
          __dirname,
          "src/product_pages/cedar-ridge-rimrock-2.html",
        ),
        product2: resolve(__dirname, "src/product_pages/marmot-ajax-3.html"),
        product3: resolve(
          __dirname,
          "src/product_pages/northface-alpine-3.html",
        ),
        product4: resolve(
          __dirname,
          "src/product_pages/northface-talus-4.html",
        ),
      },
    },
  },
});
