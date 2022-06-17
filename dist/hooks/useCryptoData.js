"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

var _react = require("react");

const useCryptoData = () => {
  const [cryptoData, setCryptoData] = (0, _react.useState)([]);
  const [isLoading, setLoading] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    setLoading(true);
    fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD").then(res => res.json()).then(data => {
      console.log(data);
      const preparedData = [];
      data.Data.forEach(d => {
        var _d$DISPLAY;

        const {
          Id,
          Name,
          FullName,
          ImageUrl,
          Url
        } = d.CoinInfo;
        let Price, Change24hr;

        if ((_d$DISPLAY = d.DISPLAY) !== null && _d$DISPLAY !== void 0 && _d$DISPLAY.USD) {
          const {
            PRICE,
            CHANGEPCT24HOUR
          } = d.DISPLAY.USD;
          Price = PRICE;
          Change24hr = CHANGEPCT24HOUR;
        }

        preparedData.push({
          Id,
          Name,
          FullName,
          ImageUrl: "https://www.cryptocompare.com".concat(ImageUrl),
          Url: "https://www.cryptocompare.com".concat(Url),
          Price,
          Change24hr
        });
      });
      setCryptoData(preparedData);
    }).finally(() => setLoading(false));
  }, []);
  return {
    cryptoData,
    isLoading
  };
};

var _default = useCryptoData;
exports.default = _default;