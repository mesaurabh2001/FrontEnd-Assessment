"use client";

import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Button,
  Box
} from "@mui/material";
import Link from "next/link";

import {useParams} from 'next/navigation';
import {useEffect} from "react";

import AuthGuard from "@/components/AuthGuard";
import useProductsStore from "@/store/productsStore";

const ProductDetailsPage = () => {

  const {id} = useParams();

  const {selectedProduct, loading, fetchProductById} = useProductsStore();

  useEffect( () => {
    if(id){
      fetchProductById(id);
    }
  }, [id, fetchProductById]);

  // const product = {
  //   id: params.id,
  //   title: "iPhone 15",
  //   price: 799,
  //   category: "Smartphones",
  //   rating: 4.5,
  //   description:
  //     "A high-performance smartphone with advanced features and sleek design.",
  //   image: "#"
  // };

  return (
    <AuthGuard>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Product Details
        </Typography>

        {loading && <Typography>Loading product...</Typography>}

        {selectedProduct && (
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={selectedProduct.thumbnail} // ✅ correct field
              alt={selectedProduct.title}
            />

            <CardContent>
              <Stack spacing={1.5}>
                <Typography variant="h5">
                  {selectedProduct.title}
                </Typography>

                <Typography color="text.secondary">
                  Category: {selectedProduct.category}
                </Typography>

                <Typography>
                  Price: ₹{selectedProduct.price}
                </Typography>

                <Typography>
                  Rating: {selectedProduct.rating} ⭐
                </Typography>

                <Typography>
                  {selectedProduct.description}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        )}

        <Box mt={3}>
          <Button
            variant="outlined"
            component={Link}
            href="/products"
          >
            Back to Products
          </Button>
        </Box>
      </Container>
    </AuthGuard>
    
  );
}

export default ProductDetailsPage;
