import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

Input.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleOnChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
    id: PropTypes.string,
};

function Input({
    type = "text",
    name,
    value,
    defaultValue,
    className,
    variant = "primary",
    autoComplete,
    required,
    isFocused,
    handleOnChange,
    placeholder,
    isError,
    id,
}) {
    const input = useRef(null);
    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);
    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                    isError && "input-error"
                } focus:outline-alerange focus:outline-none input-${variant} ${className} `}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleOnChange(e)}
                placeholder={placeholder}
                id={id}
            />
        </div>
    );
}

export default Input;
