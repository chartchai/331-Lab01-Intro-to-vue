const { createApp, ref } = Vue;

createApp({
  setup() {
    // const product = ref('Stocks');
    const product = ref('Green Socks');
    const image = ref('assets/images/socks_green.jpg');
    const link = ref('https://www.camt.cmu.ac.th/');
    return { product, image, link };
  }
}).mount('#app');