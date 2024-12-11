// 这里准备组件相关 props 属性和 ts 类型
import { ExtractPropTypes, PropType } from 'vue'

// 组件 props
export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>
} as const;

// 通过vue提供的方法提取正确的属性类型
export type IconProps = ExtractPropTypes<typeof iconProps>;