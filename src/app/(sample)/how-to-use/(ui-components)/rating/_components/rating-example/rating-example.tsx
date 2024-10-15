'use client';
import UiRating from '@/ui/rating/rating';
import { Ri4kFill, Ri4kLine, RiAppleFill, RiAppleLine, RiHeart2Fill, RiHeart2Line } from '@remixicon/react';
import { useState } from 'react';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

const RatingProps = [
  {
    Name: 'rating',
    Type: 'number',
    Default: '0',
    Description: '비율 (백분율)',
  },
  {
    Name: 'color',
    Type: 'string',
    Default: '#fdb528',
    Description: '아이콘의 색상',
  },
  {
    Name: 'size',
    Type: "'s' | 'm' | 'l'",
    Default: "'m'",
    Description: '아이콘의 크기',
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Default: 'false',
    Description: '비활성화 유무',
  },
  {
    Name: 'onClick',
    Type: '(rating: number) => void',
    Default: '-',
    Description: '아이콘 클릭시 실행되는 이벤트',
  },
  {
    Name: 'emptyIcon',
    Type: 'RemixiconComponentType',
    Default: 'RiStarLine',
    Description: '커스텀 아이콘. (비어있는 아이콘) ※ FillIcon과 함께 사용',
  },
  {
    Name: 'fillIcon',
    Type: 'RemixiconComponentType',
    Default: 'RiStarFill',
    Description: '커스텀 아이콘. (채워진 아이콘) ※ EmptyIcon과 함께 사용',
  },
];

const comment = `
  없음!!
`;

const RatingExample: React.FC = () => {
  const [rating, setRating] = useState(0);

  return (
    <>
      <h4>Example</h4>
      <ExampleContent
        title="Rating"
        code={`<UiRating />\n<UiRating rating={50} />\n<UiRating rating={100} />`}
        result={
          <>
            <UiRating />
            <UiRating rating={50} />
            <UiRating rating={100} />
          </>
        }
      />
      <hr />
      <ExampleContent
        title="Colors"
        code={`<UiRating rating={50} color="blue" />\n<UiRating rating={50} color="#00FF00" />\n<UiRating rating={50} color="rgb(255, 0, 0)" />\n<UiRating rating={50} color="var(--primary-main)" /> {/* valiable */}`}
        result={
          <>
            <UiRating rating={50} color="blue" />
            <UiRating rating={50} color="#00FF00" />
            <UiRating rating={50} color="rgb(255, 0, 0)" />
            <UiRating rating={50} color="var(--primary-main)" /> {/* valiable */}
          </>
        }
      />
      <hr />
      <ExampleContent
        title="Size"
        code={`<UiRating rating={50} size="s" />\n<UiRating rating={50} />\n<UiRating rating={50} size="m" />\n<UiRating rating={50} size="l" />`}
        result={
          <>
            <UiRating rating={50} size="s" />
            <UiRating rating={50} />
            <UiRating rating={50} size="m" />
            <UiRating rating={50} size="l" />
          </>
        }
      />
      <hr />
      <ExampleContent
        title="State"
        code={`<UiRating rating={50} disabled />\n<UiRating rating={50} disabled={true} />\n<UiRating rating={50} disabled={false} />`}
        result={
          <>
            <UiRating rating={50} disabled />
            <UiRating rating={50} disabled={true} />
            <UiRating rating={50} disabled={false} />
          </>
        }
      />
      <hr />
      <ExampleContent
        title="Icon"
        code={`<UiRating rating={50} emptyIcon={RiHeart2Line} fillIcon={RiHeart2Fill} />\n<UiRating rating={50} emptyIcon={Ri4kLine} fillIcon={Ri4kFill} />\n<UiRating rating={50} emptyIcon={RiAppleLine} fillIcon={RiAppleFill} />`}
        result={
          <>
            <UiRating rating={50} emptyIcon={RiHeart2Line} fillIcon={RiHeart2Fill} />
            <UiRating rating={50} emptyIcon={Ri4kLine} fillIcon={Ri4kFill} />
            <UiRating rating={50} emptyIcon={RiAppleLine} fillIcon={RiAppleFill} />
          </>
        }
      />

      <hr />

      <h4>Props</h4>
      <PropsTable datas={RatingProps} />

      <hr />

      <h4>Example Usage</h4>
      <ExampleContent
        title="With State"
        code={`const [rating, setRating] = useState(0);\n\n<UiRating rating={rating} onClick={(rate) => setRating(rate)} />\n<span>Rating: {rating}</span>\n<span>Count: {rating / 20}</span>`}
        result={
          <>
            <UiRating rating={rating} onClick={(rate) => setRating(rate)} />
            <span>Rating: {rating}</span>
            <span>Count: {rating / 20}</span>
          </>
        }
      />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default RatingExample;
