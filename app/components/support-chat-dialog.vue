<template>
  <div>
    <!-- Support Chat Dialog -->
    <div v-if="isSupportChatOpen"
      class="fixed inset-0 p-4 flex flex-wrap justify-end items-end w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
      <div class="w-full max-w-lg bg-white shadow-xl rounded-lg flex flex-col h-[600px] relative">
        <!-- Header -->
        <div
          class="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div class="flex items-center space-s-3">
            <div class="relative">
              <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <icon name="mdi:headset" class="w-6 h-6" />
              </div>
              <div class="absolute -bottom-1 -end-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h3 class="text-lg font-semibold">{{ t('support_chat.support_team') }}</h3>
              <p class="text-blue-100 text-sm flex items-center">
                <span class="w-2 h-2 bg-green-400 rounded-full me-2"></span>
                {{ t('support_chat.online_now') }}
              </p>
            </div>
          </div>
          <button @click="toggleSupportChatDialog"
            class="p-1 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center">
            <icon name="material-symbols:close-small-rounded" class="w-6 h-6" />
          </button>
        </div>

        <!-- Chat Messages Area -->
        <div ref="messagesContainer" class="flex-1 p-4 overflow-y-auto bg-gray-50 hide-scrollbar">
          <!-- Welcome Message -->
          <div class="flex justify-start mb-4">
            <div class="flex space-s-2 max-w-[80%]">
              <div
                class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-white text-sm font-bold">S</span>
              </div>
              <div>
                <div class="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-gray-100">
                  <p class="text-gray-800">{{ t('support_chat.hello_how_can_help_you_today') }}</p>
                </div>
                <span class="text-xs text-gray-500 mt-1 block">{{ t('support_chat.support_agent_just_now') }}</span>
              </div>
            </div>
          </div>

          <!-- User Messages -->
          <div v-for="(message, index) in messages" :key="index"
            :class="['flex mb-4', message.isUser ? 'justify-end' : 'justify-start']">
            <div :class="['flex space-s-2 max-w-[80%]', message.isUser ? 'flex-row-reverse' : '']">
              <div v-if="!message.isUser"
                class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-white text-sm font-bold">S</span>
              </div>
              <div v-else
                class="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center flex-shrink-0 ms-1">
                <span class="text-white text-sm font-bold">Y</span>
              </div>
              <div>
                <div :class="['rounded-2xl px-4 py-3 shadow-sm me-1',
                  message.isUser
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none'
                    : 'bg-white border border-gray-100 rounded-tl-none']">
                  <p>{{ message.text }}</p>
                </div>
                <span class="text-xs text-gray-500 mt-1 block">
                  {{ message.isUser ? t('support_chat.you') : t('support_chat.support_agent') }} • {{ message.time }}
                </span>
              </div>
            </div>
          </div>

          <!-- Typing Indicator -->
          <div v-if="isTyping" class="flex justify-start mb-4">
            <div class="flex space-s-2 max-w-[80%]">
              <div
                class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-white text-sm font-bold">S</span>
              </div>
              <div class="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-gray-100">
                <div class="flex space-s-1">
                  <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                  <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="border-t border-gray-200 p-4 bg-white">
          <div class="flex space-s-2">
            <div class="flex-1 relative">
              <input v-model="newMessage" @keypress.enter="sendMessage" type="text"
                :placeholder="t('form.type_your_message')"
                class="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <div class="absolute end-3 top-1/2 transform -translate-y-1/2 flex space-s-1 justify-end">
                <button class="p-1 text-gray-400 hover:text-gray-600">
                  <icon name="mdi:emoticon-outline" class="w-5 h-5" />
                </button>
                <button class="p-1 text-gray-400 hover:text-gray-600">
                  <icon name="mdi:paperclip" class="w-5 h-5" />
                </button>
              </div>
            </div>
            <button @click="sendMessage" :disabled="!newMessage.trim()"
              class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center">
              <icon name="mdi:send" class="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>
          <p class="text-xs text-gray-500 text-center mt-2">
            {{ t('support_chat.typically_replies_within_minutes') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Floating Support Button -->
    <button type="button" @click="toggleSupportChatDialog"
      class="fixed z-50 flex items-center justify-center px-4 py-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl bottom-36 end-8 transition-all duration-300 hover:scale-110"
      aria-label="support chat">
      <icon name="mdi:support" class="w-8 h-8"></icon>
    </button>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
const isSupportChatOpen = ref(false)
const newMessage = ref('')
const messagesContainer = ref<HTMLElement>()
const isTyping = ref(false)

// Sample messages
const messages = ref([
  {
    text: "Hi there! I have a question about my order.",
    isUser: true,
    time: "2:30 PM"
  },
  {
    text: "Sure, I'd be happy to help! Could you please share your order ID?",
    isUser: false,
    time: "2:31 PM"
  }
])

const toggleSupportChatDialog = () => {
  isSupportChatOpen.value = !isSupportChatOpen.value
  if (isSupportChatOpen.value) {
    nextTick(() => {
      scrollToBottom()
    })
  }
}

const sendMessage = () => {
  if (!newMessage.value.trim()) return
  // Add user message
  messages.value.push({
    text: newMessage.value,
    isUser: true,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  })
  const userMessage = newMessage.value
  newMessage.value = ''
  nextTick(() => {
    scrollToBottom()
    // Simulate typing indicator
    isTyping.value = true
    setTimeout(() => {
      isTyping.value = false
      // Add auto-reply based on user message
      const reply = generateAutoReply(userMessage)
      messages.value.push({
        text: reply,
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      })
      nextTick(() => {
        scrollToBottom()
      })
    }, 1500)
  })
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const generateAutoReply = (userMessage: string) => {
  const message = userMessage.toLowerCase()
  if (message.includes('order') || message.includes('track')) {
    return "I can help you track your order! Please provide your order number and I'll check the current status for you."
  } else if (message.includes('return') || message.includes('refund')) {
    return "For returns and refunds, please visit the 'My Orders' section in your account. You can initiate a return request there."
  } else if (message.includes('payment') || message.includes('pay')) {
    return "We accept various payment methods including credit cards, PayPal, and bank transfers. Is there a specific payment issue you're experiencing?"
  } else if (message.includes('shipping') || message.includes('delivery')) {
    return "Standard shipping takes 3-5 business days. Express shipping is available for faster delivery. Would you like to know more about our shipping options?"
  } else {
    return "Thank you for your message! Our support team will assist you shortly. Could you please provide more details about your inquiry?"
  }
}

// Auto-scroll when new messages are added
watch(messages, () => {
  nextTick(() => {
    scrollToBottom()
  })
}, { deep: true })
</script>