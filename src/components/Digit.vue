<template>
  <svg
    class="digit"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="264.395px"
    height="506.06px"
    viewBox="0 0 264.395 506.06"
    enable-background="new 0 0 264.395 506.06"
    xml:space="preserve"
  >
    <path
      :class="{ active: '0456789'.includes(data) }"
      class="digit-a"
      fill="#E60012"
      d="M7.198,238.79c-3.976,0-7.198-3.223-7.198-7.197L0,22.501c0-3.975,3.222-7.197,7.197-7.197l0,0
	c3.975,0,7.196,3.223,7.196,7.197v209.091C14.394,235.567,11.172,238.79,7.198,238.79L7.198,238.79z"
    />
    <path
      :class="{ active: '01234789'.includes(data) }"
      class="digit-b"
      fill="#E60012"
      d="M257.197,15.304c3.975,0,7.197,3.223,7.197,7.197v209.091c0,3.976-3.223,7.197-7.197,7.197l0,0
	c-3.975,0-7.197-3.222-7.197-7.197V22.501C250,18.527,253.223,15.304,257.197,15.304L257.197,15.304z"
    />
    <path
      :class="{ active: '0268'.includes(data) }"
      class="digit-c"
      fill="#E60012"
      d="M7.196,268.519c3.976,0,7.197,3.223,7.197,7.197v209.092c0,3.975-3.222,7.197-7.197,7.197l0,0
	c-3.975,0-7.196-3.223-7.196-7.197V275.716C0,271.742,3.222,268.519,7.196,268.519L7.196,268.519z"
    />
    <path
      :class="{ active: '013456789'.includes(data) }"
      class="digit-d"
      fill="#E60012"
      d="M257.197,268.519c3.975,0,7.197,3.223,7.197,7.197v209.092c0,3.975-3.223,7.197-7.197,7.197l0,0
	c-3.975,0-7.197-3.223-7.197-7.197V275.716C250,271.742,253.223,268.519,257.197,268.519L257.197,268.519z"
    />
    <path
      :class="{ active: '02356789'.includes(data) }"
      class="digit-e"
      fill="#E60012"
      d="M242.993,7.197c0,3.975-3.223,7.197-7.197,7.197H26.705c-3.975,0-7.197-3.222-7.197-7.197l0,0
	C19.507,3.222,22.729,0,26.705,0h209.091C239.771,0,242.993,3.222,242.993,7.197L242.993,7.197z"
    />
    <path
      :class="{ active: '0235689'.includes(data) }"
      class="digit-f"
      fill="#E60012"
      d="M242.993,498.863c0,3.976-3.223,7.197-7.197,7.197H26.705c-3.975,0-7.197-3.222-7.197-7.197l0,0
	c0-3.975,3.222-7.196,7.197-7.196h209.091C239.771,491.667,242.993,494.888,242.993,498.863L242.993,498.863z"
    />
    <path
      :class="{ active: '2345689'.includes(data) }"
      class="digit-g"
      fill="#E60012"
      d="M242.614,253.654c0,3.976-3.223,7.197-7.197,7.197H26.327c-3.975,0-7.197-3.221-7.197-7.197l0,0
	c0-3.975,3.222-7.196,7.197-7.196h209.09C239.392,246.458,242.614,249.68,242.614,253.654L242.614,253.654z"
    />
    <circle :class="{ active: data === ':' }" fill="#E60012" cx="127.813" cy="128.333" r="18.182" />
    <circle :class="{ active: data === ':' }" fill="#E60012" cx="127.813" cy="380.264" r="18.182" />
  </svg>
</template>

<script setup>
defineProps({
  data: {
    type: String,
    default() {
      return ''
    },
  },
  color: {
    type: String,
    default() {
      return 'white'
    },
  },
})
</script>

<style scoped lang="sass">
.digit
  width: 100px
  height: 200px
  margin: 7px
path, circle
  fill: transparent
  &.active
    // v-bind 把 CSS 的值和 Vue 的變數綁定
    fill: v-bind(color)
</style>
