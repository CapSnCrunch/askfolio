<template>
  <div>
    <div class="bg-white shadow rounded-lg p-6 mb-8">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">AI Configuration</h1>
          <p class="mt-1 text-sm text-gray-600">Configure your AI chatbot to answer questions about your portfolio</p>
        </div>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
          In Progress
        </span>
      </div>
    </div>

    <!-- AI Training Status -->
    <div class="bg-white shadow rounded-lg p-6 mb-8">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Training Status</h3>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-600">Knowledge Base</span>
          <span class="text-sm font-medium text-green-600">Trained</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-green-500 h-2 rounded-full" style="width: 75%"></div>
        </div>
        <p class="text-xs text-gray-500">75% complete - Processing portfolio content...</p>
      </div>
    </div>

    <!-- AI Configuration Form -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white shadow rounded-lg p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Personality Settings</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Tone of Voice</label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Professional</option>
              <option>Friendly</option>
              <option>Casual</option>
              <option>Formal</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Response Style</label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Detailed</option>
              <option>Concise</option>
              <option>Comprehensive</option>
            </select>
          </div>
        </div>
      </div>

      <div class="bg-white shadow rounded-lg p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Custom Instructions</h3>
        <textarea
          rows="6"
          placeholder="Add specific instructions for how your AI should respond to questions about your portfolio..."
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
    </div>

    <!-- Test AI Section -->
    <div class="mt-8 bg-white shadow rounded-lg p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Test Your AI</h3>
      <div class="space-y-4">
        <div class="bg-gray-50 rounded-lg p-4">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-sm text-gray-600">What experience do you have with React?</p>
            </div>
          </div>
        </div>
        <div class="bg-blue-50 rounded-lg p-4">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-sm text-gray-800">I have 3+ years of experience working with React, including building complex web applications and working with modern React patterns like hooks and context. I've worked on several projects including e-commerce platforms and data visualization dashboards.</p>
            </div>
          </div>
        </div>
        <div class="flex">
          <input
            type="text"
            placeholder="Ask a question to test your AI..."
            class="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button class="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition duration-200">
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardAI'
}
</script>
