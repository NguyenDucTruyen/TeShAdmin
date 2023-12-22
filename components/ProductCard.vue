<template>
  <div class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex">
    <div scope="row" class="w-[18%] py-4 px-2 flex justify-center items-center">
        <img :src="item.imageURL ?? ''" class="h-[100px] object-fit" alt="">
    </div>
    <div class="w-[18%] py-4 px-2 font-medium dark:text-white text-gray-900 items-center flex">
      <span class="child">
        {{ item.name ?? 'null' }}
      </span>
    </div>
    <div class="w-[10%] py-4 px-2 items-center justify-center flex">
      <span class="child">
        {{ item.price ?? 'null' }}$
      </span>
    </div>
    <div class="w-[18%] py-4 px-2 items-center flex">
      <span class="child">
        {{ item.content ?? 'null' }}
      </span>
    </div>
    <div class="w-[18%] py-4 px-2 items-center flex">
      <span class="child">
        {{ item.author ?? 'null' }}
      </span>
    </div>
    <div class="flex w-[18%] py-4 px-2 justify-center gap-[20px]">
      <span
        class="w-[-50%] flex py-4 px-2 font-medium text-red-500 dark:text-red-600 hover:underline text-center cursor-pointer leading-[100px]"
        @click="deleteProduct"
      >
        Delete
      </span>
      <span
        class="w-[-50%] flex py-4 px-2 font-medium text-blue-600 dark:text-blue-500 hover:underline text-center cursor-pointer leading-[100px]"
        @click="showUpdate"
        >
        Edit
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {}
  },
  methods: {
    showUpdate() {
        console.log('item:',this.item.id)
      this.$emit('update', this.item.id)
    },
    deleteProduct() {
      try {
        if (confirm('Bạn có muốn xóa sản phẩm này không?')) {
          this.$fire.database.ref(`Product/${this.item.id}`).set(null)
          alert('Xóa sản phẩm thành công')
          this.$emit('deleted')
        }
      } catch (e) {
        alert(e)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/custom.scss';
.child {
  @include truncate;
}
</style>
