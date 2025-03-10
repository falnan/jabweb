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
import { Link, router, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function InputData() {
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
                            onSubmit={(event) => {
                                event.preventDefault();
                                const formData = new FormData(
                                    event.currentTarget
                                );
                                const formJson = Object.fromEntries(
                                    (formData as any).entries()
                                );
                                const data: any = JSON.stringify(formJson);

                                router.post("/input-data", formJson);
                            }}
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
                                                <Input
                                                    name="resi"
                                                    size="sm"
                                                    placeholder=""
                                                />
                                            </FormControl>
                                        </Stack>
                                    </Stack>
                                    <FormControl>
                                        <FormLabel>Pelanggan</FormLabel>
                                        <Input name="customer" size="sm" />
                                    </FormControl>
                                    <FormControl sx={{ flexGrow: 1 }}>
                                        <FormLabel>Kurir</FormLabel>
                                        <Input
                                            name="courier"
                                            size="sm"
                                            sx={{ flexGrow: 1 }}
                                        />
                                    </FormControl>
                                    <FormControl sx={{ flexGrow: 1 }}>
                                        <FormLabel>Keterangan</FormLabel>
                                        <Input
                                            name="note"
                                            size="sm"
                                            sx={{ flexGrow: 1 }}
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
