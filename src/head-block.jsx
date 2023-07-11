import { Helmet } from 'react-helmet-async';

const defaultProps = {
    title: 'デフォルトのタイトルです',
    description: 'デフォルトの説明文です',
    path: ''
};

// eslint-disable-next-line react/prop-types
function HeadBlock({ title, description, path }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={`https:hoge.com/${path}`} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
    );
}

HeadBlock.defaultProps = defaultProps;

export default HeadBlock;
