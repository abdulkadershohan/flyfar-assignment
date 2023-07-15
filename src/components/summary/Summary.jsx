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
function createData(PaxType, BaseFare, Tax, Total, PaxCount, ServiceFree, SubTotal) {
    return { PaxType, BaseFare, Tax, Total, PaxCount, ServiceFree, SubTotal };
}


const rows = [
    createData('Audult x1', '4090 TK', '275 TK', '4815 TK', '1', '0 BDT', '4815 TK'),
    createData('Child x1', '4090 TK', '275 TK', '4815 TK', '1', '0 BDT', '4815 TK'),
    createData('Infant x1', '4090 TK', '275 TK', '4815 TK', '1', '0 BDT', '4815 TK'),
];
export default function Summary() {
    const selected = useSelector(state => state.tab.selected)
    const SummaryTable = () => {
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
                            <TableCell>Pax Type</TableCell>
                            <TableCell align="right">{'BaseFare (BDT)'}</TableCell>
                            <TableCell align="right">{'Tax (BDT)'}</TableCell>
                            <TableCell align="right">{'Total (BDT)'}</TableCell>
                            <TableCell align="right">{'Pax Count'}</TableCell>
                            <TableCell align="right">{'Service Free'}</TableCell>
                            <TableCell align="right">{'Sub Total (BDT)'}</TableCell>

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
                                <TableCell component="th" scope="row">
                                    {row.PaxType}
                                </TableCell>
                                <TableCell align="right">
                                    {row.BaseFare}
                                </TableCell>
                                <TableCell align="right">
                                    {row.Tax}
                                </TableCell>
                                <TableCell align="right">
                                    {row.Total}
                                </TableCell>
                                <TableCell align="right">
                                    {row.PaxCount}
                                </TableCell>
                                <TableCell align="right">
                                    {row.ServiceFree}
                                </TableCell>
                                <TableCell align="right">
                                    {row.SubTotal}
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
                selected === 2 && <SummaryTable />
            }

        </Stack>
    )
}
