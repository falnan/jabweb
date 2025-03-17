import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function BarcodeScanner({ setValue }: any) {
    return (
        <div style={{ background: "white", padding: "16px" }}>
            <BarcodeScannerComponent
                width={500}
                height={500}
                onUpdate={(err: any, result: any) => {
                    if (result) {
                        setValue((val: any) => ({ ...val, resi: result.text }));
                    }
                }}
            />
        </div>
    );
}
