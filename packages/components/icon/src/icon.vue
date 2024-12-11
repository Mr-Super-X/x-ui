<template>
  <i :class="bem.b()" :style="styles">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { computed, CSSProperties } from "vue";
import { createNamespace } from "@cjp-ui/utils/create";
import { iconProps } from "./icon";

// 使用bem规范
const bem = createNamespace("icon");

// 定义props
const props = defineProps(iconProps);

// 计算属性处理样式
const styles = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {};

  return {
    ...(props.size ? { "font-size": props.size + "px" } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>
