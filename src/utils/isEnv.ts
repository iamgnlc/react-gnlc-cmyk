export const isEnv = (env: string): boolean =>
  [env].includes(import.meta.env.MODE);
