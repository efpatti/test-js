import { strict as assert } from "assert";
import Product from "./product.js";
import Service from "./service.js";
import { test } from "node:test";

// Teste para verificar se uma exceção é lançada quando a descrição tem menos de 5 caracteres
test("should throw an error with wrong description", async () => {
 const params = { description: "abc", id: 1, price: 1000 }; // descrição menor que 5

 const product = new Product({
  onCreate: () => {},
  service: new Service(),
 });

 // Verifica se a função create lança o erro esperado
 try {
  await product.create(params);
  assert.fail("It should throw an error with wrong description!");
 } catch (err) {
  assert.strictEqual(err.message, "Description must be higher than 5");
 }
});

// Teste para verificar se o produto é salvo com sucesso
test("should save product successfully", async () => {
 const params = { description: "my product", id: 1, price: 1000 };

 const product = new Product({
  onCreate: (msg) => console.log("chamou on create", msg),
  service: new Service(),
 });

 const result = await product.create(params);
 assert.strictEqual(result, "1 saved with sucess!"); // Verifica se a mensagem de sucesso é a esperada
});
