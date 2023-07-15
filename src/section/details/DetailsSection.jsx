import { Grid, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import TopLeft from "../../components/topLeft/TopLeft";
import TopRight from "../../components/topRight/TopRight";
import BottomSection from "../bottomSection/BottomSection";
export default function DetailsSection() {
    const showHide = useSelector(state => !state.exchange.showHide)
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
                    {
                        showHide && (
                            <Grid item xs={12}  >
                                <BottomSection />
                            </Grid>
                        )
                    }

                </Grid>
            </Stack>

        </Stack>
    )
}
