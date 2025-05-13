
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart, Product } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';
import { Gift } from 'lucide-react';

type GiftCardProps = {
  product: Product;
};

const GiftCard = ({ product }: GiftCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Товар добавлен",
      description: `${product.name} добавлен в корзину`,
      duration: 2000,
    });
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-6 pb-0">
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <CardDescription>Gift-карта Apple</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
          <Gift className="w-24 h-24 text-gray-300" />
        </div>
        <p className="text-2xl font-semibold mb-2">{product.price.toLocaleString()} ₽</p>
        <p className="text-sm text-gray-500">
          Подарочная карта для покупок в App Store, iTunes, Apple Music и других сервисах Apple.
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full" onClick={handleAddToCart}>
          Купить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GiftCard;
