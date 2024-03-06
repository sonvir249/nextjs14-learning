"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const placeOrder = () => {
    console.log('Placing your order');
    router.push("/");
  }
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={placeOrder}>Place Order</button>
    </>
  )
}
