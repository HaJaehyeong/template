import '../../globals.scss';
import Navigation from './_components/navigation/navigation';

export default function HowToUseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="ui-component">
      <Navigation />
      {children}
    </div>
  );
}
