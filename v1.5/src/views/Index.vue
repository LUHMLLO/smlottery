<script setup lang="ts">
//vanilla
const weeklyStats = ["Total Sales", "Total Income", "New Orders", "Abandoned"];
const tickets = ["Sold", "Pending", "Winners", "Losers"];
const months_revenue = ["This Month", "Last Month"];

const randomInt = (max: number, min: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
</script>

<template>
  <min-column class="gap-16">
    <header>
      <h6>Weekly Stats</h6>
      <hr class="w-100 height-1" />
    </header>
    <min-grid class="grid-2 md:grid-4 gap-32">
      <min-column class="gap-8" v-for="stats in weeklyStats" :key="stats">
        <label class="label">{{ stats }}</label>
        <min-column>
          <ChartsBar class="w-100" />
        </min-column>
      </min-column>
    </min-grid>
  </min-column>
  <min-grid class="grid-1 md:grid-2 gap-32">
    <min-column class="gap-32">
      <min-column class="gap-16">
        <header>
          <h6>Tickets Stats</h6>
          <hr class="w-100 height-1" />
        </header>
        <min-grid class="grid-2 md:grid-4 gap-32">
          <min-column v-for="ticket in tickets" :key="ticket">
            <label class="label">{{ ticket }}</label>
            <var class="color-accent">{{ randomInt(1000, 0) }}</var>
          </min-column>
        </min-grid>
      </min-column>
      <min-column class="gap-16">
        <header>
          <h6>Traffic Sources</h6>
          <hr class="w-100 height-1" />
        </header>
        <min-grid class="grid-2 md:grid-4 gap-1" nowrap>
          <min-column items="end" class="bg-grey-100 p-8" v-for="col in 4" :key="col">
            <label class="label w-100">Source</label>
            <hr class="height-120" fill />
            <var>25%</var>
          </min-column>
        </min-grid>
      </min-column>
    </min-column>
    <min-column class="gap-32">
      <min-column class="gap-16">
        <header>
          <h6>Revenue</h6>
          <hr class="w-100 height-1" />
        </header>
        <min-row class="gap-32">
          <min-column v-for="month in months_revenue" :key="month">
            <label class="label">{{ month }}</label>
            <var class="color-accent">{{ randomInt(1000, 0) }}</var>
          </min-column>
        </min-row>
      </min-column>
      <hr class="height-200" />
    </min-column>
  </min-grid>
  <min-column class="gap-">
    <header>
      <h6>Customer per zone</h6>
    </header>
    <table>
      <tr>
        <th>Customer</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Tracking</th>
        <th class="w-12">Actions</th>
      </tr>
      <tr>
        <td>Jose Hernandez</td>
        <td class>Oct 31, 2020</td>
        <td>$863.42</td>
        <td>paid</td>
        <td class="color-accent">TR-7295</td>
        <td>
          <button class="px-12 py-3 w-100">View Order</button>
        </td>
      </tr>
      <tr>
        <td>Miguel Erikman</td>
        <td class>Oct 31, 2020</td>
        <td>$863.42</td>
        <td>paid</td>
        <td class="color-accent">TR-7295</td>
        <td>
          <button class="px-12 py-3 w-100">View Order</button>
        </td>
      </tr>
      <tr>
        <td>Manuel Bencosme</td>
        <td class>Oct 31, 2020</td>
        <td>$863.42</td>
        <td>paid</td>
        <td class="color-accent">TR-7295</td>
        <td>
          <button class="px-12 py-3 w-100">View Order</button>
        </td>
      </tr>
    </table>
  </min-column>
</template>
