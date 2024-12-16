/// <reference types="node" />

declare namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
      CORS_ORIGIN?: string;
      NODE_ENV?: 'development' | 'production' | 'test';
      PORT?: string;
    }
  }
  