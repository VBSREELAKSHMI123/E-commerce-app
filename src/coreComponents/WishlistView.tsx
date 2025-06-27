'use client';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { ProductType, removeFromWishlist } from './redux/slices/WishlistReducer'
import {addToCart} from './redux/slices/CartReducer'
import { Box, Button, CardActions, CardContent, CardMedia, IconButton, Rating, Typography } from '@mui/material'
import {Card} from "@mui/material";
import { Favorite } from '@mui/icons-material'
import { IoCartOutline } from 'react-icons/io5'


const WishlistView = () => {
    const wishlist : ProductType[] = useSelector((state: RootState) => state.wishlist.items)
    const dispatch = useDispatch()
    return (
  <>
   {wishlist.length === 0 ? (<h1><center>Nothing in Wishlist</center></h1>) :  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)",
      },
      gap: 3,
      padding: 4,
    }}
  >
    {wishlist.map((list) => (
      <Card
        key={list.id}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          position: "relative",
          ":hover": { transform: "scale(1.03)", boxShadow: 3 },
        }}
      >
        <IconButton
          onClick={() =>
            dispatch(removeFromWishlist(list.id))
          }
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "red",
            zIndex: 1,
          }}
        >
           <Favorite /> 
        </IconButton>

        <CardMedia
          component="img"
          image={list.image}
          height={200}
          alt={list.title}
          sx={{ objectFit: "contain", p: 2 }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle1" noWrap>
            {list.title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            ₹ {list.price}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Rating value={list.rating.rate} precision={0.1} readOnly />
            <Typography variant="body2" sx={{ ml: 1 }}>
              ({list.rating.count})
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button
            variant="contained"
            sx={{ color: "white", bgcolor: "black" }}
            fullWidth
            onClick={() => dispatch(addToCart(list))}
          >
            <IoCartOutline size={20} style={{ marginRight: 8 }} />
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    ))}
            </Box>}
            </>
  );
}

export default WishlistView