const getAll = require("./getAll");
const fs = require("fs/promises");
const filePath = require("./filePath");

const deleteById = async (id) => {
	const products = await getAll();
	const idx = products.findIndex((p) => p.id === id);
	if (idx === -1) {
		return null;
	}

	const newProducts = products.filter((_, index) => index !== idx);
	await fs.writeFile(filePath, JSON.stringify(newProducts));
	return products[idx];
};

module.exports = deleteById;
