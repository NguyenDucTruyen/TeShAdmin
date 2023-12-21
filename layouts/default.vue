<template>
    <div class="max-container flex h-full">
        <SideBar/>
        <div class="w-full h-full bg-gray-400">
        <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
          <div class="border border-gray-300 rounded-md p-[20px] h-full">
           <nuxt/>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import SideBar from '~/components/SideBar.vue';
export default {
    components: {
        SideBar
    }
}
</script>
<style lang="scss" scoped>

</style>