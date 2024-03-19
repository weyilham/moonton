import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
    type: PropTypes.oneOf(["submit", "button", "reset"]),
    className: PropTypes.string,
    processing: PropTypes.bool,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    children: PropTypes.node,
};

function Button({
    type = "submit",
    className = "",
    children,
    processing,
    variant = "primary",
}) {
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full ${
                processing && "opacity-25"
            } btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}

export default Button;
