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
    <div class="w-[18%] py-4 px-2 items-center justify-center flex">
      <span class="child">
        {{ item.price ?? 'null' }}
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
    <div
      class="w-[10%] py-4 px-2 font-medium text-blue-600 dark:text-blue-500 hover:underline text-center cursor-pointer items-center flex justify-center"
    >
      Edit
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
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/custom.scss';
.child {
  @include truncate;
}
</style>
