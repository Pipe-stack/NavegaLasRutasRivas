export const getProducts = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const allProducts = [
        { id: 1, name: 'Camiseta', category: 'ropa', price: 20 },
        { id: 2, name: 'Laptop', category: 'electronica', price: 1000 },
        { id: 3, name: 'Libro de React', category: 'libros', price: 30 },
        { id: 4, name: 'Chaqueta', category: 'ropa', price: 50 },
        { id: 5, name: 'Auriculares', category: 'electronica', price: 150 },
        { id: 6, name: 'Moby Dick', category: 'libros', price: 15 },
        { id: 7, name: 'Silla Gaming', category: 'electronica', price: 200 },
        
      ];
      if (category) {
        const filteredProducts = allProducts.filter(product => product.category === category);
        resolve(filteredProducts);
      } else {
        resolve(allProducts);
      }
    }, 1000); 
  });
};
