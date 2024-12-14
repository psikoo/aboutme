import { Injectable } from '@nestjs/common';
import { app } from './main';

@Injectable()
export class AppService {
  getRouts(): JSON {
    const server = app.getHttpServer();
    const router = server._events.request._router;
    let availableRoutes: [{ path: string, method: string }?] = [];
    for(let i=0; i<router.stack.length; i++) {
      if (router.stack[i].route && router.stack[i].route?.stack[0].method !== "acl") {
        availableRoutes.push({
          path: router.stack[i].route?.path,
          method: router.stack[i].route?.stack[0].method
        })
      }
    }
    return JSON.parse(JSON.stringify(availableRoutes));
  }
}
