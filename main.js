const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        const product = ref('Boots');
        const brand = ref('SE 331');
        const description = ref('green boots');  //2.5
        //const image = ref('./assets/images/socks_green.jpg');
        const productLink = ref('https://www.camt.cmu.ac.th/'); //3.6
        const inventory = ref(100);
        const onSale = ref(true); //4.9
        const detail = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ])
        const selectedVariant = ref(0);
        const sizes = ref([' S ', ' M', ' L ']);//5.5
        const cart = ref(0)
        function addToCart() {
            cart.value += 1
        }
        const title = computed(() => {
            return brand.value + ' ' + product.value
        })
        function updateImage(variantImage) {
            image.value = variantImage
        }
        function StockStatus() {
            inventory.value = inventory.value > 0 ? 0 : 100;
        } //6.7
        function updateVariant(index) {
            selectedVariant.value = index; 
        }

        const image = computed(() => {
            return variants.value[selectedVariant.value].image; // 8.4
        })

        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity;
        })

return {
    brand,
    product,
    title,
    description,
    image,
    productLink,
    inventory,
    onSale,
    detail,
    variants,
    sizes,
    cart,
    addToCart,
    updateImage,
    StockStatus,
    updateVariant,
    inStock
};
        }
    }).mount('#app');
