<template>
    <div class="h-full">
    <h3 class="text-2xl font-bold text-left py-2">Product Management</h3>
    <div class="overflow-x-auto relative sm:rounded-lg body">
      <div class="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-full">
        <div class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <div class="flex pr-[10px]">
            <div scope="col" class="py-3 px-2 w-[18%] text-center">
              Preview
            </div>
            <div scope="col" class="py-3 px-2 w-[18%]">
              <div class="flex items-center">
                Name
              </div>
            </div>
            <div scope="col" class="py-3 px-2 w-[18%]">
              <div class="flex items-center justify-center">
                Price
              </div>
            </div>
            <div scope="col" class="py-3 px-2 w-[18%]">
              <div class="flex items-center">
                Content
              </div>
            </div>
            <div scope="col" class="py-3 px-2 w-[18%]">
              <div class="flex items-center">
                Author
              </div>
            </div>
            <div scope="col" class="py-3 px-2 w-[10%]">
              <div class="flex items-center justify-center text-center">
                Action
              </div>
            </div>
          </div>
        </div>
        <div class="body-data">
          <div v-for="(item,index) in listProduct" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <ProductCard :item="item"/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import ProductCard from '~/components/ProductCard.vue'
export default {
  components: {
    ProductCard
  },
  data() {
    return {
      listProduct: []
    }
  },
  mounted() {
    this.getProductData()
  },
  methods: {
    async getProductData() {
      const messageRef = this.$fire.database.ref('Product')
      try {
        const snapshot = await messageRef.once('value')
        console.log('123',snapshot.val())
        this.listProduct = snapshot.val()
        this.listProduct = this.listProduct.filter(e=>{
            return e!==null
        })
      } catch (e) {
        alert(e)
      }
    },
  }
}
</script>
<style lang="scss" scoped >
  @import '~/assets/scss/custom.scss';
  .body {
    height: calc(100% - 48px);
    overflow-y: hidden;
    .body-data {
      height: calc(100% - 40px);
      overflow-y: scroll;
      @include custom-scroll;
    }
  }
</style>