import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import Sidebar from "../components/Sidebar";
import OrderTable from "../components/OrderTable";
import Header from "../components/Header";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";

export default function Data({
    data,
    searchValue,
    startDateValue,
    endDateValue,
}: any) {
    function handleDeleteBetween() {
        Swal.fire({
            title: "Periksa kembali!",
            text: `Anda akan menghapus data tanggal ${startDateValue} hingga ${endDateValue}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Ya, Hapuskan!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(
                    `deletebetween/?startDate=${startDateValue}&endDate=${endDateValue}`
                );
            }
        });
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
                                href="#some-link"
                                sx={{ fontSize: 12, fontWeight: 500 }}
                            >
                                Dashboard
                            </Link>
                            <Typography
                                color="primary"
                                sx={{ fontWeight: 500, fontSize: 12 }}
                            >
                                Data
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
                            Data
                        </Typography>
                        <div className="flex gap-3">
                            <Button
                                color="danger"
                                startDecorator={<DownloadRoundedIcon />}
                                size="sm"
                                onClick={handleDeleteBetween}
                            >
                                Hapus Data
                            </Button>
                            <Link
                                href={`/export?startDate=${startDateValue}&endDate=${endDateValue}`}
                            >
                                <Button
                                    color="primary"
                                    startDecorator={<DownloadRoundedIcon />}
                                    size="sm"
                                >
                                    Unduh Excel
                                </Button>
                            </Link>
                        </div>
                    </Box>
                    <OrderTable
                        data={data}
                        searchValue={searchValue}
                        startDateValue={startDateValue}
                        endDateValue={endDateValue}
                    />
                </Box>
            </Box>
        </CssVarsProvider>
    );
}
