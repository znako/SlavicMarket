import { clientActions } from "entities/Client";
import { authActions } from "features/Auth";
import { getAuthIsAuth, getAuthType } from "features/Auth";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";

export default function Navbar() {
    const dispatch = useDispatch();
    const isAuth = useSelector(getAuthIsAuth);
    const type = useSelector(getAuthType);

    let links = null;

    const onLogout = useCallback(() => {
        dispatch(authActions.logout());
        // dispatch(clientActions.logout());
        // dispatch(courierActions.logout());
    }, [dispatch]);

    if (!isAuth) {
        links = (
            <Link to={"/auth"} className={cls.link}>
                Авторизация
            </Link>
        );
    } else {
        if (type === "client") {
            links = (
                <>
                    <Link to={"/"} className={cls.link}>
                        Товары
                    </Link>
                    <Link to={"/profile"} className={cls.link}>
                        Профиль
                    </Link>
                    <Link to={"/cart"} className={cls.link}>
                        Корзина
                    </Link>
                    <Link onClick={onLogout} to={"/auth"} className={cls.link}>
                        Выйти
                    </Link>
                </>
            );
        } else {
            links = (
                <>
                    <Link to={"/"} className={cls.link}>
                        Заказы
                    </Link>
                    <Link to={"/profile"} className={cls.link}>
                        Профиль
                    </Link>
                    <Link onClick={onLogout} to={"/auth"} className={cls.link}>
                        Выйти
                    </Link>
                </>
            );
        }
    }
    return (
        <header className={classNames(cls.Navbar, {}, [])}>
            <span className={cls.title}> Slavic Market </span>
            <div className={cls.linksWrapper}>{links}</div>
        </header>
    );
}
