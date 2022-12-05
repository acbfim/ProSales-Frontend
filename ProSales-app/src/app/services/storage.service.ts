import { Inject, Injectable } from '@angular/core';
import { GlobalService } from '.';

@Injectable({ providedIn: 'root' })
export class StorageService {


  constructor(
    private serviceGlobal: GlobalService
    ) {}

  cleanAccess() {
    localStorage.removeItem('access');
  }

  cleanToken() {
    localStorage.removeItem('token');
  }

  cleanUsuarioLocal() {
    localStorage.removeItem('currentUser');
  }

  getAccess() {
    const usuarioDecrypt = this.serviceGlobal.decrypt(
      this.serviceGlobal.isNull(localStorage.getItem('access'))
    );
    if (usuarioDecrypt === '') {
      return '';
    } else {
      return usuarioDecrypt;
    }
  }

  getAccessAdministrador() {
    const usuarioDecrypt = this.serviceGlobal.decrypt(
      this.serviceGlobal.isNull(localStorage.getItem('access'))
    );
    if (usuarioDecrypt === '') {
      return '';
    } else {
      return usuarioDecrypt.administrador;
    }
  }

  getAccessCodigo() {
    const usuarioDecrypt = this.serviceGlobal.decrypt(
      this.serviceGlobal.isNull(localStorage.getItem('access'))
    );
    if (usuarioDecrypt === '') {
      return '';
    } else {
      return usuarioDecrypt.codigo;
    }
  }

  getAccessData() {
    const usuarioDecrypt = this.serviceGlobal.decrypt(
      this.serviceGlobal.isNull(localStorage.getItem('access'))
    );
    if (usuarioDecrypt === '') {
      return '';
    } else {
      return usuarioDecrypt.data;
    }
  }

  getAccessLogin() {
    const usuarioDecrypt = this.serviceGlobal.decrypt(
      this.serviceGlobal.isNull(localStorage.getItem('access'))
    );
    if (usuarioDecrypt === '') {
      return '';
    } else {
      return usuarioDecrypt.cpf;
    }
  }

  getAccessNome() {
    const usuarioDecrypt = this.serviceGlobal.decrypt(
      this.serviceGlobal.isNull(localStorage.getItem('access'))
    );
    if (usuarioDecrypt === '') {
      return '';
    } else {
      return usuarioDecrypt.nome.substring(0, usuarioDecrypt.nome.search(' '));
    }
  }

  getAccessPerfil() {
    const usuarioDecrypt = this.serviceGlobal.decrypt(
      this.serviceGlobal.isNull(localStorage.getItem('access'))
    );
    if (usuarioDecrypt === '') {
      return '';
    } else {
      return usuarioDecrypt.perfil;
    }
  }

  getAccessSetor() {
    const usuarioDecrypt = this.serviceGlobal.decrypt(
      this.serviceGlobal.isNull(localStorage.getItem('access'))
    );
    if (usuarioDecrypt === '') {
      return '';
    } else {
      return usuarioDecrypt.setor;
    }
  }

  getAccessToken() {
    const usuarioDecrypt = this.serviceGlobal.decrypt(
      this.serviceGlobal.isNull(localStorage.getItem('access'))
    );
    if (usuarioDecrypt === '') {
      return '';
    } else {
      return usuarioDecrypt.token;
    }
  }

  getAccessUsuario() {
    const usuarioDecrypt = this.serviceGlobal.decrypt(
      this.serviceGlobal.isNull(localStorage.getItem('access'))
    );
    if (usuarioDecrypt === '') {
      return '';
    } else {
      return usuarioDecrypt.login;
    }
  }

  getCurrentUser() {
    const usuarioDecrypt = this.serviceGlobal.decrypt(
      this.serviceGlobal.isNull(localStorage.getItem('access'))
    );
    return { currentUser: usuarioDecrypt.usuario };
  }

  getError() {
    return localStorage.getItem('error');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUsuarioAtual() {
    // return JSON.parse(localStorage.getItem('currentUser'));
    return this.getAccessUsuario();
  }

  logout() {
    this.cleanToken();
    this.cleanAccess();
    this.cleanUsuarioLocal();
  }

  setAccess(access: any) {
    const accessCrypt = this.serviceGlobal.encrypt(access);
    localStorage.setItem('access', accessCrypt);
  }

  setItem(nameItem: string, value: any){
    const itemCrypt = this.serviceGlobal.encrypt(value);
    localStorage.setItem(nameItem, itemCrypt);
  }

  getItem(nameItem: string){
    let item = localStorage.getItem(nameItem);
    return this.serviceGlobal.decrypt(item);
  }

  setToken(token: any) {
    localStorage.setItem('token', token);
  }

  setUsuarioLocal(currentUser: any) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }


}
