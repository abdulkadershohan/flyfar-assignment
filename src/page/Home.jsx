import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import DetailsSection from "../section/details/DetailsSection";
import PriceSection from "../section/price/PriceSection";

export default function Home() {
    return (
        <Stack py={8}>
            <Container>
                <Stack>
                    <Grid container spacing={0.3}
                    // sx={{
                    //     display: 'flex',
                    //     flexDirection: {
                    //         xs: 'column-reverse',
                    //         sm: 'column',
                    //     }
                    // }}
                    >
                        <Grid item xs={10} >
                            <DetailsSection />
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <PriceSection />
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Stack>
    )
}
