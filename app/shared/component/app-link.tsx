import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function AppLink({ children, ...props }: AppLinkProps) {
  return <Link {...props}>{children}</Link>;
}
