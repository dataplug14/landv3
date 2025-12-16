"use client";

import Script from "next/script";

export function ZohoSalesIQ() {
    return (
        <>
            <Script
                id="zoho-salesiq-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`,
                }}
            />
            <Script
                id="zsiqscript"
                src="https://salesiq.zohopublic.com/widget?wc=siq8bf24395152774bf736a8b92c0806fc4"
                strategy="afterInteractive"
            />
        </>
    );
}
