import classNames from 'classnames';
import type { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';

type AnchorProps = { href: Url; className: string };

const Anchor: FC<PropsWithChildren<AnchorProps>> = ({
  children,
  className,
  href,
}) => {
  return (
    <Link
      className={classNames(
        'bg-primary-dark hover:bg-primary active:bg-primary-dark w-full font-bold text-sm p-4 rounded-lg flex items-center justify-center gap-2',
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Anchor;
