/** @type {import('tailwindcss').Config} */
import { tokens } from './src/styles/tokens.js';

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            // Colores usando tokens
            colors: {
                primary: tokens.colors.primary,
                neutral: tokens.colors.neutral,
                success: tokens.colors.success,
                warning: tokens.colors.warning,
                error: tokens.colors.error,
                info: tokens.colors.info,
            },
            
            // Espaciado usando tokens
            spacing: tokens.spacing,
            
            // Bordes usando tokens
            borderRadius: tokens.borderRadius,
            
            // Sombras usando tokens
            boxShadow: {
                "custom-light": tokens.shadows.light,
                "custom-dark": tokens.shadows.dark,
                "elevated": tokens.shadows.elevated,
                "focus": tokens.shadows.focus,
            },
            
            // Tipografía usando tokens
            fontFamily: tokens.typography.fontFamily,
            fontSize: tokens.typography.fontSize,
            fontWeight: tokens.typography.fontWeight,
            
            // Transiciones usando tokens
            transitionDuration: {
                fast: tokens.transitions.fast,
                normal: tokens.transitions.normal,
                slow: tokens.transitions.slow,
            },
            
            // Animaciones personalizadas
            animation: {
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'fade-left': 'fadeLeft 0.8s ease-out forwards',
                'fade-in': 'fadeIn 0.3s ease-out forwards',
                'slide-up': 'slideUp 0.3s ease-out forwards',
                'scale-in': 'scaleIn 0.2s ease-out forwards',
            },
            
            // Keyframes para animaciones
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                fadeLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideUp: {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' }
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' }
                }
            }
        },
    },
    plugins: [
        // Plugin para animaciones adicionales
        // require("tailwindcss-animated")
    ],
};
