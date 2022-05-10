import React from "react";

import { TextProps } from "@shopify/restyle";
import { Trans } from "react-i18next";

import { Theme } from "theme/theme";

import Text from "./Text";

const components = {
  b: <Text fontWeight="700" />,
  errorText: <Text color="error" />,
  secondaryText: <Text color="secondaryText" />,
  primaryText: <Text color="primaryText" />,
};

type Props = TextProps<Theme> & {
  i18nKey: string;
  values?: Record<string, unknown>;
  numberOfLines?: number;
  adjustsFontSizeToFit?: boolean;
  maxFontSizeMultiplier?: number;
};
const TextTransform = ({ i18nKey, values, ...props }: Props) => {
  return (
    <Text {...props}>
      <Trans i18nKey={i18nKey} components={components} values={values} />
    </Text>
  );
};
export default TextTransform;
