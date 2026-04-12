import { useEffect, useRef } from "react";

const SHOPIFY_CONFIG = {
  domain: "h0ygyx-ew.myshopify.com",
  storefrontAccessToken: "3c722f5bd45d436d8c8a825d99a208fc",
  productId: "10490522566958",
};

export default function ShopifyBuyButton({ className, children, onClick }) {
  const cartRef = useRef(null);
  const clientRef = useRef(null);

  useEffect(() => {
    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: SHOPIFY_CONFIG.domain,
        storefrontAccessToken: SHOPIFY_CONFIG.storefrontAccessToken,
      });

      clientRef.current = client;

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        // Creamos solo el carrito (sin el producto visible)
        cartRef.current = ui.createComponent("cart", {
          options: {
            cart: {
              text: {
                total: "Subtotal",
                button: "Pagar",
              },
              popup: false,
            },
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

  async function handleClick() {
    // Dispara el tracking
    if (onClick) onClick();

    if (!cartRef.current || !clientRef.current) {
      console.warn("Shopify todavía no está listo");
      return;
    }

    try {
      // Busca el producto y lo agrega al carrito directamente
      const product = await clientRef.current.product.fetch(
        `gid://shopify/Product/${SHOPIFY_CONFIG.productId}`
      );
      const variant = product.variants[0];
      await cartRef.current.addVariantToCart(variant, 1);
      cartRef.current.open();
    } catch (err) {
      console.error("Error al abrir el carrito:", err);
    }
  }

  return (
    <button onClick={handleClick} className={className}>
      {children || "Comprar ahora"}
    </button>
  );
}

