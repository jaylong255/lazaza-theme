import { createTheme } from "@mui/material/styles";
/* c8 ignore start */

export const lazNeutral_1 = "#252D34";
export const lazNeutral_2 = "#383F46";
export const lazNeutral_3 = "#4F5760";
export const lazNeutral_4 = "#7C8793";
export const lazNeutral_5 = "#B0B7BE";
export const lazNeutral_6 = "#CBCFD3";
export const lazNeutral_7 = "#E4E7EA";
export const lazNeutral_8 = "#F1F3F4";
export const lazNeutral_9 = "#F7F9FB";

export const backgroundColor = lazNeutral_9;
export const textColor = lazNeutral_1;
export const inverseBackgroundColor = lazNeutral_1;
export const inverseTextColor = lazNeutral_9;

// New Theme Colors

export const lazPrimary = "#603EEF";
export const lazSecondary = "#23049F";
export const lazTertiary = "#1D0D63";
export const lazBlack = "#181818";
export const lazWhite = "#FFFFFF";

export const lazAccent_1 = "#FA4C81";
export const lazAccent_2 = "#D8FA4C";
export const lazAccent_3 = "#4CFAC5";
export const lazAccent_4 = "#6BE2F5";

export const gradient_1 =
  "var(--gradient-gradient-1, linear-gradient(159deg, #603EEF 0%, #140068 100%))";
export const gradient_2 =
  "var(--gradient-gradient-2, linear-gradient(137deg, #6BE2F5 0%, #6A9AEA 100%))";
export const gradient_3 =
  "var(--gradient-gradient-3, linear-gradient(142deg, #FA4C81 0%, #8C0AF2 100%))";
export const gradient_4 =
  "var(--gradient-gradient-4, linear-gradient(139deg, #4CFAC5 0%, #D8FA4C 100%))";
export const gradient_5 =
  "var(--gradient-gradient-5, linear-gradient(133deg, #B6A7F3 0%, #E1DAFF 100%))";

export const lazTint_1 = "#8062FB";
export const lazTint_2 = "#9279FB";
export const lazTint_3 = "#B7A5FD";
export const lazTint_4 = "#C9BCFD";
export const lazTint_5 = "#EDE9FE";
export const lazTint_6 = "#F7F5FF";

export const lazHeadlineFont = "'Sintony', Regular, sans-serif";
export const lazBodyFont = "'Poppins', Regular, sans-serif";

