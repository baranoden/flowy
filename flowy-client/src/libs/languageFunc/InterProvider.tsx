import { IntlProvider } from "react-intl";
import React from "react";
import { useAppSelector } from "../../redux/store";

const InterProvider = ({ children }: any) => {
  const language = useAppSelector((state) => state.generalSlice.intl.locale);
  const locale = language;
  const messages = {
    tr: require("../../intl/tr.json"),
    en: require("../../intl/en.json"),
  } as any;
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default InterProvider;
