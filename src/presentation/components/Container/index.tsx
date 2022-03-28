import * as S from './styles';

export type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className={S.wrapper}>{children}</div>;
}
