import { CanActivateFn } from '@angular/router';

export const nonAuthenticatedGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem('token');
  console.log('nonAuthenticatedGuard - Token não encontrado > Redirecionando para a página de login ' + token);
  if (token) {
    console.log('nonAuthenticatedGuard - Token não encontrado > Redirecionando para a página de login ' + token);
    return false;
  }

  return true;
};
