<template>
  <div class="pt-32 pb-20">
    <div class="max-w-4xl mx-auto px-6">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div class="prose prose-lg max-w-none text-gray-700">
        <p class="text-lg text-gray-600 mb-8">
          Last updated: {{ new Date().toLocaleDateString() }}
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
          <p class="mb-4">
            We collect information you provide directly to us, such as when you create an account, update your profile, or contact us for support.
          </p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Account information (name, email address, password)</li>
            <li>Portfolio content (resume, projects, skills, experience)</li>
            <li>Usage data (how you interact with our service)</li>
            <li>Communication data (messages, support requests)</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p class="mb-4">
            We use the information we collect to provide, maintain, and improve our services:
          </p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Create and maintain your AI-powered portfolio</li>
            <li>Enable chat functionality for portfolio visitors</li>
            <li>Process payments and manage subscriptions</li>
            <li>Send important updates about our service</li>
            <li>Provide customer support</li>
            <li>Improve our AI models and service quality</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
          <p class="mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
            <li>With service providers who assist in operating our platform</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
          <p class="mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
          <p class="mb-4">
            We retain your personal information for as long as your account is active or as needed to provide you services. You may delete your account at any time.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
          <p class="mb-4">
            You have the right to:
          </p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Access and update your personal information</li>
            <li>Delete your account and associated data</li>
            <li>Opt out of non-essential communications</li>
            <li>Request a copy of your data</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
          <p class="mb-4">
            We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
          <p class="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
          <p class="mb-4">
            If you have any questions about this Privacy Policy, please contact us at privacy@askfolio.com
          </p>
          <p class="mb-4">
            You can also review our <router-link to="/terms" class="text-blue-600 hover:text-blue-500">Terms of Service</router-link> for more information about using our platform.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
// Privacy Policy page
</script>
