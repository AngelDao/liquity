import React from "react";
import { Text, Flex } from "theme-ui";

import { displayOnNonMobile } from "../utils/breakpoints";
import { LiquityLogo } from "./LiquityLogo";

export const AccessibleLiquityLogo: React.FC = () => (
  <Flex sx={{ lineHeight: 0.88 }}>
    <LiquityLogo height="1em" role="img" aria-labelledby="liquity-logo-title">
      <title id="liquity-logo-title">Liquity Logo</title>
    </LiquityLogo>

    <Text
      as="h1"
      variant="logo"
      sx={{
        ...displayOnNonMobile,
        ml: "0.16em",
        fontSize: "inherit"
      }}
    >
      Liquity
    </Text>
  </Flex>
);
