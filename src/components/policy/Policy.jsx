import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function Policy() {
    const selected = useSelector(state => state.tab.selected)
    const policyData = [
        {
            id: 1,
            title: 'Cancellation',
            decription: 'Refund Amount = Paid Amount - Cancellation Charges',
        },
        {
            id: 2,
            title: 'Void',
            decription: 'Refund Amount = Paid Amount - Cancellation Charges',
        },
        {
            id: 3,
            title: 'Re-issue',
            decription: 'Refund Amount = Paid Amount - Cancellation Charges',
        },
        {
            id: 4,
            title: 'Refund',
            decription: 'Refund Amount = Paid Amount - Cancellation Charges',
        }
    ]
    const MyPolicy = () => {
        return (
            <Stack>
                <Grid container spacing={3}>
                    {
                        policyData.map((item, index) => {
                            return (
                                <Grid item xs={6} key={index}>
                                    <Stack
                                        px={2}
                                    >
                                        <Stack
                                            bgcolor={'#2DCB90'}
                                            sx={{
                                                width: {
                                                    xs: '100%',
                                                    sm: '100%',
                                                    md: '40%',
                                                },
                                                py: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: '5px',
                                            }}
                                        >
                                            <Typography
                                                variant="p"
                                                fontSize={14}
                                                fontWeight={600}

                                            >
                                                {item.title}
                                            </Typography>

                                        </Stack>
                                        <Typography
                                            variant="p"
                                            fontSize={12}
                                            color={'#505250'}
                                            pt={2}
                                            fontWeight={500}
                                        >
                                            {item.decription}
                                        </Typography>
                                    </Stack>
                                </Grid>
                            )
                        }
                        )

                    }
                </Grid>
            </Stack>
        )
    }
    return <Stack py={4}>
        {
            selected === 3 && <MyPolicy />
        }

    </Stack>
}
