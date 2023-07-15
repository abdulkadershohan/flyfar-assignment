import LocalAirportOutlinedIcon from '@mui/icons-material/LocalAirportOutlined';
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function TopRight() {
    const [value, setValue] = React.useState('JFK');
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
                    direction={'row'}
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
            <Grid container spacing={2}
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
                            onClick={() => {
                                if (value === 'JFK') {
                                    setValue('DAC')
                                }
                                else {
                                    setValue('JFK')
                                }
                            }}
                            position={'relative'}
                        >
                            <LocalAirportOutlinedIcon
                                sx={{
                                    fontSize: 60,
                                    transform: 'rotate(90deg)',
                                    color: value === 'JFK' ? '#f1f1f1' : '#000',
                                }}
                            />
                            <LocalAirportOutlinedIcon
                                sx={{
                                    fontSize: 60,
                                    transform: 'rotate(270deg)',
                                    color: value !== 'JFK' ? '#f1f1f1' : '#000',
                                    position: 'absolute',
                                    top: 35,
                                    left: 8
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
