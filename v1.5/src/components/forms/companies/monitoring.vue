<template>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6 overflow-visible z-index-2">
    <label class="label">Lotteries</label>
    <min-wrapper>
      <min-dropdown class="gap-6">
        <button dropdown class="radius-6 border-w-2 border-secondary">
          All
          <i class="uil uil-angle-down" />
        </button>
        <min-wrapper>
          <min-column dropdown class="radius-6 border-w-2 border-secondary bg-primary">
            <button option>Florida - something</button>
            <button option>creative name here</button>
            <button option>banca piolin</button>
          </min-column>
        </min-wrapper>
      </min-dropdown>
    </min-wrapper>
  </min-input>

  <!------------------------------------------------------------------------------------------->
  <table class="bg-secondary">
    <tr class="bg-ternary">
      <th class="text-center">ID Ticket</th>
      <th class="text-center">Date</th>
      <th class="text-center">Company</th>
      <th class="text-center">Seller</th>
      <th class="text-center">Amount</th>
      <th class="text-center">Reward</th>
      <th class="text-center">Status</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
  <!------------------------------------------------------------------------------------------->
</template>
