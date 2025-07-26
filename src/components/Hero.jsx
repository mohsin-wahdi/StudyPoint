import { useState, useEffect } from "react";
import {
  Play,
  Target,
  BookOpen,
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  Award,
  Brain,
  Clock,
  Smartphone,
  Apple,
  X,
  Zap,
  Heart,
  Trophy,
  Lightbulb,
} from "lucide-react";

export default function HeroFour() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("goals");

  // Demo video URL
  const demoVideoUrl = "https://www.youtube.com/watch?v=FxgM9k1rg0Q";

  const getVideoEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return "https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0";
  };

  const keyFeatures = [
    {
      id: "goals",
      icon: Target,
      title: "Smart Goal Setting",
      description:
        "Set SMART goals with AI-powered recommendations and milestone tracking",
      color: "from-blue-500 to-indigo-600",
      benefits: [
        "AI goal suggestions",
        "Progress milestones",
        "Achievement rewards",
      ],
    },
    {
      id: "study",
      icon: BookOpen,
      title: "Study Planner",
      description:
        "Personalized study schedules that adapt to your learning style",
      color: "from-purple-500 to-pink-600",
      benefits: ["Custom schedules", "Study reminders", "Focus sessions"],
    },
    {
      id: "progress",
      icon: TrendingUp,
      title: "Progress Analytics",
      description: "Visual insights into your academic performance and growth",
      color: "from-green-500 to-emerald-600",
      benefits: ["Performance metrics", "Growth tracking", "Trend analysis"],
    },
    {
      id: "community",
      icon: Users,
      title: "Study Groups",
      description:
        "Connect with peers, join study groups, and collaborate effectively",
      color: "from-orange-500 to-red-600",
      benefits: ["Peer connections", "Group challenges", "Shared resources"],
    },
  ];

  const stats = [
    { number: "500K+", label: "Active Students", icon: Users },
    { number: "2M+", label: "Goals Achieved", icon: Trophy },
    { number: "4.8", label: "App Store Rating", icon: Star },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
  ];

  const testimonials = [
    {
      name: "Emma Chen",
      role: "Computer Science Student",
      university: "Stanford University",
      content:
        "This app completely transformed how I approach my studies. My GPA improved from 3.2 to 3.8!",
      rating: 5,
      avatar: "👩‍💻",
    },
    {
      name: "Marcus Johnson",
      role: "Pre-Med Student",
      university: "Harvard University",
      content:
        "The study planner is incredible. I finally feel organized and in control of my academic life.",
      rating: 5,
      avatar: "👨‍⚕️",
    },
    {
      name: "Sofia Rodriguez",
      role: "Business Major",
      university: "MIT",
      content:
        "Study groups feature helped me connect with amazing peers. We all improved together!",
      rating: 5,
      avatar: "👩‍💼",
    },
  ];

  const appBenefits = [
    {
      icon: Brain,
      title: "Boost Focus",
      desc: "Improve concentration with proven techniques",
    },
    {
      icon: Clock,
      title: "Save Time",
      desc: "Efficient study methods and time management",
    },
    {
      icon: Award,
      title: "Better Grades",
      desc: "Track improvements in academic performance",
    },
    {
      icon: Heart,
      title: "Reduce Stress",
      desc: "Organized approach reduces academic anxiety",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);

    // Rotate features
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % keyFeatures.length);
    }, 4000);

    return () => clearInterval(featureInterval);
  }, []);

  const currentFeatureData = keyFeatures[currentFeature];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.4) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Academic Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 text-blue-400/30 text-2xl animate-bounce delay-300">
          📚
        </div>
        <div className="absolute top-32 right-16 text-purple-400/30 text-xl animate-bounce delay-700">
          🎯
        </div>
        <div className="absolute bottom-32 left-16 text-green-400/30 text-3xl animate-bounce delay-1000">
          📊
        </div>
        <div className="absolute bottom-16 right-32 text-orange-400/30 text-xl animate-bounce delay-1500">
          🏆
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div
          className={
            "text-center mb-16 transition-all duration-1000 " +
            (isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10")
          }
        >
          {/* App Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md border border-blue-200 rounded-full mb-6 shadow-lg">
            <Smartphone className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold text-sm">
              📱 Available on iOS & Android
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Achieve Your
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Academic Dreams
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-700">
              with Smart Study Tools
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join over 500,000 students who've transformed their academic journey
            with our AI-powered study companion.
            <span className="block mt-3 text-blue-600 font-medium">
              Set goals, track progress, and achieve success like never before.
            </span>
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="group relative px-8 py-4 bg-black hover:bg-gray-800 text-white font-semibold text-lg rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center space-x-3 min-w-[200px]">
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </button>

            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center space-x-3 min-w-[200px]">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-green-600 font-bold text-xs">▶</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-green-100">Get it on</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </button>
          </div>

          {/* Watch Demo Button */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="group inline-flex items-center space-x-3 px-6 py-3 bg-white/80 backdrop-blur-md border border-gray-200 hover:border-blue-300 text-gray-700 font-semibold rounded-xl transition-all duration-300 hover:bg-white/90 shadow-lg hover:shadow-xl"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-4 h-4 text-white ml-0.5" />
            </div>
            <span>Watch App Demo</span>
          </button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 text-gray-500 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Free to download</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No ads or distractions</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Privacy focused</span>
            </div>
          </div>
        </div>

        {/* Phone Mockup with Interactive Features */}
        <div
          className={
            "mb-16 transition-all duration-1000 delay-300 " +
            (isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10")
          }
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Phone Mockup */}
              <div className="relative">
                <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Screen Content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center mb-6 text-xs text-gray-600">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                          <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                          <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Good morning, Emma! 👋
                        </h3>
                        <p className="text-sm text-gray-600">
                          Ready to crush your goals today?
                        </p>
                      </div>

                      {/* Feature Content Based on Active Tab */}
                      <div className="space-y-4">
                        {activeTab === "goals" && (
                          <>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-semibold text-gray-900">
                                  Complete CS Assignment
                                </span>
                                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                                  75%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                              </div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-semibold text-gray-900">
                                  Study for Midterms
                                </span>
                                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                  90%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full w-[90%]"></div>
                              </div>
                            </div>
                          </>
                        )}

                        {activeTab === "study" && (
                          <>
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                              <h4 className="font-semibold text-gray-900 mb-3">
                                Today's Schedule
                              </h4>
                              <div className="space-y-2">
                                <div className="flex items-center space-x-3">
                                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                  <span className="text-sm text-gray-700">
                                    9:00 AM - Math Study Session
                                  </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  <span className="text-sm text-gray-700">
                                    11:00 AM - Physics Lab
                                  </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="text-sm text-gray-700">
                                    2:00 PM - Group Study
                                  </span>
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        {activeTab === "progress" && (
                          <>
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                              <h4 className="font-semibold text-gray-900 mb-3">
                                This Week's Progress
                              </h4>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-gray-600">
                                    Study Hours
                                  </span>
                                  <span className="text-sm font-semibold text-blue-600">
                                    24h
                                  </span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-gray-600">
                                    Goals Completed
                                  </span>
                                  <span className="text-sm font-semibold text-green-600">
                                    8/10
                                  </span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-gray-600">
                                    Focus Score
                                  </span>
                                  <span className="text-sm font-semibold text-purple-600">
                                    92%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        {activeTab === "community" && (
                          <>
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                              <h4 className="font-semibold text-gray-900 mb-3">
                                Study Groups
                              </h4>
                              <div className="space-y-2">
                                <div className="flex items-center space-x-3">
                                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    CS
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-gray-900">
                                      Computer Science
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      12 members online
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    M
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-gray-900">
                                      Mathematics
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      8 members online
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Feature Badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl shadow-lg animate-bounce">
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4" />
                    <span className="text-sm font-bold">Goal Achieved!</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl shadow-lg animate-bounce delay-500">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-bold">Focus Mode On</span>
                  </div>
                </div>
              </div>

              {/* Feature Tabs */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Everything You Need to{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Succeed
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600">
                    Discover powerful features designed specifically for student
                    success
                  </p>
                </div>

                <div className="space-y-4">
                  {keyFeatures.map((feature, index) => (
                    <div
                      key={feature.id}
                      className={
                        "group p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 " +
                        (activeTab === feature.id
                          ? "bg-white border-blue-200 shadow-lg"
                          : "bg-white/50 border-transparent hover:bg-white/80 hover:border-gray-200")
                      }
                      onClick={() => setActiveTab(feature.id)}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={
                            "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-r " +
                            feature.color
                          }
                        >
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {feature.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {feature.benefits.map((benefit, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={
            "mb-16 transition-all duration-1000 delay-500 " +
            (isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10")
          }
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-black text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div
          className={
            "mb-16 transition-all duration-1000 delay-700 " +
            (isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10")
          }
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Students{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Love Our App
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the benefits that make our app the #1 choice for student
              success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div
          className={
            "mb-16 transition-all duration-1000 delay-900 " +
            (isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10")
          }
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Real students, real results, real success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group p-8 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="text-gray-900 font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-blue-600 text-sm font-medium">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {testimonial.university}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div
          className={
            "text-center py-16 transition-all duration-1000 delay-1100 " +
            (isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10")
          }
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-md border border-blue-200 rounded-3xl p-12 max-w-4xl mx-auto shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="w-10 h-10 text-yellow-500 mr-3 animate-pulse" />
              <span className="text-2xl font-bold text-gray-900">
                Ready to Transform Your Academic Journey?
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Download{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                StudyMate
              </span>{" "}
              Today
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of thousands of students who've already transformed
              their academic success.
              <span className="block mt-3 text-blue-600 font-medium">
                Free download • Premium features available • Start achieving
                today
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="group relative px-10 py-4 bg-black hover:bg-gray-800 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center space-x-3">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>

              <button className="group relative px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xs">▶</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-green-100">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
            </div>

            <div className="flex justify-center items-center space-x-8 text-gray-500 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Free forever plan</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Instant setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-300">
            <iframe
              src={getVideoEmbedUrl(demoVideoUrl)}
              title="StudyMate App Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm group"
            >
              <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
