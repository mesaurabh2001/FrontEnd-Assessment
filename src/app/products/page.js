"use client";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Select,
  MenuItem,
  Box
} from "@mui/material";

import Link from "next/link";
import AuthGuard from "@/components/AuthGuard";
import { useEffect, useState } from "react";
import useProductsStore from "@/store/productsStore";


// const dummyProducts = [
//   {
//     id: 1,
//     title: "iPhone 15",
//     price: 79999,
//     category: "Smartphones",
//     image: "#"
//   },
//   {
//     id: 2,
//     title: "MacBook Pro",
//     price: 199999,
//     category: "Laptops",
//     image: "#"
//   }
// ];

const ProductsPage = () => {

  const { products, loading, fetchProducts } = useProductsStore();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const categories = [
    ...new Set(products.map((product) => product.category))
  ]

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? product.category === category : true)
  );


  return (
    <AuthGuard>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>

      <Box display="flex" gap={2} mb={4}>
        <TextField
          label="Search products"
          size="small"
          value={search}
          onChange={ (e) => setSearch(e.target.value)}
        />

        <Select
          size="small"
          displayEmpty
          value={category}
          onChange= { (e) => setCategory(e.target.value)}
        >
          <MenuItem value="">All Categories</MenuItem>
          {categories.map( category => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </Select>
      </Box>


      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="160"
                image={product.thumbnail}
                alt={product.title}
              />

              <CardContent>
                <Typography color="text.primary">
                  {product.title}
                </Typography>

                <Typography color="text.secondary">
                  {product.category}
                </Typography>

                <Typography sx={{ mt: 1 }}>
                  ₹{product.price}
                </Typography>

                <Link href={`/products/${product.id}`}>
                  View Details
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </AuthGuard>
    
  );
}

export default ProductsPage;
