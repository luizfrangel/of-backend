export class ResourceNotFoundError extends Error {
  constructor(message?: string) {
    super(message || 'O recurso procurado não foi encontrado');

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
