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
                    // alignItems={'center'}
                    // justifyContent={{
                    //     xs: 'left',
                    //     lg: 'center'
                    // }}
                    >
                        <Grid item xs={12} sm={8} md={10}>
                            <DetailsSection />
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <PriceSection />
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Stack>
    )
}
