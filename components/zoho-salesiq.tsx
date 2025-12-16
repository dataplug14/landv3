"use client";

import Script from "next/script";
import { useEffect } from "react";

export function ZohoSalesIQ() {
    useEffect(() => {
        // Initialize Zoho SalesIQ global object before script loads
        (window as any).$zoho = (window as any).$zoho || {};
        (window as any).$zoho.salesiq = (window as any).$zoho.salesiq || {
            ready: function () { },
        };
    }, []);

    return (
        <Script
            id="zsiqscript"
            src="https://salesiq.zohopublic.com/widget?wc=siq8bf24395152774bf736a8b92c0806fc4"
            strategy="lazyOnload"
        />
    );
}
