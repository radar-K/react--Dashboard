import React from 'react';
import { ReactNode } from 'react';

// Typ för props
interface BadgeProps {
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  color = "primary",
  size = "md",
  icon = null,
  children,
  className = "",
}) => {
  // Size classes
  const sizeClasses = {
    sm: "px-1.5 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
    lg: "px-3 py-1 text-base",
  };

  // Color classes
  const colorClasses = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
    >
      {icon && <span className="mr-1 -ml-0.5">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
