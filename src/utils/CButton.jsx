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
    bgcolor,
    textColor,
    btnTitle,
    radius,
    fontWeight,
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
                bgcolor: bgcolor ? bgcolor : '#2DCB90',
                borderRadius: radius ? radius : '20px',
                px: 3,
                fontSize: '16px',
                fontWeight: fontWeight,
                color: textColor ? textColor : '#fff',
                '&:hover': {
                    bgcolor: bgcolor ? bgcolor : '#2DCB90',
                    color: textColor ? textColor : '#fff',
                },
                // color: textColor ? textColor : '#B9FCE6',
            }}
            {...rest}
        >
            {btnTitle} {children}
        </Button>
    );
}

