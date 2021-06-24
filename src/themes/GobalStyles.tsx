import React from "react";
import { Global as EmotionGlobal, css } from "@emotion/react";

export const Global = () => (
  <EmotionGlobal
    styles={css`
      @font-face {
        font-family: SFProDisplay;
        src: url("/fonts/SFPro/SFProDisplay-Regular.ttf");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: SFProDisplay;
        src: url("/fonts/SFPro/SFProDisplay-Medium.ttf");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: SFProDisplay;
        src: url("/fonts/SFPro/SFProDisplay-Semibold.ttf");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: SFProDisplay;
        src: url("/fonts/SFPro/SFProDisplay-Bold.ttf");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
    `}
  />
);
