<template>
  <div>
    <div class="bg-white shadow rounded-lg p-6 mb-8">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Common Questions</h1>
          <p class="mt-1 text-sm text-gray-600">Manage frequently asked questions and pre-written responses</p>
        </div>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Completed
        </span>
      </div>
    </div>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 truncate">Total Questions</dt>
                <dd class="text-lg font-medium text-gray-900">12</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
              </svg>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 truncate">Auto Responses</dt>
                <dd class="text-lg font-medium text-gray-900">8</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 truncate">Response Rate</dt>
                <dd class="text-lg font-medium text-gray-900">94%</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Questions List -->
    <div class="bg-white shadow rounded-lg">
      <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h3 class="text-lg font-medium text-gray-900">Question Library</h3>
        <button class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
          Add Question
        </button>
      </div>
      
      <div class="divide-y divide-gray-200">
        <!-- Question Item 1 -->
        <div class="px-6 py-4">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <h4 class="text-sm font-medium text-gray-900">What programming languages do you know?</h4>
              <p class="mt-1 text-sm text-gray-600">I'm proficient in JavaScript, Python, React, Node.js, and have experience with TypeScript, Go, and Java. I enjoy working with modern web technologies and have been focusing on full-stack development for the past 3 years.</p>
              <div class="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                <span>Asked 24 times</span>
                <span>Auto-response enabled</span>
              </div>
            </div>
            <div class="ml-4 flex items-center space-x-2">
              <button class="text-blue-600 hover:text-blue-700">Edit</button>
              <button class="text-red-600 hover:text-red-700">Delete</button>
            </div>
          </div>
        </div>

        <!-- Question Item 2 -->
        <div class="px-6 py-4">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <h4 class="text-sm font-medium text-gray-900">What's your experience with team leadership?</h4>
              <p class="mt-1 text-sm text-gray-600">I've led multiple teams ranging from 3-8 developers. My approach focuses on clear communication, setting realistic goals, and mentoring team members to help them grow professionally. I believe in agile methodologies and fostering a collaborative environment.</p>
              <div class="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                <span>Asked 18 times</span>
                <span>Auto-response enabled</span>
              </div>
            </div>
            <div class="ml-4 flex items-center space-x-2">
              <button class="text-blue-600 hover:text-blue-700">Edit</button>
              <button class="text-red-600 hover:text-red-700">Delete</button>
            </div>
          </div>
        </div>

        <!-- Question Item 3 -->
        <div class="px-6 py-4">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <h4 class="text-sm font-medium text-gray-900">What are your hourly rates?</h4>
              <p class="mt-1 text-sm text-gray-600">My rates vary depending on the project scope and timeline. For web development projects, I typically charge $75-120/hour. For consulting and strategy work, rates start at $150/hour. I'm happy to discuss project-based pricing for larger engagements.</p>
              <div class="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                <span>Asked 31 times</span>
                <span>Manual response required</span>
              </div>
            </div>
            <div class="ml-4 flex items-center space-x-2">
              <button class="text-blue-600 hover:text-blue-700">Edit</button>
              <button class="text-red-600 hover:text-red-700">Delete</button>
            </div>
          </div>
        </div>

        <!-- Question Item 4 -->
        <div class="px-6 py-4">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <h4 class="text-sm font-medium text-gray-900">Can you work remotely?</h4>
              <p class="mt-1 text-sm text-gray-600">Yes, I'm fully set up for remote work and have been working remotely for the past 2 years. I'm comfortable with various collaboration tools and time zones. I'm also open to hybrid arrangements or occasional on-site work depending on the project needs.</p>
              <div class="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                <span>Asked 15 times</span>
                <span>Auto-response enabled</span>
              </div>
            </div>
            <div class="ml-4 flex items-center space-x-2">
              <button class="text-blue-600 hover:text-blue-700">Edit</button>
              <button class="text-red-600 hover:text-red-700">Delete</button>
            </div>
          </div>
        </div>

        <!-- Question Item 5 -->
        <div class="px-6 py-4">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <h4 class="text-sm font-medium text-gray-900">What's your availability like?</h4>
              <p class="mt-1 text-sm text-gray-600">I'm currently available for new projects and can typically start within 1-2 weeks. I prefer working on 1-2 projects simultaneously to ensure quality and focus. My schedule is flexible, but I generally work 9 AM - 6 PM EST.</p>
              <div class="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                <span>Asked 22 times</span>
                <span>Auto-response enabled</span>
              </div>
            </div>
            <div class="ml-4 flex items-center space-x-2">
              <button class="text-blue-600 hover:text-blue-700">Edit</button>
              <button class="text-red-600 hover:text-red-700">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardQuestions'
}
</script>
