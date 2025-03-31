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
  const finalObject = Reflect.ownKeys(data)
   .map((key) => {
    const item = data[key];
    return {
     [key]: typeof item === "string" ? item.toUpperCase() : item,
    };
   })
   .reduce((prev, next) => {
    return {
     ...prev,
     ...next,
    };
   }, {});

  return finalObject;
 }

 async create(data) {
  this.#isValid(data); // Ainda faz a validação antes de processar os dados
  const mappedObject = this.#uppercaseStrings(data);
  console.log({ mappedObject });

  // Aqui, a função 'create' deve lançar uma Promise rejeitada se a validação falhar
  return new Promise((resolve, reject) => {
   this.service
    .save(mappedObject)
    .then((message) => resolve(message))
    .catch((error) => reject(error)); // Caso o erro venha da service.save()
  });
 }
}
