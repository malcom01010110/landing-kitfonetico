import { useEffect, useRef, useState } from "react";

const SHOPIFY_CONFIG = {
  domain: "h0ygyx-ew.myshopify.com",
  storefrontAccessToken: "3c722f5bd45d436d8c8a825d99a208fc",
  productId: "10490522566958",
};

export default function ShopifyBuyButton({ className, children, onClick }) {
  const cartRef = useRef(null);
  const clientRef = useRef(null);
  const readyRef = useRef(false);
  const [loading, setLoading] = useState(false);

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
        readyRef.current = true;
        console.log("Shopify listo ✓");
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
    if (onClick) onClick();

    // Si Shopify no está listo todavía, esperamos hasta 5 segundos
    if (!readyRef.current) {
      setLoading(true);
      await waitUntilReady();
      setLoading(false);
    }

    try {
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

  function waitUntilReady(timeout = 5000) {
    return new Promise((resolve, reject) => {
      const start = Date.now();
      const interval = setInterval(() => {
        if (readyRef.current) {
          clearInterval(interval);
          resolve();
        } else if (Date.now() - start > timeout) {
          clearInterval(interval);
          reject(new Error("Shopify tardó demasiado en cargar"));
        }
      }, 100);
    });
  }

  return (
    <button onClick={handleClick} className={className} disabled={loading}>
      {loading ? "Cargando..." : children || "Comprar ahora"}
    </button>
  );
}
