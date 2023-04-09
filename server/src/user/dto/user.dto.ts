export class UserDto {
  id;
  email;
  role;
  name;
  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.role = model.role;
    this.name = model.name;
  }
}
