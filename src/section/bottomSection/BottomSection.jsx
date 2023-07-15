import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import TabSection from "../../components/tabSection/TabSection";
import BottomDetail1 from "./BottomDetail1";

export default function BottomSection() {
    const value = useSelector(state => state.exchange.value)

    return (
        <Stack>
            <TabSection />
            <BottomDetail1
                title1={value === 'JFK' ? 'DOC' : 'JFK'}
                title2={'DXB'}
            />
            <Stack
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Stack
                    width={'70%'}
                    bgcolor={'#2DCB90'}
                    p={1}
                >
                    <Typography variant="p"
                        fontSize={12}
                        align="center"
                        fontWeight={600}
                    >
                        Chang planes at International | Kuawit |KW| Kuawit (KW), connectiong time: 04h:10m
                    </Typography>

                </Stack>
            </Stack>
            <BottomDetail1
                title2={value !== 'JFK' ? 'DOC' : 'JFK'}
                title1={'DXB'}
            />


        </Stack>
    )
}
