import { Stack, Typography } from "@mui/material";
import React from "react";
import { CButton } from "../../utils";

export default function PriceSection() {
    return (
        <Stack
            sx={{
                bgcolor: '#fff',
                borderRadius: '10px',
                p: 2,
                py: 6,
                borderLeft: '1px dashed #f1f1f1',
            }}
            gap={3}
        >
            <Typography variant="h4"
                align="right"
                pb={2}

            >৳ 1850</Typography>
            <Stack
                direction={'block'}
                justifyContent={'center'}
            >
                <CButton
                    color='success'
                    variant='contained'
                >
                    Book Now
                </CButton>

            </Stack>
            <Typography variant="p"
                align="right"
                fontSize={14}
            >
                Flight Details
            </Typography>
        </Stack>
    )
}
