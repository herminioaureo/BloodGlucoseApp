import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

export const authenticatedGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem('token');
  if (!token) {
    console.log('Token não encontrado > Redirecionando para a página de login ' + token);
    return false;
  }
  console.log('Token encontrado > Redirecionando para a página home ' + token);
  return true;
};
