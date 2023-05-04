import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TradingViewOverview.css'
const TradingViewOverview = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbols: [
                ['Apple', 'AAPL|1D'],
                ['Google', 'GOOGL|1D'],
                ['Microsoft', 'MSFT|1D'],
            ], chartOnly: false,
            width: 1000,
            height: 500,
            locale: 'en',
            colorTheme: 'light',
            autosize: false,
            showVolume: false,
            showMA: false,
            hideDateRanges: false,
            hideMarketStatus: false,
            hideSymbolLogo: false,
            scalePosition: 'right',
            scaleMode: 'Normal',
            fontFamily: '-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif',
            fontSize: '10',
            noTimeScale: false,
            valuesTracking: '1',
            changeMode: 'price-and-percent',
            chartType: 'area',
            maLineColor: '#2962FF',
            maLineWidth: 1,
            maLength: 9,
            lineWidth: 2,
        });
        const container = document.querySelector('.tradingview-widget-container__widget');
        container.appendChild(script);
    }, []);

    return (
        <div className="tradingview-widget-container">
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/symbols/AAPL/" rel="noopener" target="_blank">
                    <span className="blue-text">Apple</span>
                </a>
                {' '}
                by TradingView
            </div>
        </div>
    );
};

export default TradingViewOverview;
