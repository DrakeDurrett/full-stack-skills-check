CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL,
    image_url TEXT NOT NULL
)

INSERT INTO products 
(image_url, product_name, price)
VALUES
('Playstation 5', 499.99, 'https://cdn.pocket-lint.com/r/s/970x/assets/images/143354-games-feature-sony-playstation-5-release-date-rumours-and-everything-you-need-to-know-about-ps5-image1-cvz3adase9-jpg.webp?v1'),
('iMac', 1299.99, 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-21-cto-hero-201903?wid=1254&hei=1044&fmt=jpeg&qlt=80&.v=1553120926388'),
('Magic Mouse 2', 99.99, 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MRME2?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1520531651846')