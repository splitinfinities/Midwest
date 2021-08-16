module.exports = {
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.box-border': {
          'box-sizing': 'border-box',
        },
        '.box-content': {
          'box-sizing': 'content-box',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    function ({ addVariant, e }) {
      addVariant('dark-mode', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `midwest-theme.dark-mode:not(.light-mode) .${e(`dm${separator}${className}`)}`;
        });
      }),
        addVariant('dark-mode-hover', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `midwest-theme.dark-mode:not(.light-mode) .${e(`dm${separator}hover${separator}${className}`)}:hover`;
          });
        }),
        addVariant('dark-mode-focus', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `midwest-theme.dark-mode:not(.light-mode) .${e(`dm${separator}focus${separator}${className}`)}:focus`;
          });
        }),
        addVariant('light-mode', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `midwest-theme.light-mode .${e(`${className}`)}`;
          });
        }),
        addVariant('light-mode-hover', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `midwest-theme.light-mode .${e(`hover${separator}${className}`)}:hover`;
          });
        }),
        addVariant('light-mode-focus', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `midwest-theme.light-mode .${e(`focus${separator}${className}`)}:focus`;
          });
        });
    },
  ],
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'dark-mode', 'dark-mode-hover', 'dark-mode-focus', 'light-mode', 'light-mode-hover', 'light-mode-focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark-mode', 'dark-mode-hover', 'dark-mode-focus', 'light-mode', 'light-mode-hover', 'light-mode-focus'],
    textColor: ['responsive', 'hover', 'focus', 'dark-mode', 'dark-mode-hover', 'dark-mode-focus', 'light-mode', 'light-mode-hover', 'light-mode-focus'],
    placeholderColor: ['responsive', 'focus', 'dark-mode', 'dark-mode-hover', 'dark-mode-focus', 'light-mode', 'light-mode-hover', 'light-mode-focus'],
    gradientColorStops: ['dark-mode', 'dark-mode-hover', 'dark-mode-focus', 'light-mode', 'light-mode-hover', 'light-mode-focus'],
  },
  theme: {
    corePlugins: {
      float: false,
      container: false,
      fill: false,
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
      system: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
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
      loose: 1.8,
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },
    animations: {
      spin: {
        from: {
          transform: 'rotate(0deg)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      },
      fade: {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
      jump: {
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
        black: '#000000',
        white: '#ffffff',
        theme: {
          0: 'var(--theme-0)',
          1: 'var(--theme-1)',
          2: 'var(--theme-2)',
          3: 'var(--theme-3)',
          4: 'var(--theme-4)',
          5: 'var(--theme-5)',
          6: 'var(--theme-6)',
          7: 'var(--theme-7)',
          8: 'var(--theme-8)',
          9: 'var(--theme-9)',
          10: 'var(--theme-10)',
          11: 'var(--theme-11)',
          12: 'var(--theme-12)',
        },
        complement: {
          0: 'var(--complement-0)',
          1: 'var(--complement-1)',
          2: 'var(--complement-2)',
          3: 'var(--complement-3)',
          4: 'var(--complement-4)',
          5: 'var(--complement-5)',
          6: 'var(--complement-6)',
          7: 'var(--complement-7)',
          8: 'var(--complement-8)',
          9: 'var(--complement-9)',
          10: 'var(--complement-10)',
          11: 'var(--complement-11)',
          12: 'var(--complement-12)',
        },
        gray: {
          0: '#e3e5e6',
          1: '#c9cccf',
          2: '#afb3b7',
          3: '#959a9f',
          4: '#7c8287',
          5: '#62696f',
          6: '#495057',
          7: '#3e454b',
          8: '#34393f',
          9: '#292e33',
          10: '#1f2327',
          11: '#14171a',
          12: '#0a0c0e',
        },
      },
      spacing: {
        96: '24rem',
        128: '32rem',
      },
    },
  },
};
