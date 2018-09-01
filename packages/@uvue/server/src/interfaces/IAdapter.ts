import { HandleFunction } from 'connect';
import http from 'http';
import https from 'https';

export interface IAdapter {
  // Add middlewares
  use(middleware: HandleFunction): any;
  use(path: string, middleware: HandleFunction): any;

  // Start server
  start(): Promise<void>;

  // Getters
  getHttpServer(): http.Server | https.Server;
  getPort(): number;
  getHost(): string;
  isHttps(): boolean;
}