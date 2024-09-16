import { HttpInterceptorFn } from '@angular/common/http';


export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  console.log('tokenInterceptor | Token: ' + token);

  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  console.log("clonedRequest body: " + clonedRequest.body);
  console.log("clonedRequest headers: " + clonedRequest.headers.getAll('Authorization'));
  return next(clonedRequest);

  //return next(req);
};
