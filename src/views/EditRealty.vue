<template>
  <v-container fluid class="add">
    <v-row class="d-flex justify-center">
      <v-col cols="6" class="d-flex flex-column">
        <v-text-field
          v-model="realty.name"
          label="Name"
          outlined
        ></v-text-field>
        <v-select
          v-model="realty.type"
          :items="['house', 'flat']"
          label="Type"
          outlined
        ></v-select>
        <v-select
          v-model="realty.owner"
          :items="users"
          item-text="name"
          item-value="name"
          label="Owner"
          outlined
        ></v-select>
        <v-text-field
          v-model="realty.address"
          label="Address"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="realty.price"
          label="Price"
          type="number"
          outlined
        ></v-text-field>
        <v-select
          v-model="realty.mortgag"
          :items="[
            { name: 'yes', value: true },
            { name: 'no', value: false }
          ]"
          item-text="name"
          item-value="value"
          label="Mortgag"
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
import { Realty, User } from "@/types";
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
@Component({
  computed: {
    ...mapState(["users"])
  }
})
export default class Edit extends Vue {
  private users!: User[];

  private realty: Realty = (this.$route.params.realty as unknown) as Realty;

  private edit(): void {
    this.$store.dispatch("editRealty", {
      oldRealty: this.$route.params.realty,
      newRealty: this.realty
    });
    this.$router.push("/");
  }
}
</script>
