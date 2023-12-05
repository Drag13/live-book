import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import styles from './app-link.module.css'

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function AppLink({ children, ...props }: AppLinkProps) {
  return <Link className={styles.a} {...props}>{children}</Link>;
}
