import LocalAirportOutlinedIcon from '@mui/icons-material/LocalAirportOutlined';
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeTo } from '../../features/exchangeSlice';

export default function TopRight() {
    const value = useSelector(state => state.exchange.value)
    const dispatch = useDispatch()
    // const [value, setValue] = React.useState('JFK');
    const JKF = {
        title: 'JFK',
        location: 'JF Kennedy Init Airport',
    }

    const DAC = {
        title: 'DAC',
        location: 'Hazrat Shahjalal Intl Airport',

    }
    const LeftSide = () => {
        return (
            <Stack gap={2}
                p={2}
            >
                <Typography variant="p"
                    fontSize={20}
                    fontWeight={500}
                >
                    {value === 'JFK' ? JKF.title : DAC.title}
                </Typography>

                <Typography variant="p"
                    fontSize={12}
                    fontWeight={600}
                    textTransform={'capitalize'}
                    color={'#bdb9b9'}
                >
                    {value === 'JFK' ? JKF.location : DAC.location}
                </Typography>
                <Typography variant="p"
                    fontSize={13}
                    fontWeight={600}
                    color={'#2DCB90'}
                    lineHeight={0}
                    pt={1}
                >
                    19:05
                </Typography>
                <Typography variant="p"
                    fontSize={12}
                    fontWeight={600}
                    textTransform={'uppercase'}
                    color={'#bdb9b9'}
                    lineHeight={0}
                >
                    SUN 4TH JUL 2022
                </Typography>
                <Stack
                    direction={{
                        xs: 'column',
                        sm: 'row'
                    }}
                    gap={{
                        xs: 1,
                        sm: 0
                    }}
                    justifyContent={'space-between'}
                    pt={6}
                >
                    <Typography variant="p"
                        fontSize={13}
                        fontWeight={600}
                        color={'#2DCB90'}
                        lineHeight={0}
                        pt={1}
                    >
                        Refundable
                    </Typography>
                    <Typography variant="p"
                        fontSize={13}
                        fontWeight={600}
                        color={'#2DCB90'}
                        lineHeight={0}
                        pt={1}
                    >
                        Class-W
                    </Typography>
                </Stack>
            </Stack>
        )
    }
    const RightSide = () => {
        return (
            <Stack gap={2}
                p={2}
            >
                <Typography variant="p"
                    fontSize={20}
                    fontWeight={500}
                    align="right"
                >
                    {value !== 'JFK' ? JKF.title : DAC.title}
                </Typography>

                <Typography variant="p"
                    fontSize={12}
                    fontWeight={600}
                    textTransform={'capitalize'}
                    color={'#bdb9b9'}
                    align="right"

                >
                    {value !== 'JFK' ? JKF.location : DAC.location}
                </Typography>
                <Typography variant="p"
                    fontSize={13}
                    fontWeight={600}
                    color={'#2DCB90'}
                    align="right"
                    lineHeight={0}
                    pt={1}
                >
                    19:05
                </Typography>
                <Typography variant="p"
                    fontSize={12}
                    fontWeight={600}
                    textTransform={'uppercase'}
                    color={'#bdb9b9'}
                    lineHeight={0}
                    align="right"

                >
                    SUN 4TH JUL 2022
                </Typography>
                <Typography variant="p"
                    fontSize={12}
                    fontWeight={600}
                    textTransform={'uppercase'}
                    color={'#bdb9b9'}
                    align="right"
                    mt={6}

                >
                    Baggage: 45kg
                </Typography>

            </Stack>
        )
    }
    return (
        <Stack>
            <Grid container
                alignContent={'center'}
                justifyContent={'center'}
            >
                <Grid item xs={5} >
                    <LeftSide />
                </Grid>
                <Grid item xs={2} >
                    <Stack
                        alignContent={'center'}
                        justifyContent={'center'}
                        p={2}
                    >
                        <Box
                            sx={{
                                cursor: 'pointer',
                            }}
                            mt={4}
                            onClick={() => {
                                if (value === 'JFK') {
                                    dispatch(changeTo('DAC'))
                                }
                                else {
                                    dispatch(changeTo('JFK'))
                                }
                            }}
                            position={'relative'}
                        >
                            <LocalAirportOutlinedIcon
                                sx={{
                                    fontSize: {
                                        xs: 40,
                                        sm: 60
                                    },
                                    transform: 'rotate(90deg)',
                                    color: value === 'JFK' ? '#f1f1f1' : '#000',
                                }}
                            />
                            <LocalAirportOutlinedIcon
                                sx={{
                                    fontSize: {
                                        xs: 40,
                                        sm: 60
                                    },
                                    transform: 'rotate(270deg)',
                                    color: value !== 'JFK' ? '#f1f1f1' : '#000',
                                    position: 'absolute',
                                    top: {
                                        xs: 20,
                                        sm: 35
                                    },
                                    left: {
                                        sm: 8,
                                        xs: 4
                                    }
                                }}
                            />
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={5} >
                    <RightSide />
                </Grid>
            </Grid>

        </Stack>
    )
}
