import styles from './props-table.module.scss';

type PropsTableProps = {
  datas: {
    Name: string;
    Type: string;
    Default: string;
    Description: string;
  }[];
};

const PropsTable: React.FC<PropsTableProps> = ({ datas }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className="body1">
          <td>
            <span>Name</span>
          </td>
          <td>
            <span>Type</span>
          </td>
          <td>
            <span>Default</span>
          </td>
          <td>
            <span>Description</span>
          </td>
        </tr>
      </thead>
      <tbody>
        {datas.map((data) => (
          <tr key={data.Name}>
            <td>{data.Name}</td>
            <td>{data.Type}</td>
            <td>{data.Default}</td>
            <td>{data.Description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PropsTable;
