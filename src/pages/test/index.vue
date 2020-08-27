<template>
  <products-grid
    :items="items"
    :options="options"
    @widgetSelected="set_preview"
    @widgetClick="add_to_cart"
    @widgetRating="set_rating"
    @widgetFavorite="set_favorite"
  />
</template>
<script>
import ProductsGrid from "vue-products-grid";
export default {
  name: "test",
  components: {
    ProductsGrid
  },
  data: () => ({
    //sample data
    items: [
      {
        _id: "1",
        product: "Margherita",
        fullprice: 22,
        sale: 0,
        category: "Sliced Pizza",
        description:
          "<span style='color:#ccc'>my description width a style injected</span>",
        image:
          "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_2.jpg",
        fav: false
      },
      {
        _id: "2",
        product: "Capricciosa",
        fullprice: 25,
        sale: 22,
        category: "Sliced Pizza",
        description: "my description",
        image:
          "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_3.jpg",
        fav: false,
        stars: 3.5
      },
      {
        _id: "3",
        product: "Napoli",
        fullprice: 20,
        sale: 0,
        category: "Sliced Pizza",
        description: "my description",
        image:
          "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_4.jpg",
        fav: false
      },
      {
        _id: "3",
        product: "Salame Piccante",
        fullprice: 19,
        sale: 0,
        category: "Sliced Pizza",
        description: "my description",
        image:
          "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_5.jpg",
        fav: false
      }
    ],
    //mapping fields
    mapping: {
      id: "_id",
      name: "product",
      label: "category",
      abstract: "description",
      price: "fullprice",
      sale_price: "sale",
      image: "image",
      isfavorite: "fav",
      rating: "stars"
    },
    //sample configuration
    options: {
      color: "#fff",
      title_color: "#555",
      text_color: "#ccc",
      price_color: "#555",
      sale_color: "#ff0000",
      icons_color: "#888",
      rating_color: "#ff0000",
      elevation: "1",
      rating: true,
      favorite: true,
      currency: "€",
      salebox: true,
      btn_1: '<i class="material-icons">favorite_border</i>',
      btn_1_on: '<i class="material-icons">favorite</i>',
      btn_2: '<i class="material-icons">shopping_cart</i>'
    }
  }),
  methods: {
    set_preview(product) {
      //.. do your logic ...
      console.log("clicked product=>", product);
    },
    add_to_cart(product) {
      //.. do your logic ...
      console.log("add_to_cart product=>", product);
    },
    set_rating(rating, product) {
      //.. do your logic ...
      console.log("rating=>", rating, "product=>", product);
    },
    set_favorite(product, status, index) {
      //.. do your logic ...
      this.items[index].isfavorite = status;
      console.log("favorite product=>", product, "status=>", status);
    }
  }
};
</script>
