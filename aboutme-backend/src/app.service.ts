import { Injectable } from '@nestjs/common';
import { app } from './main';

@Injectable()
export class AppService {
  getStatus(): JSON {

    const server = app.getHttpServer(); //TODO
    const router = server._events.request._router;

    // const availableRoutesa: [] = router.stack
    //   .map(layer => {
    //     if (layer.route) {
    //       return {
    //         route: {
    //           path: layer.route?.path,
    //           method: layer.route?.stack[0].method,
    //         },
    //       };
    //     }
    //   })
    //   .filter(item => item !== undefined);
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
