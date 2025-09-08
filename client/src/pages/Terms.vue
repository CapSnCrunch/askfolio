<template>
  <div class="pt-32 pb-20">
    <div class="max-w-4xl mx-auto px-6">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <div class="prose prose-lg max-w-none text-gray-700">
        <p class="text-lg text-gray-600 mb-8">
          Last updated: {{ new Date().toLocaleDateString() }}
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p class="mb-4">
            By accessing and using Askfolio, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Use of Service</h2>
          <p class="mb-4">
            You may use our service to create AI-powered portfolios and engage with portfolio visitors through our chat functionality.
          </p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>You must provide accurate and complete information when creating your account</li>
            <li>You are responsible for maintaining the security of your account</li>
            <li>You must not use the service for any unlawful purposes</li>
            <li>You must not attempt to interfere with the proper functioning of the service</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Content and Data</h2>
          <p class="mb-4">
            You retain ownership of all content you upload to your portfolio. By using our service, you grant us permission to process and display your content as necessary to provide the service.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Privacy</h2>
          <p class="mb-4">
            Your privacy is important to us. Please review our <router-link to="/privacy" class="text-blue-600 hover:text-blue-500">Privacy Policy</router-link> to understand how we collect, use, and protect your information.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Subscription and Billing</h2>
          <p class="mb-4">
            Some features of our service require a paid subscription. Subscription fees are billed in advance and are non-refundable except as required by law.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
          <p class="mb-4">
            In no event shall Askfolio be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the service.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
          <p class="mb-4">
            We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through the service.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
          <p class="mb-4">
            If you have any questions about these Terms of Service, please contact us at support@askfolio.com
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
// Terms of Service page
</script>
