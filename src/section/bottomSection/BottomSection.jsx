import { Stack } from "@mui/material";
import React from "react";
import FlightDetails from "../../components/flightDetails/FlightDetails";
import Summary from "../../components/summary/Summary";
import TabSection from "../../components/tabSection/TabSection";
import Policy from "../../components/policy/Policy";
import Baggage from "../../components/baggage/Baggage";

export default function BottomSection() {

    return (
        <Stack>
            <TabSection />
            <FlightDetails />
            <Summary />
            <Policy />
            <Baggage />



        </Stack>
    )
}
