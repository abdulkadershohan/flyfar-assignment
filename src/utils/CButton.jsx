import Button from "@mui/material/Button";
import * as React from "react";
export default function ContainedButtons({
    children,
    variant,
    size,
    color,
    disabled,
    disableFocusRipple,
    disableRipple,
    endIcon,
    fullWidth,
    href,
    startIcon,
    sx,
    btnTitle,
    ...rest
}) {
    return (
        <Button
            variant={variant}
            size={size ?? "small"}
            disabled={disabled}
            disableFocusRipple={disableFocusRipple ? false : true}
            disableRipple={disableRipple ? false : true}
            fullWidth={fullWidth}
            href={href}
            startIcon={startIcon}
            sx={{
                bgcolor: '#2DCB90',
                borderRadius: '20px',
                px: 3,
                fontSize: '16px',
                color: '#B9FCE6',
            }}
            {...rest}
        >
            {btnTitle} {children}
        </Button>
    );
}

