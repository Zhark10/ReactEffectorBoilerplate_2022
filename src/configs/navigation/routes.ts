export const STACKS = {
  news: {
    title: "Новости",
    icon: null, // CUSTOM ICON FOR MENU ITEM
    route: "/news"
  },
  // ... OTHER STACKS ...
} as const

export const ROUTES = {
  private: {
    profile: "/", // IT`S FALLBACK SCREEN (AFTER LOGIN)
    [STACKS.news.route]: {
      sport: {
        route: "/sport",
        title: "Спорт",
      },
      photo: {
        route: "/nature",
        title: "Природа",
      },
    },
  },
  public: {
    signIn: "/sign-in",
  }
} as const;