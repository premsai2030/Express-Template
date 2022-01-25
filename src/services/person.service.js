const PersonModel = require("../models/person.model");

class PersonService {
  async getAll() {
    const data = await PersonModel.find();
    return data;
  }
  async createPerson(data) {
    const model = new PersonModel(data);
    await model.save();
  }
}

module.exports = new PersonService();
