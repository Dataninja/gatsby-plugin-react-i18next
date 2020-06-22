import {InitOptions} from 'i18next';

export const LANGUAGE_KEY = 'gatsby-i18next-language';

export type PluginOptions = {
  languages: string[];
  defaultLanguage: string;
  path: string;
  redirect: boolean;
  localizedPaths?: boolean;
  languageFromPath?(path: string): string;
  siteUrl?: string;
  i18nextOptions: InitOptions;
};

export type Resources = Record<string, Record<string, Record<string, string>>>;

export type I18NextContext = {
  language: string;
  routed: boolean;
  languages: string[];
  defaultLanguage: string;
  originalPath: string;
  path: string;
  siteUrl?: string;
};

export type PageContext = {
  path: string;
  i18n: I18NextContext & {resources: Resources};
};
