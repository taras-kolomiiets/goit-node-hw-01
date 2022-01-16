const { program } = require("commander");
const productsOperations = require("./products");

program
	.option("-a, --action <type>", "choose action")
	.option("-i, --id <type>", "user id")
	.option("-n, --name <type>", "user name")
	.option("-e, --email <type>", "user email")
	.option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, data }) => {
	switch (action) {
		case "getAll":
			const products = await productsOperations.getAll();
			console.log(products);
			break;
		case "getById":
			const product = await productsOperations.getById(id);
			if (!product) {
				throw new Error(`Product with id=${id} not found`);
			}
			console.log(product);
			break;
		case "add":
			const newProduct = await productsOperations.add(data);
			console.log(newProduct);
			break;
		case "updateById":
			const updateProduct = await productsOperations.updateById(id, data);
			if (!updateProduct) {
				throw new Error(`Product with id=${id} not found`);
			}
			console.log(updateProduct);
			break;
		case "deleteById":
			const deletedProduct = await productsOperations.deleteById(id);
			if (!deletedProduct) {
				throw new Error(`Product with id=${id} not found`);
			}
			console.log(deletedProduct);
			break;
		default:
			console.log("Unknown action");
	}
};

// const UpdateData = {
// 	name: "Pineapple",
// 	price: 75,
// 	location: "Jungles",
// };

// invokeAction({ action: "getAll" });
// invokeAction({ action: "getById", id: "78787878-c21342-3e4324-787878787" });
// invokeAction({ action: "add", data: data });
// invokeAction({
// 	action: "updateById",
// 	id: "06aad1be-a009-4248-97dc-1c409cd270e2",
// 	data: UpdateData,
// });
invokeAction({
	action: "deleteById",
	id: "06aad1be-a009-4248-97dc-1c409cd270e2",
});
