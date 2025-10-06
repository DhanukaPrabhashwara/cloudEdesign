import HeroSection from '@/components/home/HeroSection';
import CartContent from '@/components/cart/CartContent';

export const metadata = {
  title: 'Shopping Cart | ABC Ventures',
  description: 'Review your cart items',
};

export default function CartPage() {
  return (
    <>
      <HeroSection />
      <CartContent />
    </>
  );
}
