/**
 * @license
 * Copyright 2025 Qwen Team
 * SPDX-License-Identifier: Apache-2.0
 */

import { DEFAULT_QWEN_MODEL, MAINLINE_CODER_MODEL } from '../config/models.js';

import type { ModelConfig } from './types.js';

type AuthType = import('../core/contentGenerator.js').AuthType;
type ContentGeneratorConfig =
  import('../core/contentGenerator.js').ContentGeneratorConfig;

/**
 * Field keys for model-scoped generation config.
 *
 * Kept in a small standalone module to avoid circular deps. The `import('...')`
 * usage is type-only and does not emit runtime imports.
 */
export const MODEL_GENERATION_CONFIG_FIELDS = [
  'samplingParams',
  'timeout',
  'maxRetries',
  'retryErrorCodes',
  'enableCacheControl',
  'schemaCompliance',
  'reasoning',
  'contextWindowSize',
  'customHeaders',
  'extra_body',
  'modalities',
] as const satisfies ReadonlyArray<keyof ContentGeneratorConfig>;

/**
 * Credential-related fields that are part of ContentGeneratorConfig
 * but not ModelGenerationConfig.
 */
export const CREDENTIAL_FIELDS = [
  'model',
  'apiKey',
  'apiKeyEnvKey',
  'baseUrl',
] as const satisfies ReadonlyArray<keyof ContentGeneratorConfig>;

/**
 * All provider-sourced fields that need to be tracked for source attribution
 * and cleared when switching from provider to manual credentials.
 */
export const PROVIDER_SOURCED_FIELDS = [
  ...CREDENTIAL_FIELDS,
  ...MODEL_GENERATION_CONFIG_FIELDS,
] as const;

/**
 * Environment variable mappings per authType.
 */
export interface AuthEnvMapping {
  apiKey: string[];
  baseUrl: string[];
  model: string[];
}

export const AUTH_ENV_MAPPINGS = {
  openai: {
    apiKey: ['OPENAI_API_KEY'],
    baseUrl: ['OPENAI_BASE_URL'],
    model: ['OPENAI_MODEL', 'QWEN_MODEL'],
  },
  anthropic: {
    apiKey: ['ANTHROPIC_API_KEY'],
    baseUrl: ['ANTHROPIC_BASE_URL'],
    model: ['ANTHROPIC_MODEL'],
  },
  gemini: {
    apiKey: ['GEMINI_API_KEY'],
    baseUrl: [],
    model: ['GEMINI_MODEL'],
  },
  'vertex-ai': {
    apiKey: ['GOOGLE_API_KEY'],
    baseUrl: [],
    model: ['GOOGLE_MODEL'],
  },
  'qwen-oauth': {
    apiKey: [],
    baseUrl: [],
    model: [],
  },
  ollama: {
    apiKey: ['OLLAMA_API_KEY'],
    baseUrl: ['OLLAMA_BASE_URL'],
    model: ['OLLAMA_MODEL'],
  },
  groq: {
    apiKey: ['GROQ_API_KEY'],
    baseUrl: ['GROQ_BASE_URL'],
    model: ['GROQ_MODEL'],
  },
  deepseek: {
    apiKey: ['DEEPSEEK_API_KEY'],
    baseUrl: ['DEEPSEEK_BASE_URL'],
    model: ['DEEPSEEK_MODEL'],
  },
  mistral: {
    apiKey: ['MISTRAL_API_KEY'],
    baseUrl: ['MISTRAL_BASE_URL'],
    model: ['MISTRAL_MODEL'],
  },
  'together-ai': {
    apiKey: ['TOGETHER_API_KEY'],
    baseUrl: ['TOGETHER_BASE_URL'],
    model: ['TOGETHER_MODEL'],
  },
  fireworks: {
    apiKey: ['FIREWORKS_API_KEY'],
    baseUrl: ['FIREWORKS_BASE_URL'],
    model: ['FIREWORKS_MODEL'],
  },
  openrouter: {
    apiKey: ['OPENROUTER_API_KEY'],
    baseUrl: ['OPENROUTER_BASE_URL'],
    model: ['OPENROUTER_MODEL'],
  },
  inception: {
    apiKey: ['INCEPTION_API_KEY'],
    baseUrl: ['INCEPTION_BASE_URL'],
    model: ['INCEPTION_MODEL'],
  },
} as const satisfies Record<AuthType, AuthEnvMapping>;

export const DEFAULT_MODELS = {
  openai: MAINLINE_CODER_MODEL,
  'qwen-oauth': DEFAULT_QWEN_MODEL,
  ollama: 'llama3',
  groq: 'llama3-70b-8192',
  deepseek: 'deepseek-chat',
  mistral: 'mistral-tiny',
  'together-ai': 'mistralai/Mixtral-8x7B-Instruct-v0.1',
  fireworks: 'accounts/fireworks/models/llama-v3-70b-instruct',
  openrouter: 'meta-llama/llama-3-8b-instruct',
  inception: 'mercury-2',
} as Partial<Record<AuthType, string>>;

/**
 * Hard-coded Qwen OAuth models that are always available.
 * These cannot be overridden by user configuration.
 */
export const QWEN_OAUTH_MODELS: ModelConfig[] = [
  {
    id: 'coder-model',
    name: 'coder-model',
    description:
      'Qwen 3.6 Plus — efficient hybrid model with leading coding performance',
    capabilities: { vision: true },
  },
];

/**
 * Derive allowed models from QWEN_OAUTH_MODELS for authorization.
 * This ensures single source of truth (SSOT).
 */
export const QWEN_OAUTH_ALLOWED_MODELS = QWEN_OAUTH_MODELS.map(
  (model) => model.id,
) as readonly string[];
