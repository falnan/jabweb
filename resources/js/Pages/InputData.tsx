import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Typography from "@mui/joy/Typography";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {
    Card,
    CardActions,
    CardOverflow,
    Divider,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Textarea,
} from "@mui/joy";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import BarcodeScanner from "./BarcodeScanner";

export default function InputData() {
    const [scanner, setScanner] = useState(false);

    const { data, setData, post, errors }: any = useForm({
        resi: "",
        customer: "",
        courier: "",
        note: "",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post("/input-data");
    }

    function handleChange(e: any) {
        setData((val: any) => ({ ...val, [e.target.name]: e.target.value }));
    }

    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Box sx={{ display: "flex", minHeight: "100dvh" }}>
                <Header />
                <Sidebar />
                <Box
                    component="main"
                    className="MainContent"
                    sx={{
                        px: { xs: 2, md: 6 },
                        pt: {
                            xs: "calc(12px + var(--Header-height))",
                            sm: "calc(12px + var(--Header-height))",
                            md: 3,
                        },
                        pb: { xs: 2, sm: 2, md: 3 },
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        minWidth: 0,
                        height: "100dvh",
                        gap: 1,
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Breadcrumbs
                            size="sm"
                            aria-label="breadcrumbs"
                            separator={
                                <ChevronRightRoundedIcon fontSize="small" />
                            }
                            sx={{ pl: 0 }}
                        >
                            <Link color="neutral" href="#" aria-label="Home">
                                <HomeRoundedIcon />
                            </Link>
                            <Link
                                href="#"
                                color="neutral"

                                // sx={{ fontSize: 12, fontWeight: 500 }}
                            >
                                Dashboard
                            </Link>
                            <Typography
                                color="primary"
                                sx={{ fontWeight: 500, fontSize: 12 }}
                            >
                                Tambahkan Data
                            </Typography>
                        </Breadcrumbs>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            mb: 1,
                            gap: 1,
                            flexDirection: { xs: "column", sm: "row" },
                            alignItems: { xs: "start", sm: "center" },
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography level="h2" component="h1">
                            Tambahkan Data
                        </Typography>
                    </Box>
                    <Box>
                        <form
                            className="lg:w-96 mx-auto space-y-2"
                            onSubmit={handleSubmit}
                        >
                            <Card>
                                <Box sx={{ mb: 1 }}>
                                    <Typography level="title-md">
                                        Periksa Kembali!
                                    </Typography>
                                    <Typography level="body-sm">
                                        Pastikan data yang Anda masukkan benar.
                                    </Typography>
                                </Box>
                                <Divider />
                                <Stack
                                    direction="column"
                                    spacing={2}
                                    sx={{
                                        display: { xs: "flex" },
                                        my: 1,
                                    }}
                                >
                                    <Stack direction="row" spacing={2}>
                                        <Stack spacing={1} sx={{ flexGrow: 1 }}>
                                            <FormLabel>Resi</FormLabel>
                                            <FormControl
                                                sx={{
                                                    display: {
                                                        sm: "flex-column",
                                                        md: "flex-row",
                                                    },
                                                    gap: 2,
                                                }}
                                            >
                                                <div className="flex gap-2">
                                                    <Input
                                                        id="customer"
                                                        name="resi"
                                                        size="sm"
                                                        value={data.resi}
                                                        onChange={handleChange}
                                                        error={errors.resi}
                                                        className="w-full"
                                                    />

                                                    {scanner == false ? (
                                                        <Button
                                                            onClick={() =>
                                                                setScanner(true)
                                                            }
                                                            color="neutral"
                                                        >
                                                            Scan
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            onClick={() =>
                                                                setScanner(
                                                                    false
                                                                )
                                                            }
                                                            color="danger"
                                                        >
                                                            Stop
                                                        </Button>
                                                    )}
                                                </div>
                                            </FormControl>
                                            {scanner && (
                                                <div className="self-center">
                                                    <BarcodeScanner
                                                        setValue={setData}
                                                    />
                                                </div>
                                            )}
                                        </Stack>
                                    </Stack>
                                    <FormControl>
                                        <FormLabel>Pelanggan</FormLabel>
                                        <Input
                                            id="customer"
                                            name="customer"
                                            size="sm"
                                            value={data.customer}
                                            onChange={handleChange}
                                            error={errors.customer}
                                        />
                                    </FormControl>
                                    <FormControl sx={{ flexGrow: 1 }}>
                                        <FormLabel>Kurir</FormLabel>
                                        <Input
                                            id="courier"
                                            name="courier"
                                            size="sm"
                                            value={data.courier}
                                            onChange={handleChange}
                                            error={errors.courier}
                                        />
                                    </FormControl>
                                    <FormControl sx={{ flexGrow: 1 }}>
                                        <FormLabel>Keterangan</FormLabel>
                                        <Input
                                            id="note"
                                            name="note"
                                            size="sm"
                                            value={data.note}
                                            onChange={handleChange}
                                            error={errors.note}
                                        />
                                    </FormControl>
                                </Stack>
                                <CardOverflow
                                    sx={{
                                        borderTop: "1px solid",
                                        borderColor: "divider",
                                    }}
                                >
                                    <CardActions
                                        sx={{ alignSelf: "flex-end", pt: 2 }}
                                    >
                                        <Button
                                            size="sm"
                                            variant="outlined"
                                            color="neutral"
                                            onClick={() => router.get("/")}
                                        >
                                            Kembali
                                        </Button>
                                        <Button
                                            type="submit"
                                            size="sm"
                                            variant="solid"
                                        >
                                            Simpan
                                        </Button>
                                    </CardActions>
                                </CardOverflow>
                            </Card>
                        </form>
                    </Box>
                </Box>
            </Box>
        </CssVarsProvider>
    );
}
