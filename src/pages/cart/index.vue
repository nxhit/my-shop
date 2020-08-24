<template>
  <div class="cart">
    <div class="container-fluid">
      <div class="page-header">
        <div class="container">
          <h1 class="page__title">
            Cart
            <span>Easy feel to contact us</span>
          </h1>
        </div>
      </div>
      <nav class="breadcrumb">
        <div class="container">
          <li class="breadcrumb-item">
            <a class="header__link" href="/home">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Cart</li>
        </div>
      </nav>
    </div>
    <section class="cart__content">
      <div class="container">
        <div class="row">
          <div class="col-12 col-xl-9">
            <table class="table">
              <tbody>
                <tr class="d-flex">
                  <td class="col-12 col-md-2">
                    <img
                      src="data:image/jpeg;base64,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"
                      width="100px"
                      height="100px"
                      alt=""
                    />
                  </td>
                  <td class="col-12 col-md-4">
                    <h4>
                      Iphone
                    </h4>
                  </td>
                  <td class="col-12 col-md-1">$3000</td>
                  <td class="col-12 col-md-3 justify-content-center">
                    <div class="input-group-control">
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        class="form-control"
                        maxlength="2"
                        value="10"
                        size="2"
                      />
                      <span class="input-group-btn">
                        <button
                          type="button"
                          value="quantity"
                          class="quantity-plus btn btn-outline-secondary"
                          data-type="plus"
                          data-field=""
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                        <button
                          type="button"
                          value="quantity"
                          class="quantity-minus btn btn-outline-secondary"
                          data-type="minus"
                          data-field=""
                        >
                          <i class="fas fa-minus"></i>
                        </button>
                      </span>
                    </div>
                  </td>
                  <td class="col-12 col-md-2">$3000</td>
                </tr>
                <tr class="d-flex"></tr>
              </tbody>
            </table>
          </div>
          <div class="col-12 col-xl-3">
            <h3>Cart totals</h3>
            <table class="table">
              <tbody>
                <tr>
                  <th>Giá tiền</th>
                  <th>$3000</th>
                </tr>
                <tr>
                  <th>Coupon</th>
                  <th>$300</th>
                </tr>
                <tr>
                  <th>Total</th>
                  <th>$2700</th>
                </tr>
              </tbody>
            </table>
            <a href="/checkout">Thanh toán</a>
            <a href="/home">Tiếp Tục mua hàng</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          name: "samsung",
          url: "",
          price: "$2000"
        },
        {
          name: "iphone",
          url: "",
          price: "$3000"
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

.input-group-control
    display: flex
    justify-content: flex-start
    align-items: center
    width: 100px
    height: 44px
    background-color: #f5f5f5
.input-group-btn
    .btn
        float: left
        display: flex
        align-items: center
        height: 22px
        padding: 0 10px
        margin-bottom: 0
        color: #000
        font-size: 10px
        border: none
        border-radius: 0
</style>
