<template>
  <div class="h-screen flex">
    <!-- Side bar -->
    <div class="w-[300px] h-full bg-gray-200 text-white" v-show="showSide">
      <div class="h-[50px] bg-gray-900 flex justify-start items-center">
        <div class="px-[20px]">
          <h3 class="font-bold text-xl">TeSh Management</h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
        <div
          class="flex flex-col justify-between h-full px-[20px] space-y-[10px]"
        >
          <div class="flex flex-col justify-between space-y-[10px]">
            <div
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md order-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out cursor-pointer"
              :class="[
                isActive('user') ? 'bg-gray-200' : '',
                isActive('user') ? 'text-gray-800' : '',
              ]"
              @click="gotoPage('users')"
            >
              <svg
                aria-hidden="true"
                class="mr-2 w-[25px] h-[25px] fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              User Management
            </div>
            <div
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out cursor-pointer"
              :class="[
                isActive('product') ? 'bg-gray-300' : '',
                isActive('product') ? 'text-gray-800' : '',
              ]"
              @click="gotoPage('product')"
            >
              <svg
                aria-hidden="true"
                class="mr-2 w-[25px] h-[25px] fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                ></path>
              </svg>
              Product
            </div>
          </div>
          <div class="h-[50px]">
            <div>
              <div
                class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out cursor-pointer"
                @click="logout"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="mr-2 w-[25px] h-[25px] fill-current rotate-[180deg]"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                    clip-rule="evenodd"
                  />
                </svg>
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main  -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDropDown: false,
      showSide: true,
    }
  },
  methods: {
    isActive(name) {
      return this.$route.fullPath.includes(name)
    },
    gotoPage(name) {
      this.$router.push('/'+name)
    },
    logout() {
      if(confirm('Bạn có muốn đăng xuất?')) {
        localStorage.removeItem('logged')
        this.$router.push('/')
      }
    }
  },
}
</script>

<style></style>
