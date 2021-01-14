<template>
  <v-container fluid class="add">
    <v-row class="d-flex justify-center">
      <v-col cols="6" class="d-flex flex-column">
        <v-select
          v-model="address"
          :items="
            realty.filter(
              item =>
                item.owner &&
                !Object.prototype.hasOwnProperty.call(item, 'rent')
            )
          "
          item-text="address"
          item-value="address"
          label="Address"
          outlined
        ></v-select>
        <v-text-field
          v-model="owner"
          label="Owner"
          outlined
          disabled
        ></v-text-field>
        <v-select
          v-model="newRent.tenants"
          :items="users"
          item-text="name"
          item-value="name"
          label="tenants"
          outlined
          multiple
        ></v-select>
        <v-text-field
          v-model="newRent.date_at"
          label="date_at"
          type="date"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="newRent.date_to"
          label="date_to"
          type="date"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="newRent.price"
          type="number"
          label="Price"
          outlined
        ></v-text-field>
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
import { Realty, Rent, User } from "@/types";

@Component({
  computed: {
    ...mapState(["realty", "users"])
  }
})
export default class NewRent extends Vue {
  private realty!: Realty[];
  private users!: User[];

  private address = "";
  private owner = "";

  private newRent: Rent = {
    tenants: [],
    date_at: "",
    date_to: "",
    price: 0
  };

  @Watch("address", { deep: true })
  private watchToAddress() {
    const obj = this.realty.find(item =>
      item.address === this.address ? item.owner : ""
    );
    this.owner = obj?.owner || "";
  }
  private add(): void {
    this.$store.dispatch("addRent", {
      address: this.address,
      rent: this.newRent
    });
    this.$router.push("/rent");
  }
}
</script>
