// ORM - Criando o software orientado ao banco de dados
// Regras de negocio - formas de mudar o comportamento da entidade aplicando validacoes, formulas, qualquer coisa que satisfaça oque o software está pedindo.
// Entidade sempre vai representar o estado correto e atual daquele elemento
// Deve estar sempre concistente
// Uma entidade por padrao, ela sempre tem que se autovalidar

import Address from "./address";

// Entidade de negocio e Entidade para Persistencia

// Entidade de negocio - Contexto para atender o negocio
// Entidade do ORM - Contexto para guardar dados

export class Customer {

  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = false;
  private _rewardPoints: number = 0

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate()
  }

  get id() { return this._id; }

  get name(): string { return this._name; }
  
  get rewardPoints(): number { return this._rewardPoints; }

  validate() {
    if (this._id.length === 0) {
      throw new Error('Id is required')
    }

    if (this._name.length === 0) {
      throw new Error('Name is required')
    }
  }

  changeName(name: string) {
    this._name = name;
  }

  isActive(): boolean { return this._active; }

  activate() {
    if(this._address === undefined) {
      throw new Error('Address is mandatory to activate a customer')
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  set Address(address: Address) {
    this._address = address;
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