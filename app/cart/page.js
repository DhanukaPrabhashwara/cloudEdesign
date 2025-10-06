// app/cart/page.js
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/home/HeroSection';
import CartContent from '@/components/cart/CartContent';

export default function CartPage() {
    return (
        <PageTransition>
            <HeroSection />
            <CartContent />
        </PageTransition>
    );
}
