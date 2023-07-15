import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import logo from '../../assets/img/logo.png';

export default function BimanBangladesh() {
    return <Stack px={2} gap={0.5}>
        <Avatar src={logo} sx={{ width: '40px', height: '40px' }} />
        <Typography variant="p"
            fontSize={14}
            fontWeight={500}
            color={'#505250'}
            pt={2}

        >Biman Bangladesh Airlines</Typography>
        <Typography variant="p"
            fontSize={14}
            fontWeight={500}
            color={'#2DCB90'}
        >BG 617</Typography>
        <Typography variant="p"
            fontSize={14}
            fontWeight={500}
            color={'#505250'}
            pt={1}
        >
            Operated by BG
        </Typography>
        <Typography variant="p"
            fontSize={14}
            fontWeight={500}
            color={'#505250'}
        >
            Economy
        </Typography>
    </Stack>
}
