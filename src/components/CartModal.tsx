
import React from 'react';
import { X, ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type CartModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CartModal = ({ open, onOpenChange }: CartModalProps) => {
  const { items, removeFromCart, addToCart, clearCart, getCartTotal } = useCart();

  if (items.length === 0) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Корзина</DialogTitle>
            <DialogDescription>
              Ваша корзина пуста
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-12">
            <ShoppingCart className="w-12 h-12 text-gray-300 mb-4" />
            <p className="text-gray-500 text-center mb-4">
              В вашей корзине пока нет товаров.
            </p>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Продолжить покупки
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Корзина</DialogTitle>
          <DialogDescription>
            Выбранные товары в вашей корзине
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.price.toLocaleString()} ₽</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button 
                  onClick={() => removeFromCart(item.id)} 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-6 text-center">{item.quantity}</span>
                <Button 
                  onClick={() => addToCart(item)} 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Итого:</p>
            <p className="font-medium text-lg">{getCartTotal().toLocaleString()} ₽</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => clearCart()}>
              <Trash2 className="mr-2 h-4 w-4" />
              Очистить
            </Button>
            <Button>
              Оформить заказ
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
