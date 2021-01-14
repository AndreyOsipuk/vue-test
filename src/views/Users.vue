<template>
  <div class="users">
    <v-data-table :headers="headers" :items="users">
      <template v-slot:[`item.edit`]="{ item }">
        <router-link
          :to="{
            name: 'Edit user',
            params: { user: item }
          }"
        >
          <v-btn>
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
        </router-link>
      </template>
      <template v-slot:[`item.delete`]="{ item }">
        <v-btn @click="deleteRealty(item)">
          <v-icon small>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <router-link to="/addUser">
      <v-btn color="primary">
        Add
      </v-btn>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Header, User } from "@/types";
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState(["users"])
  }
})
export default class Main extends Vue {
  private headers: Header[] = [
    { text: "Name", value: "name" },
    { text: "Address", value: "address" },
    { text: "Edit", value: "edit" },
    { text: "Delete", value: "delete" }
  ];

  private users!: User[];

  private deleteRealty(realty: User): void {
    const result = confirm("Are you sure you want to delete this item?");
    if (result) {
      this.$store.dispatch("deleteUser", realty);
    }
  }
}
</script>
