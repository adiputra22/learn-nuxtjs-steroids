<template>
    <div>Single users {{ $route.params.id }}</div>
</template>

<script>
export default {
    validate(data) {
        return /^\d+$/.test(data.params.id);
    }
}
</script>