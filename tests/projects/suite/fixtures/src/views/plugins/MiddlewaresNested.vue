<template>
  <div>
    <h2>Nested route</h2>

    <test-case
      expected="nested"
      :result="$store.state.middlewareRouteNested"
    />
  </div>
</template>
