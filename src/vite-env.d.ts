/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTHOR: string;
  readonly VITE_NAME: string;
  readonly VITE_REPO_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
