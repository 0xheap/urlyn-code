/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type React from 'react';
import { Box, Text } from 'ink';
import { theme, getUIStyle } from '../semantic-colors.js';
import { type SlashCommand, CommandKind } from '../commands/types.js';
import { t } from '../../i18n/index.js';

interface Help {
  commands: readonly SlashCommand[];
  width?: number;
}

export const Help: React.FC<Help> = ({ commands, width }) => {
  const uiStyle = getUIStyle('helpDialog');
  const sectionHeaderColor = uiStyle.sectionHeaderColor || theme.text.primary;
  const commandLabelColor = uiStyle.commandLabelColor || theme.text.accent;
  const commandDescriptionColor =
    uiStyle.commandDescriptionColor || theme.text.primary;
  const shortcutLabelColor = uiStyle.shortcutLabelColor || theme.text.accent;

  return (
    <Box
      flexDirection="column"
      borderColor={theme.border.default}
      borderStyle={uiStyle.borderStyle}
      padding={1}
      width={width}
    >
      {/* Basics */}
      <Text bold color={sectionHeaderColor}>
        {t('Basics:')}
      </Text>
      <Text color={commandDescriptionColor}>
        <Text bold color={commandLabelColor}>
          {t('Add context')}
        </Text>
        :{' '}
        {t(
          'Use {{symbol}} to specify files for context (e.g., {{example}}) to target specific files or folders.',
          {
            symbol: t('@'),
            example: t('@src/myFile.ts'),
          },
        )}
      </Text>
      <Text color={commandDescriptionColor}>
        <Text bold color={commandLabelColor}>
          {t('Shell mode')}
        </Text>
        :{' '}
        {t(
          'Execute shell commands via {{symbol}} (e.g., {{example1}}) or use natural language (e.g., {{example2}}).',
          {
            symbol: t('!'),
            example1: t('!npm run start'),
            example2: t('start server'),
          },
        )}
      </Text>

      <Box height={1} />

      {/* Commands */}
      <Text bold color={sectionHeaderColor}>
        {t('Commands:')}
      </Text>
      {commands
        .filter((command) => command.description && !command.hidden)
        .map((command: SlashCommand) => (
          <Box key={command.name} flexDirection="column">
            <Text color={commandDescriptionColor}>
              <Text bold color={commandLabelColor}>
                {' '}
                {formatCommandLabel(command, '/')}
              </Text>
              {uiStyle.showCommandKind &&
                command.kind === CommandKind.MCP_PROMPT && (
                  <Text color={theme.text.secondary}> [MCP]</Text>
                )}
              {command.description && ' - ' + command.description}
            </Text>
            {command.subCommands &&
              command.subCommands
                .filter((subCommand) => !subCommand.hidden)
                .map((subCommand) => (
                  <Text key={subCommand.name} color={commandDescriptionColor}>
                    <Text bold color={commandLabelColor}>
                      {'   '}
                      {formatCommandLabel(subCommand)}
                    </Text>
                    {subCommand.description && ' - ' + subCommand.description}
                  </Text>
                ))}
          </Box>
        ))}
      <Text color={commandDescriptionColor}>
        <Text bold color={commandLabelColor}>
          {' '}
          !{' '}
        </Text>
        - {t('shell command')}
      </Text>
      {uiStyle.showCommandKind && (
        <Text color={commandDescriptionColor}>
          <Text color={theme.text.secondary}>[MCP]</Text> -{' '}
          {t('Model Context Protocol command (from external servers)')}
        </Text>
      )}

      <Box height={1} />

      {/* Shortcuts */}
      <Text bold color={sectionHeaderColor}>
        {t('Keyboard Shortcuts:')}
      </Text>
      <Text color={commandDescriptionColor}>
        <Text bold color={shortcutLabelColor}>
          Alt+Left/Right
        </Text>{' '}
        - {t('Jump through words in the input')}
      </Text>
      <Text color={commandDescriptionColor}>
        <Text bold color={shortcutLabelColor}>
          Ctrl+C
        </Text>{' '}
        - {t('Close dialogs, cancel requests, or quit application')}
      </Text>
      <Text color={commandDescriptionColor}>
        <Text bold color={shortcutLabelColor}>
          {process.platform === 'win32' ? 'Ctrl+Enter' : 'Ctrl+J'}
        </Text>{' '}
        -{' '}
        {process.platform === 'linux'
          ? t('New line (Alt+Enter works for certain linux distros)')
          : t('New line')}
      </Text>
      <Text color={commandDescriptionColor}>
        <Text bold color={shortcutLabelColor}>
          Ctrl+L
        </Text>{' '}
        - {t('Clear the screen')}
      </Text>
      <Text color={commandDescriptionColor}>
        <Text bold color={shortcutLabelColor}>
          {process.platform === 'darwin' ? 'Ctrl+X / Meta+Enter' : 'Ctrl+X'}
        </Text>{' '}
        - {t('Open input in external editor')}
      </Text>
      <Text color={commandDescriptionColor}>
        <Text bold color={shortcutLabelColor}>
          Enter
        </Text>{' '}
        - {t('Send message')}
      </Text>
      <Text color={commandDescriptionColor}>
        <Text bold color={shortcutLabelColor}>
          Esc
        </Text>{' '}
        - {t('Cancel operation / Clear input (double press)')}
      </Text>
      <Text color={commandDescriptionColor}>
        <Text bold color={shortcutLabelColor}>
          {process.platform === 'win32' ? 'Tab' : 'Shift+Tab'}
        </Text>{' '}
        - {t('Cycle approval modes')}
      </Text>
      <Text color={commandDescriptionColor}>
        <Text bold color={shortcutLabelColor}>
          Up/Down
        </Text>{' '}
        - {t('Cycle through your prompt history')}
      </Text>
      <Box height={1} />
      <Text color={commandDescriptionColor}>
        {t('For a full list of shortcuts, see {{docPath}}', {
          docPath: t('docs/keyboard-shortcuts.md'),
        })}
      </Text>
    </Box>
  );
};

/**
 * Builds a display label for a slash command, including any alternate names.
 */
function formatCommandLabel(command: SlashCommand, prefix = ''): string {
  const altNames = command.altNames?.filter(Boolean);
  const baseLabel = `${prefix}${command.name}`;

  if (!altNames || altNames.length === 0) {
    return baseLabel;
  }

  return `${baseLabel} (${altNames.join(', ')})`;
}
