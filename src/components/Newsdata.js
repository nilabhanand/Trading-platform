import React, { Component } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

class Newsdata extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "300",
      height: "400",
      colorTheme: "dark",
      currencyFilter: "USD,AUD,CAD,EUR,CHF,NZD,CNY,JPY,GBP",
      isTransparent: true,
      locale: "en",
      importanceFilter: "-1,0,1"
    });
    document.getElementById("tradingview-widget-container__widget").appendChild(script);
  }

  render() {
    return (

      <div id="myContainer">
        <div id="myContainer2">
          <TradingViewWidget
            symbol="OANDA:GBPJPY"
            timezone="Etc/UTC"
            theme={Themes.DARK}
            locale="en"
            interval="240"
            autosize="true"
            style="1"
            hide_side_toolbar="false"
            allow_symbol_change="true"
            toolbar_bg="#f1f2f6"
            hide_side_toolbar="true"
            hidevolume="true"
            watchlist={
              ("OANDA:GBPJPY",
                "OANDA:XAUUSD",
                "OANDA:USDJPY",
                "OANDA:USDCAD",
                "OANDA:GBPUSD",
                "OANDA:EURUSD",
                "OANDA:AUDJPY",
                "OANDA:AUDUSD",
                "OANDA:EURJPY")
            }
          />
        </div>
        <div id="tradingview-widget-container">
          <div id="tradingview-widget-container__widget"></div>
        </div>
        <div className="terminalarticles">
          <br></br>
          <h1 style={{ color: "white" }}>Articles</h1>
        </div>
        <div className="twitter">
          <br></br>
          <h1 style={{ color: "white" }}>Tweets</h1>
        </div>

      </div>
    );
  }
}

export default Newsdata;
