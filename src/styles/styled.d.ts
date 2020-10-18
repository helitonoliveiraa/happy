import 'styled-components';

import { light as lightTheme } from './themes';

export type Theme = typeof lightTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

// import 'styled-components';

// declare module 'styled-components' {
//   export interface DefaultTheme {
//     title: string;

//     colors: {
//       primary: string;
//       grandientEffect: string;
//       secondary: string;
//       green: string;
//       yellow: string;
//       pink: string;
//       greenLow: string;
//       blueLow: string;
//       redLow: string;
//       white: string;
//       buttonText: string;
//       textTitle1: string;
//       textTitle2: string;
//       textBase: string;
//       textComplement: string;

//       backgroundGlobal: string;

//       buttonBackground1: string;
//       buttonBackground2: string;

//       border: string;

//       popupText: string;
//       popupBackground: string;

//       backgroundOrphanages: string;
//       backgroundForm: string;
//     };
//   }
// }
