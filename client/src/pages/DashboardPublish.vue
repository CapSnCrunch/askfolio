<template>
    <div>
      <div class="bg-white shadow rounded-lg p-6 mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Publish Portfolio</h1>
        <p class="mt-1 text-sm text-gray-600">Make your portfolio live and share it with the world</p>
      </div>
  
      <!-- Publish Status -->
      <div class="bg-white shadow rounded-lg p-6 mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-medium text-gray-900">Portfolio Status</h3>
            <p class="mt-1 text-sm text-gray-600">Your portfolio is currently in draft mode</p>
          </div>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
            Draft
          </span>
        </div>
      </div>
  
      <!-- Publishing Options -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white shadow rounded-lg p-6">
          <div class="flex items-center mb-4">
            <svg class="h-8 w-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
            </svg>
            <h3 class="text-lg font-medium text-gray-900">Custom Domain</h3>
          </div>
          <p class="text-sm text-gray-600 mb-4">Connect your own domain name</p>
          <div class="space-y-3">
            <input
              type="text"
              placeholder="www.yourname.com"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
              Connect Domain
            </button>
          </div>
        </div>
  
        <div class="bg-white shadow rounded-lg p-6">
          <div class="flex items-center mb-4">
            <svg class="h-8 w-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            <h3 class="text-lg font-medium text-gray-900">Share Portfolio</h3>
          </div>
          <p class="text-sm text-gray-600 mb-4">Get your portfolio link</p>
          <div class="space-y-3">
            <div class="flex">
              <input
                type="text"
                value="https://askfolio.com/samuel-perales"
                readonly
                class="flex-1 px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-gray-600"
              />
              <button class="px-4 py-2 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-300 transition duration-200">
                Copy
              </button>
            </div>
            <button class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200">
              Publish Now
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'DashboardPublish'
  }
</script>