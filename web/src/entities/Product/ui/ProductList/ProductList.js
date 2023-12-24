import React, { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ProductListItem } from "../ProductListItem/ProductListItem";
import cls from "./ProductList.module.scss";

export const ProductList = memo((props) => {
    const {
        className,
        products,
        onAddToCart,
        onRemoveFromCart,
        cart,
        type = "small",
        isAdmin = false,
        onDeleteProduct,
    } = props;

    let content;

    if (type === "small") {
        content = products.map((product) => {
            return (
                <ProductListItem
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onRemoveFromCart={onRemoveFromCart}
                    count={cart[product.id]?.[1] || 0}
                />
            );
        });
    } else {
        content = products.map((product) => {
            return (
                <ProductListItem
                    key={product.id}
                    product={product}
                    type={type}
                    isAdmin={isAdmin}
                    onDeleteProduct={() => onDeleteProduct(product.id)}
                />
            );
        });
    }

    return (
        <div
            className={classNames(
                cls.ProductList,
                { [cls.empty]: !products.length },
                [className, cls[type]]
            )}
        >
            {!products.length && <span>Товаров нет</span>}
            {content}
        </div>
    );
});