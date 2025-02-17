import { DateRangeTwoTone } from "@mui/icons-material";
import {
    DateCalendar,
    DateField,
    DatePicker,
    DatePickerToolbar,
    LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Belajar() {
    return (
        <div>
            afasdkl
            <form action=""></form>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
            </LocalizationProvider>
        </div>
    );
}
