// ORM - Criando o software orientado ao banco de dados
// Regras de negocio - formas de mudar o comportamento da entidade aplicando validacoes, formulas, qualquer coisa que satisfaça oque o software está pedindo.
// Entidade sempre vai representar o estado correto e atual daquele elemento
// Deve estar sempre concistente

class Customer {

  _id: string;
  _name: string;
  _address: string;
  _active: boolean;

  constructor(id: string, name: string, address: string, active: boolean) {
    this._id = id;
    this._name = name;
    this._address = address;
    this._active = active;
  }

  changeName(name: string) {
    this._name = name;
  }

  activate() {
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  // get id(): string {
  //   return this._id;
  // }

  // get name(): string {
  //   return this._name
  // }

  // get address(): string {
  //   return this._address;
  // }

  // set id(id: string) {
  //   this._id = id
  // }

  // set name(_name: string) {
  //   this._name = _name
  // }

  // set address(_address: string) {
  //   this._address = _address
  // }
}