import React from 'react';
import { Code } from 'lucide-react';

// Card components (assuming these are custom UI components)
const Card = ({ children, className, ...props }) => (
  <div className={`rounded-xl border ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className, ...props }) => (
  <div className={`p-6 pb-3 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className, ...props }) => (
  <h3 className={`text-xl font-semibold ${className}`} {...props}>
    {children}
  </h3>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`p-6 pt-3 ${className}`} {...props}>
    {children}
  </div>
);

const Stats = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black to-black/10 opacity-20" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" />
      <div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl animate-pulse" 
        style={{ animationDelay: '1s' }} 
      />
      
      <div className="container mx-auto max-w-7xl relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">
            Coding Stats
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Track my coding journey through GitHub activity and LeetCode progress
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Side - GitHub Stats */}
          <div className="space-y-6">
            <Card className="relative backdrop-blur-sm bg-black/85 border border-gray-700/40 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute -inset-0.5 rounded-xl blur bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 opacity-30" />
              
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-white">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                    <Code className="w-5 h-5 text-cyan-400" />
                  </div>
                  GitHub Activity
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative space-y-6 hover:scale-105 transition-all duration-300">
                <div className="flex justify-center">
                <a href="https://github.com/Navaneetha-Krishnan-MV">
                <img
                  className="stats-image"
                  src="https://github-readme-stats.vercel.app/api?username=Navaneetha-Krishnan-MV&count_private=true&show_icons=true&theme=nightowl&bg_color=0,000000,441350&title_color=c56a90&text_color=ffffff&rank_icon=github&hide=prs,issues,contribs&show=reviews,prs_merged,prs_merged_percentage"
                  alt="GitHub Stats"
                />
              </a>
                </div>
              </CardContent>

              <CardContent className="relative space-y-6 hover:scale-105 transition-all duration-300">
                <div className="flex justify-center">
                <a href="https://github.com/Navaneetha-Krishnan-MV">
                <img
            className="stats-image"
            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Navaneetha-Krishnan-MV&theme=radical"
            alt="GitHub Stats"
          />
              </a>
                </div>
              </CardContent>
              
              
            </Card>
          </div>
          

          {/* LeetCode Section */}
          <Card className="relative backdrop-blur-sm bg-black/85 border border-gray-700/40 hover:border-purple-500/50 transition-all duration-300">
            <div className="absolute -inset-0.5 rounded-xl blur bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-cyan-500/20 opacity-30" />
            
            <CardHeader className="relative">
              <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-white">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-purple-400" />
                </div>
                LeetCode Progress
              </CardTitle>
            </CardHeader>
            
            <CardContent className="relative space-y-6 hover:scale-105 transition-all duration-300">
              {/* LeetCode Stats Card */}
              <a href="https://leetcode.com/u/Im_Thunder/" target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center">
              <img src="https://leetcard.jacoblin.cool/Im_Thunder?theme=dark&font=source_code_pro&ext=heatmap" alt="LeetCode Stats"/>
              </div>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
      
    </section>
  );
};

export default Stats;