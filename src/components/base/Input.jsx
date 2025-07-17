/**
 * Input Component - Input base universal
 * 
 * Reemplaza todos los inputs con clases condicionales por un componente
 * semántico con estados y variantes.
 * 
 * ✅ Reemplaza:
 * - <input className={`${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'} px-3 py-2 rounded-md border focus:ring-2`} />
 * 
 * ✅ Por:
 * - <Input placeholder="Email" state="default" />
 * - <Input placeholder="Error" state="error" />
 * 
 * 🎨 Estados:
 * - default: Estado normal
 * - error: Estado de error
 * - success: Estado de éxito
 * - warning: Estado de advertencia
 * - disabled: Estado deshabilitado
 */

import { useTheme } from '../../hooks/useTheme';
import { forwardRef } from 'react';

const Input = forwardRef(({ 
  state = 'default',
  size = 'md',
  fullWidth = true,
  leftIcon,
  rightIcon,
  label,
  helperText,
  error,
  success,
  className = '',
  type = 'text',
  ...props 
}, ref) => {
  const { getInputClasses, text } = useTheme();
  
  // Determinar estado basado en props
  const currentState = error ? 'error' : success ? 'success' : state;
  
  // Configuración de tamaños
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg'
  };
  
  // Obtener clases del estado
  const stateClasses = getInputClasses(currentState);
  
  // Clases base del input
  const inputClasses = [
    'rounded-lg border',
    'transition-all duration-200',
    'placeholder-opacity-50',
    sizeClasses[size],
    stateClasses,
    fullWidth ? 'w-full' : '',
    leftIcon ? 'pl-10' : '',
    rightIcon ? 'pr-10' : '',
    className
  ].filter(Boolean).join(' ');
  
  // Mensaje de ayuda/error
  const helperMessage = error || success || helperText;
  
  // Color del mensaje
  const messageColor = error 
    ? 'text-red-600 dark:text-red-400' 
    : success 
      ? 'text-green-600 dark:text-green-400' 
      : text.secondary;
  
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {/* Label */}
      {label && (
        <label className={`block text-sm font-medium ${text.primary} mb-2`}>
          {label}
        </label>
      )}
      
      {/* Input Container */}
      <div className="relative">
        {/* Icono izquierdo */}
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className={`${text.muted}`}>
              {leftIcon}
            </span>
          </div>
        )}
        
        {/* Input */}
        <input
          ref={ref}
          type={type}
          className={inputClasses}
          {...props}
        />
        
        {/* Icono derecho */}
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <span className={`${text.muted}`}>
              {rightIcon}
            </span>
          </div>
        )}
        
        {/* Icono de estado */}
        {currentState === 'error' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <i className="fas fa-exclamation-circle text-red-500 dark:text-red-400" />
          </div>
        )}
        
        {currentState === 'success' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <i className="fas fa-check-circle text-green-500 dark:text-green-400" />
          </div>
        )}
      </div>
      
      {/* Mensaje de ayuda */}
      {helperMessage && (
        <p className={`mt-2 text-sm ${messageColor}`}>
          {helperMessage}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
