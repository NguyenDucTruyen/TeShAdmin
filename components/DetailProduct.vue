<template>
  <FullModal>
    <div
      class="relative flex flex-col min-w-0 break-words w-[600px] shadow-lg rounded-lg bg-white border-0 rounded-[20px]"
      @click.stop
    >
      <div class="rounded-[20px] bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
          <h6 class="text-blueGray-700 text-xl font-bold text-center w-full">
            Detail Product
          </h6>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0 container-form">
        <form @click.stop>
          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Product Information
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3 flex justify-center">
                <img :src="product.imageURL" alt="Image" class="h-[200px]" />
              </div>
            </div>
          </div>
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              for="grid-password"
              >Image URL</label
            ><input
                v-model="product.imageURL"
                type="url"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
            />
          </div>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Name
                </label>
                <input
                  v-model="product.name"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value="lucky.jesse"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Author
                </label>
                <input
                  v-model="product.author"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value="jesse@example.com"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Price
                </label>
                <input
                  v-model="product.price"
                  type="number"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value="Lucky"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Number of pages
                </label>
                <input
                  v-model="product.page"
                  type="number"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value="Jesse"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Quantity
                </label>
                <input
                  v-model="product.quantity"
                  type="number"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value="Lucky"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Category
                </label>
                <select
                  v-model="category.id"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    v-for="item in listCategories"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <hr class="mt-6 border-b-1 border-blueGray-300" />

          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Content
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <textarea
                  v-model="product.content"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 resize-none"
                  rows="4"
                >
                </textarea>
              </div>
            </div>
          </div>
          <div class="flex justify-center gap-[20px] mt-[10px]">
            <button
              class="bg-red-500 text-white active:bg-red-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              @click="close"
            >
              Cancel
            </button>
            <button
              class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              @click="updateProduct"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </FullModal>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      product: {},
      category: {},
      listCategories: [],
      selectCategory: '',
    }
  },
  computed: {
    checkData() {
      return (
        this.product.author &&
        this.product.content &&
        this.category.id &&
        this.product.imageURL &&
        this.product.name &&
        this.product.price &&
        this.product.quantity&&
        this.product.page
      )
    },
  },
  created() {
    this.product = { ...this.value }
    this.getCategory()
  },
  methods: {
    close() {
      this.$emit('close')
    },
    updateProduct() {
      try {
        this.$fire.database.ref(`Product/${this.product.id}`).set({
          author: this.product.author,
          category: Number(this.category.id),
          content: this.product.content,
          id: Number(this.product.id),
          imageURL: this.product.imageURL,
          name: this.product.name,
          page: Number(this.product.page),
          price: Number(this.product.price),
          quantity: Number(this.product.quantity),
        })
        alert('Cập nhật sản phẩm thành công')
        this.$emit('updated')
      } catch (e) {
        alert(e)
      }
    },
    async getCategory() {
      const messageRef = this.$fire.database.ref('categoryitem')
      try {
        const snapshot = await messageRef.once('value')
        this.listCategories = snapshot.val()
        this.listCategories = this.listCategories.filter((e) => e !== null)
        this.listCategories.forEach((e) => {
          if (e.id === this.product.category) this.category = { ...e }
        })
      } catch (e) {
        alert(e)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/custom.scss';
.container-form {
  overflow-y: scroll;
  @include custom-scroll;
  height: 600px;
  padding-right: 30px;
  textarea {
    @include custom-scroll;
  }
}
</style>
