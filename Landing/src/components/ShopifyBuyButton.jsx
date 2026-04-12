import { useEffect, useRef } from "react";

const SHOPIFY_CONFIG = {
  domain: "h0ygyx-ew.myshopify.com",
  storefrontAccessToken: "3c722f5bd45d436d8c8a825d99a208fc",
  productId: "10490522566958",
};

export default function ShopifyBuyButton({ className, children, onClick }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: SHOPIFY_CONFIG.domain,
        storefrontAccessToken: SHOPIFY_CONFIG.storefrontAccessToken,
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent("product", {
          id: SHOPIFY_CONFIG.productId,
          node: containerRef.current,
          moneyFormat: "%24%7B%7Bamount_with_comma_separator%7D%7D",
          options: {
            product: {
              styles: {
                product: { display: "none" },
              },
              text: { button: "Comprar" },
            },
            cart: {
              text: {
                total: "Subtotal",
                button: "Pagar",
              },
              popup: false,
            },
            toggle: {},
          },
        });
      });
    }

    if (window.ShopifyBuy?.UI) {
      ShopifyBuyInit();
    } else {
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      script.onload = ShopifyBuyInit;
      document.head.appendChild(script);
    }
  }, []);

  function handleClick() {
    // Dispara el tracking (fbq u otro) si se pasó onClick
    if (onClick) onClick();

    // Busca y clickea el botón oculto de Shopify
    const shopifyBtn = containerRef.current?.querySelector(
      ".shopify-buy__btn, [class*='btn']"
    );
    if (shopifyBtn) shopifyBtn.click();
  }

  return (
    <>
      {/* Contenedor invisible donde Shopify monta su componente */}
      <div
        ref={containerRef}
        id="product-component-1776007025786"
        style={{ display: "none" }}
        aria-hidden="true"
      />

      {/* Tu botón con tu diseño */}
      <button onClick={handleClick} className={className}>
        {children || "Comprar ahora"}
      </button>
    </>
  );
}
