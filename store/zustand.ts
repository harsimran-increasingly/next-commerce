import { create } from "zustand";

type CartItem = {
    product: object;
    qty: number;
};

type CartStore = {
    items: CartItem[];
    addToCart: (item: object) => void;
    removeFromCart: (index: number) => void;
};
export const useCartStore = create<CartStore>((set) => ({
    items: [],
    addToCart: (item: object) =>
        set((state: CartStore) => {
            const existingItemIndex = state.items.findIndex((cartItem) => cartItem.product === item);

            if (existingItemIndex !== -1) {
                // If item already exists in the cart, increase the qty
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex].qty += 1;

                return { items: updatedItems };
            } else {
                // If item is not in the cart, add it with qty = 1
                return { items: [...state.items, { product: item, qty: 1 }] };
            }
        }),
    removeFromCart: (index: number) =>
        set((state: CartStore) => {
            const updatedItems = [...state.items];
            updatedItems.splice(index, 1);

            return { items: updatedItems };
        }),
}));
