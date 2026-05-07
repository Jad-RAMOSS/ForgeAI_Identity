import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function GlassCard({ children, className = '', style }: Props) {
  return (
    <div className={`glass ${className}`} style={style}>
      <div className="gl-blur" />
      <div className="g-mesh" />
      <div className="gl-overlay" />
      <div className="gl-rim" />
      {children}
    </div>
  );
}
