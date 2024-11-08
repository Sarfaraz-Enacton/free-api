import { twMerge } from 'tailwind-merge';

export default function Heading({
  className = '',
  title,
  as,
  size = 'md',
}: {
  className?: string;
  title?: any;
  as?: any;
  size?: any;
}) {
  const Tag = as || 'h3';
  const sizes: any = {
    lg: 'text-28px font-bold',
    md: 'text-xl sm:text-2xl font-medium',
    sm: 'text-xl font-medium',
    xs: 'text-lg font-medium',
  };
  return <Tag className={twMerge(sizes[size], className)}>{title}</Tag>;
}
