<template>
  <v-container fluid class="addUser">
    <v-row class="d-flex justify-center">
      <v-col cols="6" class="d-flex flex-column">
        <v-text-field v-model="name" label="Name" outlined></v-text-field>
        <v-select
          v-model="address"
          :items="realtyCustom"
          label="Address"
          outlined
        ></v-select>
        <v-btn color="primary" @click="add">
          Save
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { mapState } from "vuex";
import { Realty } from "@/types";

@Component({
  computed: {
    ...mapState(["realty"])
  }
})
export default class AddUser extends Vue {
  private name = "";
  private address = "";

  private realty!: Realty[];

  private get realtyCustom() {
    const newRealty = this.realty.map(item => item.address);
    newRealty.unshift("none");
    return newRealty;
  }

  private add(): void {
    const newUser = {
      name: this.name,
      address: this.address
    };
    this.$store.dispatch("addUser", newUser);
    this.$router.push("/users");
  }
}
</script>
