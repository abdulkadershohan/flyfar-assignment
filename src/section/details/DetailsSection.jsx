import { Grid, Stack } from "@mui/material";
import React from "react";
import TopLeft from "../../components/topLeft/TopLeft";
import TopRight from "../../components/topRight/TopRight";
export default function DetailsSection() {
    return (
        <Stack
            sx={{
                bgcolor: '#fff',
                borderRadius: '10px',
                p: 2,
            }}
            gap={3}
        >
            <Stack>
                <Grid container spacing={2}
                >
                    <Grid item xs={12} md={4} >
                        <TopLeft />

                    </Grid>
                    <Grid item xs={12} md={8} >
                        <TopRight />
                    </Grid>
                </Grid>
            </Stack>

        </Stack>
    )
}
