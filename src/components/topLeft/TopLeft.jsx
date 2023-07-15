import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import logo from '../../assets/img/logo.png';
import MySteper from "../steper/Steper";

export default function topLeft() {
    return (
        <Stack gap={2}
            p={2}
        >
            <Avatar alt="biman bangladesh logo" src={logo}
                sx={{
                    height: 50,
                    width: 50,
                }}
            />
            <Typography variant="p"
                fontSize={16}
                fontWeight={500}
            >Biman Bangladesh Airlines</Typography>
            <Typography variant="p"
                fontSize={13}
                fontWeight={600}
                color={'#2DCB90'}
            >BG 178 | W & BG 671 | E</Typography>
            <Stack>
                <Typography variant="p"
                    fontSize={12}
                    fontWeight={600}
                    align="center"
                    textTransform={'uppercase'}
                    color={'#bdb9b9'}
                >5H 35 min</Typography>

                <MySteper />
                <Typography variant="p"
                    fontSize={12}
                    fontWeight={600}
                    align="center"
                    textTransform={'uppercase'}
                    color={'#bdb9b9'}
                >1 Stops</Typography>
            </Stack>
        </Stack>)
}
