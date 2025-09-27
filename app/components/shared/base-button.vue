<template>
  <div>
    <nuxt-link v-if="route && to" :to="to" :class="buttonClasses" :title="title" :type="type">
      <slot></slot>
      <slot name="icon">
        <icon v-if="defaultIcon" name="heroicons-solid:plus-sm" class="ms-2" />
        <icon v-else-if="appendIcon" :name="appendIcon" class="ms-2" />
      </slot>
    </nuxt-link>

    <button v-else :class="buttonClasses" :title="title" :type="type">
      <slot></slot>
      <slot name="icon">
        <icon v-if="defaultIcon" name="heroicons-solid:plus-sm" class="ms-2" />
        <icon v-else-if="appendIcon" :name="appendIcon" class="ms-2" />
      </slot>
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
  defaultIcon: {
    type: Boolean,
    default: true
  },
  appendIcon: {
    type: String,
    default: '',
  },
  block: {
    type: Boolean,
    default: false
  },
  inline: {
    type: Boolean,
    default: false
  },
  title: { // for tooltip
    type: String,
    default: ''
  },
  bgColor: {
    type: String,
    default: 'base-btn-bg'
  },
  hoverColor: {
    type: String,
    default: ''
  },
  hoverText: {
    type: String,
    default: ''
  },
  borderColor: {
    type: String,
    default: ''
  },
  textColor: {
    type: String,
    default: ''
  },
  noBorder: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'solid', // options: 'solid' | 'outline'
    validator: (val: string) => ['solid', 'outline'].includes(val)
  },
  paddingX: {
    type: String,
    default: 'px-5'
  },
  paddingY: {
    type: String,
    default: 'py-2.5'
  },
  class: {
    type: String,
    default: ''
  },
  link: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    default: ''
  },
  route: {
    type: Boolean,
    default: false
  },
});

const buttonClasses = computed(() => {
  const inlineClass = props.inline ? 'inline-flex' : 'flex';

  if (props.link) {
    return [
      'font-medium rounded-lg text-sm px-5 py-2.5 text-center',
      inlineClass,  // Use here
      'items-center justify-center',
      'text-blue-600 hover:underline',
      props.block ? 'w-full' : ''
    ]
  }

  const externalClasses = props.class ? props.class.split(' ') : [];
  const base = ['text-sm', props.paddingX, props.paddingY, 'text-center flex items-center justify-center']

  const block = props.block ? 'w-full' : ''

  const variantClass =
    props.variant === 'outline'
      ? [!props.noBorder ? 'border' : '', props.borderColor, props.textColor, 'bg-transparent']
      : [props.bgColor, props.hoverColor, props.hoverText, props.textColor]

  return [...externalClasses, ...base, block, ...variantClass]
})
</script>