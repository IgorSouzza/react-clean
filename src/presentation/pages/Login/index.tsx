import Container from 'presentation/components/Container';
import * as S from './styles';

export default function Login() {
  return (
    <Container>
      <div className={S.wrapper}>
        <div className={S.content}>
          <h1 className={S.title}>Login</h1>
          <form className={S.form}>
            <div className={S.inputWrapper}>
              <label className={S.label} htmlFor="email">
                E-mail
              </label>
              <input className={S.input} type="text" id="email" />
            </div>
            <div className={S.inputWrapper}>
              <label className={S.label} htmlFor="password">
                Password
              </label>
              <input className={S.input} type="password" id="password" />
            </div>
            <button className={S.button} type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}
