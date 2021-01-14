<template>
  <v-container fluid class="add">
    <v-row class="d-flex justify-center">
      <v-col cols="6" class="d-flex flex-column">
        <v-text-field v-model="name" label="Name" outlined></v-text-field>
        <v-select
          v-model="type"
          :items="['house', 'flat']"
          label="Type"
          outlined
        ></v-select>
        <v-text-field v-model="address" label="Address" outlined></v-text-field>
        <v-text-field
          v-model="price"
          label="Price"
          type="number"
          outlined
        ></v-text-field>
        <v-select
          v-model="mortgag"
          :items="[
            { name: 'yes', value: true },
            { name: 'no', value: false }
          ]"
          item-text="name"
          item-value="value"
          label="Mortgag"
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
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Add extends Vue {
  private name = "";
  private type = "flat";
  private address = "";
  private price = "";
  private mortgag = "no";

  private add(): void {
    const newRealty = {
      name: this.name,
      type: this.type,
      address: this.address,
      price: this.price,
      mortgag: this.mortgag
    };
    this.$store.dispatch("addRealty", newRealty);
    this.$router.push("/");
  }
}
</script>
