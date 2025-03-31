import assert from "assert";
import Product from "./product.js";
import Service from "./service.js";

// should throw an error when description is less than 5 characters long
{
 const params = { description: "my product", id: 1, price: 1000 };

 const product = new Product({
  onCreate: () => {},
  service: new Service(),
 });

 assert.rejects(
  () => product.create(params),
  { message: "Description must be higher than 5" },
  "It should throw an error with wrong description!"
 );

 product.create(params);
}
