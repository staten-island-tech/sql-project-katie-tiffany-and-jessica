<template>
  <section class="cardsContainer">
    <div class="card">
      <h2>{{ item }}</h2>
      <h3>{{ price }}</h3>
      <img :src="image" alt="" />
      <button class="cartButton">Add to cart</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: String,
    price: String,
    image: String,
    button: String,
  },
  data() {
    return {
      selected: "",
    };
  },

  async mounted() {
    let { data: ITEMS, error } = await supabase.from("ITEMS").select("*");

    console.log(ITEMS);

    let { data: Prices, error } = await supabase.from("Prices").select("*");
    console.log(Prices);
  },
};
</script>

<style scoped>
.card {
  background-color: blue;
  margin: auto;
  padding: auto;
  border: 4mm ridge red;
  border-radius: 10px;
}

img {
  width: fit-content;
  border: thick double white;
}

.cartButton {
  display: inline-block;
  position: relative;
  height: 3.5rem;
  width: 12rem;
  border-radius: 7px;
  border: 3px solid #013823;
  padding: 0.6em 1.2em;
  text-align: center;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  padding: 5px;
  margin: 20px;
  background-color: #7bb798;
  cursor: pointer;
  transition: 0.3s;
}

.cartButton:hover {
  padding-right: 20px;
  padding-left: 3px;
  border-color: white;
}

.cartButton:after {
  content: "\1F6D2";
  position: absolute;
  opacity: 0;
  top: 14px;
  right: -10px;
  transition: 0.5s;
}

.cartButton:hover:after {
  opacity: 1;
  right: 10px;
}
</style>
