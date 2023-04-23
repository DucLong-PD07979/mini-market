export const addProduct = (basket, payload) => {
    const idProduct = payload.id;

    let exitProduct = basket.find((item) => {
        return item.id === idProduct;
    });

    if (exitProduct) {
        let newBasket = basket.map((item) => {
            return item.id === idProduct ? { ...item, quanity: item.quanity + 1 } : item;
        });
        return newBasket;
    }

    return [...basket, { ...payload, quanity: 1 }];
};

export const removeProduct = (basket, payload) => {
    const idProduct = payload.id;

    let exitProduct = basket.find((item) => {
        return item.id === idProduct;
    });

    if (exitProduct.quanity === 1) {
        return basket.filter((product) => {
            return product.id !== idProduct;
        });
    }

    return basket.map((cartItem) =>
        cartItem.id === idProduct
            ? { ...cartItem, quanity: cartItem.quanity - 1 }
            : cartItem,
    );
};

export const removeItemProduct = (basket, payload) => {
    const idProduct = payload.id;

    let exitProduct = basket.find((item) => {
        return item.id === idProduct;
    });

    if (exitProduct) {
        return basket.filter((product) => {
            return product.id !== idProduct;
        });
    }
};
