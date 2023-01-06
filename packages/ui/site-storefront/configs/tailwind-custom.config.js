const prefix = "yd-"

const container = {
  padding: {
    DEFAULT: "1rem",
    sm: "2rem",
    lg: "4rem",
    xl: "5.75rem",
  },
};

const colors = {
  white: "rgba(255, 255, 255, 1)", // #ffffff
  black: "rgba(0, 0, 0, 1)", // #000000
  // --- Gray --------------
  [`${prefix}gray-10`]: "rgba(250, 250, 250, 1)", // #FAFAFA
  [`${prefix}gray-2`]: "rgba(245, 245, 245, 1)", // #F5F5F5
  [`${prefix}gray-3`]: "rgba(240, 240, 240, 1)", // #F0F0F0
  [`${prefix}gray-4`]: "rgba(235, 235, 235, 1)", // #EBEBEB
  [`${prefix}gray-5`]: "rgba(224, 224, 224, 1)", // #E0E0E0
  [`${prefix}gray-6`]: "rgba(199, 199, 199, 1)", // #C7C7C7
  [`${prefix}gray-7`]: "rgba(179, 179, 179, 1)", // #B3B3B3
  [`${prefix}gray-8`]: "rgba(148, 148, 148, 1)", // #949494
  [`${prefix}gray-9`]: "rgba(138, 138, 138, 1)", // #8A8A8A
  [`${prefix}gray-10`]: "rgba(97, 97, 97, 1)", // #616161
  [`${prefix}gray-11`]: "rgba(66, 66, 66, 1)", // #424242
  [`${prefix}gray-12`]: "rgba(61, 61, 61, 1)", // #3D3D3D
  [`${prefix}gray-13`]: "rgba(51, 51, 51, 1)", // #333333
  [`${prefix}gray-14`]: "rgba(41, 41, 41, 1)", // #292929
  [`${prefix}gray-15`]: "rgba(31, 31, 31, 1)", // #1F1F1F
  [`${prefix}gray-16`]: "rgba(15, 15, 15, 1)", // #0F0F0F
  // --- Yellow ------------
  // [`${prefix}yellow-1`]: "rgba(255, 237, 204, 1)", // #FFEDCC
  [`${prefix}yellow-2`]: "rgba(255, 237, 204, 1)", // #FFEDCC
  [`${prefix}yellow-3`]: "rgba(255, 228, 179, 1)", // #FFE4B3
  [`${prefix}yellow-4`]: "rgba(255, 219, 153, 1)", // #FFDB99
  [`${prefix}yellow-5`]: "rgba(255, 211, 128, 1)", // #FFD380
  [`${prefix}yellow-6`]: "rgba(255, 202, 102, 1)", // #FFCA66
  [`${prefix}yellow-7`]: "rgba(255, 193, 77, 1)", // #FFC14D
  [`${prefix}yellow-8`]: "rgba(255, 184, 51, 1)", // #FFB833
  [`${prefix}yellow-9`]: "rgba(255, 175, 26, 1)", // #FFAF1A
  [`${prefix}yellow-10`]: "rgba(252, 175, 23, 1)", // #FCAF17
  [`${prefix}yellow-11`]: "rgba(227, 158, 21, 1)", // #E39E15
  [`${prefix}yellow-12`]: "rgba(202, 140, 18, 1)", // #CA8C12
  [`${prefix}yellow-13`]: "rgba(176, 122, 16, 1)", // #B07A10
  [`${prefix}yellow-14`]: "rgba(151, 105, 14, 1)", // #97690E
  [`${prefix}yellow-15`]: "rgba(126, 88, 12, 1)", // #7E580C
  [`${prefix}yellow-16`]: "rgba(101, 70, 9, 1)", // #654609
  [`${prefix}yellow-17`]: "rgba(76, 52, 7, 1)", // #4C3407
  [`${prefix}yellow-18`]: "rgba(50, 35, 5, 1)", // #322305
  // --- Blue --------------
  // [`${prefix}blue-1`]: "rgba(207, 204, 226, 1)", // #CFCCE2
  [`${prefix}blue-2`]: "rgba(207, 204, 226, 1)", // #CFCCE2
  [`${prefix}blue-3`]: "rgba(184, 179, 212, 1)", // #B8B3D4
  [`${prefix}blue-4`]: "rgba(160, 153, 197, 1)", // #A099C5
  [`${prefix}blue-5`]: "rgba(136, 128, 183, 1)", // #8880B7
  [`${prefix}blue-6`]: "rgba(112, 102, 169, 1)", // #7066A9
  [`${prefix}blue-7`]: "rgba(88, 77, 154, 1)", // #584D9A
  [`${prefix}blue-8`]: "rgba(65, 51, 140, 1)", // #41338C
  [`${prefix}blue-9`]: "rgba(41, 26, 125, 1)", // #291A7D
  [`${prefix}blue-10`]: "rgba(17, 0, 111, 1)", // #11006F
  [`${prefix}blue-11`]: "rgba(15, 0, 100, 1)", // #0F0064
  [`${prefix}blue-12`]: "rgba(14, 0, 89, 1)", // #0E0059
  [`${prefix}blue-13`]: "rgba(12, 0, 78, 1)", // #0C004E
  [`${prefix}blue-14`]: "rgba(10, 0, 67, 1)", // #0A0043
  [`${prefix}blue-15`]: "rgba(9, 0, 56, 1)", // #090038
  [`${prefix}blue-16`]: "rgba(7, 0, 44, 1)", // #07002C
  [`${prefix}blue-17`]: "rgba(5, 0, 33, 1)", // #050021
  [`${prefix}blue-18`]: "rgba(3, 0, 22, 1)", // #030016
};

