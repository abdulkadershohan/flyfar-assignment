import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BottomDetail1 from "../../section/bottomSection/BottomDetail1";

export default function FlightDetails() {
    const value = useSelector(state => state.exchange.value)
    const selected = useSelector(state => state.tab.selected)
    return <div>
        {
            selected === 1 && <>
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
            </>
        }
    </div>;
}
