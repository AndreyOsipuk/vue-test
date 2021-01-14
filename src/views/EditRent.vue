<template>
  <v-container fluid class="add">
    <v-row class="d-flex justify-center">
      <v-col cols="6" class="d-flex flex-column">
        <v-select
          v-model="rent.tenants"
          :items="users"
          item-text="name"
          item-value="name"
          label="tenants"
          outlined
          multiple
        ></v-select>
        <v-text-field
          v-model="rent.date_at"
          label="date_at"
          type="date"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="rent.date_to"
          label="date_to"
          type="date"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="rent.price"
          type="number"
          label="Price"
          outlined
        ></v-text-field>
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
import { Rent } from "@/types";

@Component({
  computed: {
    ...mapState(["realty", "users"])
  }
})
export default class EditRent extends Vue {
  private rent: Rent = (this.$route.params.rent as unknown) as Rent;

  private edit(): void {
    this.$store.dispatch("editRent", {
      oldRent: this.$route.params.rent,
      newRent: this.rent
    });
    this.$router.push("/rent");
  }
}
</script>
