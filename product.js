import EventEmitter from "events";
export default class Product {
 constructor({ onCreate, service }) {
  this.service = service;
  this.source = new EventEmitter();
  this.source.on("create", onCreate);
 }

 // data  = { description, id, price }
 #isValid(data) {
  if (data.description.length < 5) {
   throw new Error("Description must be higher than 5");
  }
 }

 #uppercaseStrings(data) {
  const finalObject = Reflect.ownKeys(data).map((key) => {
   const item = data[key];
   return {
    [key]: typeof item === "string" ? item.toUpperCase() : item,
   };
  });
 }

 async create(data) {
  this.#isValid(data);
  const message = await this.service.save(data);
  return message.toUppercase();
 }
}
