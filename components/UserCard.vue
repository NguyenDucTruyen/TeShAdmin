<template>
  <div class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex">
    <div
      scope="row"
      class="w-[20%] py-4 px-2 font-medium text-[#333] whitespace-nowrap"
    >
      <span class="child">
        {{ item.username ?? 'null' }}
      </span>
    </div>
    <div class="w-[20%] py-4 px-2">
      <span class="child"
        ><span class="child">
        {{ item.email=="" ||!item.email ?'null':item.email }}
        </span></span
      >
    </div>

    <div class="w-[20%] py-4 px-2">
      <span class="child">
        {{ item.address==""||!item.address ?'null':item.address }}
      </span>
    </div>
    <div class="w-[20%] py-4 px-2">
      <span class="child">
        {{ item.phone==""||!item.phone ?'null':item.phone }}
      </span>
    </div>
    <div class="flex w-[20%] py-4 px-2 justify-center gap-[20px]">
      <span
        class="w-[-50%] flex py-4 px-2 font-medium text-red-500 dark:text-red-600 hover:underline text-center cursor-pointer"
        @click="deleteUser"
      >
        Delete
      </span>
      <span
        class="w-[-50%] flex py-4 px-2 font-medium text-blue-600 dark:text-blue-500 hover:underline text-center cursor-pointer"
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
  methods: {
    showUpdate() {
      this.$emit('update', this.item.username)
    },
    deleteUser() {
      try {
        if (confirm('Bạn có muốn xóa user này không?')) {
          this.$fire.database.ref(`Users/${this.item.username}`).set(null)
          alert('Xóa user thành công')
          this.$emit('deleted')
        }
      } catch (e) {
        alert(e)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/custom.scss';
.child {
  @include truncate;
}
</style>
