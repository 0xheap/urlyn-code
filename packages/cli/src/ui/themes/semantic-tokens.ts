/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type BoxProps } from 'ink';
import { lightTheme, darkTheme, ansiTheme, defaultUIStyles } from './theme.js';

export interface UIStyles {
  /**
   * Input panel styling
   */
  inputPanel: {
    /** Border style: 'single', 'double', 'round', 'bold', or 'none' */
    borderStyle: NonNullable<BoxProps['borderStyle']>;
    /** Border color when focused */
    borderColorFocused: string;
    /** Border color when not focused */
    borderColorDefault: string;
    /** Padding inside the input panel */
    paddingX: number;
    paddingY: number;
    /** Show top border */
    showTopBorder: boolean;
    /** Show bottom border */
    showBottomBorder: boolean;
  };

  /**
   * User input styling
   */
  userInput: {
    /** Cursor character (displayed when showing cursor) */
    cursorChar: string;
    /** Cursor background color (inverse of foreground by default) */
    cursorBackground?: string;
    /** Prompt prefix character(s) */
    promptPrefix: string;
    /** Prompt prefix color */
    promptPrefixColor: string;
    /** Placeholder text color */
    placeholderColor: string;
    /** Placeholder first character inverse style */
    placeholderInverse: boolean;
  };

  /**
   * Suggestions/command list styling
   */
  suggestions: {
    /** Background color for selected item */
    selectionBackground?: string;
    /** Text color for selected item */
    selectionColor: string;
    /** Background color for matched text within selection */
    matchBackground?: string;
    /** Text color for matched text within selection */
    matchColor?: string;
    /** Description text color */
    descriptionColor: string;
    /** Arrow indicator color */
    arrowColor: string;
    /** Loading indicator color */
    loadingColor: string;
  };

  /**
   * Help dialog styling
   */
  helpDialog: {
    /** Section header color (e.g., "Basics:", "Commands:") */
    sectionHeaderColor: string;
    /** Command label color (e.g., "/help", "@file") */
    commandLabelColor: string;
    /** Command description color */
    commandDescriptionColor: string;
    /** Keyboard shortcut label color */
    shortcutLabelColor: string;
    /** Border style for help dialog */
    borderStyle: NonNullable<BoxProps['borderStyle']>;
    /** Show command kind indicators (e.g., [MCP]) */
    showCommandKind: boolean;
  };
}

export interface SemanticColors {
  text: {
    primary: string;
    secondary: string;
    link: string;
    accent: string;
    code: string;
  };
  background: {
    primary: string;
    diff: {
      added: string;
      removed: string;
    };
  };
  border: {
    default: string;
    focused: string;
  };
  ui: {
    comment: string;
    symbol: string;
    gradient: string[] | undefined;
  };
  status: {
    error: string;
    success: string;
    warning: string;
    // Dim variants for less intense UI elements
    errorDim: string;
    warningDim: string;
  };
  // New: UI styles for consistent panel/input/command list appearance
  uiStyles: UIStyles;
}

export const lightSemanticColors: SemanticColors = {
  text: {
    primary: lightTheme.Foreground,
    secondary: lightTheme.Gray,
    link: lightTheme.AccentBlue,
    accent: lightTheme.AccentPurple,
    code: lightTheme.LightBlue,
  },
  background: {
    primary: lightTheme.Background,
    diff: {
      added: lightTheme.DiffAdded,
      removed: lightTheme.DiffRemoved,
    },
  },
  border: {
    default: lightTheme.Gray,
    focused: lightTheme.AccentBlue,
  },
  ui: {
    comment: lightTheme.Comment,
    symbol: lightTheme.Gray,
    gradient: lightTheme.GradientColors,
  },
  status: {
    error: lightTheme.AccentRed,
    success: lightTheme.AccentGreen,
    warning: lightTheme.AccentYellow,
    errorDim: lightTheme.AccentRedDim,
    warningDim: lightTheme.AccentYellowDim,
  },
  uiStyles: defaultUIStyles,
};

export const darkSemanticColors: SemanticColors = {
  text: {
    primary: darkTheme.Foreground,
    secondary: darkTheme.Gray,
    link: darkTheme.AccentBlue,
    accent: darkTheme.AccentPurple,
    code: darkTheme.LightBlue,
  },
  background: {
    primary: darkTheme.Background,
    diff: {
      added: darkTheme.DiffAdded,
      removed: darkTheme.DiffRemoved,
    },
  },
  border: {
    default: darkTheme.Gray,
    focused: darkTheme.AccentBlue,
  },
  ui: {
    comment: darkTheme.Comment,
    symbol: darkTheme.Gray,
    gradient: darkTheme.GradientColors,
  },
  status: {
    error: darkTheme.AccentRed,
    success: darkTheme.AccentGreen,
    warning: darkTheme.AccentYellow,
    errorDim: darkTheme.AccentRedDim,
    warningDim: darkTheme.AccentYellowDim,
  },
  uiStyles: defaultUIStyles,
};

export const ansiSemanticColors: SemanticColors = {
  text: {
    primary: ansiTheme.Foreground,
    secondary: ansiTheme.Gray,
    link: ansiTheme.AccentBlue,
    accent: ansiTheme.AccentPurple,
    code: ansiTheme.LightBlue,
  },
  background: {
    primary: ansiTheme.Background,
    diff: {
      added: ansiTheme.DiffAdded,
      removed: ansiTheme.DiffRemoved,
    },
  },
  border: {
    default: ansiTheme.Gray,
    focused: ansiTheme.AccentBlue,
  },
  ui: {
    comment: ansiTheme.Comment,
    symbol: ansiTheme.Gray,
    gradient: ansiTheme.GradientColors,
  },
  status: {
    error: ansiTheme.AccentRed,
    success: ansiTheme.AccentGreen,
    warning: ansiTheme.AccentYellow,
    errorDim: ansiTheme.AccentRedDim,
    warningDim: ansiTheme.AccentYellowDim,
  },
  uiStyles: defaultUIStyles,
};
