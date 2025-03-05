
// This file is just for TypeScript type checking and won't affect runtime

declare namespace Deno {
  export interface Env {
    get(key: string): string | undefined;
  }
  export const env: Env;
}

declare module "https://deno.land/std@0.168.0/http/server.ts" {
  export function serve(handler: (req: Request) => Promise<Response>): void;
}

declare module "npm:resend@2.0.0" {
  export class Resend {
    constructor(apiKey: string);
    emails: {
      send(options: {
        from: string;
        to: string;
        subject: string;
        html: string;
      }): Promise<any>;
    };
  }
}
