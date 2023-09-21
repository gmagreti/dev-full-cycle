// ORM - Criando o software orientado ao banco de dados
// Regras de negocio - formas de mudar o comportamento da entidade aplicando validacoes, formulas, qualquer coisa que satisfaça oque o software está pedindo.

class Customer {

  _id: string;
  _name: string;
  _address: string;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name
  }

  get address(): string {
    return this._address;
  }

  set id(id: string) {
    this._id = id
  }

  set name(_name: string) {
    this._name = _name
  }

  set address(_address: string) {
    this._address = _address
  }
}