const fontWeight = {
  regular: 400,
};

const fontSize = {
  // Heading
  [`${prefix}heading-1`]: ["3.5rem", "4.25rem"],
  [`${prefix}heading-2`]: ["2.875rem", "3.5rem"],
  [`${prefix}heading-3`]: ["2.375rem", "2.875rem"],
  [`${prefix}heading-4`]: ["1.875rem", "2.375rem"],
  [`${prefix}heading-5`]: ["1.5rem", "2rem"],
  [`${prefix}heading-6`]: ["1.25rem", "1.75rem"],
  [`${prefix}heading-7`]: ["1rem", "1.5rem"],
  [`${prefix}heading-8`]: ["0.875rem", "1.375rem"],
  [`${prefix}heading-9`]: ["0.75rem", "1.25rem"],
  // Subtitle
  [`${prefix}subtitle-1`]: ["1.125rem", "1.625rem"],
  [`${prefix}subtitle-2`]: ["1rem", "1.5rem"],
  [`${prefix}subtitle-3`]: ["0.875rem", "1.375rem"],
  [`${prefix}subtitle-4`]: ["0.75rem", "1rem"],
  [`${prefix}subtitle-5`]: ["0.625rem", "0.875rem"],
  // Body
  [`${prefix}body-1`]: ["1.125rem", "1.75rem"],
  [`${prefix}body-2`]: ["1rem", "1.5rem"],
  [`${prefix}body-3`]: ["0.875rem", "1.375rem"],
  // Button Text
  [`${prefix}button-text-1`]: ["1rem", "1.5rem"],
  [`${prefix}button-text-2`]: ["1rem", "1.5rem"],
  [`${prefix}button-text-3`]: ["0.875rem", "1.375rem"],
  [`${prefix}button-text-4`]: ["0.875rem", "1.375rem"],
  [`${prefix}button-text-5`]: ["0.75rem", "1rem"],
  [`${prefix}button-text-6`]: ["0.75rem", "1rem"],
  // Label
  [`${prefix}label-1`]: ["1rem", "1.5rem"],
  [`${prefix}label-2`]: ["1rem", "1.375rem"],
  [`${prefix}label-3`]: ["0.875rem", "1.375rem"],
  [`${prefix}label-4`]: ["0.875rem", "1.375rem"],
  [`${prefix}label-5`]: ["0.75rem", "1rem"],
  // Placeholder
  [`${prefix}placeholder-1`]: ["1rem", "1.75rem"],
  [`${prefix}placeholder-2`]: ["0.875rem", "1.375rem"],
  // Highlight
  [`${prefix}highlight-1`]: ["3.5rem", "4.25rem"],
  [`${prefix}highlight-2`]: ["2.875rem", "3.5rem"],
  [`${prefix}highlight-3`]: ["2.375rem", "2.875rem"],
  [`${prefix}highlight-4`]: ["1.875rem", "2.375rem"],
  [`${prefix}highlight-5`]: ["1.5rem", "2rem"],
  [`${prefix}highlight-6`]: ["1.25rem", "1.75rem"],
};

const screens = {
  //sm: "640px",
  // => @media (min-width: 640px) { ... }

  md: "768px",
  // => @media (min-width: 768px) { ... } Tablet

  lg: "1024px",
  // => @media (min-width: 1024px) { ... }

  xl: "1440px",
  // => @media (min-width: 1280px) { ... }

  // "2xl": "1600px",
  // => @media (min-width: 1600px) { ... }
};

module.exports = {
  container,
  fontWeight,
  fontSize,
  screens,
};
