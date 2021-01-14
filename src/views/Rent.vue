<template>
  <div class="rent">
    <v-data-table
      :headers="headers"
      :items="realty.filter(item => item.hasOwnProperty('rent'))"
    >
      <template v-slot:[`item.edit`]="{ item }">
        <router-link
          :to="{
            name: 'Edit Rent',
            params: { rent: item.rent }
          }"
        >
          <v-btn>
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
        </router-link>
      </template>
      <template v-slot:[`item.delete`]="{ item }">
        <v-btn @click="deleteRent(item.rent)">
          <v-icon small>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <router-link to="/addRent">
      <v-btn color="primary">
        Add
      </v-btn>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Header, Realty, Rent } from "@/types";
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState(["realty"])
  }
})
export default class Main extends Vue {
  private headers: Header[] = [
    { text: "Name", value: "name" },
    { text: "Address", value: "address" },
    { text: "Owner", value: "owner" },
    { text: "Tenants", value: "rent.tenants" },
    { text: "date_at", value: "rent.date_at" },
    { text: "date_to", value: "rent.date_to" },
    { text: "price", value: "rent.price" },
    { text: "Edit", value: "edit" },
    { text: "Delete", value: "delete" }
  ];

  private realty!: Realty;

  private deleteRent(rent: Rent): void {
    const result = confirm("Are you sure you want to delete this item?");
    if (result) {
      this.$store.dispatch("deleteRent", rent);
    }
  }
}
</script>
