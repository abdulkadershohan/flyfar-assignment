import { Grid, Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../../features/tabSlice";
import { CButton } from "../../utils";

export default function TabSection() {
    const selected = useSelector(state => state.tab.selected)
    const dispatch = useDispatch()
    const tab = [
        {
            id: 1,
            name: 'Flight Details',
            value: 1
        },
        {
            id: 2,
            name: 'Fare Summary',
            value: 2
        },
        {
            id: 3,
            name: 'Fare Policy',
            value: 3
        },
        {
            id: 4,
            name: 'Baggage',
            value: 4
        }
    ]
    return <Grid container spacing={2}>
        {
            tab.map((item, index) => (
                <Grid item xs={6} md={3} key={index}>
                    <Stack

                    >
                        <CButton
                            bgcolor={selected === item.value ? '#2DCB90' : '#fff'}
                            radius={'10px'}
                            fontWeight={500}
                            textColor={selected === item.value ? '#fff' : '#000'}
                            onClick={() => dispatch(changeTab(item.value))}
                        //variant={selected === item.value ? 'contained' : 'inherit'}
                        >
                            {item.name}
                        </CButton>
                    </Stack>

                </Grid>
            ))
        }
    </Grid>
}
