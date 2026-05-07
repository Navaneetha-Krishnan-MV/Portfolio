// Experience Section Styling Constants
export const experienceStyles = {
  cardBorder: {
    base: 'absolute -inset-0.5 rounded-xl blur transition-all duration-1000',
    highlighted: 'bg-gradient-to-r from-pink-500/60 via-red-500/60 to-pink-500/60 opacity-70',
    normal: 'bg-gradient-to-r from-pink-500/30 via-red-500/30 to-pink-500/30 opacity-30'
  },
  cardContent: {
    base: 'relative backdrop-blur-sm rounded-xl p-6 transition-all duration-1000 hover:scale-105',
    highlighted: 'bg-black/95 border-2 border-pink-500/60 shadow-lg shadow-pink-500/20',
    normal: 'bg-black/85 border border-pink-500/30'
  },
  badge: {
    base: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-700 hover:scale-105',
    highlighted: 'bg-gradient-to-r from-pink-500/20 to-red-500/20 border-pink-500/50 text-pink-200 hover:from-pink-600/30 hover:to-red-600/30',
    normal: 'bg-gray-800/80 border-pink-500/30 text-gray-300 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-red-500/10 hover:border-pink-500/50'
  },
  duration: {
    base: 'inline-block px-4 py-2 backdrop-blur-sm rounded-full transition-all duration-700',
    highlighted: 'bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/50',
    normal: 'bg-gray-900/80 border border-pink-500/30',
    text: 'text-sm font-normal transition-colors duration-700',
    textHighlighted: 'text-pink-200',
    textNormal: 'text-pink-300'
  },
  icon: {
    container: 'w-12 h-12 rounded-lg flex items-center justify-center border transition-all duration-700',
    highlighted: 'bg-gradient-to-br from-pink-500/30 to-red-500/30 border-pink-500/50',
    normal: 'bg-gradient-to-br from-pink-400/20 to-red-500/20 border-white/10',
    text: 'font-semibold text-lg transition-colors duration-700',
    textHighlighted: 'text-pink-200',
    textNormal: 'text-white'
  }
};

export default experienceStyles;
