import { Stack } from "@mui/material";
import React from "react";
import FlightDetails from "../../components/flightDetails/FlightDetails";
import Summary from "../../components/summary/Summary";
import TabSection from "../../components/tabSection/TabSection";

export default function BottomSection() {

    return (
        <Stack>
            <TabSection />
            <FlightDetails />
            <Summary />



        </Stack>
    )
}
