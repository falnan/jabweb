import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FormControl, FormLabel, Input, Textarea } from "@mui/joy";
import { router, usePage } from "@inertiajs/react";
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
                            <Link
                                underline="none"
                                color="neutral"
                                href="#some-link"
                                aria-label="Home"
                            >
                                <HomeRoundedIcon />
                            </Link>
                            <Link
                                underline="hover"
                                color="neutral"
                                // href="#some-link"
                                sx={{ fontSize: 12, fontWeight: 500 }}
                            >
                                Dashboard
                            </Link>
                            <Typography
                                color="primary"
                                sx={{ fontWeight: 500, fontSize: 12 }}
                            >
                                Input Data
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
                            Input Data
                        </Typography>
                    </Box>
                    <Box>
                        {/* input data */}
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
                            <FormControl sx={{ flex: 1 }} size="sm">
                                <FormLabel>Resi</FormLabel>
                                <Input
                                    name="resi"
                                    size="sm"
                                    placeholder="Resi"
                                    required
                                />
                            </FormControl>

                            <FormControl sx={{ flex: 1 }} size="sm">
                                <FormLabel>Kurir</FormLabel>
                                <Input
                                    name="courier"
                                    size="sm"
                                    placeholder="Courier"
                                    required
                                />
                            </FormControl>
                            <FormControl sx={{ flex: 1 }} size="sm">
                                <FormLabel>Penerima</FormLabel>
                                <Input
                                    name="customer"
                                    size="sm"
                                    placeholder="Customer"
                                    required
                                />
                            </FormControl>
                            <FormControl sx={{ flex: 1 }} size="sm">
                                <FormLabel>Keterangan</FormLabel>
                                {/* <Input size="sm" placeholder="Note" /> */}
                                <Textarea
                                    name="note"
                                    minRows={2}
                                    placeholder="Note"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                color="success"
                                size="sm"
                                sx={{ marginTop: 2 }}
                            >
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Box>
        </CssVarsProvider>
    );
}
