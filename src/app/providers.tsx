'use client';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

type ProvidersProps = {
  children: React.ReactNode;
};

/* NOTE(hajae): Avoid Hydration Mismatch
 * https://github.com/pacocoursey/next-themes?tab=readme-ov-file#avoid-hydration-mismatch
 * html에 `suppresshydrationwarning` true를 적용시켜도 되지만 이 경우 Warning이 발생하지만 그냥 무시하는 것
 * 따라서 아래와 같이 컴포넌트가 Mount가 되고난 후 Provider를 return하도록 한다.
 * (상황에 따라 화면 깜빡임이 있을 수 있지만...)
 *
 * 이 경우 거의 최상위 컴포넌트를 Client Component로 지정하기 때문에 아래 Children이 CSR이 될 것 같지만
 * props로 건낸 children component의 경우 Server Component면 Server side에서 rendering이 되기때문에 문제가 되지 않음
 * 자세한 사항은 아래 링크 참고
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#supported-pattern-passing-server-components-to-client-components-as-props
 */
const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (
    // NOTE(hajae): 시스템에 설정된 테마를 따라가도록 설정
    <NextThemeProvider enableSystem={true} defaultTheme="system">
      {children}
    </NextThemeProvider>
  );
};

export default Providers;
