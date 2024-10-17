import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import TransferListExample from './_components/transfer-list-example/transfer-list-example';
import TransferListSample from './_components/transfer-list-sample/transfer-list-sample';

const TransferListPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<TransferListExample />}>
      <TransferListSample />
    </UiComponentsWrapper>
  );
};

export default TransferListPage;
