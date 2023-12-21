import React, { useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./TextArea.module.scss";

export const TextArea = (props) => {
    const { className, label, value, onChange } = props;

    const onChangeHandler = useCallback(
        (e) => {
            onChange?.(e.target.value);
        },
        [onChange]
    );

    return (
        <div className={classNames(cls.TextArea, {}, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <textarea
                className={cls.input}
                value={value}
                onChange={onChangeHandler}
            ></textarea>
        </div>
    );
};
