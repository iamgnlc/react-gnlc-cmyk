export const isEnv = (env: string): boolean =>
  [env].includes(process.env.NODE_ENV);
