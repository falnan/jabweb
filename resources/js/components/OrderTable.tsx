/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { ColorPaletteProp, ThemeProvider } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import IconButton, { iconButtonClasses } from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import BlockIcon from "@mui/icons-material/Block";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import dayjs from "dayjs";
import { Link, router } from "@inertiajs/react";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
) => number {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function RowMenu({ id }: any) {
    return (
        <Dropdown>
            <MenuButton
                slots={{ root: IconButton }}
                slotProps={{
                    root: { variant: "plain", color: "neutral", size: "sm" },
                }}
            >
                <MoreHorizRoundedIcon />
            </MenuButton>
            <Menu size="sm" sx={{ minWidth: 140 }}>
                <Link href={`/edit-data/${id}`}>
                    <MenuItem>Ubah</MenuItem>
                </Link>
                <Divider />
                <Link href={`/delete-data/${id}`} method="delete">
                    <MenuItem color="danger">Hapus</MenuItem>
                </Link>
            </Menu>
        </Dropdown>
    );
}
export default function OrderTable({
    data,
    searchValue,
    startDateValue,
    endDateValue,
}: any) {
    return (
        <React.Fragment>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(
                        (formData as any).entries()
                    );
                    router.get("/", formJson);
                }}
            >
                <Box
                    className="SearchAndFilters-tabletUp"
                    sx={{
                        borderRadius: "sm",
                        py: 2,
                        display: { sm: "flex" },
                        flexWrap: "wrap",
                        gap: 1.5,
                        "& > *": {
                            minWidth: { xs: "120px", md: "160px" },
                        },
                    }}
                >
                    <FormControl sx={{ flex: 1 }} size="sm">
                        <FormLabel
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "flex",
                                },
                            }}
                        >
                            Cari Resi atau Pelanggan
                        </FormLabel>
                        <Input
                            name="search"
                            defaultValue={searchValue}
                            size="sm"
                            placeholder="Cari"
                            startDecorator={<SearchIcon />}
                        />
                    </FormControl>
                    <Box
                        sx={{
                            display: {
                                xs: "flex",
                            },
                            gap: 1.5,
                            marginTop: {
                                xs: 2,
                                sm: 0,
                            },
                        }}
                    >
                        <FormControl size="sm">
                            <FormLabel
                                sx={{
                                    display: {
                                        xs: "none",
                                        sm: "flex",
                                    },
                                }}
                            >
                                Dari
                            </FormLabel>
                            <Input
                                name="startDate"
                                type="date"
                                defaultValue={startDateValue}
                            />
                        </FormControl>
                        <FormControl size="sm">
                            <FormLabel
                                sx={{
                                    display: {
                                        xs: "none",
                                        sm: "flex",
                                    },
                                }}
                            >
                                Ke
                            </FormLabel>
                            <Input
                                name="endDate"
                                type="date"
                                defaultValue={endDateValue}
                            />
                        </FormControl>
                    </Box>
                    <Button
                        size="sm"
                        type="submit"
                        color="success"
                        sx={{
                            mt: {
                                xs: 2,
                                sm: 3,
                            },
                        }}
                    >
                        Cari
                    </Button>
                    {/* {renderFilters()} */}
                </Box>
            </form>
            <Sheet
                className="OrderTableContainer"
                variant="outlined"
                sx={{
                    display: { sm: "initial" },
                    width: "100%",
                    borderRadius: "sm",
                    flexShrink: 1,
                    overflow: "auto",
                    minHeight: 0,
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    stickyHeader
                    hoverRow
                    sx={{
                        "--TableCell-headBackground":
                            "var(--joy-palette-background-level1)",
                        "--Table-headerUnderlineThickness": "1px",
                        "--TableRow-hoverBackground":
                            "var(--joy-palette-background-level1)",
                        "--TableCell-paddingY": "4px",
                        "--TableCell-paddingX": "8px",
                    }}
                >
                    <thead>
                        <tr>
                            <th style={{ width: 50, padding: "12px 6px" }}>
                                No
                            </th>
                            <th style={{ width: 140, padding: "12px 6px" }}>
                                Waktu dan Tanggal
                            </th>
                            <th style={{ width: 140, padding: "12px 6px" }}>
                                Resi
                            </th>
                            <th style={{ width: 140, padding: "12px 6px" }}>
                                Kurir
                            </th>
                            <th style={{ width: 140, padding: "12px 6px" }}>
                                Pelanggan
                            </th>
                            <th style={{ width: 140, padding: "12px 6px" }}>
                                Keterangan
                            </th>
                            <th style={{ width: 140, padding: "12px 6px" }}>
                                {" "}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((row: any, idx: any) => (
                            <tr key={row.id}>
                                <td>
                                    {(data.current_page - 1) * data.per_page +
                                        idx +
                                        1}
                                </td>
                                <td>
                                    <Typography level="body-xs">
                                        {dayjs(row.created_at).format(
                                            "HH:mm:ss, DD-MM-YYYY"
                                        )}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">
                                        {row.resi}
                                    </Typography>
                                </td>
                                {/* <td>
                                    <Chip
                                            variant="soft"
                                            size="sm"
                                            startDecorator={
                                                {
                                                    Paid: <CheckRoundedIcon />,
                                                    Refunded: (
                                                        <AutorenewRoundedIcon />
                                                    ),
                                                    Cancelled: <BlockIcon />,
                                                }[row.status]
                                            }
                                            color={
                                                {
                                                    Paid: "success",
                                                    Refunded: "neutral",
                                                    Cancelled: "danger",
                                                }[
                                                    row.status
                                                ] as ColorPaletteProp
                                            }
                                        >
                                            {row.status}
                                        </Chip>
                                </td> */}
                                <td>
                                    <Typography level="body-xs">
                                        {row.courier}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">
                                        {row.customer}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">
                                        {row.note}
                                    </Typography>
                                </td>
                                <td>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 2,
                                            alignItems: "center",
                                        }}
                                    >
                                        <Link
                                            href={`/edit-data/${row.id}`}
                                            className="text-blue-600"
                                        >
                                            Ubah
                                        </Link>
                                        <RowMenu id={row.id} />
                                    </Box>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Sheet>
            <Box
                className="Pagination-laptopUp"
                sx={{
                    pt: 2,
                    gap: 1,
                    [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
                    display: "flex",
                }}
            >
                <Link href={data.prev_page_url}>
                    <Button
                        size="sm"
                        variant="outlined"
                        color="neutral"
                        startDecorator={<KeyboardArrowLeftIcon />}
                    >
                        Previous
                    </Button>
                </Link>

                <Box sx={{ flex: 1 }} />
                <Typography>
                    {data.data.length} dari {data.total} data{" "}
                </Typography>
                <Box sx={{ flex: 1 }} />
                <Link href={data.next_page_url}>
                    <Button
                        size="sm"
                        variant="outlined"
                        color="neutral"
                        endDecorator={<KeyboardArrowRightIcon />}
                    >
                        Next
                    </Button>
                </Link>
            </Box>
        </React.Fragment>
    );
}
