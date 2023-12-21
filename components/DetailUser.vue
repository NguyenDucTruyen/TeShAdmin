<template>
  <FullModal>
    <div
      class="relative flex flex-col min-w-0 break-words w-[600px] mb-6 shadow-lg rounded-lg bg-white border-0 rounded-[20px]"
      @click="close"
    >
      <div class="rounded-[20px] bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
          <h6 class="text-blueGray-700 text-xl font-bold text-center w-full">
            Detail User
          </h6>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form @click.stop>
          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            User Information
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Username
                </label>
                <input
                  v-model="userInfo.username"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value="lucky.jesse"
                  disabled
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email address
                </label>
                <input
                  v-model="userInfo.email"
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
                  Phone number
                </label>
                <input
                  v-model="userInfo.phone"
                  type="text"
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
                  Gender
                </label>
                <input
                  v-model="userInfo.gender"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value="Jesse"
                />
              </div>
            </div>
          </div>

          <hr class="mt-6 border-b-1 border-blueGray-300" />

          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Contact Information
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Address
                </label>
                <input
                  v-model="userInfo.address"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                />
              </div>
            </div>
          </div>
          <div class="flex justify-center gap-[20px] mt-[30px]">
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
              @click="updateUser"
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
    user: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      userInfo: {},
    }
  },
  created() {
    this.userInfo = { ...this.user }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    updateUser() {
      try {
        this.$fire.database.ref(`Users/${this.userInfo.username}`).set({
          email: this.userInfo.email,
          address: this.userInfo.address,
          gender: this.userInfo.gender,
          phone: this.userInfo.phone,
          username: this.userInfo.username,
          password: this.userInfo.password
        })
        alert('Cập nhật thành công')
        this.$emit('updated')
      } catch (e) {
        alert(e)
      }
    },
    async getUserData() {
      const messageRef = this.$fire.database.ref('Users')
      try {
        const snapshot = await messageRef.once('value')
        this.listUsers = snapshot.val()
        console.log('listUsers:', this.listUsers)
      } catch (e) {
        alert(e)
      }
    },
  },
}
</script>
