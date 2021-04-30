import Link from 'next/link'; //?Link from Nextjs does pre-fetch
import * as S from './styles';

type Props = {
  href: string;
  children: React.ReactNode;
};
const LinkWrapper = ({ href, children }: Props) => {
  return (
    <S.Container>
      <Link href={href}>{children}</Link>
    </S.Container>
  );
};

export default LinkWrapper;
