module.exports = {
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.box-border': {
          'box-sizing': 'border-box',
        },
        '.box-content': {
          'box-sizing': 'content-box',
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
    function ({ addVariant, e }) {
      addVariant('dark-mode', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `midwest-theme.dark-mode:not(.light-mode) .${e(`dm${separator}${className}`)}`
        })
      }),
      addVariant('dark-mode-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `midwest-theme.dark-mode:not(.light-mode) .${e(`dm${separator}hover${separator}${className}`)}:hover`
        })
      }),
      addVariant('dark-mode-focus', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `midwest-theme.dark-mode:not(.light-mode) .${e(`dm${separator}focus${separator}${className}`)}:focus`
        })
      }),
      addVariant('light-mode', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `midwest-theme.light-mode .${e(`${className}`)}`
        })
      }),
      addVariant('light-mode-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `midwest-theme.light-mode .${e(`hover${separator}${className}`)}:hover`
        })
      }),
      addVariant('light-mode-focus', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `midwest-theme.light-mode .${e(`focus${separator}${className}`)}:focus`
        })
      })
    }
  ],
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'dark-mode', 'dark-mode-hover', 'dark-mode-focus', 'light-mode', 'light-mode-hover', 'light-mode-focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark-mode', 'dark-mode-hover', 'dark-mode-focus', 'light-mode', 'light-mode-hover', 'light-mode-focus'],
    textColor: ['responsive', 'hover', 'focus', 'dark-mode', 'dark-mode-hover', 'dark-mode-focus', 'light-mode', 'light-mode-hover', 'light-mode-focus'],
    placeholderColor: ['responsive', 'focus', 'dark-mode', 'dark-mode-hover', 'dark-mode-focus', 'light-mode', 'light-mode-hover', 'light-mode-focus'],
    animations: ['responsive'],
    animationDuration: ['responsive'],
    animationTimingFunction: ['responsive'],
    animationDelay: ['responsive'],
    animationIterationCount: ['responsive'],
    animationDirection: ['responsive'],
    animationFillMode: ['responsive'],
    animationPlayState: ['responsive'],
  },
  theme: {
    corePlugins: {
      float: false,
      container: false,
      fill: false
    },
    screens: {
      xs: '340px',
      sm: '580px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Inter Var', 'Inter', 'sans-serif'],
      body: ['Inter Var', 'Inter', 'sans-serif'],
      system: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      inter: ['Inter Var', 'Inter', 'sans-serif'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875em',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    lineHeight: {
      none: 1,
      tight: 1.2,
      normal: 1.4,
      relaxed: 1.6,
      loose: 1.8
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    animations: {
      'spin': {
        from: {
          transform: 'rotate(0deg)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      },
      'fade': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
      'jump': {
        '0%': {
          transform: 'translateY(0%)',
        },
        '50%': {
          transform: 'translateY(-100%)',
        },
        '100%': {
          transform: 'translateY(0%)',
        },
      },
    },
    animationDuration: { 
      'default': '350ms',
      '0s': '0s',
      '350ms': '350ms',
      '175ms': '175ms',
      '500ms': '5ms',
      '1s': '1s',
    },
    extend: {
      colors: {
        "black": "#000000",
        "white": "#ffffff",
        "theme": {
          "0": "var(--theme-0)",
          "1": "var(--theme-1)",
          "2": "var(--theme-2)",
          "3": "var(--theme-3)",
          "4": "var(--theme-4)",
          "5": "var(--theme-5)",
          "6": "var(--theme-6)",
          "7": "var(--theme-7)",
          "8": "var(--theme-8)",
          "9": "var(--theme-9)",
          "10": "var(--theme-10)",
          "11": "var(--theme-11)",
          "12": "var(--theme-12)",
        },
        "complement": {
          "0": "var(--complement-0)",
          "1": "var(--complement-1)",
          "2": "var(--complement-2)",
          "3": "var(--complement-3)",
          "4": "var(--complement-4)",
          "5": "var(--complement-5)",
          "6": "var(--complement-6)",
          "7": "var(--complement-7)",
          "8": "var(--complement-8)",
          "9": "var(--complement-9)",
          "10": "var(--complement-10)",
          "11": "var(--complement-11)",
          "12": "var(--complement-12)",
        },
        "red": {
          "0": "#ffdbdb",
          "1": "#ffbcbc",
          "2": "#ff9f9f",
          "3": "#ff8383",
          "4": "#ff6a6a",
          "5": "#f95353",
          "6": "#f03e3e",
          "7": "#d42f2f",
          "8": "#b72222",
          "9": "#931717",
          "10": "#6f0e0e",
          "11": "#4a0707",
          "12": "#260303",
        },
        "orange": {
          "0": "#ffe6d9",
          "1": "#ffd0b5",
          "2": "#ffba91",
          "3": "#ffa46c",
          "4": "#ff8f48",
          "5": "#ff7b24",
          "6": "#f76707",
          "7": "#db5700",
          "8": "#b74700",
          "9": "#933800",
          "10": "#6f2900",
          "11": "#4a1b00",
          "12": "#260e00",
        },
        "gold": {
          "0": "#fff3d9",
          "1": "#ffe7b5",
          "2": "#ffdb91",
          "3": "#ffcd6c",
          "4": "#ffbf48",
          "5": "#ffaf24",
          "6": "#f59f00",
          "7": "#db8b00",
          "8": "#b77600",
          "9": "#936100",
          "10": "#6f4a00",
          "11": "#4a3300",
          "12": "#261b00",
        },
        "yellow": {
          "0": "#fffbd9",
          "1": "#fff5b5",
          "2": "#ffee91",
          "3": "#ffe56c",
          "4": "#ffdc4d",
          "5": "#ffd132",
          "6": "#fcc419",
          "7": "#dbac0d",
          "8": "#b79304",
          "9": "#937900",
          "10": "#6f5d00",
          "11": "#4a4000",
          "12": "#262200",
        },
        "lime": {
          "0": "#edfdd9",
          "1": "#dcfab5",
          "2": "#cbf491",
          "3": "#b9ec71",
          "4": "#a7e354",
          "5": "#95d738",
          "6": "#82c91e",
          "7": "#71b314",
          "8": "#5f9a0b",
          "9": "#4d8005",
          "10": "#3a6301",
          "11": "#284500",
          "12": "#152500",
        },
        "green": {
          "0": "#dcf8e1",
          "1": "#bdf0c6",
          "2": "#9fe7ac",
          "3": "#83dc93",
          "4": "#68cf7b",
          "5": "#4fc163",
          "6": "#37b24d",
          "7": "#2b9d3f",
          "8": "#208733",
          "9": "#176f27",
          "10": "#0f561c",
          "11": "#093b12",
          "12": "#041f09",
        },
        "teal": {
          "0": "#d9f7ed",
          "1": "#b5eedb",
          "2": "#91e4c9",
          "3": "#6cd7b6",
          "4": "#48c8a2",
          "5": "#29b88d",
          "6": "#0ca678",
          "7": "#059469",
          "8": "#00805a",
          "9": "#006b4a",
          "10": "#005339",
          "11": "#003a27",
          "12": "#001f14",
        },
        "cyan": {
          "0": "#d9f8fd",
          "1": "#b6eff8",
          "2": "#95e5f2",
          "3": "#77daea",
          "4": "#5acde1",
          "5": "#3fbfd5",
          "6": "#26b0c7",
          "7": "#1b9bb1",
          "8": "#128598",
          "9": "#0a6e7e",
          "10": "#055562",
          "11": "#013a44",
          "12": "#001f24",
        },
        "blue" : {
          "0": "#d9ecff",
          "1": "#b5dafe",
          "2": "#91c8fb",
          "3": "#6fb6f5",
          "4": "#51a3ed",
          "5": "#3691e3",
          "6": "#1c7ed6",
          "7": "#116dbe",
          "8": "#095ba5",
          "9": "#034988",
          "10": "#00376a",
          "11": "#00254a",
          "12": "#001326",
        },
        "indigo": {
          "0": "#dce4ff",
          "1": "#becbff",
          "2": "#a1b4ff",
          "3": "#869eff",
          "4": "#6e89fb",
          "5": "#5775f4",
          "6": "#4263eb",
          "7": "#3351d0",
          "8": "#2541b3",
          "9": "#1a3293",
          "10": "#10246f",
          "11": "#09174a",
          "12": "#040b26",
        },
        "violet": {
          "0": "#e7deff",
          "1": "#d0c0ff",
          "2": "#bba4ff",
          "3": "#a78afd",
          "4": "#9472f8",
          "5": "#815cf1",
          "6": "#7048e8",
          "7": "#5d38cd",
          "8": "#4c2ab0",
          "9": "#3b1e91",
          "10": "#2b146f",
          "11": "#1c0b4a",
          "12": "#0e0526",
        },
        "magenta": {
          "0": "#f6ddfc",
          "1": "#edbef8",
          "2": "#e2a1f2",
          "3": "#d786ea",
          "4": "#ca6ce1",
          "5": "#bd54d6",
          "6": "#ae3ec9",
          "7": "#9830b2",
          "8": "#822498",
          "9": "#6a1a7e",
          "10": "#521161",
          "11": "#380a43",
          "12": "#1d0423",
        },
        "pink": {
          "0": "#ffdae7",
          "1": "#fdbad1",
          "2": "#f99bbc",
          "3": "#f37ea7",
          "4": "#eb6393",
          "5": "#e24a7f",
          "6": "#d6336c",
          "7": "#be265b",
          "8": "#a31b4b",
          "9": "#87123b",
          "10": "#690a2b",
          "11": "#48051d",
          "12": "#26020e",
        },
        "gray": {
          "0": "#e3e5e6",
          "1": "#c9cccf",
          "2": "#afb3b7",
          "3": "#959a9f",
          "4": "#7c8287",
          "5": "#62696f",
          "6": "#495057",
          "7": "#3e454b",
          "8": "#34393f",
          "9": "#292e33",
          "10": "#1f2327",
          "11": "#14171a",
          "12": "#0a0c0e",
        },
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  }
}
