import React from "react";
import { useIntl } from "react-intl";

export const LanguageFunc = (text: string) => {
  const intl = useIntl();

  return intl.formatMessage({ id: text });
};
