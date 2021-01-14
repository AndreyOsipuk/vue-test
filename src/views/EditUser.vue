<template>
  <v-container fluid class="addUser">
    <v-row class="d-flex justify-center">
      <v-col cols="6" class="d-flex flex-column">
        <v-text-field v-model="user.name" label="Name" outlined></v-text-field>
        <v-select
          v-model="user.address"
          :items="addressCustom"
          label="Address"
          outlined
        ></v-select>
        <v-btn color="primary" @click="edit">
          Edit
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import { Realty, User } from "@/types";

@Component({
  computed: {
    ...mapState(["realty"])
  }
})
export default class AddUser extends Vue {
  private user: User = (this.$route.params.user as unknown) as User;

  private realty!: Realty[];

  private get addressCustom() {
    const addresses = this.realty.map(item => item.address);
    addresses.unshift("none");
    return addresses;
  }

  private edit(): void {
    this.$store.dispatch("editRealty", {
      oldRealty: this.$route.params.user,
      newRealty: this.user
    });
    this.$router.push("/users");
  }
}
</script>
