import assert from "assert";
import Product from "./product.js";
import Service from "./service.js";

// Teste para verificar a descrição menor que 5 caracteres
{
 const params = { description: "abc", id: 1, price: 1000 }; // descrição menor que 5

 const product = new Product({
  onCreate: () => {},
  service: new Service(),
 });

 // Agora, o erro será corretamente capturado
 assert.rejects(
  () => product.create(params),
  { message: "Description must be higher than 5" },
  "It should throw an error with wrong description!"
 );
}

// Teste para salvar produto com sucesso
{
 const params = { description: "my product", id: 1, price: 1000 };

 const product = new Product({
  onCreate: (msg) => console.log("chamou on create", msg),
  service: new Service(),
 });

 const result = await product.create(params);
}
