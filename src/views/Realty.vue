<template>
  <div class="main">
    <v-data-table :headers="headers" :items="realty">
      <template v-slot:[`item.mortgag`]="{ item }">
        {{ item.mortgag ? "yes" : "no" }}
      </template>
      <template v-slot:[`item.edit`]="{ item }">
        <router-link
          :to="{
            name: 'Edit',
            params: { realty: item }
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
    <router-link to="/add">
      <v-btn color="primary">
        Add
      </v-btn>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Header, Realty } from "@/types";
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
    { text: "Type", value: "type" },
    { text: "Address", value: "address" },
    { text: "Price", value: "price" },
    { text: "Mortgag", value: "mortgag" },
    { text: "Owner", value: "owner" },
    { text: "Edit", value: "edit" },
    { text: "Delete", value: "delete" }
  ];

  private realty!: Realty;

  private deleteRealty(realty: Realty): void {
    const result = confirm("Are you sure you want to delete this item?");
    if (result) {
      this.$store.dispatch("deleteRealty", realty);
    }
  }
}
</script>
