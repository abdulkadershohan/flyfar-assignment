import { Stack } from "@mui/material";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from "react";
import { useSelector } from "react-redux";
function createData(baggage, checkin, cabin) {
    return { baggage, checkin, cabin };

}


const rows = [
    createData('Audult x1', '20 KG', 'M'),
    createData('Child x1', '20 KG', 'M'),
    createData('Infant x1', '20 KG', 'M'),
];
export default function Baggage() {
    const selected = useSelector(state => state.tab.selected)
    const BaggageTable = () => {
        return <Stack>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead
                    >
                        <TableRow
                            sx={{
                                "& th": {

                                    backgroundColor: "#2DCB90"
                                }
                            }}
                        >
                            <TableCell align="center">Baggage</TableCell>
                            <TableCell align="center">Check -in</TableCell>
                            <TableCell align="center">Cabin</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody

                    >
                        {rows.map((row, index) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },

                                    backgroundColor: index % 2 === 0 ? "#94f7af" : "#FFFFFF"

                                }}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    {row.baggage}
                                </TableCell>
                                <TableCell align="center">
                                    {row.checkin}
                                </TableCell>
                                <TableCell align="center">
                                    {row.cabin}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    }
    return (
        <Stack py={4}>
            {
                selected === 4 && <BaggageTable />
            }

        </Stack>
    )
}
