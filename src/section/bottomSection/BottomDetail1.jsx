import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BimanBangladesh from "../../components/common/BimanBangladesh";
export default function BottomDetail1({ title1, title2 }) {

    return (
        <Stack py={6}>
            <Grid container spacing={2}

            >
                <Grid item xs={12} md={6} lg={3}>
                    <BimanBangladesh />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Stack gap={1}
                        p={2}
                    >

                        <Typography variant="p"
                            fontSize={12}
                            fontWeight={600}
                            textTransform={'capitalize'}
                            color={'#bdb9b9'}
                        >
                            Depart
                        </Typography>
                        <Typography variant="p"
                            fontSize={16}
                            fontWeight={500}
                        >
                            {title1}
                        </Typography>
                        <Typography variant="p"
                            fontSize={12}
                            fontWeight={600}
                            textTransform={'capitalize'}
                            color={'#bdb9b9'}
                        >
                            Dhaka,BD | <font color='#000'> 15.00</font>
                        </Typography>
                        <Typography variant="p"
                            fontSize={14}
                            fontWeight={500}
                            color={'#505250'}
                            pt={1}

                        >
                            Terminal, Hazrat Shah jalal International Airport
                        </Typography>
                        <Typography variant="p"
                            fontSize={12}
                            fontWeight={600}
                            textTransform={'capitalize'}
                            color={'#bdb9b9'}
                        >
                            Sun, 3rd June 2022
                        </Typography>


                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Stack
                        height={'100%'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Typography variant="p"
                            fontSize={12}
                            fontWeight={600}
                            textTransform={'capitalize'}
                            color={'#bdb9b9'}
                        >
                            55 minutes
                        </Typography>
                        <ArrowRightAltOutlinedIcon
                            fontSize={'large'}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Stack gap={1}
                        p={2}
                    >

                        <Typography variant="p"
                            fontSize={12}
                            fontWeight={600}
                            textTransform={'capitalize'}
                            color={'#bdb9b9'}
                        >
                            Depart
                        </Typography>
                        <Typography variant="p"
                            fontSize={16}
                            fontWeight={500}
                        >
                            {title2}
                        </Typography>
                        <Typography variant="p"
                            fontSize={12}
                            fontWeight={600}
                            textTransform={'capitalize'}
                            color={'#bdb9b9'}
                        >
                            Dhaka,BD | <font color='#000'> 15.00</font>
                        </Typography>
                        <Typography variant="p"
                            fontSize={14}
                            fontWeight={500}
                            color={'#505250'}
                            pt={1}

                        >
                            Terminal, Hazrat Shah jalal International Airport
                        </Typography>
                        <Typography variant="p"
                            fontSize={12}
                            fontWeight={600}
                            textTransform={'capitalize'}
                            color={'#bdb9b9'}
                        >
                            Sun, 3rd June 2022
                        </Typography>


                    </Stack>
                </Grid>
            </Grid>

        </Stack>
    )
}
