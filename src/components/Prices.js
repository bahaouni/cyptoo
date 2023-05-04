import React, { useEffect } from "react";

const Prices = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbols: [
                {
                    proName: "BITSTAMP:BTCUSD",
                    title: "BTC/USD",
                },
                {
                    proName: "BITSTAMP:ETHUSD",
                    title: "ETH/USD",
                },
                {
                    proName: "BITSTAMP:XRPUSD",
                    title: "XRP/USD",
                },
            ],
            showSymbolLogo: true,
            colorTheme: "light",
            isTransparent: false,
            displayMode: "adaptive",
            locale: "en",
        });

        const container = document.querySelector("#tradingview-widget-container");
        container.appendChild(script);

        return () => {
            container.removeChild(container.firstChild);
        };
    }, []);

    return (
        <div id="tradingview-widget-container">
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
};

export default Prices;
