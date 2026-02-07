import { useState } from "react";
import { MessageCircle, ShoppingBag, Eye, X, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Mock cart items for demonstration
const mockCartItems = [
  { id: 1, name: "فيلم حماية PPF", price: 2500, quantity: 1 },
  { id: 2, name: "تظليل عازل نانو", price: 800, quantity: 1 },
];

export default function FloatingActions() {
  const [showChat, setShowChat] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(mockCartItems);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items => items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        {/* Chat Bot */}
        <div className="relative">
          <Button
            size="icon"
            className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/50 transition-all"
            onClick={() => {
              setShowChat(!showChat);
              setShowCart(false);
            }}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>

          <AnimatePresence>
            {showChat && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="absolute bottom-16 right-0 w-80 glass-card rounded-2xl overflow-hidden shadow-2xl origin-bottom-right border border-border"
              >
                <div className="bg-primary p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-white">مرحباً بك 👋</h4>
                    <p className="text-xs text-white/80">كيف يمكننا مساعدتك اليوم؟</p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={() => setShowChat(false)}>
                    <X size={18} />
                  </Button>
                </div>
                <div className="p-4 h-64 bg-background/50 overflow-y-auto space-y-4">
                  <div className="bg-muted p-3 rounded-lg text-sm max-w-[80%]">
                    أهلاً بك في Skyfol! يسعدنا الرد على استفساراتك حول حماية سيارتك.
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg text-sm max-w-[80%] mr-auto text-right">
                    أريد الاستفسار عن باقات PPF
                  </div>
                </div>
                <div className="p-4 border-t border-border">
                  <input 
                    type="text" 
                    placeholder="اكتب رسالتك..." 
                    className="w-full bg-muted border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-4">
        {/* Accessibility */}
        <Button
          size="icon"
          variant="outline"
          className="w-12 h-12 rounded-full glass border-border text-foreground hover:bg-accent"
        >
          <Eye className="h-5 w-5" />
        </Button>
        
        {/* Cart */}
        <div className="relative">
          <Button
            size="icon"
            variant="outline"
            className="w-12 h-12 rounded-full glass border-border text-foreground hover:bg-accent relative"
            onClick={() => {
              setShowCart(!showCart);
              setShowChat(false);
            }}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] flex items-center justify-center rounded-full border-2 border-background font-bold">
                {cartItems.length}
              </span>
            )}
          </Button>

          <AnimatePresence>
            {showCart && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="absolute bottom-16 left-0 w-80 glass-card rounded-2xl overflow-hidden shadow-2xl origin-bottom-left border border-border"
              >
                <div className="p-4 border-b border-border flex justify-between items-center bg-card">
                  <h4 className="font-bold">سلة المشتريات</h4>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowCart(false)}>
                    <X size={18} />
                  </Button>
                </div>
                <div className="max-h-80 overflow-y-auto p-4 space-y-4">
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center gap-4">
                        <div className="flex-1">
                          <h5 className="text-sm font-bold">{item.name}</h5>
                          <p className="text-xs text-primary font-bold">{item.price} ر.س</p>
                        </div>
                        <div className="flex items-center gap-2 bg-muted rounded-lg px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                          <span className="text-xs w-4 text-center font-bold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-destructive hover:text-red-600">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-muted-foreground text-sm">السلة فارغة</div>
                  )}
                </div>
                {cartItems.length > 0 && (
                  <div className="p-4 bg-muted/50 border-t border-border">
                    <div className="flex justify-between mb-4">
                      <span className="font-bold">الإجمالي:</span>
                      <span className="font-bold text-primary">{total} ر.س</span>
                    </div>
                    <Button className="w-full bg-primary text-white font-bold rounded-xl">إتمام الطلب</Button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
