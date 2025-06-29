import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, Shield, Activity, Code, CheckCircle, Play } from 'lucide-react';
import { Terminal } from './terminal';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Start coding in 5 minutes
              </div>
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Vibe Coding
                <span className="block text-orange-500">Made Simple</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Stop getting stuck on setup. Start building your app today. 
                Perfect for non-tech people who want to create something awesome without the overwhelm.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:max-w-lg sm:mx-auto lg:text-left lg:mx-0">
                <a href="https://github.com/stnikolaus/vibe-coding-template" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg rounded-full">
                    Start Building Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything You Need to Start Building
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              No more getting lost in complex setup. Just pure creation vibes! ✨
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-500 text-white mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Team Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Invite team members, manage roles, and collaborate seamlessly. 
                Perfect for growing teams and startups.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-500 text-white mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                User Authentication
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Secure sign-up, login, and user management. 
                Your users can create accounts and access your app safely.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-purple-500 text-white mb-6">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Activity Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                See what's happening in your app. Track user actions, 
                sign-ins, and important events automatically.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-pink-500 text-white mb-6">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Modern Dashboard
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Beautiful, responsive dashboard that looks professional. 
                Your users will love the clean, modern interface.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-500 text-white mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Built with Next.js for speed and performance. 
                Your app will load fast and feel snappy for users.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-500 text-white mb-6">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Production Ready
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Deploy to Vercel with one click. 
                Your app is ready for real users from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Simple Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Seriously, It's That Simple
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              No complex setup. No overwhelming choices. Just pure building vibes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-500 text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clone & Install</h3>
              <p className="text-gray-600">Copy the code and install dependencies</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-500 text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Add Database</h3>
              <p className="text-gray-600">Create a free Supabase database</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-500 text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Setup & Seed</h3>
              <p className="text-gray-600">Run setup commands and add sample data</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-500 text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Building</h3>
              <p className="text-gray-600">Launch your app and start creating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Perfect For People Like You
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Whether you're a founder, developer, or just someone with a great idea
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Non-Tech Founders</h3>
              <p className="text-gray-600">
                Have a great idea? Build it yourself without hiring developers first. 
                Get your MVP up and running quickly.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Solo Developers</h3>
              <p className="text-gray-600">
                Skip the boilerplate and focus on what matters. 
                Get a solid foundation to build upon.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Startups</h3>
              <p className="text-gray-600">
                Move fast and ship quickly. Focus on your unique features 
                instead of reinventing the wheel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Ready to Start Vibe Coding?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Stop getting stuck on setup. Start building something awesome today. 
            Your 5-minute journey to creating begins now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/stnikolaus/vibe-coding-template" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-lg rounded-full bg-white text-orange-600 hover:bg-gray-100">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
