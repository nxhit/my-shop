<template>
  <div class="detail">
    <div class="container-fluid">
      <div class="page-header">
        <div class="container">
          <h1 class="page__title">
            Product
            <span>Easy feel to contact us</span>
          </h1>
        </div>
      </div>
      <nav class="breadcrumb">
        <div class="container">
          <li class="breadcrumb-item">
            <a class="header__link" href="/home">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Contact</li>
        </div>
      </nav>
    </div>
    <section class="product__content">
      <div class="container">
        <div class="row">
          <div class="col-4" v-for="item in items" :key="item.id">
            <b-card>
              <img :src="item.url" alt="" class="image" />
              <div class="middle">
                <b-button
                  class="detail"
                  data-toggle="modal"
                  data-target="quickViewModal"
                  @click="modaldetail()"
                  ><i class="fa fa-eye" aria-hidden="true"></i
                ></b-button>
              </div>
              <b-card-text>
                <!-- <router-link
                    :to="{ name: '{{item.name}}', params: { id: 1 } }"
                    >{{ item.name }}</router-link
                  > -->
                <p>${{ item.price }}</p>
              </b-card-text>

              <b-button @click="addtoCart()" href="#" variant="primary"
                >Add to cart</b-button
              >
            </b-card>
          </div>
        </div>
        <paginate
          :page-count="20"
          :page-range="3"
          :margin-pages="2"
          :click-handler="clickCallback"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        >
        </paginate>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "iphone",
          price: "3000"
        },
        {
          id: 2,
          name: "samsung",
          price: "2000"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.container-fluid
    padding: 0
.page-header
    background-image: url('https://firebasestorage.googleapis.com/v0/b/fir-api-f6968.appspot.com/o/page-header.png?alt=media&token=d0a554f6-fc2a-43fb-a390-e36cb2eaba81')
    padding: 45px 0 45px 0px
    h1
        font-weight: bold
        font-size: 600
        margin-bottom: 0

        span
            display: block
            color: #fe4536
            font-size: 1rem
.breadcrumb
    border-bottom: 1px soild
    border-bottom-color: #2c3e50
    list-style: none
    li
        display: inline
    a
        color: #131313
    a:hover
        text-decoration: none
        color: #fe4536
</style>
