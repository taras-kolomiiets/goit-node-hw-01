const fs = require("fs/promises");
const getAll = require("./getAll");
const filePath = require("./filePath");

const updateById = async (id, data) => {
	const products = await getAll();
	const idx = products.findIndex((p) => p.id === id);
	if (idx === -1) {
		return null;
	}
	products[idx] = { ...data, id };
	await fs.writeFile(filePath, JSON.stringify(products));
	return products[idx];
};

module.exports = updateById;
