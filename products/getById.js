const getAll = require("./getAll");

const getById = async (id) => {
	const products = await getAll();
	const product = products.find((product) => product.id === id);
	return product;
};

module.exports = getById;
