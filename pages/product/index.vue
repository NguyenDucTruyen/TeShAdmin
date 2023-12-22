<template>
  <div class="h-full">
    <div class="top flex justify-between">
      <h3 class="text-2xl font-bold text-left py-2">Product Management</h3>
      <button
        class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-1 rounded-[16px] shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 flex items-center justify-center gap-[4px]"
        type="button"
        @click="showModalName='create-product'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
          fill="#fff"
        >
          <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
          />
        </svg>
        Add New Product
      </button>
    </div>
    <div class="overflow-x-auto relative sm:rounded-lg body">
      <div
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-full"
      >
        <div
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <div class="flex pr-[10px]">
            <div scope="col" class="py-3 px-2 w-[18%] text-center">Preview</div>
            <div scope="col" class="py-3 px-2 w-[18%]">
              <div class="flex items-center">Name</div>
            </div>
            <div scope="col" class="py-3 px-2 w-[10%]">
              <div class="flex items-center justify-center">Price</div>
            </div>
            <div scope="col" class="py-3 px-2 w-[18%]">
              <div class="flex items-center">Content</div>
            </div>
            <div scope="col" class="py-3 px-2 w-[18%]">
              <div class="flex items-center">Author</div>
            </div>
            <div scope="col" class="py-3 px-2 w-[18%]">
              <div class="flex items-center justify-center text-center">
                Action
              </div>
            </div>
          </div>
        </div>
        <div class="body-data">
          <div
            v-for="(item, index) in listProduct"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <ProductCard :item="item" @update="showUpdate" @deleted="updateProduct"/>
          </div>
        </div>
      </div>
    </div>
    <FullModal v-if="showModalName" @close="closeFullModal">
      <DetailProduct
        v-if="showModalName == 'detail-product'"
        :value="currentProduct"
        @updated="updateProduct"
        @close="closeFullModal"
      />
      <CreateProductVue v-if="showModalName == 'create-product'" @created="updateProduct" @close="closeFullModal"/>
    </FullModal>
  </div>
</template>
<script>
import ProductCard from '~/components/ProductCard.vue'
import DetailProduct from '~/components/DetailProduct.vue'
import CreateProductVue from '~/components/CreateProduct.vue'
export default {
  components: {
    ProductCard,
    DetailProduct,
    CreateProductVue
  },
  data() {
    return {
      listProduct: [],
      showModalName: '',
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
        this.listProduct = snapshot.val()
        this.listProduct = this.listProduct.filter((e) => {
          return e !== null
        })
        console.log('snap:',snapshot.val())
        console.log('listProduct:', this.listProduct)
      } catch (e) {
        alert(e)
      }
    },
    showUpdate(idProduct) {
      this.currentProduct = this.listProduct.find(e=>e.id===idProduct)
      this.showModalName = 'detail-product'
    },
    closeFullModal() {
      this.showModalName = ''
    },
    updateProduct() {
      this.closeFullModal()
      this.getProductData()
    },
  },
}
</script>
<style lang="scss" scoped>
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