export const deepMidnightPurple = "#1D0D63";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h7: React.CSSProperties;
    h8: React.CSSProperties;
    h1_regular: React.CSSProperties;
    h2_regular: React.CSSProperties;
    h3_regular: React.CSSProperties;
    h4_regular: React.CSSProperties;
    h5_regular: React.CSSProperties;
    h6_regular: React.CSSProperties;
    h7_regular: React.CSSProperties;
    h8_regular: React.CSSProperties;
    h1_oversized: React.CSSProperties;
    h2_oversized: React.CSSProperties;
    h3_oversized: React.CSSProperties;
    h4_oversized: React.CSSProperties;
    h5_oversized: React.CSSProperties;
    h6_oversized: React.CSSProperties;
    h7_oversized: React.CSSProperties;
    h8_oversized: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    h7?: React.CSSProperties;
    h8?: React.CSSProperties;
    h1_regular?: React.CSSProperties;
    h2_regular?: React.CSSProperties;
    h3_regular?: React.CSSProperties;
    h4_regular?: React.CSSProperties;
    h5_regular?: React.CSSProperties;
    h6_regular?: React.CSSProperties;
    h7_regular?: React.CSSProperties;
    h8_regular?: React.CSSProperties;
    h1_oversized?: React.CSSProperties;
    h2_oversized?: React.CSSProperties;
    h3_oversized?: React.CSSProperties;
    h4_oversized?: React.CSSProperties;
    h5_oversized?: React.CSSProperties;
    h6_oversized?: React.CSSProperties;
    h7_oversized?: React.CSSProperties;
    h8_oversized?: React.CSSProperties;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    inverse: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h7: true;
    h8: true;
    h1_regular: true;
    h2_regular: true;
    h3_regular: true;
    h4_regular: true;
    h5_regular: true;
    h6_regular: true;
    h7_regular: true;
    h8_regular: true;
    h1_oversized: true;
    h2_oversized: true;
    h3_oversized: true;
    h4_oversized: true;
    h5_oversized: true;
    h6_oversized: true;
    h7_oversized: true;
    h8_oversized: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: lazPrimary,
      dark: lazTertiary,
    },
    secondary: {
      main: lazSecondary,
    },
  },
  typography: {
    fontFamily: "'Metropolis', sans-serif",
    h1: {
      fontWeight: 700,
      fontFamily: lazHeadlineFont,
      fontSize: "72px",
      lineHeight: "120%",
      fontStyle: "normal",
    },
    h2: {
      fontWeight: 700,
      fontFamily: lazHeadlineFont,
      fontSize: "64px",
      lineHeight: "120%",
      fontStyle: "normal",
    },
    h3: {
      fontWeight: 700,
      fontFamily: lazHeadlineFont,
      fontSize: "56px",
      lineHeight: "120%",
      fontStyle: "normal",
    },
    h4: {
      fontWeight: 700,
      fontFamily: lazHeadlineFont,
      fontSize: "48px",
      lineHeight: "130%",
      fontStyle: "normal",
    },
    h5: {
      fontWeight: 700,
      fontFamily: lazHeadlineFont,
      fontSize: "40px",
      lineHeight: "140%",
      fontStyle: "normal",
    },
    h6: {
      fontWeight: 700,
      fontFamily: lazHeadlineFont,
      fontSize: "32px",
      lineHeight: "140%",
      fontStyle: "normal",
    },
    h7: {
      fontWeight: 700,
      fontFamily: lazHeadlineFont,
      fontSize: "24px",
      lineHeight: "140%",
      fontStyle: "normal",
    },
    h8: {
      fontWeight: 700,
      fontFamily: lazHeadlineFont,
      fontSize: "18px",
      lineHeight: "140%",
      fontStyle: "normal",
    },
    h1_regular: {
      fontWeight: 400,
      fontFamily: lazBodyFont,
      fontSize: "72px",
      lineHeight: "120%",
      fontStyle: "normal",
    },
    h2_regular: {
      fontWeight: 400,
      fontFamily: lazBodyFont,
      fontSize: "64px",
      lineHeight: "120%",
      fontStyle: "normal",
    },
    h3_regular: {
      fontWeight: 400,
      fontFamily: lazBodyFont,
      fontSize: "56px",
      lineHeight: "120%",
      fontStyle: "normal",
    },
    h4_regular: {
      fontWeight: 400,
      fontFamily: lazBodyFont,
      fontSize: "48px",
      lineHeight: "130%",
      fontStyle: "normal",
    },
    h5_regular: {
      fontWeight: 400,
      fontFamily: lazBodyFont,
      fontSize: "40px",
      lineHeight: "140%",
      fontStyle: "normal",
    },
    h6_regular: {
      fontWeight: 400,
      fontFamily: lazBodyFont,
      fontSize: "32px",
      lineHeight: "140%",
      fontStyle: "normal",
    },
    h7_regular: {
      fontWeight: 400,
      fontFamily: lazBodyFont,
      fontSize: "24px",
      lineHeight: "140%",
      fontStyle: "normal",
    },
    h8_regular: {
      fontWeight: 400,
      fontFamily: lazBodyFont,
      fontSize: "18px",
      lineHeight: "140%",
      fontStyle: "normal",
    },
    h1_oversized: {
      fontWeight: 400,
      fontFamily: lazHeadlineFont,
      fontSize: "160px",
      lineHeight: "120%",
      fontStyle: "normal",
    },
    h2_oversized: {
      fontWeight: 400,
      fontFamily: lazHeadlineFont,
      fontSize: "140px",
      lineHeight: "120%",
      fontStyle: "normal",
    },
    h3_oversized: {
      fontWeight: 400,
      fontFamily: lazHeadlineFont,
      fontSize: "120px",
      lineHeight: "120%",
      fontStyle: "normal",
    },
    h4_oversized: {
      fontWeight: 400,
      fontFamily: lazHeadlineFont,
      fontSize: "100px",
      lineHeight: "130%",
      fontStyle: "normal",
    },
    h5_oversized: {
      fontWeight: 400,
      fontFamily: lazHeadlineFont,
      fontSize: "80px",
      lineHeight: "140%",
      fontStyle: "normal",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: textColor,
          textTransform: "uppercase",
          letterSpacing: "0.125em",
        },
      },
      variants: [
        {
          props: { variant: "inverse" },
          style: {
            backgroundColor: inverseTextColor,
            color: inverseBackgroundColor,
            "&:hover": {
              backgroundColor: lazNeutral_7,
            },
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: deepMidnightPurple,
          color: inverseTextColor,
          boxShadow: "0px 4px 24px 0px rgba(110, 76, 250, 0.16)",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: "2rem",
          paddingRight: "2rem",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          lineHeight: "1.5rem",
          color: lazNeutral_1,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
        },
      },
    },
  },
});

export default theme;
/* c8 ignore stop */
