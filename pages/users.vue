<template>
  <div class="h-full">
    <div class="top flex justify-between">
      <h3 class="text-2xl font-bold text-left py-2">Users Management</h3>
      <button
        class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-1 rounded-[16px] shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 flex items-center justify-center gap-[4px]"
        type="button"
        @click="showModalName='create-user'"
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
        Create New User
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
            <div scope="col" class="py-3 px-2 w-[20%]">Username</div>
            <div scope="col" class="py-3 px-2 w-[20%]">
              <div class="flex items-center">Email</div>
            </div>
            <div scope="col" class="py-3 px-2 w-[20%]">
              <div class="flex items-center">Address</div>
            </div>
            <div scope="col" class="py-3 px-2 w-[20%]">
              <div class="flex items-center">Phone</div>
            </div>
            <div scope="col" class="py-3 px-2 w-[20%]">
              <div class="flex items-center justify-center text-center">
                Action
              </div>
            </div>
          </div>
        </div>
        <div class="body-data">
          <div
            v-for="item in listUsers"
            :key="item.username"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <UserCard :item="item" @update="showUpdate" @deleted="updateUser" />
          </div>
        </div>
      </div>
      <FullModal v-if="showModalName" @close="closeFullModal">
        <DetailUser
          v-if="showModalName == 'detail-user'"
          :user="currentUser"
          @updated="updateUser"
          @close="closeFullModal"
        />
        <CreateUser
          v-if="showModalName == 'create-user'"
          @created="updateUser"
          @close="closeFullModal"
        />
      </FullModal>
    </div>
  </div>
</template>
<script>
import UserCard from '~/components/UserCard.vue'
import DetailUser from '~/components/DetailUser.vue'
import FullModal from '~/components/FullModal.vue'
import CreateUser from '~/components/CreateUser.vue'
export default {
  components: {
    UserCard,
    DetailUser,
    FullModal,
    CreateUser,
  },
  data() {
    return {
      listUsers: [],
      currentUser: {},
      showModalName: '',
    }
  },
  mounted() {
    this.getUserData()
  },
  methods: {
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
    showUpdate(username) {
      this.currentUser = this.listUsers[username]
      this.showModalName = 'detail-user'
    },
    closeFullModal() {
      this.showModalName = ''
    },
    updateUser() {
      this.closeFullModal()
      this.getUserData()
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
