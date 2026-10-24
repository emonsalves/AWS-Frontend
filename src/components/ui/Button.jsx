/**
 * Button Component - Botón base universal
 * 
 * Reemplaza todos los botones con condicionales manuales por un componente
 * semántico con variantes predefinidas.
 * 
 * ✅ Reemplaza:
 * - <button className={`${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} px-6 py-3 rounded-lg`}>
 * 
 * ✅ Por:
 * - <Button variant="secondary" size="md">
 * - <Button as="a" href="https://wa.me/...">  (enlace con aspecto de botón)
 * 
 * 🎨 Variantes:
 * - primary: Botón principal (verde)
 * - secondary: Botón secundario (gris)
 * - ghost: Botón transparente
 * - danger: Botón de peligro (rojo)
 * - success: Botón de éxito (verde claro)
 * - warning: Botón de advertencia (amarillo)
 * - info: Botón informativo (azul)
 */

import { useTheme } from '../../hooks/useTheme';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className = '',
  type = 'button',
  as = 'button',
  ...props 
}, ref) => {
  const { getButtonVariant } = useTheme();
  
  // Configuración de tamaños
  const sizeClasses = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };
  
  // Configuración de variantes usando el hook
  const variantClasses = getButtonVariant(variant);
  
  // Clases base
  const baseClasses = [
    'inline-flex items-center justify-center',
    'font-semibold rounded-lg',
    'transition-all duration-200',
    'focus:outline-hidden focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    sizeClasses[size],
    variantClasses,
    fullWidth ? 'w-full' : '',
    loading ? 'cursor-wait' : '',
    className
  ].filter(Boolean).join(' ');
  
  // Como enlace (as="a" o Link) no lleva type ni disabled
  const Component = as;
  const buttonProps = as === 'button' ? { type, disabled: disabled || loading } : {};
  
  return (
    <Component
      ref={ref}
      className={baseClasses}
      {...buttonProps}
      {...props}
    >
      {/* Icono izquierdo */}
      {leftIcon && !loading && (
        <span className="mr-2 shrink-0">
          {leftIcon}
        </span>
      )}
      
      {/* Spinner de carga */}
      {loading && (
        <span className="mr-2 shrink-0">
          <svg 
            className="animate-spin h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}
      
      {/* Contenido */}
      <span 
        className={loading ? 'opacity-0' : ''} 
        aria-hidden={loading ? 'true' : 'false'}
      >
        {children}
      </span>
      {loading && (
        <span className="sr-only" aria-live="polite">
          Loading...
        </span>
      )}
      
      {/* Icono derecho */}
      {rightIcon && !loading && (
        <span className="ml-2 shrink-0">
          {rightIcon}
        </span>
      )}
    </Component>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  as: PropTypes.elementType,
};

export default Button;
