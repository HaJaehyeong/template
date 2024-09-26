import PropsTable from '../../../_components/props-table/props-table';
import styles from './button-example.module.scss';

const ButtonProps = [
  {
    Name: 'value',
    Type: 'string | React.ReactNode',
    Default: '-',
    Description: '버튼에 표시할 값',
  },
  {
    Name: 'variant',
    Type: "'contained' | 'outlined' | 'text'",
    Default: "'contained'",
    Description: '버튼의 모양',
  },
  {
    Name: 'color',
    Type: "'primary' |'secondary' | 'error' | 'warning' | 'info' |'success'",
    Default: "'primary'",
    Description: '버튼의 색상',
  },
  {
    Name: 'size',
    Type: "'s' |'m' | 'l'",
    Default: "'m'",
    Description: '버튼의 크기',
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Default: 'false',
    Description: '버튼 비활성화 유무',
  },
  {
    Name: 'onClick',
    Type: '() => void',
    Default: '-',
    Description: '버튼을 클릭했을 때 호출할 함수',
  },
  {
    Name: 'leftIcon',
    Type: 'boolean',
    Default: 'false',
    Description: '버튼에 왼쪽 아이콘 표시 유무',
  },
  {
    Name: 'rightIcon',
    Type: 'boolean',
    Default: 'false',
    Description: '버튼에 오른쪽 아이콘 표시 유무',
  },
  {
    Name: 'fabExtended',
    Type: 'boolean',
    Default: 'false',
    Description: '버튼에 FAB(Floating Action Button) 확장 모양 표시 유무',
  },
  {
    Name: 'fabRound',
    Type: 'boolean',
    Default: 'false',
    Description: '버튼에 FAB(Floating Action Button) 둥근 모양 표시 유무',
  },
  {
    Name: 'star',
    Type: 'boolean',
    Default: 'false',
    Description: '버튼에 별 아이콘 표시 유무',
  },
  {
    Name: 'width',
    Type: 'number',
    Default: '-',
    Description: '버튼의 너비',
  },
  {
    Name: 'style',
    Type: 'React.CSSProperties',
    Default: '-',
    Description: '버튼의 스타일',
  },
];

const ButtonExample: React.FC = () => {
  return (
    <div className={styles.exampleWrapper}>
      <h4>Props</h4>
      <PropsTable datas={ButtonProps} />
    </div>
  );
};

export default ButtonExample;
